// 퍼블리싱 리스트이미지 사이즈 900*600 권장
//나머지 리스트이미지 사이즈 700*360 권장

const portfolioData = [
  {
    class: 'publishing',
    title: '웹사이트 리뉴얼 반응형 퍼블리싱',
    sub_title:'디자인부터 코딩까지 단독으로 진행',
    listImg: '/images/publishing/camping.png',
    dec: '웹사이트 메인페이지의 리뉴얼을 위해 디자인부터 코딩까지 단독으로 진행해 본 작업물입니다. PC와 모바일 환경에서 편리하게 사용할 수 있도록 반응형 사이트로 제작되었습니다.',
    dec_list:[
      '포토샵으로 디자인 구축 후 코드 구현',
      '제작에 사용된 스킬 : PhotoShop, HTML5, CSS3, JavaScript',
      '레이아웃 제작 방식 : Flex'
    ],
    link: 'https://mugglekim.github.io/camping/index.html'
  },
  {
    class: 'design',
    title: '베드진 매트리스 상세페이지',
    sub_title:'상세페이지 전체 리뉴얼 작업',
    listImg: '/images/bedjean/bedjean_sum.jpg',
    dec_list:[
      '기존 상세는 특별한 기승전결 없이 이미지가 크게 삽입되어 있었고, 제품 정보는 대화체로 길게 서술되어 있었음',
      '이미지도 설명을 돕는 요소로 사용하면서, 장황한 대화체 설명을 간결하게 수정',
      'gif를 삽입하여 매트리스 강도에 대해 쉽게 이해할 수 있도록 함'
    ],
    images: [
      '/images/bedjean/bedjean_00.jpg',
      '/images/bedjean/bedjean_01.webp',
      '/images/bedjean/bedjean_02.webp',
      '/images/bedjean/bedjean_03.webp',
      '/images/bedjean/bedjean_04.jpg',
      '/images/bedjean/bedjean_05.webp',
      '/images/bedjean/bedjean_06.jpg',
      '/images/bedjean/bedjean_07.webp',
      '/images/bedjean/bedjean_08.jpg',
      '/images/bedjean/bedjean_09.webp',
      '/images/bedjean/bedjean_10.jpg',
      '/images/bedjean/bedjean_11.webp',
      '/images/bedjean/bedjean_12.jpg',
      '/images/bedjean/bedjean_13.webp',
      '/images/bedjean/bedjean_14.jpg',
      '/images/bedjean/bedjean_15.jpg',
    ]
  },
  {
    class: 'publishing',
    title: '넷플릭스 클론 코딩',
    sub_title:'Figma로 레이아웃 설계 후 React로 작업',
    listImg: '/images/publishing/nexflix.jpg',
    dec: 'Figma로 전체 레이아웃 설계한 후 React로 작업한 넷플릭스 클론 사이트입니다. PC/Tablet/Mobile 3가지 사이즈의 반응형 사이트로, ‘지금 뜨는 콘텐츠’ 영역은 TMDB API를 연동 및 react slick을 사용해 보았습니다. 우측 상단에 로그인 버튼을 클릭하면 로그인 페이지로 이동되며, 로그인 및 비밀번호 입력시 &버튼 클릭시 인터랙션 및 alert 메세지 출력 작업까지 진행했습니다.',
    dec_list:[
      'Figma로 전체 구조 설계한 후 코드 구현',
      '제작에 사용된 스킬 : Figma, react, react-router, TMdb API 연동',
      '플러그인 : Axios, react-slick, scss'
    ],
    link: 'https://mugglekim.github.io/netflix_clone/'
  },
  {
    class: 'design',
    title: '오가닉 토퍼 상세페이지',
    sub_title:'상세페이지 전체 리뉴얼 작업',
    listImg: '/images/topper/topper_sum.jpg',
    dec_list:[
      '기존 상세는 폰트사이즈가 작아 가독성이 떨어졌음',
      '제작된지 오래되어 전체적인 디자인이 다소 칙칙하고 올드한 느낌을 주었음',
      '전체 색상을 화사하게 하게 변경',
      '모바일에서도 보기 편한 텍스트 사이즈',
      '다소 복잡했던 제품 설명을 깔끔하게 정리'
    ],
    images: [
      '/images/topper/topper_00.jpg',
      '/images/topper/topper_01.jpg',
      '/images/topper/topper_02.jpg',
      '/images/topper/topper_03.jpg',
      '/images/topper/topper_04.jpg',
      '/images/topper/topper_05.jpg',
      '/images/topper/topper_06.jpg',
      '/images/topper/topper_07.jpg',
      '/images/topper/topper_08.jpg',
      '/images/topper/topper_09.jpg',
      '/images/topper/topper_10.jpg',
    ]
  },
  {
    class: 'publishing',
    title: '에어비앤비 클론 코딩',
    sub_title:'Figma로 전체 구조 설계 후 코드 구현',
    listImg: '/images/publishing/airbnb.png',
    dec: '웹 표준 및 접근성을 준수하기 위해 세심하게 설계하고 작업한 에어비앤비 클론 사이트입니다. 사용자의 디바이스에 따라 정렬되는 컨텐츠의 갯수를 적절히 설정하여, 긍정적인 사용자 경험을 제공하고자 했습니다.',
    dec_list:[
      'Figma로 전체 구조 설계한 후 코드 구현',
      '제작에 사용된 스킬 : Figma, HTML5, CSS3',
      '레이아웃 제작 방식 : Flex'
    ],
    link: 'https://mugglekim.github.io/airbnb/'
  },
  {
    class: 'publishing',
    title: '출결관리 대시보드',
    sub_title:'Vue3 Chart.js 라이브러리를 사용한 코딩',
    listImg: '/images/publishing/chart.png',
    dec: '2025년 2월 학생 출결 데이터 기반으로 출석, 지각, 결석, 조퇴 상태 카운트 및 차트를 생성했습니다.',
    dec_list:[
      '차트 라이브러리 : Chart.js를 사용하여 출결 현황 시각화',
      '제작에 사용된 스킬 : Vue 3(Composition API, ref, watch), Chart.js',
      '일자별 출결 현황 셀렉박스에서 25년 2월 중에 선택해 주세요.'
    ],
    link: 'https://mugglekim.github.io/chart/'
  },
  {
    class: 'publishing',
    title: '야구 퀴즈',
    sub_title:'React 기반의 퀴즈 코딩',
    listImg: '/images/publishing/quiz.png',
    dec: 'React 기반의 퀴즈를 만들기 위해, 퀴즈 카테고리를 직접 설정하고 문제와 답도 기획해 제작했습니다.',
    dec_list:[
      '문제 풀이 진행 : 사용자가 답을 선택하고, 점수와 진행 상태 업데이트',
      'Figma 활용하여 디자인 작업 후 코딩 진행',
      '제작에 사용된 스킬 : React(Hooks, useState 활용)',
    ],
    link: 'https://mugglekim.github.io/quiz/'
  },
  {
    class: 'publishing',
    title: '특정일까지의 남은 시간 계산기', 
    sub_title:'타임 카운트 웹 구현 코딩',
    listImg: '/images/publishing/count.png',
    dec: '현재 날짜 및 시간이 자동 업데이트 되도록 만들었으며, 특정 날짜를 선택하면 남은 시간이 출력됩니다.',
    dec_list:[
      '페이지 로딩 시 현재 날짜와 시간 표시',
      '드롭다운 메뉴로 시작 날짜와 목표 날짜 선택',
      '목표 날짜까지 남은 일수, 시간, 분, 초를 실시간으로 표시',
      '제작에 사용된 스킬 : JavaScript, DOM 조작, 이벤트 처리'
    ],
    link: 'https://mugglekim.github.io/dateCalc/index.html'
  },
  {
    class: 'video',
    title: '타올 영상 제작',
    sub_title:'아이폰으로 직접 촬영하여 프리미어로 제작',
    listImg: '/video/towel_sum.jpg',
    dec_list:[
      '상세페이지 상단에 추가할 타올 설명 영상 제작 요청 받음',
      '30수 타올 설명을 위한 내용 기획',
      '아이폰으로 직접 촬영하여 어도비 프리미어로 영상 편집 및 자막 삽입함',
    ],
    video: [
      '/video/towel.mp4',
    ]
  },
];

export default portfolioData;