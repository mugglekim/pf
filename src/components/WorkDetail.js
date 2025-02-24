import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';


const WorkDetail = ({selectPf,onClose}) => {
  const player=useRef(null);
  useEffect(()=>{
    if(selectPf.video){
      player.current.play();
    }
  },[]);

  return (
    <div className='workDetail-wrap'>
      {selectPf.link && <span className="coding-close" onClick={onClose}>닫기</span>}
      {selectPf.images && <span className="design-close" onClick={onClose}>닫기</span>}
      {selectPf.video && <span className="design-close" onClick={onClose}>닫기</span>}
      <span className="m-close" onClick={onClose}>닫기</span>
      {
        selectPf.link &&
        <div className='popup publishing'>
          <img src={`${process.env.PUBLIC_URL+selectPf.listImg}`}/>
          <div className='pf-txt'>
            <h4>{selectPf.title}<span>.</span></h4>
            <p>{selectPf.dec}</p>
            <ul>
              {
                selectPf.dec_list.map((txt,idx)=>{
                  return <li key={idx}>{txt}</li>
                })
              }
            </ul>
            <p className='pf-link'><Link to={selectPf.link} target='_blank'>새탭에서 사이트 보기</Link></p>
          </div>
        </div>
      }
      {
        selectPf.images && 
        <div className='popup design'>
          <div className='pf-txt'>
            <h4>{selectPf.title}<span>.</span></h4>
            <ul>
              {
                selectPf.dec_list.map((txt,idx)=>{
                  return <li key={idx}>{txt}</li>
                })
              }
            </ul>
          </div>
          <div className='pf-img'>
            {
              selectPf.images.map((img,idx)=>{
                return <img key={idx} src={`${process.env.PUBLIC_URL+img}`}/>
              })
            }
          </div>
        </div>
      }
      {
        selectPf.video && 
        <div className='popup design'>
          <div className='pf-txt'>
            <h4>{selectPf.title}<span>.</span></h4>
            <ul>
              {
                selectPf.dec_list.map((txt,idx)=>{
                  return <li key={idx}>{txt}</li>
                })
              }
            </ul>
          </div>
          <div className='pf-img'>         
            <video ref={player} src={`${process.env.PUBLIC_URL+selectPf.video}`} width="720px" controls muted></video>
          </div> 
        </div>
      }
    </div>  
  );
};

export default WorkDetail;