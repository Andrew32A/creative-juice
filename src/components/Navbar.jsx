import React from 'react';
import Logo from '../images/cj-logo.jpg';

const NavBar = () => {
   return (
    <div style={{ fontFamily: 'Mogra, sans-serif' }}>
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#F2E2C4] text-[#fcf8c1">
        <div className="flex items-center">
            <img src={Logo} alt="" style={{ width: '50px' }} />
        </div>

        <ul className="hidden md:flex space-x-4 text-pink-300">
            <li>
                <span className="hover:text-green-400 cursor-pointer">Home</span>
            </li>
            <li>
                <span className="hover:text-green-400 cursor-pointer">About</span>
            </li>
            <li>
                <span className="hover:text-green-400 cursor-pointer">Prompt</span>
            </li>
            <li>
                <span className="hover:text-green-400 cursor-pointer">Contact</span>
            </li>
        </ul>

    </div>
    </div>
   );
}

export default NavBar;