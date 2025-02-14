import React, { useEffect, useRef, useState } from 'react';

const Main = () => {
  const [activeIdx, setActiveIdx]=useState(0);
  const sections=['SEONMI KIM','About','Works','Contact'];
  // const sectionRef=sections.map(()=>{return useRef(null)});
  const sectionRef=[useRef(null),useRef(null),useRef(null),useRef(null)];
  const sectionPst=useRef([]);
  const handleMenu=(idx)=>{
    // sectionRef[idx].current.scrollIntoView({behavior:"smooth"});
    setActiveIdx(idx);
    //해당 섹션으로 이동
    window.scrollTo({
      top: sectionPst.current[idx],
      behavior: "smooth"
    });
  }
  const sectionPos=()=>{
    const pos=[];
      for(let i=0; i<sectionRef.length; i++){
        const ref=sectionRef[i];
        pos.push(ref.current.offsetTop);
      }
      sectionPst.current=pos;
      console.log(sectionPst.current);
  }
  useEffect(()=>{
    //제일 먼저 실행되는 구문은 useEffect
    window.scrollTo({top:0});//새로고침하면 top:0으로 돌아가기
    sectionPos();//실행되었을 때, 각 섹션의 top값 읽어오기
    const handleScroll=()=>{
      sectionRef.forEach((ref,idx)=>{
        const rect=ref.current.getBoundingClientRect();
        const yPos=document.documentElement.clientHeight*0.5;
        if(rect.top>=0 && rect.top<yPos){
          setActiveIdx(idx);
        }
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
      <header>
        <nav>
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
      <section ref={sectionRef[0]}></section>
      <section ref={sectionRef[1]}></section>
      <section ref={sectionRef[2]}></section>
      <section ref={sectionRef[3]}></section>
    </div>
  );
};

export default Main;