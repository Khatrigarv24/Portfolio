import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Handle scroll events to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Links for navigation
  const navLinks = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <header 
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "py-3 bg-[#efebe0]/90 backdrop-blur-md border-b border-[#14213D]/10 shadow-sm" 
          : "py-5 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between">
          {/* Logo Area */}
          <div className="flex items-center group">
            <Link 
              to="home" 
              spy={true} 
              smooth={true} 
              offset={-70} 
              duration={500}
              className="cursor-pointer"
            >
              <div className="relative flex items-center">
                {/* Diamond logo with hover animation */}
                <div className="relative w-10 h-10 mr-3 transition-all duration-500 group-hover:scale-110">
                  <div className="absolute inset-0 bg-[#14213D] rotate-45 transform-gpu"></div>
                  <div className="absolute inset-[2px] bg-[#efebe0] rotate-45 transform-gpu"></div>
                  <div className="absolute inset-[4px] bg-[#b19079] rotate-45 transform-gpu flex items-center justify-center">
                    <span className="text-[#efebe0] font-bold text-lg rotate-[315deg] transform-gpu">G</span>
                  </div>
                </div>
                
                {/* Brand name with animated highlight */}
                <div className="relative">
                  <span className={`text-xl font-bold text-[#14213D] transition-all duration-500 ${
                    scrolled ? "opacity-100" : "opacity-0 md:opacity-100"
                  }`}>
                    Garv<span className="text-[#b19079]">Khatri</span>
                  </span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#b19079] transition-all duration-500 group-hover:w-full"></div>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation Links - Glass effect design */}
          <div className="hidden md:block">
            <div className="relative bg-[#14213D]/5 backdrop-blur-sm rounded-full py-1 px-1">
              <div className="flex items-center space-x-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.id}
                    to={link.id}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    activeClass="active"
                    className="relative group"
                    onSetActive={() => setActiveSection(link.id)}
                  >
                    <span className={`inline-block px-4 py-2 rounded-full transition-all duration-300 ${
                      activeSection === link.id 
                        ? "bg-[#14213D] text-[#efebe0]" 
                        : "text-[#14213D] hover:bg-[#14213D]/10"
                    }`}>
                      {link.name}
                    </span>
                    
                    {/* Animated dot indicator */}
                    {activeSection !== link.id && (
                      <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 rounded-full bg-[#b19079] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    )}
                  </Link>
                ))}
                
                {/* CTA Button with hover effect */}
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="group relative overflow-hidden ml-2 px-5 py-2 bg-[#b19079] text-[#efebe0] rounded-full font-medium shadow-md hover:shadow-lg transition-all duration-300"
                >
                  <span className="relative z-10 transition-colors duration-300">Connect</span>
                  <span className="absolute inset-0 bg-[#14213D] rounded-full transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
                </Link>
              </div>
              
              {/* Animated active indicator that moves based on active section */}
              <div className={`absolute left-0 top-0 transition-all duration-300 ease-out ${
                activeSection === "home" ? "translate-x-1" :
                activeSection === "about" ? "translate-x-[4.5rem]" :
                activeSection === "projects" ? "translate-x-[9rem]" :
                activeSection === "skills" ? "translate-x-[14rem]" :
                "translate-x-[18.5rem]"
              }`}>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button with animated icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center focus:outline-none overflow-hidden rounded-full hover:bg-[#14213D]/5 transition-colors"
            aria-label="Toggle menu"
          >
            <div className="w-6 flex flex-col items-center justify-center gap-1.5 transition-all duration-300">
              <span className={`block w-6 h-0.5 bg-[#14213D] rounded transition-all duration-300 ${
                mobileMenuOpen ? "rotate-45 translate-y-2" : ""
              }`}></span>
              <span className={`block h-0.5 bg-[#14213D] rounded transition-all duration-300 ${
                mobileMenuOpen ? "w-0 opacity-0" : "w-4 opacity-100"
              }`}></span>
              <span className={`block w-6 h-0.5 bg-[#14213D] rounded transition-all duration-300 ${
                mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}></span>
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu (Side drawer) */}
      <div className={`fixed top-0 right-0 h-full w-4/5 max-w-sm bg-[#efebe0] shadow-xl z-40 transform transition-transform duration-500 ease-in-out ${
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Mobile menu header with close button */}
        <div className="flex justify-between items-center px-6 py-5 border-b border-[#14213D]/10">
          <div className="text-lg font-bold text-[#14213D]">
            Menu
          </div>
          <button 
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-full hover:bg-[#14213D]/10 transition-colors"
          >
            <svg className="w-5 h-5 text-[#14213D]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        
        {/* Mobile navigation links */}
        <div className="py-6 px-6 flex flex-col space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.id}
              to={link.id}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={() => setMobileMenuOpen(false)}
              className={`py-3 px-4 flex items-center space-x-3 rounded-lg transition-all duration-200 ${
                activeSection === link.id
                  ? "bg-[#b19079] text-[#efebe0] font-medium shadow-sm"
                  : "text-[#14213D] hover:bg-[#14213D]/5"
              }`}
              onSetActive={() => setActiveSection(link.id)}
            >
              {/* Icon for each navigation item */}
              <span className="w-5 h-5 flex items-center justify-center">
                {link.id === "home" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                  </svg>
                )}
                {link.id === "about" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                )}
                {link.id === "projects" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path>
                  </svg>
                )}
                {link.id === "skills" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                )}
                {link.id === "contact" && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                )}
              </span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Contact button in mobile menu */}
        <div className="px-6 mt-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onClick={() => setMobileMenuOpen(false)}
            className="block w-full px-5 py-3 bg-[#14213D] text-[#efebe0] rounded-lg text-center font-medium shadow-md hover:bg-[#b19079] transition-all duration-300"
          >
            Let's Connect
          </Link>
        </div>

        {/* Social icons in mobile menu */}
        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="pt-6 border-t border-[#14213D]/10">
            <p className="text-xs uppercase tracking-widest text-[#14213D]/60 mb-4">Connect With Me</p>
            <div className="flex gap-4">
              <a href="#" className="group p-2 bg-[#14213D]/5 rounded-full hover:bg-[#14213D] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#14213D] group-hover:text-[#efebe0] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                </svg>
              </a>
              <a href="#" className="group p-2 bg-[#14213D]/5 rounded-full hover:bg-[#14213D] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#14213D] group-hover:text-[#efebe0] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="group p-2 bg-[#14213D]/5 rounded-full hover:bg-[#14213D] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#14213D] group-hover:text-[#efebe0] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a href="#" className="group p-2 bg-[#14213D]/5 rounded-full hover:bg-[#14213D] transition-colors duration-300">
                <svg className="w-5 h-5 text-[#14213D] group-hover:text-[#efebe0] transition-colors duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop overlay for mobile */}
      {mobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-[#14213D]/30 backdrop-blur-sm z-30"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </header>
  );
};

export default Navbar;