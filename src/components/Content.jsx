import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Placeholder from '../images/placeholder.jpg';

const Content = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      duration: 1500,
      easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
      reset: false,
    });
    
    sr.reveal('.grid-wrapper img', { 
      origin: 'right', 
      interval: 200,
      delay: 400
    });    
  }, []);
  
  return (
    <div name='home' className="w-full h-screen bg-[#F2E2C4]">
    <div className='grid-wrapper' style={{ display: 'flex', justifyContent: 'center'}}>
      <div style={{ marginRight: '10px' }}>
        <img className="w-[250px] mx-auto" src={Placeholder} alt="placeholder" aria-label="placeholder image" />
      </div>
      <div style={{ marginLeft: '10px' }}>
        <img className="w-[250px] mx-auto" src={Placeholder} alt="placeholder" aria-label="placeholder image" />
      </div>
    </div>
    </div>
  );
}

export default Content;