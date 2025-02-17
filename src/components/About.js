import React, { useState } from 'react';
import { LuChevronDown, LuChevronUp } from "react-icons/lu";

const About = () => {
  const [showAboutPlus, setShowAboutPlus]=useState(false);
  const clickMoreView=()=>{
    setShowAboutPlus(!showAboutPlus);
  }
  
  return (
    <div className='about-wrap'>
      <div className='about-basic'>
        <img src='./images/aboutMe.jpg' alt='프로필사진'/>
        <div className='about-txt'>
          <h2>
            안녕하세요!<br/>
            <span>웹디자이너 김선미</span>입니다.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl tincidunt eget nullam non. Quis hendrerit dolor magna eget est lorem ipsum dolor sit. Volutpat odio facilisis mauris sit amet massa. Commodo odio aenean sed adipiscing diam donec
          </p>
        </div>
      </div>
      {showAboutPlus &&
        <div className='about-plus'>
          <div className='skills'>
            <h3>Skills<span>.</span></h3>
              <ul>
                <h4>웹 디자인</h4>
                <li>어도비 포토샵 및 일러스트를 활용하여 디자인 및 편집 작업을 할 수 있습니다.</li>
                <li>어도비 프리미어를 활용하여 영상 편집 및 자막 삽입과 같은 간단한 영상 작업이 가능합니다.</li>
                <li>피그마를 활용한 디자인 및 프로토타입 작업 경험이 있습니다.</li>
              </ul>
              <div className='skills-icon'>
                <img src='./images/photoshop-icon.png' alt='포토샵아이콘'/>
                <img src='./images/illust-icon.png' alt='포토샵아이콘'/>
                <img src='./images/premiere-icon.png' alt='포토샵아이콘'/>
                <img src='./images/figma-icon.png' alt='포토샵아이콘'/>
              </div>
              <ul>
                <h4>웹 퍼블리싱</h4>
                <li>웹표준, 웹 접근성에 맞춰 마크업을 작성하며, 항상 크로스 브라우징 체크를 진행합니다.</li>
                <li>CSS 전처리기기 SCSS 활용 가능합니다.</li>
                <li>React.js를 활용한 컴포넌트 형식의 퍼블리싱이 가능합니다.</li>
                <li>유지보수하기 용이한 코드를 짤 수 있도록 노력하고, 보여지는 것만이 아닌 페이지의 구조와 태그의 의미를 고려하여 마크업을 작성하는 것을 지향합니다.</li>
              </ul>
              <div className='skills-icon'>
                <img src='./images/html5-icon.png' alt='포토샵아이콘'/>
                <img src='./images/css3-icon.png' alt='포토샵아이콘'/>
                <img src='./images/javascript-icon.png' alt='포토샵아이콘'/>
                <img src='./images/react-icon.png' alt='포토샵아이콘'/>
              </div>
          </div>
          <div className='experience'> 
            <h3>Experience<span>.</span></h3>
            <div className='experience-wrap'>
              <p>2024.10 - 2025.03</p>
              <p></p>
              <p>국가기관 과정 수료
                <span>리액트&뷰 기반 프론트 웹퍼블리셔<br/>전문가 양성 과정 수료</span>
              </p>
              <p>2024.10 - 2025.03</p>
              <p></p>
              <p>국가기관 과정 수료
                <span>리액트&뷰 기반 프론트 웹퍼블리셔<br/>전문가 양성 과정 수료</span>
              </p>
              <p>2024.10 - 2025.03</p>
              <p></p>
              <p>국가기관 과정 수료
                <span>리액트&뷰 기반 프론트 웹퍼블리셔<br/>전문가 양성 과정 수료</span>
              </p>
              <p>2024.10 - 2025.03</p>
              <p></p>
              <p>국가기관 과정 수료
                <span>리액트&뷰 기반 프론트 웹퍼블리셔<br/>전문가 양성 과정 수료</span>
              </p>
            </div>
          </div>
        </div>
      }
      <button className='about-more-btn' onClick={clickMoreView}>
        소개 더보기{showAboutPlus ? <span><LuChevronUp /></span>:<span><LuChevronDown /></span>}
      </button>
    </div>
  );
};

export default About;