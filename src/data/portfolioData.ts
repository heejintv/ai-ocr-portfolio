import { Project, StrengthCategory, ExperienceItem, Qualification } from '../types';

export const PERSONAL_INFO = {
  name: '정희진',
  nameEn: 'Jung Hee-jin',
  role: 'AI / ML Engineer & Computer Vision Researcher',
  targetCompany: '하나금융융합기술원',
  targetDepartment: 'AI-OCR 부문 체험형 인턴',
  slogan: '딥러닝 비전 모델링과 집요한 파이프라인 최적화로 금융 비정형 문서의 정밀한 처리를 실현하는 AI 엔지니어',
  email: 'el00043171@gmail.com',
  github: 'https://github.com',
  portfolioTitle: 'AI & Computer Vision Portfolio | 정희진 (하나금융융합기술원 AI-OCR 지원)',
  summaryPoints: [
    '의료 및 컴퓨터 비전 영상 분할(Segmentation) 모델링 및 2D/3D 하이브리드 앙상블로 정밀도 대폭 개선 (Dice Score 0.641 → 0.8926)',
    '초기 모델 발산 및 라이브러리 충돌을 해결한 가상환경 및 커스텀 트레이너(Custom Trainer) 구축 트러블슈팅 역량',
    'Java/Spring Boot 기반 계층형 아키텍처 및 동시성·정합성 검증 로직 구현으로 대규모 데이터 파이프라인 제어 능력 확보',
    '데이터 공인 자격(ADsP, SQLD) 보유를 바탕으로 데이터 구조화 및 SQL 쿼리 최적화 수행 가능'
  ]
};

export const HIGHLIGHT_STATS = [
  {
    id: 'award',
    label: '캡스톤디자인 경진대회',
    value: '금상 수상',
    subtext: 'BraTS 2025 의료 영상 세그멘테이션 최적화',
    tag: 'Award'
  },
  {
    id: 'dice',
    label: 'Segmentation Dice Score',
    value: '0.8926',
    subtext: '초기 0.641 대비 +39.2% 정밀도 개선',
    tag: 'Performance'
  },
  {
    id: 'cert',
    label: '데이터 공인 전문 자격',
    value: 'ADsP / SQLD',
    subtext: '데이터분석 준전문가 & SQL 개발자 취득',
    tag: 'Certified'
  },
  {
    id: 'coach',
    label: '소통 & 프로그래밍 멘토링',
    value: '코딩 코치',
    subtext: 'C/Python 알고리즘 및 논리적 디버깅 지도',
    tag: 'Mentoring'
  }
];

export const QUALIFICATIONS: Qualification[] = [
  {
    name: 'ADsP',
    fullName: '데이터분석 준전문가',
    issuer: '한국데이터산업진흥원 (K-data)',
    highlight: '데이터 탐색적 분석(EDA), 통계 모델링 및 데이터 전처리 프로세스 검증'
  },
  {
    name: 'SQLD',
    fullName: 'SQL 개발자',
    issuer: '한국데이터산업진흥원 (K-data)',
    highlight: '관계형 데이터 모델링, 데이터 무결성 검증, 복합 쿼리 및 인덱스 최적화'
  }
];

export const STRENGTH_CATEGORIES: StrengthCategory[] = [
  {
    title: 'AI & Computer Vision',
    englishTitle: 'Vision Modeling & Optimization',
    description: '비정형 이미지의 미세 경계 분할, 앙상블 파이프라인 구축 및 학습 최적화',
    skills: [
      { name: 'Python', note: 'AI/ML 메인 개발 언어' },
      { name: 'PyTorch', note: '딥러닝 모델 설계 & 훈련' },
      { name: 'nnU-Net v2', note: '3D 공간 일관성 세그멘테이션' },
      { name: '2D U-Net', note: '미세 경계 패턴 추출' },
      { name: 'Model Ensemble', note: '2D/3D 하이브리드 결합' },
      { name: 'Data Augmentation', note: '불균형 해소 증강 파이프라인' },
      { name: 'Loss Optimization', note: '복합 손실 함수 설계' }
    ]
  },
  {
    title: 'Data & Engineering',
    englishTitle: 'Data Pipeline & Analysis',
    description: '체계적인 데이터 전처리, 시각화 및 리눅스 환경 개발 파이프라인 운영',
    skills: [
      { name: 'Python', note: '데이터 처리 자동화' },
      { name: 'Pandas', note: '정형/비정형 데이터 분석' },
      { name: 'Matplotlib', note: '모델 손실/정확도 시각화' },
      { name: 'Seaborn', note: '분포 및 상관관계 분석' },
      { name: 'Git', note: '버전 관리 및 협업' },
      { name: 'Linux', note: '원격 서버/GPU 클라우드 환경' }
    ]
  },
  {
    title: 'Backend & Architecture',
    englishTitle: 'Server Architecture & Data Flow',
    description: '계층형 아키텍처 설계와 동시성 제어 및 데이터 정합성 검증 파이프라인',
    skills: [
      { name: 'Java', note: '객체지향 설계' },
      { name: 'Spring Boot', note: '엔터프라이즈 백엔드 프레임워크' },
      { name: 'Spring Data JPA', note: 'ORM 및 데이터베이스 매핑' },
      { name: 'MySQL', note: 'RDBMS 스키마 및 트랜잭션 관리' },
      { name: 'REST API', note: '견고한 통신 인터페이스 규격 설계' }
    ]
  }
];

export const PROJECTS: Project[] = [
  {
    id: 'project-vision-segmentation',
    category: 'ai-vision',
    categoryLabel: 'AI / Computer Vision',
    title: '뇌종양 의료 영상 세그멘테이션 AI 모델 최적화',
    subtitle: 'BraTS 2025 기반 캡스톤디자인 경진대회 금상 수상 프로젝트',
    targetDomain: '딥러닝 비전 모델링, 비정형 이미지 분할(Segmentation), 경계선 검출 및 모델 앙상블',
    badges: ['캡스톤디자인 금상', 'Dice Score 0.8926 달성', 'nnU-Net v2 & 2D U-Net', 'PyTorch'],
    techStack: ['Python', 'PyTorch', 'nnU-Net v2', '2D U-Net', 'Custom Trainer', 'Data Augmentation', 'Model Ensemble'],
    metric: {
      label: 'Dice Similarity Coefficient (정밀도 지표)',
      before: '0.6410',
      after: '0.8926',
      description: '초기 모델 발산 문제 해결 및 2D/3D 하이브리드 앙상블로 +39.2% 정밀도 개선'
    },
    problemDefinition: {
      title: '문제 정의 및 연구 배경',
      points: [
        '[데이터 불균형] 의료 뇌종양 영상(BraTS 2025) 데이터셋의 극심한 클래스 불균형과 흐릿한 비정형 경계선으로 인해 초기 세그멘테이션 정확도 저하(Dice Score 0.641) 발생',
        '[학습 환경 결함] Windows 환경 라이브러리 의존성 충돌 및 초기 모델 학습 발산(NaN) 현상으로 인한 안정적인 학습 파이프라인 부재',
        '[단일 모델 한계] 단일 3D 모델 사용 시 미세한 경계 디테일 포착이 누락되고, 단일 2D 모델 사용 시 z축 공간 일관성 손실이 발생하는 한계 봉착'
      ]
    },
    coreArchitecture: {
      title: '핵심 구현 및 아키텍처 최적화',
      items: [
        {
          tag: '학습 환경 구축 & 발산(Divergence) 트러블슈팅',
          heading: 'Windows 환경 라이브러리 호환성 해결 및 학습률 조정을 통한 발산(NaN) 극복',
          description: 'nnU-Net v2의 Windows 환경 구동 시 발생한 패키지 간 버전 충돌을 **Python 3.9 가상환경 구축** 및 호환 패키지(numpy, blosc2) 정합성 확보로 해결했습니다. 또한 학습 중 train_loss가 NaN으로 발산하는 문제를 진단하여, **초기 학습률(Learning Rate)을 1e-2에서 1e-3으로 10배 하향 조정**함으로써 안정적인 손실값 수렴을 달성했습니다.',
          details: [
            'Windows 내 nnU-Net v2 구동을 위한 Python 3.9 가상환경 구축 및 의존성 패키지(numpy, blosc2) 호환성 확보',
            '학습 중 train_loss의 NaN 발생 원인을 모델 발산(Divergence)으로 정의하고 학습률을 10배 하향 조정하여 안정화',
            '프레임워크 제약에 얽매이지 않고 로그와 학습 파라미터를 직접 추적하여 수렴 파이프라인 완성'
          ]
        },
        {
          tag: '데이터 증강 및 커스텀 트레이너 구현',
          heading: '커스텀 트레이너(Custom Trainer) 구현을 통한 공간 및 강도 데이터 증강(DA) 고도화',
          description: '종양 크기가 작은 데이터셋 특성에 맞춰 데이터 증강 파이프라인을 재설계한 커스텀 트레이너를 구현했습니다. **탄성 변형(Elastic Deform) 활성화**와 회전/크기 변형 확률 상향 등 공간 변형을 강화하고, 가우시안 노이즈·블러·감마·저해상도 시뮬레이션 등 스캔 환경의 불균일성을 극복하기 위한 **강도 변형 확률을 전면 증대**시켜 일반화 성능을 극대화했습니다.',
          details: [
            '탄성 변형 활성화 및 회전·크기 조절 확률 상향으로 미세 병변 및 다양한 비정형 형태 대응력 강화',
            '노이즈, 블러, 밝기/명암비, 감마 변형 등 영상 획득 환경 변화에 대응하는 강도 변형 적용 확률 상향',
            '기본 훈련 루프를 상속한 커스텀 트레이너를 구현하여 데이터 특성에 최적화된 증강 파이프라인 구축'
          ]
        },
        {
          tag: '3D fullres + 2D axial 하이브리드 앙상블',
          heading: '3D 공간 일관성(nnU-Net)과 2D 미세 경계 패턴(U-Net) 결합을 통한 앙상블 최적화',
          description: '3차원 볼륨 전반의 공간 일관성을 학습하는 **3D nnU-Net(fullres)**과 슬라이스 단위의 미세 경계 패턴을 정밀하게 포착하는 **2D U-Net**을 앙상블했습니다. 두 이종 모델의 **예측 확률 맵(Probability Map)을 융합**하는 독립 추론 파이프라인을 구축하여 최종 Dice Score 0.8926 및 금상 수상을 달성했습니다.',
          details: [
            '3D nnU-Net(전체 3차원 볼륨 구조)과 2D U-Net(슬라이스 단위 국소 경계선)의 상호보완적 이종 모델 결합',
            '각 모델의 최적 체크포인트를 활용한 추론 수행 및 예측 확률 맵(Probability Map) 기반 융합',
            '모델 간 예측 결과를 효과적으로 결합하는 모듈형 앙상블 파이프라인 구축으로 정밀도 극대화'
          ]
        }
      ]
    },
    hanaContribution: {
      title: '하나금융융합기술원 AI-OCR 실무 기여점',
      summary: '복잡하고 불균형한 비정형 이미지에서 노이즈를 억제하고 미세 경계를 정밀하게 분할한 경험을 즉각 전이합니다.',
      points: [
        '금융 서류(통장 사본, 신분증, 세무 증빙, 거래 명세서 등)의 비정형 텍스트 영역(Bounding Box) 분할 및 검출 정밀도 개선',
        '다단 복합 서식, 표(Table) 셀 경계선, 음영 처리된 비정형 문서 레이아웃의 정밀 분할(Segmentation) 모델 고도화',
        '실제 금융 현장의 열악한 스캔/촬영 노이즈 문서에서도 높은 신뢰도를 보장하는 데이터 증강 및 앙상블 파이프라인 설계 기여'
      ]
    }
  },
  {
    id: 'project-snapbook-backend',
    category: 'backend-pipeline',
    categoryLabel: 'Backend & Data Pipeline',
    title: 'SnapBook (채팅방 기반 1:1 통합 예약 및 문의 관리 플랫폼)',
    subtitle: '분산된 예약 접수와 고객 문의를 매장별 단일 채팅방으로 통합하는 엔터프라이즈 백엔드',
    targetDomain: '백엔드 아키텍처 설계, 동시성/중복 방지 데이터 검증 로직, 권한 제어 및 데이터 필터링 파이프라인',
    badges: ['Spring Boot', 'Spring Data JPA', 'MySQL', 'REST API', '계층형 아키텍처'],
    techStack: ['Java', 'Spring Boot', 'Spring Data JPA', 'MySQL', 'REST API'],
    problemDefinition: {
      title: '문제 정의 및 개발 배경',
      points: [
        '네이버 예약, 카카오톡 채널, 인스타그램 DM 등으로 분산된 예약 접수와 고객 문의로 인해 매장 점주의 업무 과부하 및 일정 중복 혼선 발생',
        '매장마다 상이한 예약 양식(커스텀 폼)과 동시 예약 시 발생할 수 있는 동일 시간대 중복 예약 충돌 방지 장치 필요',
        '고객과 점주 간 권한 분리, 예약 상태(수락/거절) 실시간 제어 및 채팅방 매핑 기반의 안전한 데이터 조회 체계 필요'
      ]
    },
    coreArchitecture: {
      title: '핵심 구현 및 백엔드 파이프라인 (실제 구현 Fact)',
      items: [
        {
          tag: '도메인 엔티티 & 계층형 아키텍처',
          heading: '예약 도메인 엔티티 설계 및 Layered Architecture 기반 비즈니스 로직 개발',
          description: 'Controller → Service → 구현 계층(Reader/Writer) → Repository로 이어지는 계층 구조를 철저히 분리하여 책임과 역할을 명확히 규정하고, 비즈니스 로직과 데이터 접근을 캡슐화한 도메인 모델을 구축했습니다.',
          details: [
            '예약(Reservation), 매장(Shop), 고객(Customer), 예약폼(Form) 간의 연관관계 정규화 설계',
            '구현 계층(Reader/Writer) 분리를 통한 비즈니스 로직 결합도 완화 및 데이터 접근 무결성 보장'
          ]
        },
        {
          tag: '중복 예약 방지 & 폼 정합성 검증',
          heading: '동일 시간대 중복 차단 검증 로직 및 매장별 커스텀 폼 규격 유효성 처리',
          description: '동일 매장 내 중복 시간대 요청을 원천 차단하는 시간 검증 로직을 구현하고, 각 매장이 커스텀 설정한 폼 규격에 부합하지 않는 데이터는 사전 차단하는 유효성 검증 파이프라인을 구축했습니다.',
          details: [
            'DB 조회 기반 시간대 겹침(Overlap) 검증 쿼리 및 서비스 단 이중 방어 로직',
            '매장별 동적 폼 필드 스키마에 맞춘 입력 페이로드 사전 검증(Validation)'
          ]
        },
        {
          tag: '역할 기반 권한 검증 & 상태 관리',
          heading: '점주(OWNER) 권한 검증 수락/거절 처리 및 실시간 상태 전이 시스템',
          description: '요청된 예약의 매장 점주 여부를 식별하여 비인가 조작을 원천 차단하고, [접수 → 수락/거절 → 완료]로 이어지는 예약 상태 전이를 안전하게 제어했습니다.',
          details: [
            '세션/토큰 정보와 매장 소유주(Shop Owner) 일치 여부 권한 인터셉터 검증',
            '상태 변경 시 잘못된 전이(Invalid State Transition)를 방어하는 불변 로직 적용'
          ]
        },
        {
          tag: '채팅방 매개체 필터링 & 조회 API',
          heading: '점주/고객 권한 분리 조회 및 채팅방 매핑 데이터 필터링 API',
          description: '고객과 점주의 권한에 따라 뷰와 조회 범위를 분리하고, 채팅방에 매핑된 샵(Shop)과 고객(Customer) 정보를 식별 조건으로 활용하여 매장 예약 불가 시간대 확인 및 맞춤형 예약 내역 조회 API를 구현했습니다.',
          details: [
            '고객 및 점주 권한을 분리하여 특정 매장의 예약 불가 시간대 확인 및 예약 상태별 조회 API 분원화',
            '채팅방 ID를 매개체로 샵(Shop)과 고객(Customer) 컨텍스트를 추출하여 연관 예약 내역만 안전하게 필터링 조회'
          ]
        },
        {
          tag: '매장 맞춤형 예약 폼 자동 생성 & 관리',
          heading: '신규 샵 생성 시 기본 예약 폼 자동 생성(초기화) 및 점주 맞춤형 폼 수정 API',
          description: '신규 매장 등록 시 기본 필수 폼을 자동 생성하여 점주의 초기 온보딩 부담을 줄이고, 매장별 고유 폼 조회 및 점주 맞춤형 필드 수정 API를 설계하여 유연성을 확보했습니다.',
          details: [
            '매장 생성 이벤트 연계 기본 템플릿 폼 자동 영속화',
            '매장별 커스텀 폼 조회, 수정, 필드 추가/삭제 RESTful API 구현'
          ]
        }
      ]
    },
    hanaContribution: {
      title: '하나금융융합기술원 AI-OCR 실무 기여점',
      summary: '복잡한 비즈니스 로직과 조건부 데이터 흐름을 계층형 구조와 유효성 검증으로 빈틈없이 설계한 백엔드 엔지니어링 역량',
      points: [
        'OCR 대용량 비정형 문서 데이터 수집·정제·라벨링 파이프라인에서 데이터 누락 없는 정합성 보장',
        'AI 비전 모델 서빙 시 Spring Boot 기반 RESTful API와 유기적으로 연계되는 안정적인 백엔드 파이프라인 아키텍처 지원',
        '금융 규제 및 보안 요구사항에 부합하는 엄격한 권한 분리 및 예외 방어적 시스템 설계 기여'
      ]
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: 'exp-coding-coach',
    title: '중·고등학생 대상 프로그래밍 언어(C/Python) 및 논리적 사고 코칭',
    role: '프로그래밍 멘토 / 알고리즘 코치',
    period: '프로그래밍 교육 및 멘토링 활동',
    targetAudience: '프로그래밍 입문 중·고등학생',
    keyAchievements: [
      '추상적인 알고리즘 및 복잡한 문법 개념을 학생 눈높이에 맞춘 실생활 비유 및 단계별 예제로 재구성하여 진입장벽 해소',
      '문제 해결 과정에서 스스로 논리적 오류(디버깅)를 추적할 수 있도록 유도하는 질문 중심의 피드백 세션 운영',
      '단계별 코드 작성 및 피드백 루프를 통해 비전공자/입문자의 컴퓨팅 사고력(Computational Thinking) 향상 달성'
    ],
    hanaSynergy: {
      title: '하나금융융합기술원 R&D 협업 시너지',
      description: '연구 개발 과정에서 도출된 기술적 성과와 모델의 한계점을 AI 비전 연구원, 백엔드 엔지니어, 비즈니스 기획자 등 다양한 이해관계자와 명확하고 구조화된 언어로 소통하며 최적의 실무 개선안을 도출하는 협업 시너지를 창출합니다.'
    }
  }
];
