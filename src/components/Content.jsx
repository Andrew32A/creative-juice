import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from 'scrollreveal';
import Placeholder from '../images/placeholder.jpg';

const Content = () => {
  const isAuthenticated = !!localStorage.getItem('authToken');

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
    <div className="text-center mt-8 mb-3" style={{ fontFamily: 'DM Sans, sans-serif'}}>
      <h1 style={{ fontFamily: 'Mogra, sans-serif', WebkitTextStrokeWidth: '0.5px', WebkitTextStrokeColor: '#161616' }} className="text-4xl sm:text-7xl drop-shadow-2xl font-bold mb-8 text-[#BBF2E2]">Artwork Shared:</h1>
      <div className="m-10 shadow-md rounded-md p-10 relative">
        <div className="grid-wrapper grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center relative">
          {Array.from({ length: 12 }, (_, index) => (
            <img
              key={index}
              className="w-full h-64 object-cover rounded-md relative"
              src={Placeholder}
              alt={`Artwork ${index + 1}`}
            />
          ))}
          {isAuthenticated ? null : (
            <div className="blur-overlay absolute top-0 left-0 w-full h-full backdrop-filter backdrop-blur-md flex flex-col items-center justify-center">
              <p className="text-black text-lg mb-4">You need to be signed in to see the content.</p>
              <Link to="/login" className="nav-link text-black border-[#003000] border-2 px-4 py-1 inline-flex items-center justify-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out">
                <i className="ri-login-box-line"></i>
                <span className="pl-2">Login/Sign Up</span>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Content;
