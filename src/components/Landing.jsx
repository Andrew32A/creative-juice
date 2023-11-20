import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import Logo from '../images/cj-logo.jpg';
import Content from "./Content.jsx";

const Home = () => {
  useEffect(() => {
    // anime({
    //   targets: "h1, p, button, input", // Adjust targets to your elements
    //   translateX: [-50, 0],
    //   opacity: [0, 1],
    //   easing: "easeOutExpo",
    //   duration: 1200,
    //   delay: anime.stagger(100, { start: 1000 }),
    // });

    const sr = ScrollReveal({
      reset: false,
    });
    
    sr.reveal('p', { 
      origin: 'top', 
      interval: 200, 
      delay: 200
    });
    
    sr.reveal('.email-input-wrapper, .email-subtext', { 
      origin: 'left', 
      interval: 0, 
      delay: 1200
    });
    
    sr.reveal('.img-wrapper img', { 
      origin: 'right', 
      interval: 200,
      delay: 400
    });    
  }, []);
  
  return (
    <>
      <div name='home' className="w-full h-screen bg-[#F2E2C4] flex justify-center items-center">
        <div className="max-w-[1000px] px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div style={{ fontFamily: 'DM Sans, sans-serif' }}>
              <h1 style={{ fontFamily: 'Mogra, sans-serif' }} className="text-4xl sm:text-7xl font-bold text-[#003000]">Creative Juice!</h1>
              <p className="text-[#8892b0] py-4 max-w-[700px]">Get <span className="font-bold text-[#000]">one creative writing prompt</span> in your inbox every day. Reply with your writing to see what others created for the same prompt. Juicy.</p>
              <div className='email-input-wrapper' style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="text"
                  className="border-[#003000] border-2 px-4 py-2 my-1 z-10"
                  placeholder="Enter Email Here" />
                <button 
                  className="text-black group border-[#003000] border-2 px-4 py-2 my-1 ml-[-2px] flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out z-20">
                  Get The Juice!
                </button>
              </div>
              <p className="email-subtext text-[#8892b0] py-4 max-w-[700px] text-xs">We won't spam you. This is simply a fun experiment by artists, for artists.</p>
            </div>
            <div className='img-wrapper'>
              <img className="w-[250px] mx-auto mt-1 ml-3" src={Logo} alt="Creative Juice Logo" />
            </div>
          </div>
          <div style={{ textAlign: 'center', fontFamily: 'Mogra, sans-serif', marginTop: '50px' }}>
            <h2>See What Juicers Made!</h2>
            <h3>Share What You Created to Unlock Access.</h3>
            <h3>All Art is Anonymous!</h3>
          </div>
        </div>
      </div>
      <Content />
    </>
  )
}

export default Home;
