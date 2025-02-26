import React, { useState } from 'react';
import WorkDetail from './WorkDetail';
import CodingData from '../data/codingData';

const Works = () => {
  const [selectPf, setSelectPf]=useState(null);
  const [isModalOpen, setIsModalOpen]=useState(false);
  const handleClick=(info)=>{
    setSelectPf(info);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  }
  const handleClose=()=>{
    setSelectPf(null);
    setIsModalOpen(false);
    document.body.style.overflow = 'auto';
  }
  return (
    <div className='pf-wrap coding-wrap'>
      <h2>
        WEB CODING<span>.</span>
      </h2>
      <div className='pf-list'>
        {
          CodingData.map((list,idx)=>{
            return (
              <div key={idx} className='pf-box' onClick={()=>{handleClick(list)}}>              
                <img src={`${process.env.PUBLIC_URL+list.listImg}`} alt={list.title}/>
                <div className='pf-overlay'>
                  <div className='pf-txt'>
                    <h4>{list.title}</h4>
                    <p>{list.sub_title}</p>
                  </div>
                </div>
              </div>
            )
          })
        }
      </div>
      {
        isModalOpen && <WorkDetail selectPf={selectPf} onClose={handleClose}/>
      }
    </div>
  );
};

export default Works;