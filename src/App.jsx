import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CursorEffect from './components/CursorEffect'

// Import AOS (Animate On Scroll) library
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Initialize AOS and handle page load
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
    
    // Initialize AOS animations with enhanced configuration
    AOS.init({
      duration: 800,
      easing: 'cubic-bezier(0.25, 1, 0.5, 1)',
      once: false,
      mirror: true,
      offset: 50,
      delay: 100,
      anchorPlacement: 'top-bottom'
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
      
      {/* Custom cursor effect - only visible on larger screens */}
      <CursorEffect />
      
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

      {/* Global animation styles */}
      <style jsx global>{`
        /* Hide default cursor when custom cursor is active */
        @media (min-width: 768px) {
          body {
            cursor: none !important;
          }
        }
        
        /* Subtle hover animations for buttons */
        button, a {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), 
                      box-shadow 0.3s cubic-bezier(0.34, 1.56, 0.64, 1),
                      background-color 0.3s ease-out,
                      color 0.3s ease-out;
        }
        
        /* Micro-interaction animations */
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.03); }
        }
        
        @keyframes shine {
          from { background-position: -200% 0; }
          to { background-position: 200% 0; }
        }

        /* Page transition animations */
        .page-enter {
          opacity: 0;
          transform: translateY(10px);
        }
        
        .page-enter-active {
          opacity: 1;
          transform: translateY(0);
          transition: opacity 500ms, transform 500ms;
        }
        
        /* Utility animation classes */
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-breathe {
          animation: breathe 4s ease-in-out infinite;
        }
        
        .shine-effect {
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
          background-size: 200% 100%;
          animation: shine 3s infinite;
        }
      `}</style>
    </>
  )
}

export default App