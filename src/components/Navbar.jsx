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
          duration: 1500,
          easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
          reset: false,
        });
        
        sr.reveal('.nav-wrapper li', { 
          origin: 'top', 
          interval: 100,
          delay: 0
        });    
      }, []);

    return (
        <div style={{ fontFamily: 'Mogra, sans-serif' }}>
            <div className={`z-50 fixed w-full flex justify-between items-center px-4 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-opacity-80 backdrop-blur-sm shadow-lg' : 'bg-[#F2E2C4]'} text-[#fcf8c1] ${hideHeader ? '-top-32' : 'top-0'}`}>
                <div className="flex items-center">
                    <img src={Logo} alt="" style={{ width: '50px' }} />
                </div>

                <ul className="nav-wrapper hidden md:flex space-x-4 text-pink-300">
                    <li><Link to="/" className="hover:text-green-400 transition duration-300 ease-in-out">Home</Link></li>
                    <li><Link to="/about" className="hover:text-green-400 transition duration-300 ease-in-out">About</Link></li>
                    <li><Link to="/prompt" className="hover:text-green-400 transition duration-300 ease-in-out">Prompt</Link></li>
                    <li><Link to="/login" className="hover:text-green-400 transition duration-300 ease-in-out">Login</Link></li>
                    <li><Link to="/profile" className="hover:text-green-400 transition duration-300 ease-in-out">Profile</Link></li>
                    <li><Link to="/contact" className="hover:text-green-400 transition duration-300 ease-in-out">Contact</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
