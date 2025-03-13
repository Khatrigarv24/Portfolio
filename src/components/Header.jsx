import React, { useState, useEffect } from 'react'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  // Smooth scrolling function
  const scrollToSection = (e, id) => {
    e.preventDefault();
    const element = document.getElementById(id);
    const offset = 80; // Adjust according to your header height
    const bodyRect = document.body.getBoundingClientRect().top;
    const elementRect = element.getBoundingClientRect().top;
    const elementPosition = elementRect - bodyRect;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth'
    });
    
    // Close mobile menu if open
    setIsMenuOpen(false);
  };
  
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#efebe0]/90 backdrop-blur-sm shadow-md' : 'bg-[#efebe0]'
    }`}>
      {/* Subtle accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-[#14213D]/10"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => scrollToSection(e, 'home')}
              className="text-xl font-bold text-[#14213D] hover:text-[#b19079] transition-colors"
            >
              GarvKhatri
            </a>
          </div>
          
          {/* Desktop navigation */}
          <nav className="hidden md:flex space-x-10">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-[#14213D] hover:text-[#b19079] transition-colors">Home</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-[#14213D] hover:text-[#b19079] transition-colors">Projects</a>
            <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="text-[#14213D] hover:text-[#b19079] transition-colors">Skills</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-[#14213D] hover:text-[#b19079] transition-colors">Contact</a>
          </nav>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#14213D] hover:text-[#b19079] focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={`md:hidden bg-[#efebe0] border-t border-[#14213D]/10 overflow-hidden transition-all duration-300 ${
          isMenuOpen ? 'max-h-56 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="block px-3 py-2 rounded-md text-[#14213D] hover:text-[#b19079]">Home</a>
          <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="block px-3 py-2 rounded-md text-[#14213D] hover:text-[#b19079]">Projects</a>
          <a href="#skills" onClick={(e) => scrollToSection(e, 'skills')} className="block px-3 py-2 rounded-md text-[#14213D] hover:text-[#b19079]">Skills</a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="block px-3 py-2 rounded-md text-[#14213D] hover:text-[#b19079]">Contact</a>
        </div>
      </div>
    </header>
  )
}

export default Header