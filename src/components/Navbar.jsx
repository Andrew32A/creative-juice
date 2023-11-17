import React, { useState, useEffect, useRef } from 'react';
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

    return (
        <div style={{ fontFamily: 'Mogra, sans-serif' }}>
            <div className={`fixed w-full flex justify-between items-center px-4 transition-all duration-500 ease-in-out ${isScrolled ? 'bg-opacity-80 backdrop-blur-sm shadow-lg' : 'bg-[#F2E2C4]'} text-[#fcf8c1] ${hideHeader ? '-top-32' : 'top-0'}`}>
                <div className="flex items-center">
                    <img src={Logo} alt="" style={{ width: '50px' }} />
                </div>

                <ul className="hidden md:flex space-x-4 text-pink-300">
                    <li>
                        <span className="hover:text-green-400 cursor-pointer transition duration-300 ease-in-out">Home</span>
                    </li>
                    <li>
                        <span className="hover:text-green-400 cursor-pointer transition duration-300 ease-in-out">About</span>
                    </li>
                    <li>
                        <span className="hover:text-green-400 cursor-pointer transition duration-300 ease-in-out">Prompt</span>
                    </li>
                    <li>
                        <span className="hover:text-green-400 cursor-pointer transition duration-300 ease-in-out">Contact</span>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;
