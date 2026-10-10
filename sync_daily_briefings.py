#!/usr/bin/env python3
"""
Synchronizes daily HTML reports from the 3 scheduled sidecar automations:
  1. market-report  : 글로벌 테크 & 슈퍼인베스터 데일리 동향 리포트
  2. frontier-tech  : 글로벌 빅테크 & 4대 미래기술 데일리 브리핑 (한·미 Top 10 테크 유튜버 인사이트 에디션)
  3. buffett-alpha  : S&P 500 워런 버핏 알파 & 신규 종목 발굴 스캐너
into /usr/local/google/home/dohyungchoi/Desktop/project/dohyungchoi-site/assets/briefings/
and generates daily_briefings.js for https://dohyungchoi.com.
"""

import glob
import html as html_lib
import json
import os
import re
import shutil
import subprocess
import sys
from datetime import datetime

HOME = "/usr/local/google/home/dohyungchoi"
SITE_DIR = os.path.join(HOME, "Desktop/project/dohyungchoi-site")
BRIEFINGS_ASSET_DIR = os.path.join(SITE_DIR, "assets/briefings")
BRAIN_DIR = os.path.join(HOME, ".gemini/jetski/brain")

STREAMS = {
    "market-report": {
        "sidecar_reports_dir": os.path.join(
            HOME, ".gemini/config/sidecars/daily-investment-market-report/reports"
        ),
        "brain_patterns": ["*market_report*.html"],
        "canonical_suffix": "_market_report.html",
        "label_kr": "글로벌 테크 & 슈퍼인베스터 동향",
        "label_en": "Global Tech & Superinvestor Pulse",
        "full_name_kr": "글로벌 테크 & 슈퍼인베스터 데일리 동향 리포트",
        "full_name_en": "Global Tech & Superinvestor Daily Trend Report",
        "badge_color": "#1B365D",
        "default_tags": ["SEC 13F/8-K", "GOOGL · PLTR · AAPL", "Buffett · Griffin · Ackman"],
    },
    "frontier-tech": {
        "sidecar_reports_dir": os.path.join(
            HOME, ".gemini/config/sidecars/frontier-tech-daily-briefing/reports"
        ),
        "brain_patterns": ["*frontier_tech*.html", "*Frontier_Tech*.html"],
        "canonical_suffix": "_frontier_tech_briefing.html",
        "label_kr": "빅테크 & 4대 미래기술 (유튜버 10인)",
        "label_en": "Big Tech & 4 Frontier Techs (Top 10 Creators)",
        "full_name_kr": "글로벌 빅테크 & 4대 미래기술 데일리 브리핑 (한·미 Top 10 테크 유튜버 인사이트 에디션)",
        "full_name_en": "Global Big Tech & 4 Frontier Technologies Daily Briefing (US/KR Top 10 Creators Edition)",
        "badge_color": "#2A5C43",
        "default_tags": ["AI · 반도체", "로봇 · 양자 · 블록체인 · 바이오", "한·미 유튜버 10인"],
    },
    "buffett-alpha": {
        "sidecar_reports_dir": os.path.join(
            HOME, ".gemini/config/sidecars/sp500-buffett-alpha-scanner/reports"
        ),
        "brain_patterns": ["*sp500_buffett_alpha*.html"],
        "canonical_suffix": "_sp500_buffett_alpha.html",
        "label_kr": "S&P 500 버핏 알파 스캐너",
        "label_en": "S&P 500 Buffett Alpha Scanner",
        "full_name_kr": "S&P 500 워런 버핏 알파 & 신규 종목 발굴 스캐너",
        "full_name_en": "S&P 500 Warren Buffett Alpha & Stock Discovery Scanner",
        "badge_color": "#7C4D12",
        "default_tags": ["ROIC ≥ 15%", "Share Cannibals", "SEC XBRL RPO & Form 4"],
    },
}


def extract_date_from_file(filepath: str, content: str) -> str:
    fname = os.path.basename(filepath)
    m = re.search(r"(202\d-\d{2}-\d{2})", fname)
    if m:
        return m.group(1)
    m_content = re.search(r"(202\d-\d{2}-\d{2})", content[:4000])
    if m_content:
        return m_content.group(1)
    mtime = os.path.getmtime(filepath)
    return datetime.fromtimestamp(mtime).strftime("%Y-%m-%d")


def extract_title_and_summary(content: str, stream_key: str, date_str: str):
    # Remove style and script blocks for text extraction
    cleaned = re.sub(r"<style[^>]*>.*?</style>", " ", content, flags=re.S | re.I)
    cleaned = re.sub(r"<script[^>]*>.*?</script>", " ", cleaned, flags=re.S | re.I)

    title = ""
    for tag in ["h1", "title", "h2"]:
        m = re.search(rf"<{tag}[^>]*>(.*?)</{tag}>", cleaned, flags=re.S | re.I)
        if m:
            cand = re.sub(r"<[^>]+>", " ", m.group(1))
            cand = html_lib.unescape(re.sub(r"\s+", " ", cand)).strip()
            if len(cand) > 6:
                title = cand
                break

    if not title:
        title = f"{STREAMS[stream_key]['full_name_kr']} ({date_str})"

    # Extract paragraphs / list items for executive summary preview
    blocks = []
    for m in re.finditer(r"<(p|li)[^>]*>(.*?)</\1>", cleaned, flags=re.S | re.I):
        txt = re.sub(r"<[^>]+>", " ", m.group(2))
        txt = html_lib.unescape(re.sub(r"\s+", " ", txt)).strip()
        if len(txt) > 35 and not txt.startswith("본 보고서는") and not txt.startswith("작성일"):
            blocks.append(txt)
        if len(" ".join(blocks)) > 320:
            break

    summary = " ".join(blocks)[:280]
    if len(summary) == 280:
        summary += "..."
    if not summary:
        plain = html_lib.unescape(re.sub(r"\s+", " ", re.sub(r"<[^>]+>", " ", cleaned))).strip()
        summary = plain[:260] + "..."

    # Extract top ticker symbols mentioned (e.g., GOOGL, PLTR, UBER, NVDA, FICO, LEN, CAT)
    tickers = []
    seen_t = set()
    for tm in re.finditer(r"\b(GOOGL|PLTR|AAPL|NVDA|MSFT|META|TSLA|AMZN|AVGO|MU|TSM|UBER|FICO|BKNG|IT|FIX|CAT|VRT|LEN|BRK|IONQ|LLY)\b", content):
        tk = tm.group(1)
        if tk not in seen_t:
            seen_t.add(tk)
            tickers.append(tk)
        if len(tickers) >= 6:
            break

    return title, summary, tickers


def sync_all():
    os.makedirs(BRIEFINGS_ASSET_DIR, exist_ok=True)
    all_items = []

    for stream_key, cfg in STREAMS.items():
        sidecar_dir = cfg["sidecar_reports_dir"]
        os.makedirs(sidecar_dir, exist_ok=True)

        # 1. Backfill any reports found in brain/* into sidecar_dir if not present
        for pat in cfg["brain_patterns"]:
            for bfile in glob.glob(os.path.join(BRAIN_DIR, "*", pat)):
                if bfile.endswith(".metadata.json"):
                    continue
                try:
                    raw_html = open(bfile, encoding="utf-8", errors="ignore").read()
                except Exception:
                    continue
                d_str = extract_date_from_file(bfile, raw_html)
                canonical_path = os.path.join(sidecar_dir, f"{d_str}{cfg['canonical_suffix']}")
                if not os.path.exists(canonical_path):
                    shutil.copy2(bfile, canonical_path)
                    print(f"[Backfill] Copied {bfile} -> {canonical_path}")

        # 2. Scan sidecar_dir for all HTML reports
        stream_asset_dir = os.path.join(BRIEFINGS_ASSET_DIR, stream_key)
        os.makedirs(stream_asset_dir, exist_ok=True)

        by_date = {}
        for rfile in sorted(glob.glob(os.path.join(sidecar_dir, "*.html"))):
            try:
                raw_html = open(rfile, encoding="utf-8", errors="ignore").read()
            except Exception:
                continue
            d_str = extract_date_from_file(rfile, raw_html)
            by_date[d_str] = (rfile, raw_html)

        for d_str, (rfile, raw_html) in sorted(by_date.items(), reverse=True):
            dest_rel = f"assets/briefings/{stream_key}/{d_str}.html"
            dest_abs = os.path.join(SITE_DIR, dest_rel)
            shutil.copy2(rfile, dest_abs)

            title, summary, tickers = extract_title_and_summary(raw_html, stream_key, d_str)
            tags = tickers if tickers else cfg["default_tags"]

            all_items.append({
                "id": f"{stream_key}-{d_str}",
                "stream": stream_key,
                "stream_label_kr": cfg["label_kr"],
                "stream_label_en": cfg["label_en"],
                "stream_full_kr": cfg["full_name_kr"],
                "stream_full_en": cfg["full_name_en"],
                "date": d_str,
                "title": title,
                "summary": summary,
                "tags": tags,
                "html_path": dest_rel,
            })

    # Sort all items newest date first, then stream order
    stream_order = {"market-report": 0, "frontier-tech": 1, "buffett-alpha": 2}
    all_items.sort(key=lambda x: (x["date"], -stream_order.get(x["stream"], 9)), reverse=True)

    out_js_path = os.path.join(SITE_DIR, "daily_briefings.js")
    with open(out_js_path, "w", encoding="utf-8") as f:
        f.write("window.DAILY_BRIEFINGS = " + json.dumps(all_items, ensure_ascii=False, indent=2) + ";\n")

    print(f"Synced {len(all_items)} daily briefings into {out_js_path}")
    return len(all_items)


def git_push():
    ssh_cmd = "ssh -i /usr/local/google/home/dohyungchoi/.ssh/id_ed25519_github -o IdentitiesOnly=yes -o StrictHostKeyChecking=accept-new"
    env = os.environ.copy()
    env["GIT_SSH_COMMAND"] = ssh_cmd

    subprocess.run(["git", "add", "assets/briefings", "daily_briefings.js"], cwd=SITE_DIR, check=True)
    status = subprocess.run(
        ["git", "status", "--porcelain"], cwd=SITE_DIR, capture_output=True, text=True, check=True
    ).stdout.strip()
    if not status:
        print("No new daily briefing changes to push.")
        return
    today = datetime.now().strftime("%Y-%m-%d")
    subprocess.run(
        ["git", "commit", "-m", f"chore(briefings): auto-publish daily briefings ({today})"],
        cwd=SITE_DIR,
        check=True,
    )
    subprocess.run(["git", "push", "origin", "main"], cwd=SITE_DIR, env=env, check=True)
    print("Successfully pushed updated daily briefings to GitHub Pages (dohyungchoi.com).")


if __name__ == "__main__":
    sync_all()
    if "--push" in sys.argv:
        git_push()
