(function () {
  const RESUME_DATA = {
    en: {
      nav: {
        overview: "Overview",
        experience: "Experience",
        education: "Education",
        column: "Data Column",
        briefings: "Daily Briefings",
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
          value: "12 Studies + Daily",
          label: "Python quant research (2026), 11 R statistical studies & 3 automated daily market/tech briefings"
        }
      ],
      toolbar: {
        splitView: "Editorial Split View (Resume + Column)",
        briefingsOnly: "Daily Briefings Hub",
        resumeOnly: "Resume Focus",
        projectsOnly: "Data Column Grid",
        status: "Showing Curriculum Vitae (Apr 2026), 12 Data Studies & Automated Daily Briefings"
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
      },
      briefings: {
        title: "Daily Intelligence Briefings",
        liveBadge: "Automated Daily Pipeline",
        subtitle: "SEC Filings · 13F Smart Money · Frontier Tech · S&P 500 Quant Scanner",
        intro: "Three automated daily intelligence pipelines synthesizing US SEC EDGAR filings (10-Q, 8-K, Form 4), 13F institutional portfolios, global frontier tech creator insights, and S&P 500 Warren Buffett alpha screening.",
        searchPlaceholder: "Filter briefings by date (YYYY-MM-DD), ticker (NVDA, LEN, FICO), or keyword...",
        readLatestBtn: "Read Latest",
        filterStreamBtn: "Filter Stream",
        openBriefingBtn: "Open Briefing →",
        openStandaloneBtn: "↗ Open Standalone Report",
        latestLabel: "Latest Edition",
        editionsUnit: "editions",
        streams: {
          all: "All Briefings",
          "market-report": "글로벌 테크 & 슈퍼인베스터 동향",
          "frontier-tech": "빅테크 & 4대 미래기술 (유튜버 10인)",
          "buffett-alpha": "S&P 500 워런 버핏 알파 스캐너"
        },
        pillars: [
          {
            key: "market-report",
            tag: "Stream 01 · Daily 08:00 KST",
            title: "글로벌 테크 & 슈퍼인베스터 데일리 동향 리포트",
            desc: "Cross-analyzes US Big Tech SEC EDGAR filings (10-Q, 8-K, Form 4 insider trades) with 13F institutional smart-money portfolio shifts."
          },
          {
            key: "frontier-tech",
            tag: "Stream 02 · Daily 08:00 KST",
            title: "글로벌 빅테크 & 4대 미래기술 데일리 브리핑 (한·미 Top 10 테크 유튜버 인사이트 에디션)",
            desc: "Synthesizes AI/Semiconductors, Robotics, Space, Quantum, Autonomous & SMR breakthroughs with US/KR Top 10 tech creator insights."
          },
          {
            key: "buffett-alpha",
            tag: "Stream 03 · Daily 07:30 KST",
            title: "S&P 500 워런 버핏 알파 & 신규 종목 발굴 스캐너",
            desc: "Quantitative S&P 500 scanner tracking high-ROIC economic moats, aggressive share cannibals, RPO backlog inflections, and Form 4 cluster buys."
          }
        ]
      }
    },
    kr: {
      nav: {
        overview: "프로필 요약",
        experience: "주요 경력",
        education: "학력 및 병역",
        column: "데이터 분석 칼럼",
        briefings: "데일리 브리핑",
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
          value: "12편 + 데일리",
          label: "파이썬 퀀트 리서치(2026), R 데이터 칼럼(11편) 및 매일 자동 발행되는 3대 데일리 인텔리전스 브리핑"
        }
      ],
      toolbar: {
        splitView: "통합 분할 뷰 (이력서 + 데이터 칼럼)",
        briefingsOnly: "데일리 브리핑 허브 (3대 리포트)",
        resumeOnly: "이력서(Resume) 집중 뷰",
        projectsOnly: "데이터 분석 칼럼 전체보기",
        status: "최신 이력서(2026.04), 12편 데이터 칼럼 및 3대 데일리 자동화 브리핑 표시 중"
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
      },
      briefings: {
        title: "데일리 인텔리전스 브리핑 (Daily Briefings)",
        liveBadge: "매일 아침 자동 업데이트",
        subtitle: "SEC 공시 · 13F 슈퍼인베스터 · 4대 미래기술 · S&P 500 버핏 알파 스캐너",
        intro: "매일 아침 자동화 파이프라인을 통해 생성되는 3대 데일리 인텔리전스 리포트 아카이브입니다. 각 스트림별 최신 리포트와 과거 일자별 브리핑을 한눈에 열람하고 검색하실 수 있습니다.",
        searchPlaceholder: "날짜(YYYY-MM-DD), 티커(NVDA, LEN, FICO 등), 또는 키워드로 브리핑 검색...",
        readLatestBtn: "최신호 열람",
        filterStreamBtn: "모아보기",
        openBriefingBtn: "브리핑 전문 열기 →",
        openStandaloneBtn: "↗ 새 창에서 전체화면으로 열기",
        latestLabel: "최신 발행본",
        editionsUnit: "편 수록",
        streams: {
          all: "전체 브리핑",
          "market-report": "글로벌 테크 & 슈퍼인베스터 동향",
          "frontier-tech": "빅테크 & 4대 미래기술 (유튜버 10인)",
          "buffett-alpha": "S&P 500 워런 버핏 알파 스캐너"
        },
        pillars: [
          {
            key: "market-report",
            tag: "Stream 01 · 매일 08:00 KST",
            title: "글로벌 테크 & 슈퍼인베스터 데일리 동향 리포트",
            desc: "미국 SEC EDGAR 실시간 공시(10-Q/8-K/Form 4 내부자 거래)와 13F 슈퍼인베스터 포트폴리오 리밸런싱을 교차 분석한 데일리 마켓 리포트."
          },
          {
            key: "frontier-tech",
            tag: "Stream 02 · 매일 08:00 KST",
            title: "글로벌 빅테크 & 4대 미래기술 데일리 브리핑 (한·미 Top 10 테크 유튜버 인사이트 에디션)",
            desc: "AI·반도체, 로보틱스, 우주항공, 양자컴퓨팅, 자율주행·SMR 핵심 동향과 한·미 Top 10 테크 크리에이터 인사이트를 결합한 데일리 브리핑."
          },
          {
            key: "buffett-alpha",
            tag: "Stream 03 · 매일 07:30 KST",
            title: "S&P 500 워런 버핏 알파 & 신규 종목 발굴 스캐너",
            desc: "S&P 500 전 종목 대상 고ROIC 경제적 해자, 공격적 자사주 소각(Cannibals), RPO 수주잔고 폭발 및 내부자 집단 매수를 포착하는 퀀트 스캐너."
          }
        ]
      }
    }
  };

  let currentLang = "en";
  let currentCategory = "all";
  let currentSearch = "";
  let currentBriefingStream = "all";
  let currentBriefingSearch = "";
  let currentViewMode = "split"; // 'split' | 'briefings' | 'resume' | 'projects'
  let activeArticleId = null;
  let activeBriefingId = null;

  const articles = window.PORTFOLIO_ARTICLES || [];
  const briefings = window.DAILY_BRIEFINGS || [];

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
    document.getElementById("nav-column").textContent = copy.nav.column;
    document.getElementById("nav-briefings").textContent = copy.nav.briefings;
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
    document.getElementById("tab-briefings").textContent = copy.toolbar.briefingsOnly;
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
    renderBriefingsSection();

    if (activeArticleId) {
      openArticleDrawer(activeArticleId, false);
    } else if (activeBriefingId) {
      openBriefingDrawer(activeBriefingId, false);
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

  function renderBriefingsSection() {
    const bCopy = RESUME_DATA[currentLang].briefings;
    document.getElementById("briefings-sec-title").textContent = bCopy.title;
    document.getElementById("briefings-live-badge").innerHTML = `<span class="pulse-dot"></span> ${bCopy.liveBadge} (${briefings.length})`;
    document.getElementById("briefings-sec-sub").textContent = bCopy.subtitle;
    document.getElementById("briefings-sec-intro").textContent = bCopy.intro;
    document.getElementById("briefing-search-input").placeholder = bCopy.searchPlaceholder;

    // Count per stream & latest per stream
    const streamCounts = { all: briefings.length };
    const latestByStream = {};
    briefings.forEach((b) => {
      streamCounts[b.stream] = (streamCounts[b.stream] || 0) + 1;
      if (!latestByStream[b.stream]) {
        latestByStream[b.stream] = b;
      }
    });

    // Render 3 Stream Pillar Cards
    const pillarsEl = document.getElementById("stream-pillars-container");
    pillarsEl.innerHTML = bCopy.pillars
      .map((p) => {
        const latest = latestByStream[p.key];
        const count = streamCounts[p.key] || 0;
        return `
        <article class="stream-pillar-card" data-stream="${p.key}">
          <div>
            <div class="pillar-top-meta">
              <span class="pillar-stream-tag">${p.tag}</span>
              <span class="pillar-count-badge">${count} ${bCopy.editionsUnit}</span>
            </div>
            <h3 class="pillar-title">${p.title}</h3>
            <p class="pillar-desc">${p.desc}</p>
          </div>
          <div>
            ${
              latest
                ? `
              <div class="pillar-latest-box">
                <div class="pillar-latest-label">
                  <span>${bCopy.latestLabel}</span>
                  <span>${latest.date}</span>
                </div>
                <div class="pillar-latest-headline">${latest.summary}</div>
              </div>
              <div class="pillar-actions">
                <button type="button" class="btn-pillar-latest" data-open-briefing="${latest.id}">
                  ${bCopy.readLatestBtn} (${latest.date}) →
                </button>
                <button type="button" class="btn-pillar-filter" data-filter-stream="${p.key}">
                  ${bCopy.filterStreamBtn} (${count})
                </button>
              </div>
            `
                : ""
            }
          </div>
        </article>
      `;
      })
      .join("");

    // Render Stream Filter Pills
    const pillsEl = document.getElementById("briefing-stream-pills");
    pillsEl.innerHTML = Object.entries(bCopy.streams)
      .map(([key, label]) => {
        const cnt = streamCounts[key] || 0;
        return `
        <button type="button" class="cat-pill ${currentBriefingStream === key ? "active" : ""}" data-bstream="${key}">
          ${label} (${cnt})
        </button>
      `;
      })
      .join("");

    renderBriefingsGrid();
  }

  function renderBriefingsGrid() {
    const bCopy = RESUME_DATA[currentLang].briefings;
    const gridEl = document.getElementById("briefings-grid-container");

    const filtered = briefings.filter((b) => {
      const matchStream = currentBriefingStream === "all" || b.stream === currentBriefingStream;
      const q = currentBriefingSearch.trim().toLowerCase();
      if (!q) return matchStream;
      const hay = [
        b.date,
        b.title,
        b.stream_full_kr,
        b.stream_full_en,
        b.summary,
        ...(b.tags || [])
      ]
        .join(" ")
        .toLowerCase();
      return matchStream && hay.includes(q);
    });

    if (filtered.length === 0) {
      gridEl.innerHTML = `<div style="grid-column: 1 / -1; padding: 2.5rem 1rem; text-align: center; color: var(--ink-tertiary); font-size: 0.9rem;">No matching daily briefings found.</div>`;
      return;
    }

    gridEl.innerHTML = filtered
      .map((b) => {
        const streamLabel = b.stream_full_kr;
        const tagsHtml = (b.tags || [])
          .slice(0, 5)
          .map((t) => `<span class="ticker-tag">${t}</span>`)
          .join("");

        return `
        <button type="button" class="briefing-card" data-briefing-id="${b.id}">
          <div>
            <div class="briefing-card-top">
              <span class="briefing-stream-pill" data-stream="${b.stream}">${b.stream_label_kr}</span>
              <span class="briefing-date-mono">${b.date}</span>
            </div>
            <h3 class="briefing-card-title">${streamLabel}</h3>
            <p class="briefing-card-summary">${b.summary}</p>
          </div>
          <div class="briefing-card-footer">
            <div class="ticker-tags">${tagsHtml}</div>
            <span class="read-trigger">${bCopy.openBriefingBtn}</span>
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
    activeBriefingId = null;

    const drawer = document.getElementById("reader-drawer");
    drawer.classList.remove("briefing-mode");
    document.getElementById("btn-open-standalone").style.display = "none";

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
    drawer.classList.add("open");
    document.getElementById("reader-scroll-container").scrollTop = 0;
    document.body.style.overflow = "hidden";

    if (updateHash) {
      history.replaceState(null, "", `#post/${articleId}`);
    }
  }

  function openBriefingDrawer(briefingId, updateHash = true) {
    const bIndex = briefings.findIndex((b) => b.id === briefingId);
    if (bIndex === -1) return;
    const b = briefings[bIndex];
    activeBriefingId = briefingId;
    activeArticleId = null;

    const bCopy = RESUME_DATA[currentLang].briefings;
    const drawer = document.getElementById("reader-drawer");
    drawer.classList.add("briefing-mode");

    const standaloneBtn = document.getElementById("btn-open-standalone");
    standaloneBtn.style.display = "inline-flex";
    standaloneBtn.href = b.html_path;
    standaloneBtn.textContent = bCopy.openStandaloneBtn;

    document.getElementById("reader-meta-date").textContent = `${b.date} · ${b.stream_full_kr}`;
    document.getElementById("reader-body-content").innerHTML = `
      <iframe
        class="briefing-iframe"
        src="${b.html_path}"
        title="${b.stream_full_kr} (${b.date})"
      ></iframe>
    `;

    // Prev / Next buttons across briefings
    const prevBtn = document.getElementById("btn-prev-article");
    const nextBtn = document.getElementById("btn-next-article");
    prevBtn.disabled = bIndex <= 0;
    prevBtn.style.opacity = bIndex <= 0 ? "0.35" : "1";
    prevBtn.onclick = () => {
      if (bIndex > 0) openBriefingDrawer(briefings[bIndex - 1].id);
    };

    nextBtn.disabled = bIndex >= briefings.length - 1;
    nextBtn.style.opacity = bIndex >= briefings.length - 1 ? "0.35" : "1";
    nextBtn.onclick = () => {
      if (bIndex < briefings.length - 1) openBriefingDrawer(briefings[bIndex + 1].id);
    };

    document.getElementById("reader-backdrop").classList.add("open");
    drawer.classList.add("open");
    document.body.style.overflow = "hidden";

    if (updateHash) {
      history.replaceState(null, "", `#briefing/${briefingId}`);
    }
  }

  function closeArticleDrawer() {
    activeArticleId = null;
    activeBriefingId = null;
    const drawer = document.getElementById("reader-drawer");
    document.getElementById("reader-backdrop").classList.remove("open");
    drawer.classList.remove("open", "briefing-mode");
    document.getElementById("reader-body-content").innerHTML = "";
    document.body.style.overflow = "";
    if (window.location.hash.startsWith("#post/") || window.location.hash.startsWith("#briefing/")) {
      history.replaceState(null, "", window.location.pathname);
    }
  }

  function checkUrlHash() {
    const h = window.location.hash;
    if (h.startsWith("#post/")) {
      const slug = h.replace("#post/", "").trim();
      openArticleDrawer(slug, false);
    } else if (h.startsWith("#briefing/")) {
      const bId = h.replace("#briefing/", "").trim();
      openBriefingDrawer(bId, false);
    }
  }

  function setViewMode(mode) {
    currentViewMode = mode;
    const ws = document.getElementById("editorial-workspace");
    const bSec = document.getElementById("daily-briefings-section");

    ws.classList.remove("mode-split", "mode-briefings", "mode-resume", "mode-projects");
    ws.classList.add(`mode-${mode}`);

    bSec.classList.remove("only-briefings-mode", "hidden-in-mode");
    if (mode === "briefings") {
      bSec.classList.add("only-briefings-mode");
    } else if (mode === "resume" || mode === "projects") {
      bSec.classList.add("hidden-in-mode");
    }

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

    // Category pills delegation (Data Story Column)
    document.getElementById("category-pills-container").addEventListener("click", (e) => {
      const pill = e.target.closest(".cat-pill");
      if (!pill) return;
      currentCategory = pill.dataset.cat;
      document.querySelectorAll("#category-pills-container .cat-pill").forEach((p) => {
        p.classList.toggle("active", p.dataset.cat === currentCategory);
      });
      renderProjectsList();
    });

    // Search input (Data Story Column)
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

    // Stream Pillar Card actions (Open Latest / Filter Stream)
    document.getElementById("stream-pillars-container").addEventListener("click", (e) => {
      const openBtn = e.target.closest("[data-open-briefing]");
      if (openBtn) {
        openBriefingDrawer(openBtn.dataset.openBriefing);
        return;
      }
      const filterBtn = e.target.closest("[data-filter-stream]");
      if (filterBtn) {
        currentBriefingStream = filterBtn.dataset.filterStream;
        renderBriefingsSection();
        document.getElementById("briefing-stream-pills").scrollIntoView({ behavior: "smooth", block: "nearest" });
      }
    });

    // Briefing Stream Filter Pills delegation
    document.getElementById("briefing-stream-pills").addEventListener("click", (e) => {
      const pill = e.target.closest(".cat-pill");
      if (!pill) return;
      currentBriefingStream = pill.dataset.bstream;
      document.querySelectorAll("#briefing-stream-pills .cat-pill").forEach((p) => {
        p.classList.toggle("active", p.dataset.bstream === currentBriefingStream);
      });
      renderBriefingsGrid();
    });

    // Briefing Search input
    document.getElementById("briefing-search-input").addEventListener("input", (e) => {
      currentBriefingSearch = e.target.value;
      renderBriefingsGrid();
    });

    // Briefing Card click delegation
    document.getElementById("briefings-grid-container").addEventListener("click", (e) => {
      const card = e.target.closest(".briefing-card");
      if (!card) return;
      openBriefingDrawer(card.dataset.briefingId);
    });

    // Reader close events
    document.getElementById("btn-close-reader").addEventListener("click", closeArticleDrawer);
    document.getElementById("reader-backdrop").addEventListener("click", closeArticleDrawer);
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && (activeArticleId || activeBriefingId)) {
        closeArticleDrawer();
      }
    });
  }

  document.addEventListener("DOMContentLoaded", init);
})();
