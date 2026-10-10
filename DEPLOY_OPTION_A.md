# `dohyungchoi.com` 배포 및 도메인 연결 가이드 (옵션 A: WordPress.com DNS 연결 방식)

현재 폴더(`/usr/local/google/home/dohyungchoi/Desktop/project/dohyungchoi-site`)는 Git 저장소(`main` 브랜치) 및 `CNAME`(`dohyungchoi.com`) 설정이 모두 완료되어 있습니다.

---

## Step 1. GitHub에 코드 업로드 및 무료 호스팅(GitHub Pages) 켜기

1. 생성된 저장소: `https://github.com/dohyungchoi-lab/dohyungchoi.git`
2. 터미널에서 푸시:
   ```bash
   git -C /usr/local/google/home/dohyungchoi/Desktop/project/dohyungchoi-site push -u origin main
   ```
3. GitHub 저장소([https://github.com/dohyungchoi-lab/dohyungchoi/settings/pages](https://github.com/dohyungchoi-lab/dohyungchoi/settings/pages)) 접속:
   - **Build and deployment** → `Source`: `Deploy from a branch` 선택
   - **Branch**: `main` / `/ (root)` 선택 후 **`Save`** 클릭
   - **Custom domain** 칸에 `dohyungchoi.com`이 자동으로 입력되어 있는 것을 확인하고 **`Enforce HTTPS`** 체크

---

## Step 2. WordPress.com에서 `dohyungchoi.com` DNS 방향만 새 사이트로 바꾸기 (옵션 A)

도메인 결제·소유권은 기존처럼 WordPress.com에 그대로 둔 채, 접속 시 뜨는 화면만 방금 올린 GitHub Pages로 연결합니다.

1. [WordPress.com 도메인 관리 페이지](https://wordpress.com/domains/manage)에 로그인합니다.
2. 보유 중인 **`dohyungchoi.com`** 도메인을 클릭합니다.
3. 만약 **`Site Redirect` (사이트 포워딩)**가 `dohyungchoi.wordpress.com`으로 설정되어 있다면 비활성화(Remove/Disable)합니다.
4. **`DNS Records` (DNS 레코드)** 메뉴를 열고 **`Manage` (관리)**를 누릅니다.
5. 아래 **4개의 `A` 레코드**와 **1개의 `CNAME` 레코드**를 추가합니다 (GitHub Pages 공식 IP):

| Type (유형) | Name (이름/호스트) | Value / Points To (값/대상) |
| :--- | :--- | :--- |
| **`A`** | `@` (비워두거나 도메인 기본값) | `185.199.108.153` |
| **`A`** | `@` | `185.199.109.153` |
| **`A`** | `@` | `185.199.110.153` |
| **`A`** | `@` | `185.199.111.153` |
| **`CNAME`** | `www` | `dohyungchoi-lab.github.io` |

---

## Step 3. 앞으로 웹사이트 수정 및 운영 방법

- **비용**: GitHub Pages 호스팅 및 SSL 인증서는 **평생 무료(\$0)**이며, WordPress.com에서는 매년 11월 18일에 `dohyungchoi.com` 도메인 연장비만 기존처럼 유지됩니다.
- **업데이트**: 앞으로 이력서 내용을 추가하거나 새로운 분석 프로젝트를 올리고 싶을 때는 제트스키에서 바로 수정 후 `git commit && git push`만 하면 10초 내로 `dohyungchoi.com`에 자동 반영됩니다.
