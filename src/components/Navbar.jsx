import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from 'scrollreveal';
import { Link } from 'react-router-dom';
import Logo from '../images/cj-logo.jpg';

const NavBar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [hideHeader, setHideHeader] = useState(false);
    const lastScrollY = useRef(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            setIsScrolled(currentScrollY > 140);

            if (lastScrollY.current < currentScrollY && currentScrollY > 140) {
                setHideHeader(true);
            } else {
                setHideHeader(false);
            }

            if (window.innerWidth < 480 && currentScrollY < 80) {
                setHideHeader(false);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll, { passive: true });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        const sr = ScrollReveal({
          distance: "60px",
          reset: false,
        });
        
        sr.reveal('.nav-wrapper', { 
          origin: 'top', 
          interval: 100,
          delay: 500
        });    
      }, []);

    return (
        <div style={{ fontFamily: 'DM Sans, sans-serif' }}>
            <div className={`z-50 fixed w-full flex justify-between items-center px-4 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-opacity-80 backdrop-blur-sm shadow-lg' : 'bg-[#F2E2C4]'} text-[#fcf8c1] ${hideHeader ? '-top-32' : 'top-0'}`}>
                <Link className="flex items-center" to="/">
                    <img src={Logo} alt="" style={{ width: '50px' }}/>
                </Link>

                <ul className="nav-wrapper hidden md:flex space-x-4 text-pink-300">
                    <li style={{ display: 'flex', alignItems: 'center' }}>
                        <Link to="/" className="nav-link text-black border-[#003000] border-2 px-4 py-1 inline-flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out">
                        Home
                        </Link>

                        <Link to="/prompt" className="nav-link text-black border-[#003000] border-2 px-4 py-1 ml-[-2px] inline-flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out">
                        Prompt
                        </Link>

                        <Link to="/profile" className="nav-link text-black border-[#003000] border-2 px-4 py-1 ml-[-2px] inline-flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out">
                        Profile
                        </Link>
                        
                        <Link to="/login" className="nav-link text-black border-[#003000] border-2 px-4 py-1 ml-[-2px] inline-flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out">
                        Login
                        </Link>

                        <Link to="/signup" className="nav-link text-black border-[#003000] border-2 px-4 py-1 ml-[-2px] inline-flex items-center bg-[#BBF2E2] hover:bg-[#F2A7CA] transition duration-300 ease-in-out">
                        Sign Up
                        </Link>
                    </li>
                </ul>

                    {/* <li><Link to="/about" className="hover:text-green-400 transition duration-300 ease-in-out">About</Link></li> */}
                    {/* <li><Link to="/contact" className="hover:text-green-400 transition duration-300 ease-in-out">Contact</Link></li> */}
            </div>
        </div>
    );
}

export default NavBar;
