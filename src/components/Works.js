import React from 'react';
import portfolioData from '../data/portfolioData';

const Works = () => {
  return (
    <div className='pf-wrap'>
      {
        portfolioData.map((list,idx)=>{
          return (
            <div key={idx} className='pf-box'>
              <img src={list.image} alt={list.title}/>
              <div className='pf-overlay'>
                <div className='pf-txt'>
                  <h4>{list.title}</h4>
                  <p>{list.dec}</p>
                </div>
              </div>
            </div>
          )
        })
      }
    </div>
  );
};

export default Works;