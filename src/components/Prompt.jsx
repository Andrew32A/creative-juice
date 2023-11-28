import React from 'react';

const Prompt = () => {
  const postItStyle = {
    width: '375px',
    height: '350px',
    fontFamily: 'DM Sans',
  };

  const customFontSize = {
    fontSize: '4.7em', // can be adjusted
  };

  return (
    <div className='bg-[#F2E2C4] flex items-center justify-center h-screen'>
      {/* yellow post-it */}
      <div className="bg-[#ea90ea] p-6 mr-2 mx-7" style={postItStyle}>
        <h1 className="font-bold mb-2" style={customFontSize}>DRAW:</h1>
        <p className="text-[#3f3f3f]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* blue post-it */}
      <div className="bg-[#b9f3e4] p-6 m-2 mx-7" style={postItStyle}>
        <h1 className="font-bold mb-2" style={customFontSize}>PROMPT:</h1>
        <p className="text-[#3f3f3f]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Prompt;