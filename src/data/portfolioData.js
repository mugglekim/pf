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