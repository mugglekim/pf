import React, { useState } from 'react';
import { LuChevronDown, LuChevronUp } from "react-icons/lu";
import experienceData from '../data/experienceData';

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
            대학 졸업 후 CCC라는 선교단체에서 5년간 전임간사로 사역하며, 사람을 만나고 가르치는 일을 했었어요.<br/>
            30대가 되면서 '새로운 일을 할 수 있는 마지막 기회가 있다면, 바로 지금이 아닐까?' 라는 생각이 들었고, 국비지원으로 UI/UX 디자인과정을 수료해- 웹디자이너가 되었답니다!<br/>
            저는 한 기업에 속해 애정을 갖고 오래도록 일하고 싶어요. 사람을 배려하며 관계를 쌓고, 업무를 통해 성장을 경험하며, 기업과 함께 웃는 디자이너가 되겠습니다!
          </p>
        </div>
      </div>
      {showAboutPlus &&
        <div className='about-plus'>
          <div className='skills'>
            <h3>Skills<span>.</span></h3>
              <ul>
                <h4>웹 디자인</h4>
                <li>어도비 포토샵 및 일러스트를 활용하여 디자인 및 편집 작업을 할 수 있어요.</li>
                <li>어도비 프리미어를 활용하여 영상 편집 및 자막 삽입과 같은 간단한 영상 작업이 가능해요.</li>
                <li>피그마를 활용한 디자인 및 프로토타입 작업 경험이 있어요.</li>
              </ul>
              <div className='skills-icon'>
                <img src='./images/photoshop-icon.png' alt='포토샵아이콘'/>
                <img src='./images/illust-icon.png' alt='포토샵아이콘'/>
                <img src='./images/premiere-icon.png' alt='포토샵아이콘'/>
                <img src='./images/figma-icon.png' alt='포토샵아이콘'/>
              </div>
              <ul>
                <h4>웹 퍼블리싱</h4>
                <li>웹표준, 웹 접근성에 맞춰 마크업을 작성하며, 항상 크로스 브라우징 체크를 진행해요.</li>
                <li>CSS 전처리기기 SCSS 활용 가능해요.</li>
                <li>React.js를 활용한 컴포넌트 형식의 퍼블리싱이 가능해요.</li>
                <li>유지보수하기 용이한 코드를 짤 수 있도록 노력하고, 보여지는 것만이 아닌 페이지의 구조와 태그의 의미를 고려하여 마크업 작성하는 것을 지향해요.</li>
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
            <ul>
              {
                experienceData.map((list,idx)=>{
                  return(
                    <li className='ex-step' key={idx}>
                      <p className='ex-date'>{list.date}</p>
                      <div className='ex-deco'>
                        <div className='circle'></div>
                        <div className='line'></div>
                      </div>
                      <p className='ex-txt'>
                        <span>{list.title}</span>
                        <span>{list.dec}</span>
                      </p>
                    </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      }
      <button className='about-more-btn' onClick={clickMoreView}>
        {showAboutPlus ? <span>더보기 닫기 <LuChevronUp /></span>:<span>자기소개 더보기 <LuChevronDown /></span>}
      </button>
    </div>
  );
};

export default About;