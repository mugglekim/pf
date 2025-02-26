// 퍼블리싱 리스트이미지 사이즈 900*600 권장
//나머지 리스트이미지 사이즈 700*360 권장

const designData = [
  {
    title: '베드진 매트리스 상세',
    sub_title:'가구/인테리어 상세페이지 제작 - 전체 리뉴얼',
    listImg: '/images/bedjean/bedjean_sum.jpg',
    dec_list:[
      '업체 요청으로 상세페이지 전체 리뉴얼 작업 진행',
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
    title: '오가닉 메모리폼 토퍼 상세',
    sub_title:'가구/인테리어 상세페이지 제작 - 전체 리뉴얼',
    listImg: '/images/topper/topper_sum.jpg',
    dec_list:[
      '업체 요청으로 상세페이지 전체 리뉴얼 작업 진행',
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
    title: '마리포사 테이블매트 상세',
    sub_title:'생활용품 상세페이지 제작 - 아이폰으로 직접 촬영',
    listImg: '/images/mat/mat_sum.jpg',
    dec_list:[
      '제품 사진이 없어 아이폰으로 직접 촬영한 사진으로 제작',
      '제품의 실제 컬러와 질감이 잘 드러나도록 촬영 및 보정함',
      '제품의 장점을 아이콘과 함께 심플하게 설명',
      '소비자가 컬러 옵션을 명확하게 알 수 있도록 표현 ',
    ],
    images: [
      '/images/mat/mat_01.jpg',
      '/images/mat/mat_02.jpg',
      '/images/mat/mat_03.jpg',
      '/images/mat/mat_04.jpg',
      '/images/mat/mat_05.jpg',
      '/images/mat/mat_06.jpg',
      '/images/mat/mat_07.jpg',
      '/images/mat/mat_08.jpg',
    ]
  },
  {
    title: '흐음 애견샴푸 상세',
    sub_title:'반려동물 용품 상세페이지 제작',
    listImg: '/images/shampoo/shampoo_sum.png',
    dec_list:[
      '약사의 자문으로 제품을 생산하는‘흐음’이라는 업체의 모든 제품의 상세페이지를 외주로 받아 작업',
      '기본 스펙, 제품 사진, 일러스트 이미지, 영상을 전달받음',
      '일러스트 이미지와 gif를 최대한 많이 넣어달라는 특별 요청이 있었음',
      '전달받은 영상들은 gif 변환 및 편집',
      '리뷰 / 사용법 / 텍스쳐 설명 / 타사제품의 비교샷 부분에 gif 삽입하여소비자의 이해를 돕고자 했음',
    ],
    images: [
      '/images/shampoo/shampoo_00.png',
      '/images/shampoo/shampoo_01.webp',
      '/images/shampoo/shampoo_02.webp',
      '/images/shampoo/shampoo_03.webp',
      '/images/shampoo/shampoo_04.png',
      '/images/shampoo/shampoo_05.png',
      '/images/shampoo/shampoo_06.webp',
      '/images/shampoo/shampoo_07.png',
      '/images/shampoo/shampoo_08.jpg',
    ]
  },
  {
    title: '팜네이트 사과 상세 1안',
    sub_title:'식품 상세페이지 제작',
    listImg: '/images/apple1/apple_sum.jpg',
    dec_list:[
      '소규모 농수산업에 종사하고 있는농부들을 돕기 위해 설립된 사회적기업 ‘팜네이트’에서 근무하며 식품 상세페이지를 제작',
      '기본 스펙만 전달받아 작업',
      '해당 식품에 대해 공부하고, 삽입할 적절한 사진도 스스로 서칭하여 상세페이지 제작',
      '청송 꿀땡이 사과 1안',
    ],
    images: [
      '/images/apple1/apple_00.jpg',
      '/images/apple1/apple_01.jpg',
      '/images/apple1/apple_02.jpg',
      '/images/apple1/apple_03.jpg',
      '/images/apple1/apple_04.jpg',
      '/images/apple1/apple_05.jpg',
      '/images/apple1/apple_06.jpg',
    ]
  },
  {
    title: '팜네이트 사과 상세 2안',
    sub_title:'식품 상세페이지 제작',
    listImg: '/images/apple2/apple2_sum.jpg',
    dec_list:[
      '소규모 농수산업에 종사하고 있는농부들을 돕기 위해 설립된 사회적기업 ‘팜네이트’에서 근무하며 식품 상세페이지를 제작',
      '기본 스펙만 전달받아 작업',
      '해당 식품에 대해 공부하고, 삽입할 적절한 사진도 스스로 서칭하여 상세페이지 제작',
      '청송 꿀땡이 사과 2안',
    ],
    images: [
      '/images/apple2/apple2_00.jpg',
      '/images/apple2/apple2_01.jpg',
      '/images/apple2/apple2_02.jpg',
      '/images/apple2/apple2_03.jpg',
      '/images/apple2/apple2_04.jpg',
    ]
  },
  {
    title: '러브미모스트 수면잠옷 상세',
    sub_title:'의류 상세페이지 제작',
    listImg: '/images/pajama/pajama_sum.jpg',
    dec_list:[
      '속옷브랜드 ‘러브미모스트’에서 속옷&잠옷 상세페이지 제작',
      '‘나를 가장 사랑하라’는 브랜드 컨셉에 맞게 ‘나 다움’을 강조하기는 인트로 요청 받음',
      '제품 자체의 설명은 강조점 3가지로만 간결하게',
      '설명 부분에는 사진을 적절히 활용하고, 강조점 아래로는 모든 촬영사진을 뿌려줌',
    ],
    images: [
      '/images/pajama/pajama_00.jpg',
      '/images/pajama/pajama_01.jpg',
      '/images/pajama/pajama_02.jpg',
      '/images/pajama/pajama_03.jpg',
      '/images/pajama/pajama_04.jpg',
      '/images/pajama/pajama_05.jpg',
      '/images/pajama/pajama_06.jpg',
    ]
  },
  {
    title: '러브미모스트 압박스타킹 상세',
    sub_title:'의류 상세페이지 제작',
    listImg: '/images/stocking/stocking_sum.jpg',
    dec_list:[
      '속옷브랜드 ‘러브미모스트’에서 속옷&잠옷 상세페이지 제작',
      '‘나를 가장 사랑하라’는 브랜드 컨셉에 맞게 ‘나 다움’을 강조하기는 인트로 요청 받음',
      '제품 자체의 설명은 강조점 3가지로만 간결하게',
      '설명 부분에는 사진을 적절히 활용하고, 강조점 아래로는 모든 촬영사진을 뿌려줌',
    ],
    images: [
      '/images/stocking/stocking_01.jpg',
      '/images/stocking/stocking_02.jpg',
      '/images/stocking/stocking_03.jpg',
      '/images/stocking/stocking_04.jpg',
      '/images/stocking/stocking_05.jpg',
      '/images/stocking/stocking_06.jpg',
    ]
  },
  {
    title: '송월 타올 영상 제작',
    sub_title:'아이폰으로 직접 촬영 - 어도비 프리미어로 제작',
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
  {
    title: '송월 3초 가운 상세',
    sub_title:'타올/가운 상세페이지 제작',
    listImg: '/images/3sGown/3sGown_sum.jpg',
    dec_list:[
      '송월타올에서 자체 제작한 3초 가운의 상세페이지 제작',
      '헤어밴드+헤어터번+가운 3종 세트로 색상별로 구분하여 설명',
      '착용 방법이 다소 어렵기 때문에 사용자가 쉽게 이해할 수 있도록 설명',
    ],
    images: [
      '/images/3sGown/3sGown_01.jpg',
      '/images/3sGown/3sGown_02.jpg',
      '/images/3sGown/3sGown_03.jpg',
      '/images/3sGown/3sGown_04.jpg',
      '/images/3sGown/3sGown_05.jpg',
      '/images/3sGown/3sGown_06.jpg',
      '/images/3sGown/3sGown_07.jpg',
      '/images/3sGown/3sGown_08.jpg',
      '/images/3sGown/3sGown_09.jpg',
      '/images/3sGown/3sGown_10.jpg',
      '/images/3sGown/3sGown_11.jpg',
      '/images/3sGown/3sGown_12.jpg',
      '/images/3sGown/3sGown_13.jpg',
      '/images/3sGown/3sGown_14.jpg',
      '/images/3sGown/3sGown_15.jpg',
    ]
  },
  {
    title: '블랙마카와 토마토의 힘 상세',
    sub_title:'식품 상세페이지 제작',
    listImg: '/images/tomato/tomato_sum.jpg',
    dec_list:[
      '개인적으로 맛있게 먹은 음료의 상세페이지 제작',
      '생소한 재료인 블랙마카 설명을 포함하여 제품의 특징을 3가지로 정리해서 설명',
      '놓치기 아쉬운 구성임을 알려주면서 구매욕구 올리기',
    ],
    images: [
      '/images/tomato/tomato_01.jpg',
      '/images/tomato/tomato_02.jpg',
      '/images/tomato/tomato_03.jpg',
      '/images/tomato/tomato_04.jpg',
      '/images/tomato/tomato_05.jpg',
      '/images/tomato/tomato_06.jpg',
      '/images/tomato/tomato_07.jpg',
      '/images/tomato/tomato_08.jpg',
      '/images/tomato/tomato_09.jpg',
    ]
  },
  {
    title: '슬라이드 배너 모음',
    sub_title:'주기적으로 교체되는 쇼핑몰 롤링배너 제작',
    listImg: '/images/slideBanner/slideBanner_sum.jpg',
    dec_list:[
      '각 기업의 자사몰과스마트 스토어에 등록할 롤링 배너 pc/mobile 제작',
      'pc 디자인과 mobile 디자인 각각 하나씩 제작 후, 등록이 필요한 사이트 가이드에 맞춰 일괄적으로 리사이징 작업'
    ],
    images: [
      '/images/slideBanner/slideBanner_01.jpg',
      '/images/slideBanner/slideBanner_02.jpg',
      '/images/slideBanner/slideBanner_03.jpg',
    ]
  },
  {
    title: '광고 배너 모음',
    sub_title:'소비자의 클릭을 유도하는 광고고배너 제작',
    listImg: '/images/adBanner/adBanner_sum.jpg',
    dec_list:[
      '마케팅팀의 요청에 따라 제작 진행',
      '원활한 협업을 위해 카피문구 및 톤앤매너를 지키는 것이 중요'
    ],
    images: [
      '/images/adBanner/adBanner_00.jpg',
      '/images/adBanner/adBanner_01.jpg',
      '/images/adBanner/adBanner_02.jpg',
      '/images/adBanner/adBanner_03.jpg',
      '/images/adBanner/adBanner_04.jpg',
      '/images/adBanner/adBanner_05.jpg',
      '/images/adBanner/adBanner_06.jpg',
      '/images/adBanner/adBanner_07.jpg',
      '/images/adBanner/adBanner_08.jpg',
      '/images/adBanner/adBanner_09.jpg',
      '/images/adBanner/adBanner_10.jpg',
      '/images/adBanner/adBanner_11.jpg',
      '/images/adBanner/adBanner_12.jpg',
      '/images/adBanner/adBanner_13.jpg',
      '/images/adBanner/adBanner_14.jpg',
      '/images/adBanner/adBanner_15.jpg',
      '/images/adBanner/adBanner_16.jpg',
      '/images/adBanner/adBanner_17.jpg',
      '/images/adBanner/adBanner_18.jpg',
    ]
  },
];

export default designData;