import React, { useEffect, useRef, useState } from 'react';
import Intro from './Intro';
import About from './About';
import Design from './Design';
import Contact from './Contact';
import Coding from './Coding';
import { LuAlignJustify, LuX } from "react-icons/lu";

const Main = () => {
  const [activeIdx, setActiveIdx]=useState(0);
  const [mMenu, setMMenu]=useState(false);
  const [isScrolled, setIsScrolled] = useState(false); 
  const sections=['SEONMI KIM','About','Design','Coding','Contact'];
  const sectionRef=[useRef(null),useRef(null),useRef(null),useRef(null),useRef(null)];
  const clickMenu=()=>{
    setMMenu(!mMenu);
  }
  const handleMenu=(idx)=>{
    setActiveIdx(idx);
    //해당 섹션으로 이동
    window.scrollTo({
      top: sectionRef[idx].current.offsetTop,
      behavior: "smooth"
    });
  }

  useEffect(()=>{
    //제일 먼저 실행되는 구문은 useEffect
    window.scrollTo({top:0});//새로고침하면 top:0으로 돌아가기
    const handleScroll=()=>{
      const {scrollTop, clientHeight, scrollHeight}=document.documentElement;

      // 스크롤 값이 50 이상이면 배경색 변경
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      sectionRef.forEach((ref,idx)=>{
        const rect=ref.current.getBoundingClientRect();
        const yPos=clientHeight*0.5;
        if(rect.top>=0 && rect.top<yPos){
          setActiveIdx(idx);
        }
        if(scrollTop===scrollHeight-clientHeight){
          setActiveIdx(sectionRef.length-1);
        }
        // console.log(scrollTop, scrollHeight-clientHeight);
        
      });
    }
    window.addEventListener('scroll',handleScroll);
    // handleScroll(); //초기실행
    return()=>{
      window.removeEventListener('scroll',handleScroll);
    }
  },[]);

  return (
    <div className='main'>
      {/* <header> */}
      <header className={isScrolled ? 'scrolled' : ''}>
        <div className='m-gnb'>
          <a href='#'>SEONMI</a>
          <span className='menu-btn' onClick={clickMenu}>{mMenu ? <LuX /> : <LuAlignJustify />}</span>
        </div>
        {
          mMenu && <nav className='m-menu'>
                      {
                        sections.map((txt,idx)=>{
                          return <a href='#' key={idx}
                                    onClick={(e)=>{
                                      e.preventDefault();
                                      handleMenu(idx);
                                      setMMenu(!mMenu);
                                    }}
                                    className={activeIdx===idx? "active":""}
                                    >{txt}</a>
                        })
                      }
                  </nav>
        }
        <nav className='pc-menu'>
          {
            sections.map((txt,idx)=>{
              return <a href='#' key={idx}
                        onClick={(e)=>{
                          e.preventDefault();
                          handleMenu(idx);
                        }}
                        className={activeIdx===idx? "active":""}
                        >{txt}</a>
            })
          }
        </nav>
      </header>
      <section ref={sectionRef[0]}>
        <Intro/>
      </section>
      <section ref={sectionRef[1]}>
        <About/>
      </section>
      <section ref={sectionRef[2]}>
        <Design/>
      </section>
      <section ref={sectionRef[3]}>
        <Coding/>
      </section>
      <section ref={sectionRef[4]}>
        <Contact/>
      </section>
    </div>
  );
};

export default Main;

