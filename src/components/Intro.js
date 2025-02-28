import React, { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Intro = () => {
  const introRef = useRef(null);
  const h1Ref = useRef(null);
  const h1MRef = useRef(null);
  const p1Ref = useRef(null);
  const p2Ref = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(h1Ref.current, { opacity: 0, y: -50, duration: 1 }) // h1 등장
      .from(h1MRef.current, { opacity: 0, y: -50, duration: 1 }, "-=0.5") // 모바일 h1 등장 (살짝 겹쳐서)
      .from(p1Ref.current, { opacity: 0, y: -30, duration: 0.8 }, "-=0.3") // 첫 번째 p 등장
      .from(p2Ref.current, { opacity: 0, y: -30, duration: 0.8 }, "-=0.3"); // 두 번째 p 등장
  }, []);

  return (
    <div className="intro-wrap" ref={introRef}>
      <div className="intro-txt">
        <h1 ref={h1Ref}>PORTFOLIO</h1>
        <h1 ref={h1MRef} className="m-title">
          PORT-
          <br />
          FOLIO
        </h1>
        <p ref={p1Ref}>
          이 포트폴리오 웹사이트는 웹디자이너로서의 역량을 효과적으로
          보여주기 위해 React로 제작되었습니다.
        </p>
        <p ref={p2Ref}>
          100% 개인 작업물이며, PC, 태블릿, 모바일 등 다양한 디바이스에서
          최적의 사용자 경험을 제공하는 반응형 디자인을 적용했습니다.
        </p>
      </div>
    </div>
  );
};

export default Intro;
