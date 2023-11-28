import React, { useEffect } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import Logo from '../images/cj-logo.jpg';
import Content from "./Content.jsx";

const Home = () => {

  useEffect(() => {
    const sr = ScrollReveal({
      reset: false,
    });
    
    sr.reveal('p', { 
      origin: 'top', 
      interval: 200, 
      delay: 200
    });

    sr.reveal('.arrow', { 
      origin: 'top', 
      interval: 200, 
      delay: 2500
    });
    
    sr.reveal('.img-wrapper img', { 
      origin: 'right', 
      interval: 200,
      delay: 400
    });

    sr.reveal('.email-input-wrapper, .email-subtext', { 
      origin: 'left', 
      interval: 0, 
      delay: 1200
    });
  }, []);

  return (
    <>
      <div name='home' className="w-full h-screen bg-[#F2E2C4] flex justify-center items-center">
        <div className="max-w-[1000px] px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center">
            <div style={{  }}>
              <h1 style={{ fontFamily: 'DM Sans, sans-serif' }} className="text-4xl sm:text-7xl drop-shadow-2xl font-bold text-[#3f3f3f]">Creative Juice!</h1>
              <p className="text-[#3f3f3f] py-4 max-w-[700px]">Get <span className="font-bold text-[#3f3f3f]">one creative drawing prompt</span> every day. Submit your drawing to see what other artists created for the same prompt. Juicy.</p>
              <div className='email-input-wrapper' style={{ display: 'flex', alignItems: 'center' }}>
              <Link
                to="/login"
                className="text-black group border-[#003000] border-2 px-4 py-2 my-1 ml-[-2px] flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out z-20">
                <span>Get Started</span>
              </Link>
              </div>
              <p className="email-subtext text-[#3f3f3f] py-4 max-w-[700px] text-xs">We won't spam you. This is simply a fun experiment by artists, for artists.</p>
            </div>
            <div className='img-wrapper'>
              <img className="w-[250px] mx-auto mt-1 ml-3" src={Logo} alt="Creative Juice Logo" />
            </div>
          </div>
        </div>
      </div>
      <Content />
    </>
  )
}

export default Home;
