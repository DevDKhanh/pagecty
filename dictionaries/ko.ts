import type { Dict } from "./en";

const ko: Dict = {
  meta: {
    title: "Faruit — 물류 창고 랙·선반 제조사",
    description:
      "Faruit는 베트남 박닌성 20,000 m² 공장에서 파렛트 랙, 복층 메자닌, 캔틸레버 랙, 금형 랙 등 보관 설비를 설계·제조·시공합니다. 동남아시아, 유럽, 미국으로 수출합니다.",
  },
  nav: { products: "제품", capabilities: "공장", process: "진행 절차", industries: "적용 산업", contact: "문의", quote: "견적 요청", menu: "메뉴", language: "언어" },
  hero: {
    eyebrow: "보관 시스템 제조사 · 베트남",
    titleA: "현장 전체를 든든하게",
    titleB: "받쳐주는 랙.",
    subtitle:
      "Faruit는 창고 계획, 설계, 제조, 시공까지 원스톱으로 제공합니다. 선반 하나부터 고층 랙 창고 전체까지, 하중·공간·작업 흐름에 맞춰 설계합니다.",
    ctaPrimary: "견적 요청하기",
    ctaSecondary: "제품 보기",
    stats: [
      { value: "20,000 m²", label: "공장 면적" },
      { value: "9", label: "제품 라인" },
      { value: "3", label: "수출 대륙" },
    ],
    tag: "셀렉티브 파렛트 랙",
  },
  products: {
    eyebrow: "제품 라인업",
    title: "하나의 공장, 모든 보관 솔루션.",
    subtitle: "표준 규격은 빠르게 출고되며, 모든 시스템은 치수·하중·도장 마감에 맞춰 맞춤 제작할 수 있습니다.",
    filters: { all: "전체", heavy: "중량", medium: "경·중량", special: "특수", retail: "매장" },
    load: "적재 하중",
    details: "자세히 보기",
    quote: "이 제품 견적 문의",
    close: "닫기",
    features: "주요 특징",
    units: { level: "kg / 단", pallet: "kg / 파렛트", m2: "kg / m²", arm: "kg / 암", cage: "kg / 개" },
    items: {
      "pallet-rack": {
        name: "셀렉티브 파렛트 랙",
        desc: "현대 물류창고의 핵심 설비. 모든 파렛트에 바로 접근할 수 있고 지게차 작업에 적합하며 구성 변경이 쉽습니다.",
        features: ["모든 파렛트 위치에 100% 직접 접근", "빔 높이 50–75 mm 단위 조절", "안전핀, 연결 스페이서, 기둥 보호대 포함"],
      },
      "drive-in-rack": {
        name: "드라이브인 랙",
        desc: "동일 품목 대량 보관을 위한 고밀도 랙. 지게차가 랙 안으로 진입해 공간 활용을 극대화합니다.",
        features: ["셀렉티브 랙 대비 최대 75% 더 많은 보관 위치", "냉동·냉장 창고와 대량 화물에 최적", "가이드 레일로 기둥 보호"],
      },
      "mezzanine-rack": {
        name: "복층 메자닌 시스템",
        desc: "랙 위에 작업 층을 하나 더 만들어 건물을 옮기지 않고도 사용 면적을 두 배로 늘립니다.",
        features: ["강판, 줄무늬 강판, 그레이팅 바닥 선택", "계단, 난간, 화물용 리프트 통합", "레이아웃에 맞춘 무기둥 장스팬 설계"],
      },
      "cantilever-rack": {
        name: "캔틸레버 랙",
        desc: "앞면이 열린 암 구조로 철근, 파이프, 알루미늄 프로파일, 목재, 판재 등 길고 부피 큰 자재를 보관합니다.",
        features: ["단면 또는 양면 구성", "암 높이와 각도 조절 가능", "암 끝 스토퍼로 장척물 안전 보관"],
      },
      "mold-rack": {
        name: "중량 금형 랙",
        desc: "금형 보관용 서랍식 랙. 완전 인출 구조이며 상부 호이스트를 옵션으로 장착할 수 있습니다.",
        features: ["베어링 롤러 완전 인출 서랍", "상부 체인 호이스트 옵션", "모든 서랍에 안전 잠금장치"],
      },
      "storage-cage": {
        name: "메시 보관 케이지",
        desc: "접이식·적층식 와이어 컨테이너로 부품 보관과 물류 순환에 적합합니다. 아연 도금으로 오래 사용합니다.",
        features: ["접어서 반송 운임 절감", "적재 시 4단까지 적층", "캐스터, 표시판, 덮개 옵션"],
      },
      "light-duty-shelf": {
        name: "무볼트 경·중량 선반",
        desc: "리벳 결합 방식으로 볼트와 공구 없이 몇 분 만에 조립합니다. 자재 창고, 문서 보관실, 부품 창고에 적합합니다.",
        features: ["볼트·공구 없는 조립", "선반 높이 50 mm 단위 조절", "스틸, MDF, 메시 선반판 선택"],
      },
      "wire-shelving": {
        name: "크롬 와이어 선반",
        desc: "통풍과 채광이 좋고 위생적인 와이어 선반. 주방, 클린룸, 병원, 매장 창고에 사용됩니다.",
        features: ["크롬 도금 또는 에폭시 코팅", "잠금 캐스터 이동식 버전", "25 mm 단위 높이 조절"],
      },
      "supermarket-shelf": {
        name: "마트·매장 곤돌라 진열대",
        desc: "슈퍼마켓, 편의점, 약국용 진열 선반으로 엔드캡과 액세서리도 함께 제공합니다.",
        features: ["단면 및 양면 곤돌라", "타공판, 메시, 막힘형 후면판", "가격표 레일, 후크, 칸막이 제공"],
      },
    },
  },
  capabilities: {
    eyebrow: "공장 소개",
    title: "강판 코일부터 완제품 랙까지 직접 생산합니다.",
    body: "20,000 m² 공장에서 전 공정을 한 지붕 아래 운영하여 단계마다 품질, 납기, 원가를 관리합니다.",
    items: [
      { title: "자동 냉간 롤 포밍 라인", desc: "기둥과 빔을 연속 롤 포밍으로 정밀하게 성형합니다." },
      { title: "연속 스트립 프레스 라인", desc: "타공과 연결 부품을 한 번에 프레스하여 구멍 위치가 정확합니다." },
      { title: "빔 자동 용접기", desc: "자동 용접으로 균일하고 충분한 강도의 접합부를 만듭니다." },
      { title: "분체 도장 라인", desc: "정전 도장과 오븐 경화로 단단하고 균일하며 오래가는 마감." },
    ],
    finishesTitle: "마감 옵션",
    finishes: ["에폭시", "폴리에스터", "메탈릭 분체", "정전기 방지", "용융 아연 도금", "RAL 맞춤 색상"],
  },
  why: {
    items: [
      { title: "공장 직거래 가격", desc: "생산 라인에서 고객 창고까지 중간 유통 없음." },
      { title: "공간 맞춤 설계", desc: "모든 프로젝트에 레이아웃 설계와 하중 계산 제공." },
      { title: "자체 시공팀", desc: "교육받은 시공팀과 현장 감독." },
      { title: "장기 지원", desc: "인도 후 점검, 수리, 증설 지원." },
    ],
  },
  process: {
    eyebrow: "진행 절차",
    title: "현장 조사부터 최종 인도까지.",
    steps: [
      { title: "현장 조사", desc: "공간을 측정하고 화물, 하중, 하역 장비를 검토합니다." },
      { title: "설계 및 견적", desc: "2D/3D 레이아웃, 하중 계산, 명확한 항목별 견적." },
      { title: "제조", desc: "자사 공장에서 생산하며 공정마다 품질 검사." },
      { title: "배송 및 시공", desc: "자사 팀이 일정에 맞춰 운송·시공합니다." },
      { title: "사후 관리", desc: "정기 점검, 유지보수, 예비 부품, 시스템 증설." },
    ],
  },
  industries: {
    eyebrow: "적용 산업",
    title: "업무 방식에 꼭 맞는 보관 시스템.",
    subtitle: "Faruit 시스템은 동남아시아, 유럽, 미국의 공장, 물류센터, 매장에서 사용되고 있습니다.",
    items: [
      { title: "물류·3PL", desc: "고회전 파렛트 보관과 피킹." },
      { title: "제조업", desc: "원자재, 재공품, 완제품 보관." },
      { title: "철강·알루미늄 프로파일", desc: "장척·중량물용 캔틸레버 시스템." },
      { title: "자동차·금형", desc: "현장용 금형 랙과 부품 케이지." },
      { title: "식품·콜드체인", desc: "냉장·냉동 화물의 고밀도 드라이브인 보관." },
      { title: "유통·이커머스", desc: "매장 선반과 후방 주문 처리." },
    ],
  },
  contact: {
    eyebrow: "문의",
    title: "창고에 대해 알려주세요.",
    subtitle: "바닥 면적, 보관 화물, 하중 조건을 보내주시면 엔지니어가 레이아웃과 견적으로 답변드립니다.",
    form: {
      name: "성함",
      company: "회사명",
      reach: "전화번호 또는 이메일",
      product: "관심 제품",
      productAny: "아직 미정 — 추천 바랍니다",
      message: "프로젝트 내용",
      messagePlaceholder: "면적, 천장 높이, 파렛트 규격, 단당 하중, 수량 등",
      submit: "문의 보내기",
      note: "이메일 앱이 열리고 내용이 자동으로 입력됩니다.",
      subject: "견적 요청",
    },
    phone: "전화",
    email: "이메일",
    wechat: "WeChat",
    address: "공장 주소",
    addressValue: "BT1-3, Phuc Ninh New Urban Area, Vu Ninh Ward, Bac Ninh Province, Vietnam",
  },
  footer: {
    tagline: "창고 보관 시스템의 계획, 설계, 제조, 시공 및 유지보수.",
    rights: "All rights reserved.",
    products: "제품",
    company: "회사",
  },
};

export default ko;
