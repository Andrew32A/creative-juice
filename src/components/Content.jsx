import React from 'react';
import Placeholder from '../images/placeholder.jpg';

const Content = () => {
  return (
    <div name='home' className="w-full h-screen bg-[#f1f1f1]">
    <div style={{ display: 'flex', justifyContent: 'center'}}>
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