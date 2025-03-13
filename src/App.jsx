import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'

// Import AOS (Animate On Scroll) library
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize AOS and handle page load
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize AOS animations
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true,
      mirror: false,
      offset: 50
    });
    
    // Simulate loading and reveal content
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div className="fixed inset-0 bg-[#efebe0] z-50 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#b19079] border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <div className={`min-h-screen bg-[#efebe0] text-[#14213D] relative transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}>
        <div className="relative z-10">
          <Header />
          <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <Hero />
            <Projects />
            <Skills />
            <Contact />
          </main>
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App