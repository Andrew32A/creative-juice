import React, { useEffect } from "react";
import ScrollReveal from "scrollreveal";
import { Link } from "react-router-dom";

const Prompt = () => {
  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
    });

    sr.reveal("p", {
      origin: "top",
      interval: 200,
      delay: 200,
    });

    sr.reveal(".arrow", {
      origin: "top",
      interval: 200,
      delay: 2500,
    });

    sr.reveal(".img-wrapper img", {
      origin: "right",
      interval: 200,
      delay: 400,
    });

    sr.reveal(".email-input-wrapper, .email-subtext", {
      origin: "left",
      interval: 0,
      delay: 1200,
    });
  }, []);

  return (
    <>
      <div
        name="home"
        className="w-full h-screen bg-[#F2E2C4] flex justify-center items-center"
      >
        <div className="max-w-[1000px] px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div style={{}}>
              <h1
                style={{
                  fontFamily: "DM Sans, sans-serif",
                  WebkitTextStroke: "1px #bbf2e2",
                  textStroke: "1px #bbf2e2",
                }}
                className="text-4xl sm:text-6xl drop-shadow-2xl font-bold text-[#3f3f3f]"
              >
                Welcome, Juicer!
              </h1>

              <p className="text-[#3f3f3f] py-4 max-w-[700px]">
                Here is your Creative Juice of the day. Share your drawing in
                order to see what other artists created today. Your drawing will
                be entirely anonymous.
              </p>
              <div style={{ border: "0.5px solid #3f3f3f" }}></div>
              <h2
                className="mt-5"
                style={{ fontWeight: "bold", fontSize: "17px" }}
              >
                Play 🎉
              </h2>
              <p className="text-[#3f3f3f]">
                Draw a bumblebee helicopter zooming through a dorest of candy
                canes.
              </p>
              <h2
                className="mt-5"
                style={{ fontWeight: "bold", fontSize: "17px" }}
              >
                Do Something ⭐️
              </h2>
              <p className="mb-5 text-[#3f3f3f]">Draw a bumblebee.</p>
              <div style={{ border: "0.5px solid #3f3f3f" }}></div>
              <div
                className="email-input-wrapper"
                style={{ display: "flex", alignItems: "center" }}
              >
                <button className="text-black group border-[#003000] border-2 px-4 py-2 my-1 ml-[-2px] mt-5 flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out z-20">
                  <span>Submit Your Art</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Prompt;

// import React from 'react';
// import Submissions from "./Submissions.jsx";

// const Prompt = () => {
//   const postItStyle = {
//     width: '375px',
//     height: '350px',
//     fontFamily: 'DM Sans',
//   };

//   const customFontSize = {
//     fontSize: '4.7em', // can be adjusted
//   };

//   return (
//     <>
//       <div className='bg-[#F2E2C4] flex items-center justify-center h-screen'>
//         {/* yellow post-it */}
//         <div className="bg-[#ea90ea] p-6 mr-2 mx-7" style={postItStyle}>
//           <h1 className="font-bold mb-2" style={customFontSize}>DRAW:</h1>
//           <p className="text-[#3f3f3f]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>

//         {/* blue post-it */}
//         <div className="bg-[#b9f3e4] p-6 m-2 mx-7" style={postItStyle}>
//           <h1 className="font-bold mb-2" style={customFontSize}>PROMPT:</h1>
//           <p className="text-[#3f3f3f]">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
//         </div>
//       </div>
//       <Submissions />
//     </>
//   );
// }

// export default Prompt;
