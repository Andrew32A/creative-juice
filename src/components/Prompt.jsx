import React from 'react';

const Prompt = () => {
  const postItStyle = {
    width: '350px',
    height: '350px',
    fontFamily: 'Mogra',
  };

  const customFontSize = {
    fontSize: '4.7em', // can be adjusted
  };

  return (
    <div className='bg-[#f1f1f1] flex items-center justify-center h-screen'>
      {/* yellow post-it */}
      <div className="bg-yellow-300 p-6 shadow-md mr-2 mx-7" style={postItStyle}>
        <h1 className="font-bold mb-2" style={customFontSize}>DRAW:</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>

      {/* blue post-it */}
      <div className="bg-blue-300 p-6 shadow-md m-2 mx-7" style={postItStyle}>
        <h1 className="font-bold mb-2" style={customFontSize}>PROMPT:</h1>
        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </div>
    </div>
  );
}

export default Prompt;