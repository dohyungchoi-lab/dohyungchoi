(function () {
  const RESUME_DATA = {
    en: {
      nav: {
        overview: "Overview",
        experience: "Experience",
        education: "Education",
        column: "Data Column",
        downloadCv: "Download Resume (PDF)"
      },
      hero: {
        eyebrow: "Senior Account Manager @ Google · McGill B.Com · Data Storyteller",
        title: "Bridging quantitative data analytics with enterprise digital growth.",
        lead: "Senior Account Manager at Google Korea advising Tier-1 financial and insurance enterprises (Samsung, KB, Shinhan, Hyundai Financial Groups) on data-driven performance marketing, C-level strategic partnerships, and measurement architecture. Grounded in statistical analysis (R, Python, SQL) and global commerce at McGill University and Expedia Group.",
        location: "Seoul, South Korea",
        currentRole: "Google Korea (LCS Finance)"
      },
      metrics: [
        {
          value: "100%+ YoY",
          label: "Sustained annual ad investment growth (2021–2022) & 50%+ YoY (2023–Present) across Tier-1 financial groups"
        },
        {
          value: "+80% Rev",
          label: "Ad revenue expansion driven by C-level strategic JBP partnerships across major insurers (2024)"
        },
        {
          value: "+50% ROI",
          label: "Performance marketing efficiency improvement across Google Search, YouTube & Performance Max"
        },
        {
          value: "12 Studies",
          label: "Python quantitative equity research (2026) & archived R statistical studies (76+ visualizations)"
        }
      ],
      toolbar: {
        splitView: "Editorial Split View (Resume + Column)",
        resumeOnly: "Resume Focus",
        projectsOnly: "Data Column Grid",
        status: "Showing Curriculum Vitae (Apr 2026) & 12 Data / Quant Studies"
      },
      resumeHeaders: {
        index: "01",
        title: "Curriculum Vitae",
        subtitle: "Updated April 2026",
        workLabel: "Professional Experience",
        eduLabel: "Academic Background",
        leadershipLabel: "Military Service & Leadership",
        skillsLabel: "Core Competencies & Technical Stack"
      },
      experience: [
        {
          org: "Google",
          badge: "Current",
          role: "Senior Account Manager — Large Customer Sales (Finance & Insurance)",
          period: "2020 – Present",
          location: "Seoul, South Korea",
          bullets: [
            "Contributed to achieving over <strong>100% YoY (2021 and 2022)</strong>, and <strong>50%+ YoY (2023–Present)</strong> ad spending for key finance clients (subsidiaries of KB, Samsung, Shinhan, Hyundai Financial Group) while successfully delivering campaign performance.",
            "Successfully adopted and implemented new advertising solutions for key clients to improve their performance marketing efficiency by <strong>more than 50%</strong> across Google Search, YouTube, and Performance Max campaigns.",
            "Contributed to signing multiple business partnerships with <strong>C-levels of finance clients</strong> across major insurance companies, and delivered key collaboration agendas successfully to increase ad revenue by <strong>over 80% (2024)</strong>.",
            "Represented the team as a product champion to deliver product and Go-to-Market (GTM) initiatives to APAC regional teams on <strong>YouTube and Google Analytics 4 (GA4)</strong>, aligning internal sales teams for seamless testing and market deployment in Korea.",
            "Collaborated with Korea leadership teams and APAC product managers to drive sales workflow improvements, deploying global workflow updates to the Korea organization through structured trainings and playbooks."
          ]
        },
        {
          org: "Expedia Group",
          badge: "Hospitality & Pricing Analytics",
          role: "Market Associate",
          period: "2019 – 2020",
          location: "Seoul, South Korea",
          bullets: [
            "Assisted market managers in optimizing content, rate, and availability competitiveness across <strong>more than 600 partner hotels</strong> on Expedia platforms to maximize customer conversion.",
            "Secured promotional offers and incremental lodging inventory during peak demand periods, contributing to <strong>over 10% YoY growth</strong> in net room nights and raw margin dollars.",
            "Analyzed the business impact of new pricing actions on hotel partners and the Korean market, surfacing actionable pricing recommendations to senior leadership.",
            "Educated hospitality partners on Expedia partner platform analytics and revenue management tools to maximize occupancy and yield.",
            "Ranked <strong>Top 5 in partner interactions</strong> and <strong>Top 8 in sales pitch conversion</strong> among 300+ market managers and associates across the APAC region in Q4 2019."
          ]
        },
        {
          org: "TRIA Beauty, Inc.",
          badge: "Digital Marketing",
          role: "Marketing Intern",
          period: "2014 – 2015",
          location: "Seoul, South Korea",
          bullets: [
            "Localized product documentation and digital brand assets for the Korean market, ensuring full alignment with US headquarters positioning.",
            "Monitored web conversion funnels using <strong>Google Analytics</strong>, designing and publishing promotional campaigns to accelerate lead acquisition.",
            "Conducted search keyword ROI auditing and proposed bidding efficiency improvements across online marketing channels."
          ]
        }
      ],
      education: [
        {
          school: "McGill University — Desautels Faculty of Management",
          degree: "Bachelor of Commerce (B.Com), Major in General Management (Concentrations in Marketing & International Business)",
          period: "2013 – 2019",
          location: "Montreal, Canada"
        },
        {
          school: "United World College of South East Asia (UWCSEA)",
          degree: "International Baccalaureate (IB) Diploma",
          period: "2011 – 2013",
          location: "Singapore"
        }
      ],
      leadership: [
        {
          org: "United States Army Garrison Camp Humphreys",
          badge: "ARCOM Recipient",
          role: "Supply Specialist, Senior KATUSA (Korean Augmentation to the United States Army)",
          period: "2016 – 2017",
          location: "Pyeongtaek, South Korea",
          bullets: [
            "Ensured overall operational readiness, welfare, and supervision of <strong>70 Logistics Readiness Center (LRC)</strong> soldiers.",
            "Authored a standardized operational manual for the <strong>GCSS-Army SAP system</strong> tailored for soldiers and civilian personnel.",
            "Awarded the <strong>Army Commendation Medal (ARCOM)</strong> for excellence in manpower management and training over 100 newly arrived soldiers and army civilians."
          ]
        }
      ],
      skills: [
        {
          group: "Enterprise Growth & Strategy",
          items: ["C-Level JBP Negotiation", "Full-Funnel Ad Strategy", "Performance Max / YouTube / Search", "Direct Insurance & Finance KPI Modeling", "APAC Product GTM"]
        },
        {
          group: "Data & Measurement Stack",
          items: ["Google Analytics 4 (GA4)", "R (ggplot2 / Regression)", "Python & SQL", "Pricing & Conversion Analytics", "GCSS-Army SAP"]
        }
      ],
      column: {
        index: "02",
        title: "Data Story Column",
        subtitle: "Quant & Statistical Archive",
        intro: "A curated column combining recent Python quantitative research (2026) and the 11 empirical data stories originally published on Data Playground (2018–2019) using R and 76+ statistical visualizations.",
        searchPlaceholder: "Search studies by topic, keyword, Python, or R method...",
        categories: {
          all: "All (12)",
          economics: "Economics & Policy",
          tech: "Tech & Markets",
          sports: "Sports & Gaming",
          education: "Education & Health"
        },
        readBtn: "Read Study →",
        figsLabel: "charts",
        minRead: "min read",
        summaryTitle: "Executive Summary"
      }
    },
    kr: {
      nav: {
        overview: "프로필 요약",
        experience: "주요 경력",
        education: "학력 및 병역",
        column: "데이터 분석 칼럼",
        downloadCv: "이력서 PDF 다운로드"
      },
      hero: {
        eyebrow: "Google Senior Account Manager · McGill B.Com · 데이터 스토리텔러",
        title: "정량적 데이터 분석과 엔터프라이즈 비즈니스 성장을 연결합니다.",
        lead: "구글 코리아(Google Korea) 금융·보험 섹터 Senior Account Manager로서 국내 주요 금융그룹(삼성·KB·신한·현대 등)의 데이터 기반 퍼포먼스 마케팅 고도화와 C-Level 전략적 파트너십(JBP)을 리드하고 있습니다. 맥길대학교(McGill Univ.) 경영학 전공 및 익스피디아(Expedia) 마켓 분석 경험을 바탕으로 데이터에서 실질적인 비즈니스 임팩트를 도출합니다.",
        location: "대한민국 서울",
        currentRole: "구글 코리아 (금융·보험 LCS)"
      },
      metrics: [
        {
          value: "100%+ YoY",
          label: "주요 금융지주 계열사 광고주 대상 2년 연속 100%+ YoY(21–22) 및 50%+ YoY(23~) 매출 성장 견인"
        },
        {
          value: "+80% 성장",
          label: "주요 손해보험사 C-Level 비즈니스 파트너십 체결 및 핵심 협업 아젠다 완수를 통한 광고 매출 확대 (2024)"
        },
        {
          value: "+50% 효율",
          label: "구글 검색(SA), 유튜브, pMax 신규 광고 솔루션 도입을 통한 퍼포먼스 마케팅 효율 50% 이상 개선"
        },
        {
          value: "12개 리포트",
          label: "최신 파이썬 퀀트 리서치(2026) 및 R 통계 시각화(76개 차트)로 작성한 'Data Story' 칼럼 아카이브"
        }
      ],
      toolbar: {
        splitView: "통합 분할 뷰 (이력서 + 데이터 칼럼)",
        resumeOnly: "이력서(Resume) 집중 뷰",
        projectsOnly: "데이터 분석 칼럼 전체보기",
        status: "최신 이력서(2026.04 기준) 및 12개 데이터·퀀트 분석 아카이브 표시 중"
      },
      resumeHeaders: {
        index: "01",
        title: "이력서 (Curriculum Vitae)",
        subtitle: "2026.04 업데이트",
        workLabel: "경력 사항 (Work Experience)",
        eduLabel: "학력 사항 (Education)",
        leadershipLabel: "병역 및 리더십 (Military & Leadership)",
        skillsLabel: "핵심 역량 및 분석 스킬 (Core Competencies)"
      },
      experience: [
        {
          org: "Google (구글 코리아)",
          badge: "재직 중",
          role: "Senior Account Manager — 국내 주요 금융·보험사 담당 (LCS Finance)",
          period: "2020 – 현재",
          location: "대한민국 서울",
          bullets: [
            "KB·삼성·신한·현대 등 국내 핵심 금융그룹 계열사 광고주를 담당하며 캠페인 성과를 성공적으로 견인, <strong>2021·2022년 연속 100% 이상 YoY 성장</strong> 및 <strong>2023년 이후 50%+ YoY 성장</strong> 달성.",
            "Google Search(검색), YouTube, Performance Max(pMax) 전반에 걸쳐 신규 광고 솔루션을 선제적으로 도입·고도화하여 주요 금융 고객사의 <strong>퍼포먼스 마케팅 효율을 50% 이상 개선</strong>.",
            "주요 손해보험사 <strong>C-Level 임원진과의 다수 비즈니스 파트너십(JBP) 체결</strong>을 주도하고 핵심 협업 과제를 완수하여 <strong>2024년 광고 매출 80% 이상 성장</strong> 견인.",
            "팀 내 프로덕트 챔피언(Champ)으로서 <strong>YouTube 및 Google Analytics 4(GA4)</strong> 관련 Go-to-Market 아이디어를 APAC 리전 팀에 전달하고, 한국 시장 내 신규 프로덕트 테스트 및 안착을 리드.",
            "한국 리더십 팀 및 APAC 프로덕트 매니저(PM)와 협업하여 세일즈 워크플로우 개선안을 도출하고, 글로벌 세일즈 워크플로우 업데이트에 맞춘 국내 팀 교육 및 플레이북 배포 주도."
          ]
        },
        {
          org: "Expedia Group (익스피디아 그룹)",
          badge: "데이터 · 파트너십",
          role: "Market Associate",
          period: "2019 – 2020",
          location: "대한민국 서울",
          bullets: [
            "익스피디아 플랫폼 내 <strong>600개 이상의 국내 파트너 호텔</strong>을 대상으로 콘텐츠, 요금(Rate), 객실 가용성(Availability) 경쟁력을 최적화하여 고객 전환율(CVR) 개선 지원.",
            "성수기 프로모션 오퍼 및 추가 객실 인벤토리를 확보하여 브랜드 마케팅을 지원하고, <strong>순 객실 판매일수(Net Room Nights) 및 마진 10% 이상 YoY 성장</strong>에 기여.",
            "신규 가격 정책(Pricing Actions)이 국내 파트너사와 시장에 미치는 비즈니스 임팩트를 정량 분석하여 시니어 매니저진에 개선 방향성 제언.",
            "파트너 호텔 대상 익스피디아 파트너 플랫폼의 분석 기능 및 수익 최적화 교육을 진행하여 점유율 및 매출 극대화 지원.",
            "2019년 4분기 APAC 리전 내 300명 이상의 마켓 매니저·어소시에이트 중 <strong>파트너 인터랙션 부문 Top 5</strong>, <strong>세일즈 피치 성공률 부문 Top 8</strong> 달성."
          ]
        },
        {
          org: "TRIA Beauty, Inc. (트리아뷰티 코리아)",
          badge: "마케팅 인턴십",
          role: "Marketing Intern",
          period: "2014 – 2015",
          location: "대한민국 서울",
          bullets: [
            "신제품 사용자 매뉴얼 및 글로벌 브랜드 웹사이트 내 프로덕트 정보를 한국 시장에 맞게 번역·현지화하여 US 본사 웹사이트와의 정합성 확보.",
            "<strong>Google Analytics</strong> 데이터를 기반으로 브랜드 웹사이트 성과를 모니터링하고, 리드(Lead) 확대를 위한 온라인 프로모션 기획 및 퍼블리싱 수행.",
            "온라인 마케팅 ROI 달성을 위한 키워드 모니터링을 진행하고 캠페인 효율성 개선 제안서 도출."
          ]
        }
      ],
      education: [
        {
          school: "McGill University (맥길대학교) — Desautels 경영대학",
          degree: "경영학 학사 (Bachelor of Commerce, Major in General Management — 마케팅 & 국제경영 집중전공)",
          period: "2013 – 2019",
          location: "캐나다 몬트리올"
        },
        {
          school: "United World College of South East Asia (UWCSEA)",
          degree: "International Baccalaureate (IB) 디플로마",
          period: "2011 – 2013",
          location: "싱가포르"
        }
      ],
      leadership: [
        {
          org: "주한미군 캠프 험프리스 (USAG Camp Humphreys)",
          badge: "미 육군 표창 메달(ARCOM) 수훈",
          role: "Supply Specialist, Senior KATUSA (선임 카투사 · 군수지원사령부 LRC)",
          period: "2016 – 2017",
          location: "대한민국 평택",
          bullets: [
            "군수지원사령부(LRC, Logistics Readiness Center) 소속 <strong>70명의 카투사 대원 총괄 관리</strong> 및 병영 생활·직무 지원 수행.",
            "영어 숙련도가 부족한 병사 및 군무원들의 원활한 업무 수행을 위해 <strong>GCSS-Army SAP 시스템 신규 업무 매뉴얼</strong>을 직접 제작·배포.",
            "신규 전입 장병 및 군무원 100명 이상을 대상으로 한 교육 성과와 인사 관리 우수성을 인정받아 <strong>미 육군 표창 메달(ARCOM, Army Commendation Medal)</strong> 수훈."
          ]
        }
      ],
      skills: [
        {
          group: "엔터프라이즈 비즈니스 & 광고 전략",
          items: ["금융·손해보험 C-Level JBP 파트너십", "퍼포먼스 마케팅 (pMax / SA / YouTube)", "보험 원장·LTV 기반 KPI 모델링", "APAC 프로덕트 GTM 챔피언", "세일즈 워크플로우 설계"]
        },
        {
          group: "데이터 분석 & 테크니컬 스택",
          items: ["Google Analytics 4 (GA4)", "R (ggplot2 · 다중회귀분석)", "Python & SQL", "프라이싱·전환율(CVR) 데이터 분석", "GCSS-Army SAP"]
        }
      ],
      column: {
        index: "02",
        title: "Data Story 분석 칼럼",
        subtitle: "퀀트 & 데이터 아카이브",
        intro: "최신 파이썬 퀀트 리서치(2026)와 과거 dohyungchoi.com (Data Playground)에 연재했던 11편의 R 데이터 분석 프로젝트를 한 칼럼으로 모았습니다. 원문과 76개의 시각화 차트를 사이트 내에서 바로 열람하실 수 있습니다.",
        searchPlaceholder: "주제, 키워드, 분석 기법(Python, R, 회귀분석 등) 검색...",
        categories: {
          all: "전체 (12)",
          economics: "거시경제 · 정책",
          tech: "테크 · 금융시장",
          sports: "스포츠 · 게임 데이터",
          education: "교육 · 헬스케어"
        },
        readBtn: "분석 리포트 읽기 →",
        figsLabel: "개 차트",
        minRead: "분 분량",
        summaryTitle: "핵심 분석 요약 (Executive Summary)"
      }
    }
  };

  let currentLang = "en";
  let currentCategory = "all";
  let currentSearch = "";
  let currentViewMode = "split"; // 'split' | 'resume' | 'projects'
  let activeArticleId = null;

  const articles = window.PORTFOLIO_ARTICLES || [];

  function init() {
    renderAll();
    bindEvents();
    checkUrlHash();
    window.addEventListener("hashchange", checkUrlHash);
  }

  function renderAll() {
    const copy = RESUME_DATA[currentLang];

    // Update Nav
    document.getElementById("nav-overview").textContent = copy.nav.overview;
    document.getElementById("nav-experience").textContent = copy.nav.experience;
    document.getElementById("nav-education").textContent = copy.nav.education;
    document.getElementById("nav-column").textContent = copy.nav.column;
    document.getElementById("btn-download-cv").textContent = copy.nav.downloadCv;

    // Update Lang Toggle Indicator
    document.getElementById("lang-en").className = currentLang === "en" ? "active-lang" : "";
    document.getElementById("lang-kr").className = currentLang === "kr" ? "active-lang" : "";

    // Update Hero
    document.getElementById("hero-eyebrow").textContent = copy.hero.eyebrow;
    document.getElementById("hero-title").textContent = copy.hero.title;
    document.getElementById("hero-lead").textContent = copy.hero.lead;
    document.getElementById("hero-location").textContent = copy.hero.location;
    document.getElementById("hero-role").textContent = copy.hero.currentRole;

    // Update Metrics Ledger
    const ledgerEl = document.getElementById("impact-ledger");
    ledgerEl.innerHTML = copy.metrics
      .map(
        (m) => `
        <div class="impact-item">
          <div class="impact-value">${m.value}</div>
          <div class="impact-label">${m.label}</div>
        </div>
      `
      )
      .join("");

    // Update Toolbar
    document.getElementById("tab-split").textContent = copy.toolbar.splitView;
    document.getElementById("tab-resume").textContent = copy.toolbar.resumeOnly;
    document.getElementById("tab-projects").textContent = copy.toolbar.projectsOnly;
    document.getElementById("toolbar-status").textContent = copy.toolbar.status;

    // Update Resume Column Headers
    document.getElementById("resume-col-title").textContent = copy.resumeHeaders.title;
    document.getElementById("resume-col-sub").textContent = copy.resumeHeaders.subtitle;
    document.getElementById("label-work").textContent = copy.resumeHeaders.workLabel;
    document.getElementById("label-edu").textContent = copy.resumeHeaders.eduLabel;
    document.getElementById("label-leadership").textContent = copy.resumeHeaders.leadershipLabel;
    document.getElementById("label-skills").textContent = copy.resumeHeaders.skillsLabel;

    // Render Experience
    document.getElementById("experience-list").innerHTML = copy.experience
      .map(
        (exp) => `
        <article class="experience-card">
          <div class="exp-header">
            <div>
              <div class="exp-org">
                ${exp.org}
                <span class="exp-badge">${exp.badge}</span>
              </div>
              <div class="exp-role">${exp.role}</div>
            </div>
            <div class="exp-meta">
              <div class="exp-period">${exp.period}</div>
              <div class="exp-location">${exp.location}</div>
            </div>
          </div>
          <ul class="exp-bullets">
            ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </article>
      `
      )
      .join("");

    // Render Education
    document.getElementById("education-list").innerHTML = copy.education
      .map(
        (edu) => `
        <div class="edu-card">
          <div>
            <div class="edu-school">${edu.school}</div>
            <div class="edu-degree">${edu.degree}</div>
          </div>
          <div class="exp-meta">
            <div class="exp-period">${edu.period}</div>
            <div class="exp-location">${edu.location}</div>
          </div>
        </div>
      `
      )
      .join("");

    // Render Military & Leadership
    document.getElementById("leadership-list").innerHTML = copy.leadership
      .map(
        (lead) => `
        <article class="experience-card">
          <div class="exp-header">
            <div>
              <div class="exp-org">
                ${lead.org}
                <span class="exp-badge">${lead.badge}</span>
              </div>
              <div class="exp-role">${lead.role}</div>
            </div>
            <div class="exp-meta">
              <div class="exp-period">${lead.period}</div>
              <div class="exp-location">${lead.location}</div>
            </div>
          </div>
          <ul class="exp-bullets">
            ${lead.bullets.map((b) => `<li>${b}</li>`).join("")}
          </ul>
        </article>
      `
      )
      .join("");

    // Render Skills
    document.getElementById("skills-list").innerHTML = copy.skills
      .map(
        (sg) => `
        <div class="skill-group">
          <div class="skill-group-title">${sg.group}</div>
          <div class="skill-tags">
            ${sg.items.map((item) => `<span class="skill-tag">${item}</span>`).join("")}
          </div>
        </div>
      `
      )
      .join("");

    // Render Data Story Column Header & Filters
    document.getElementById("col-projects-title").textContent = copy.column.title;
    document.getElementById("col-projects-sub").textContent = copy.column.subtitle;
    document.getElementById("col-projects-intro").textContent = copy.column.intro;
    const searchInput = document.getElementById("project-search-input");
    searchInput.placeholder = copy.column.searchPlaceholder;

    const catsContainer = document.getElementById("category-pills-container");
    catsContainer.innerHTML = Object.entries(copy.column.categories)
      .map(
        ([key, label]) => `
        <button type="button" class="cat-pill ${currentCategory === key ? "active" : ""}" data-cat="${key}">
          ${label}
        </button>
      `
      )
      .join("");

    renderProjectsList();

    if (activeArticleId) {
      openArticleDrawer(activeArticleId, false);
    }
  }

  function renderProjectsList() {
    const copy = RESUME_DATA[currentLang].column;
    const listEl = document.getElementById("projects-list-container");

    const filtered = articles.filter((art) => {
      const matchCat = currentCategory === "all" || art.category === currentCategory;
      const q = currentSearch.trim().toLowerCase();
      if (!q) return matchCat;
      const hay = [
        art.clean_title_en,
        art.clean_title_kr,
        art.title,
        art.summary_en,
        art.summary_kr,
        ...(art.tools || [])
      ]
        .join(" ")
        .toLowerCase();
      return matchCat && hay.includes(q);
    });

    if (filtered.length === 0) {
      listEl.innerHTML = `<div style="padding: 2rem 1rem; text-align: center; color: var(--ink-tertiary); font-size: 0.85rem;">No matching studies found.</div>`;
      return;
    }

    listEl.innerHTML = filtered
      .map((art) => {
        const title = currentLang === "kr" ? art.clean_title_kr : art.clean_title_en;
        const catLabel = currentLang === "kr" ? art.category_label_kr : art.category_label_en;
        const summary = currentLang === "kr" ? art.summary_kr : art.summary_en;
        const thumbSrc = art.thumb || "assets/posts/political-corruption-throughout-the-world/thumb.jpg";

        return `
        <button type="button" class="project-item-card" data-article-id="${art.id}">
          <div class="project-thumb-wrap">
            <img src="${thumbSrc}" alt="${title}" loading="lazy" />
          </div>
          <div class="project-card-body">
            <div class="project-card-meta">
              <span class="project-card-tag">${catLabel}</span>
              <span>·</span>
              <span>${art.date_iso}</span>
            </div>
            <h3 class="project-card-title">${title}</h3>
            <p class="project-card-summary">${summary}</p>
            <div class="project-card-footer">
              <span>${art.fig_count} ${copy.figsLabel} · ${art.read_time_min} ${copy.minRead}</span>
              <span class="read-trigger">${copy.readBtn}</span>
            </div>
          </div>
        </button>
      `;
      })
      .join("");
  }

  function openArticleDrawer(articleId, updateHash = true) {
    const artIndex = articles.findIndex((a) => a.id === articleId);
    if (artIndex === -1) return;
    const art = articles[artIndex];
    activeArticleId = articleId;

    const copy = RESUME_DATA[currentLang].column;
    const title = currentLang === "kr" ? art.clean_title_kr : art.clean_title_en;
    const catLabel = currentLang === "kr" ? art.category_label_kr : art.category_label_en;
    const summary = currentLang === "kr" ? art.summary_kr : art.summary_en;

    document.getElementById("reader-meta-date").textContent = `${art.date_str} · ${art.fig_count} ${copy.figsLabel} · ${art.read_time_min} ${copy.minRead}`;
    document.getElementById("reader-cat-tag").textContent = `${catLabel} · ${(art.tools || []).join(" · ")}`;
    document.getElementById("reader-title").textContent = title;
    document.getElementById("reader-orig-title").textContent =
      currentLang === "kr" ? `Original Title: "${art.title}"` : "";
    document.getElementById("reader-summary-label").textContent = copy.summaryTitle;
    document.getElementById("reader-summary-text").textContent = summary;
    document.getElementById("reader-body-content").innerHTML = art.html;

    // Prev / Next buttons
    const prevBtn = document.getElementById("btn-prev-article");
    const nextBtn = document.getElementById("btn-next-article");
    prevBtn.disabled = artIndex <= 0;
    prevBtn.style.opacity = artIndex <= 0 ? "0.35" : "1";
    prevBtn.onclick = () => {
      if (artIndex > 0) openArticleDrawer(articles[artIndex - 1].id);
    };

    nextBtn.disabled = artIndex >= articles.length - 1;
    nextBtn.style.opacity = artIndex >= articles.length - 1 ? "0.35" : "1";
    nextBtn.onclick = () => {
      if (artIndex < articles.length - 1) openArticleDrawer(articles[artIndex + 1].id);
    };

    document.getElementById("reader-backdrop").classList.add("open");
    document.getElementById("reader-drawer").classList.add("open");
    document.getElementById("reader-scroll-container").scrollTop = 0;
    document.body.style.overflow = "hidden";

    if (updateHash) {
      history.replaceState(null, "", `#post/${articleId}`);
    }
  }

  function closeArticleDrawer() {
    activeArticleId = null;
    document.getElementById("reader-backdrop").classList.remove("open");
    document.getElementById("reader-drawer").classList.remove("open");
    document.body.style.overflow = "";
    if (window.location.hash.startsWith("#post/")) {
      history.replaceState(null, "", window.location.pathname);
    }
  }

  function checkUrlHash() {
    const h = window.location.hash;
    if (h.startsWith("#post/")) {
      const slug = h.replace("#post/", "").trim();
      openArticleDrawer(slug, false);
    }
  }

  function setViewMode(mode) {
    currentViewMode = mode;
    const ws = document.getElementById("editorial-workspace");
    ws.classList.remove("mode-split", "mode-resume", "mode-projects");
    ws.classList.add(`mode-${mode}`);

    document.querySelectorAll(".view-tab").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.mode === mode);
    });
  }

  function bindEvents() {
    // Language switcher
    document.getElementById("btn-lang-toggle").addEventListener("click", () => {
      currentLang = currentLang === "en" ? "kr" : "en";
      renderAll();
    });

    // Theme switcher
    document.getElementById("btn-theme-toggle").addEventListener("click", () => {
      const isDark = document.documentElement.getAttribute("data-theme") === "dark";
      document.documentElement.setAttribute("data-theme", isDark ? "light" : "dark");
      document.getElementById("theme-icon").textContent = isDark ? "☾" : "☀";
    });

    // View mode tabs
    document.querySelectorAll(".view-tab").forEach((btn) => {
      btn.addEventListener("click", () => {
        setViewMode(btn.dataset.mode);
      });
    });

    // Category pills delegation
    document.getElementById("category-pills-container").addEventListener("click", (e) => {
      const pill = e.target.closest(".cat-pill");
      if (!pill) return;
      currentCategory = pill.dataset.cat;
      document.querySelectorAll(".cat-pill").forEach((p) => {
        p.classList.toggle("active", p.dataset.cat === currentCategory);
      });
      renderProjectsList();
    });

    // Search input
    document.getElementById("project-search-input").addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderProjectsList();
    });

    // Project item click delegation
    document.getElementById("projects-list-container").addEventListener("click", (e) => {
      const card = e.target.closest(".project-item-card");
      if (!card) return;
      openArticleDrawer(card.dataset.articleId);
    });

    // Reader close events
    document.getElementById("btn-close-reader").addEventListener("click", closeArticleDrawer);
    document.getElementById("reader-backdrop").addEventListener("click", closeArticleDrawer);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && activeArticleId) {
        closeArticleDrawer();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
