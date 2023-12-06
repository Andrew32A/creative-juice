import React, { useState, useEffect, useRef } from "react";
import ScrollReveal from "scrollreveal";
import { Link, useLocation } from "react-router-dom";
import Logo from "../images/updated-logo.jpg";

const NavBar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [hideHeader, setHideHeader] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const token = localStorage.getItem("authToken");
    setIsAuthenticated(!!token);

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

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      distance: "60px",
      reset: false,
    });

    sr.reveal(".nav-wrapper", {
      origin: "top",
      interval: 100,
      delay: 500,
    });
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    setIsAuthenticated(false);
    window.location.href = "/";
  };

  return (
    <div style={{ fontFamily: "DM Sans, sans-serif" }}>
      <div
        className={`z-50 fixed w-full flex justify-between items-center px-4 pt-3 transition-all duration-500 ease-in-out ${
          isScrolled
            ? "bg-opacity-80 backdrop-blur-sm shadow-lg"
            : "bg-[#F2E2C4]"
        } text-[#fcf8c1] ${hideHeader ? "-top-32" : "top-0"}`}
      >
        {location.pathname === "/" ? (
          <div></div>
        ) : (
          <Link
          to="/"
          className={`nav-link text-black border-[#003000] border-2 px-4 py-1 inline-flex items-center justify-center bg-[#F2E2C4] hover:bg-[#F2A7CA] transition duration-300 ease-in-out ${
            location.pathname === "/" ? "active" : ""
          }`}
        >
          <i className="ri-home-8-line"></i>
          <span className="pl-2">Home</span>
        </Link>
        )}

        <ul className="nav-wrapper hidden md:flex space-x-4 text-pink-300">
          <li style={{ display: "flex", alignItems: "center" }}>
            {isAuthenticated && (
              <Link
                to="/prompt"
                className={`nav-link text-black border-[#003000] border-2 px-4 py-1 ml-[-2px] inline-flex items-center justify-center bg-[#F2E2C4] hover:bg-[#F2A7CA] transition duration-300 ease-in-out ${
                  location.pathname === "/prompt" ? "active" : ""
                }`}
              >
                <i className="ri-pencil-line"></i>
                <span className="pl-2">Prompt</span>
              </Link>
            )}

            {!isAuthenticated ? (
              <Link
                to="/login"
                className={`nav-link text-black border-[#003000] border-2 px-4 py-1 ml-[-2px] inline-flex items-center justify-center bg-[#F2E2C4] hover:bg-[#F2A7CA] transition duration-300 ease-in-out ${
                  location.pathname === "/login" ? "active" : ""
                }`}
              >
                <i className="ri-login-box-line"></i>
                <span className="pl-2">Login/Sign Up</span>
              </Link>
            ) : (
              <button
                onClick={handleLogout}
                className={`nav-link text-black border-[#003000] border-2 px-4 py-1 ml-[-2px] inline-flex items-center justify-center bg-[#F2E2C4] hover:bg-[#F2A7CA] transition duration-300 ease-in-out ${
                  location.pathname === "/logout" ? "active" : ""
                }`}
              >
                <i className="ri-logout-box-line"></i>
                <span className="pl-2">Logout</span>
              </button>
            )}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
