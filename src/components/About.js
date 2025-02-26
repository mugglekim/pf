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
        <img src={`${process.env.PUBLIC_URL}/images/aboutMe.gif`} alt='프로필사진'/>
        <div className='about-txt'>
          <h2>
            안녕하세요!<br/>
            <span>웹디자이너 김선미</span>입니다.
          </h2>
          <p>
          대학 졸업 후 CCC라는 선교단체에서 5년간 전임 간사로 사역하며 사람들을 만나고 가르치는 일을 했습니다. 30대가 되면서 '새로운 일을 할 수 있는 마지막 기회가 있다면, 지금이 아닐까?'라는 생각이 들었고, 국비 지원으로 UI/UX 디자인 과정을 수료하여 웹 디자이너로 전향하게 되었습니다.<br/>저는 한 기업에 소속되어 애정을 가지고 오랫동안 일하고 싶습니다. 사람을 배려하며 관계를 쌓고, 업무를 통해 성장하며 기업과 함께 웃는 디자이너가 되겠습니다!
          </p>
        </div>
      </div>
      {showAboutPlus &&
        <div className='about-plus'>
          <div className='skills'>
            <h3>Skills<span>.</span></h3>
              <ul>
                <h4>웹 디자인</h4>
                <li>어도비 포토샵 및 일러스트레이터를 활용하여 디자인 및 편집 작업을 수행할 수 있습니다.</li>
                <li>어도비 프리미어를 이용한 영상 편집 및 자막 삽입과 같은 간단한 영상 작업이 가능합니다.</li>
                <li>피그마를 활용한 디자인 및 프로토타입 작업 경험이 있습니다.</li>
              </ul>
              <div className='skills-icon'>
                <img src={`${process.env.PUBLIC_URL}/images/icon/photoshop-icon.png`} alt='포토샵아이콘'/>
                <img src={`${process.env.PUBLIC_URL}/images/icon/illust-icon.png`} alt='포토샵아이콘'/>
                <img src={`${process.env.PUBLIC_URL}/images/icon/premiere-icon.png`} alt='포토샵아이콘'/>
                <img src={`${process.env.PUBLIC_URL}/images/icon/figma-icon.png`} alt='포토샵아이콘'/>
              </div>
              <ul>
                <h4>웹 퍼블리싱</h4>
                <li>웹 표준과 웹 접근성에 맞춰 마크업을 작성하며, 항상 크로스 브라우징 체크를 진행합니다.</li>
                <li>CSS 전처리기인 SCSS를 활용할 수 있습니다.</li>
                <li>React.js를 활용한 컴포넌트 기반의 퍼블리싱이 가능합니다.</li>
                <li>유지보수가 용이한 코드를 작성하기 위해 노력하며, 보여지는 것뿐만 아니라 페이지의 구조와 태그의 의미를 고려하여 마크업을 작성하는 것을 지향합니다.</li>
              </ul>
              <div className='skills-icon'>
                <img src={`${process.env.PUBLIC_URL}/images/icon/html5-icon.png`} alt='포토샵아이콘'/>
                <img src={`${process.env.PUBLIC_URL}/images/icon/css3-icon.png`} alt='포토샵아이콘'/>
                <img src={`${process.env.PUBLIC_URL}/images/icon/javascript-icon.png`} alt='포토샵아이콘'/>
                <img src={`${process.env.PUBLIC_URL}/images/icon/react-icon.png`} alt='포토샵아이콘'/>
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
                        <span>{list.title}</span><br/>
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
        {showAboutPlus ? <span>더보기 닫기 <LuChevronUp /></span>:<span>스킬 / 경력 더보기 <LuChevronDown /></span>}
      </button>
    </div>
  );
};

export default About;