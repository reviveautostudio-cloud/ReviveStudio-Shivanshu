import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import flogo from "../assets/Home/flogo.webp";
import { HiMenu, HiX } from "react-icons/hi";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import gsap from "gsap";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const textRef = useRef(null);
  const { pathname } = useLocation();

  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 50, opacity: 0, filter: "blur(10px)" },
      {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: 2,
        ease: "power2.out",
        stagger: 0.3,
      }
    );
  }, []);

  const navLinks = [
    { label: "HOME", id: "home" },
    { label: "ABOUT", id: "about" },
    { label: "BOOKING", id: "booking" },
    { label: "SERVICES", id: "services" },
    { label: "TESTIMONIALS", id: "testimonial" },
    { label: "GALLERY", id: "gallery" },
  ];

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-white/30 backdrop-blur-md py-3 fixed top-0 left-0 w-full z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between lg:justify-start" ref={textRef}>
          {/* Hamburger Menu */}
          <div className="lg:hidden flex items-center flex-1">
            <button onClick={toggleMenu} className="text-black focus:outline-none">
              {isOpen ? <HiX size={26} /> : <HiMenu size={26} />}
            </button>
          </div>

          {/* Logo */}
          <div className="flex-1 flex justify-center lg:justify-start">
            <Link to="/#home" className="flex items-center space-x-2" onClick={() => setIsOpen(false)}>
              <img src={flogo} alt="Logo Icon" className="w-8 h-auto" />
              <img src={logo} alt="Revive Logo" className="w-28 h-auto" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <ul className="hidden lg:flex flex-1 justify-center space-x-10">
            {navLinks.map((link) => (
              <li key={link.id}>
                <Link
                  to={`/#${link.id}`}
                  className="text-black text-sm font-medium hover:text-red-600 transition duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex-1 flex justify-end items-center">
            <div className="hidden lg:flex gap-4 items-center text-black text-lg">
              <a href="https://www.facebook.com/reviveauto.hyderabad" target="_blank" rel="noopener noreferrer">
                <FaFacebookF className="hover:text-red-600 transition" />
              </a>
              <a href="https://www.instagram.com/reviveauto.hyderabad/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="hover:text-red-600 transition" />
              </a>
             
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 bg-white p-4">
            <ul className="grid grid-cols-2 gap-4 text-start">
              {navLinks.map((link) => (
                <li key={link.id} className="group relative">
                  <Link
                    to={`/#${link.id}`}
                    className="block text-black text-sm font-medium transition duration-300 group-hover:text-yellow-400 pb-1"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
