import React, { useState, useEffect, useRef } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Garv Khatri";
  const [showCursor, setShowCursor] = useState(true);
  const [animationComplete, setAnimationComplete] = useState(false);
  const sectionRef = useRef(null);

  // Typing animation effect
  useEffect(() => {
    if (displayText.length < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(fullText.slice(0, displayText.length + 1));
      }, 150); // typing speed

      return () => clearTimeout(timeout);
    } else {
      setAnimationComplete(true);
      // Create blinking cursor effect after typing is complete
      const cursorInterval = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [displayText]);

  // Scroll reveal effect for tech icons
  useEffect(() => {
    const techIcons = document.querySelectorAll(".tech-icon");

    if (animationComplete && techIcons.length > 0) {
      techIcons.forEach((icon, i) => {
        setTimeout(() => {
          icon.classList.add("anim-fade-in");
        }, 300 * i);
      });
    }
  }, [animationComplete]);

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative py-12 md:py-20 bg-[#efebe0] min-h-[90vh] flex items-center overflow-hidden"
    >
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-3/4 h-3/4">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute right-0 top-0 opacity-5">
          <path fill="#14213D" d="M43.7,-57.2C56.9,-46.3,68.1,-32.5,72.5,-16.4C77,-0.3,74.7,18,66.9,33.8C59,49.5,45.6,62.8,30.1,68.8C14.5,74.8,-3.2,73.5,-22.7,69.4C-42.2,65.2,-63.6,58.1,-72.2,43.2C-80.8,28.3,-76.7,5.7,-69.8,-13.4C-62.9,-32.4,-53.3,-47.9,-40.2,-58.7C-27.1,-69.6,-10.6,-75.8,3.5,-80.2C17.5,-84.5,30.5,-68,43.7,-57.2Z" transform="translate(100 100)" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="absolute left-0 bottom-0 opacity-5">
          <path fill="#b19079" d="M48.2,-58.8C62.7,-48.4,74.9,-32.7,78.1,-15.2C81.4,2.4,75.6,21.9,65.5,37.9C55.3,53.9,40.8,66.5,24.1,72.5C7.4,78.5,-11.4,78,-27.6,71C-43.8,64.1,-57.5,50.7,-66,34.3C-74.4,17.8,-77.7,-1.6,-73.2,-19.2C-68.8,-36.8,-56.6,-52.6,-41.8,-62.8C-27.1,-73,-13.5,-77.7,1.9,-80.1C17.4,-82.4,34.7,-72.5,48.2,-58.8Z" transform="translate(100 100)" />
        </svg>
      </div>

      {/* Grid Lines Overlay for Visual Interest */}
      <div className="absolute inset-0 grid grid-cols-6 opacity-10 pointer-events-none">
        <div className="border-r border-[#14213D]/20"></div>
        <div className="border-r border-[#14213D]/20"></div>
        <div className="border-r border-[#14213D]/20"></div>
        <div className="border-r border-[#14213D]/20"></div>
        <div className="border-r border-[#14213D]/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">
          {/* Left Side - Content */}
          <div className="w-full md:w-7/12 z-10 order-2 md:order-1">
            {/* Name with animated border */}
            <div className="relative inline-block mb-6">
              <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#14213D]">
                <span className="text-[#b19079] relative">
                  {displayText}
                  <span className={`${showCursor ? "opacity-100" : "opacity-0"} transition-opacity`}>|</span>
                </span>
              </h1>
              <div className="absolute -bottom-3 left-0 w-3/4 h-1 bg-[#b19079]"></div>
              <div className="absolute -bottom-3 left-0 w-full h-1 bg-[#b19079]/30"></div>
            </div>

            {/* Profession with staggered reveal */}
            <h2 className={`text-xl sm:text-2xl md:text-3xl mb-6 font-light text-[#14213D] tracking-wide transition-all duration-500 transform ${
                animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}>
              <span className="font-medium">Web Developer</span> & 
              <span className="relative inline-block mx-2">
                <span className="relative z-10 font-medium">UI/UX Designer</span>
                <span className="absolute -bottom-1 left-0 w-full h-3 bg-[#b19079]/20 -z-10"></span>
              </span>
            </h2>

            <p className={`text-lg text-[#14213D]/80 mb-8 max-w-xl transition-all duration-500 delay-200 transform ${
                animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}>
              I craft clean, minimal websites with modern technologies. Focused on
              creating user-friendly experiences with elegant designs that balance both
              form and function.
            </p>

            {/* CTA Buttons with hover animation */}
            <div className={`flex flex-wrap gap-5 mb-8 transition-all duration-500 delay-300 transform ${
                animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}>
              <a
                href="#contact"
                className="group relative px-8 py-3 bg-[#14213D] text-[#efebe0] rounded-md font-medium overflow-hidden shadow-md hover:shadow-lg"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#14213D]">Get in touch</span>
                <span className="absolute inset-0 bg-[#b19079] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
              <a
                href="#projects"
                className="group relative px-8 py-3 bg-transparent border border-[#14213D] text-[#14213D] rounded-md font-medium overflow-hidden shadow-sm hover:shadow-md"
              >
                <span className="relative z-10 transition-colors duration-300 group-hover:text-[#efebe0]">View my work</span>
                <span className="absolute inset-0 bg-[#14213D] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
              </a>
            </div>

            {/* Tech stack with enhanced design */}
            <div className={`hidden md:block transition-all duration-500 delay-500 transform ${
                animationComplete ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}>
              <div className="flex items-center mb-3 space-x-2">
                <div className="w-12 h-[1px] bg-[#14213D]/30"></div>
                <span className="text-xs uppercase text-[#14213D] tracking-wider font-medium">Tech Stack</span>
              </div>
              <div className="flex gap-4 flex-wrap">
                {/* Tech logos with hover effects */}
                <div className="tech-icon group relative opacity-0">
                  <div className="w-10 h-10 bg-[#14213D] rounded shadow-md flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24">
                      <g fill="#efebe0">
                        <path d="M21.718 12c0-1.429-1.339-2.681-3.467-3.5c.029-.18.077-.37.1-.545c.217-2.058-.273-3.543-1.379-4.182c-1.235-.714-2.983-.186-4.751 1.239C10.45 3.589 8.7 3.061 7.468 3.773c-1.107.639-1.6 2.124-1.379 4.182c.018.175.067.365.095.545c-2.127.819-3.466 2.071-3.466 3.5s1.339 2.681 3.466 3.5c-.028.18-.077.37-.095.545c-.218 2.058.272 3.543 1.379 4.182c.376.213.803.322 1.235.316a6 6 0 0 0 3.514-1.56a6 6 0 0 0 3.515 1.56a2.44 2.44 0 0 0 1.236-.316c1.106-.639 1.6-2.124 1.379-4.182c-.019-.175-.067-.365-.1-.545c2.132-.819 3.471-2.071 3.471-3.5m-6.01-7.548a1.5 1.5 0 0 1 .76.187c.733.424 1.055 1.593.884 3.212c-.012.106-.043.222-.058.33q-1.263-.365-2.57-.523a16 16 0 0 0-1.747-1.972a4.9 4.9 0 0 1 2.731-1.234m-7.917 8.781c.172.34.335.68.529 1.017s.395.656.6.969a14 14 0 0 1-1.607-.376a14 14 0 0 1 .478-1.61m-.479-4.076a14 14 0 0 1 1.607-.376q-.308.468-.6.969c-.195.335-.357.677-.529 1.017q-.286-.79-.478-1.61M8.3 12a19 19 0 0 1 .888-1.75q.496-.852 1.076-1.65c.619-.061 1.27-.1 1.954-.1q1.025.001 1.952.1a20 20 0 0 1 1.079 1.654q.488.851.887 1.746a19 19 0 0 1-1.953 3.403a19.2 19.2 0 0 1-3.931 0a20 20 0 0 1-1.066-1.653A19 19 0 0 1 8.3 12m7.816 2.25c.2-.337.358-.677.53-1.017q.286.791.478 1.611a15 15 0 0 1-1.607.376c.202-.314.404-.635.597-.97zm.53-3.483c-.172-.34-.335-.68-.53-1.017a20 20 0 0 0-.6-.97q.814.142 1.606.376a14 14 0 0 1-.478 1.611zM12.217 6.34q.6.563 1.13 1.193q-.555-.031-1.129-.033c-.574-.002-.76.013-1.131.033q.53-.63 1.13-1.193m-4.249-1.7a1.5 1.5 0 0 1 .76-.187a4.9 4.9 0 0 1 2.729 1.233A16 16 0 0 0 9.71 7.658q-1.306.158-2.569.524c-.015-.109-.047-.225-.058-.331c-.171-1.619.151-2.787.885-3.211M3.718 12c0-.9.974-1.83 2.645-2.506c.218.857.504 1.695.856 2.506c-.352.811-.638 1.65-.856 2.506C4.692 13.83 3.718 12.9 3.718 12m4.25 7.361c-.734-.423-1.056-1.593-.885-3.212c.011-.106.043-.222.058-.331q1.262.365 2.564.524a16.4 16.4 0 0 0 1.757 1.982c-1.421 1.109-2.714 1.488-3.494 1.037m3.11-2.895q.56.033 1.14.034q.58-.001 1.139-.034a14 14 0 0 1-1.14 1.215a14 14 0 0 1-1.139-1.215m5.39 2.895c-.782.451-2.075.072-3.5-1.038a16 16 0 0 0 1.757-1.981a16.4 16.4 0 0 0 2.565-.523c.015.108.046.224.058.33c.175 1.619-.148 2.789-.88 3.212m1.6-4.854A16.6 16.6 0 0 0 17.216 12q.529-1.22.856-2.507c1.671.677 2.646 1.607 2.646 2.507s-.975 1.83-2.646 2.507z" />
                        <path d="M12.215 13.773a1.792 1.792 0 1 0-1.786-1.8v.006a1.787 1.787 0 0 0 1.786 1.794" />
                      </g>
                    </svg>
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#14213D] text-[#efebe0] text-xs py-1 px-2 rounded opacity-0 transition-opacity group-hover:opacity-100">React</div>
                </div>
                
                <div className="tech-icon group relative opacity-0">
                  <div className="w-10 h-10 bg-[#14213D] rounded shadow-md flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#efebe0"
                        d="M12.445.002a45.5 45.5 0 0 0-5.252 8.146a9 9 0 0 1-.555-.53a28 28 0 0 0-1.205-1.542a8.8 8.8 0 0 0-1.251 2.12a20.7 20.7 0 0 0-1.448 5.88a8.9 8.9 0 0 0 .338 3.468q1.968 5.22 7.445 6.337q4.583.657 8.097-2.312q4.015-3.885 2.047-9.132a33.3 33.3 0 0 0-2.988-5.59A91 91 0 0 0 12.615.053a.22.22 0 0 0-.17-.051m-.336 3.906a51 51 0 0 1 4.794 6.552q.672 1.15 1.108 2.41q.91 3.579-1.951 5.904q-2.768 1.947-6.072 1.156q-3.564-1.105-4.121-4.794a5.1 5.1 0 0 1 .242-2.266q.536-1.361 1.3-2.601l1.446-2.121a397 397 0 0 0 3.254-4.24"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#14213D] text-[#efebe0] text-xs py-1 px-2 rounded opacity-0 transition-opacity group-hover:opacity-100">Hono</div>
                </div>
                
                <div className="tech-icon group relative opacity-0">
                  <div className="w-10 h-10 bg-[#14213D] rounded shadow-md flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#efebe0"
                        d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47c1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.23 0L10 19.65c-.08-.03-.16-.04-.21-.01c-.53.3-.63.36-1.12.51c-.12.04-.31.11.07.32l2.48 1.47q.36.21.78.21t.78-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.78-.2M14 8c-2.12 0-3.39.89-3.39 2.39c0 1.61 1.26 2.08 3.3 2.28c2.43.24 2.62.6 2.62 1.08c0 .83-.67 1.18-2.23 1.18c-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22c0 1.24.68 2.74 3.94 2.74c2.35 0 3.7-.93 3.7-2.55c0-1.61-1.08-2.03-3.37-2.34c-2.31-.3-2.54-.46-2.54-1c0-.45.2-1.05 1.91-1.05c1.5 0 2.09.33 2.32 1.36c.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07c.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#14213D] text-[#efebe0] text-xs py-1 px-2 rounded opacity-0 transition-opacity group-hover:opacity-100">Node.js</div>
                </div>

                <div className="tech-icon group relative opacity-0">
                  <div className="w-10 h-10 bg-[#14213D] rounded shadow-md flex items-center justify-center transform transition-all duration-300 group-hover:rotate-6 group-hover:-translate-y-1 group-hover:shadow-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#efebe0"
                        d="M13.74 4.23c-.84-1-1.57-2-1.71-2.22H12c-.14.21-.87 1.22-1.71 2.22c-7.2 9.19 1.14 15.39 1.14 15.39l.07.05c.06.95.22 2.33.22 2.33h.62s.15-1.37.21-2.33l.07-.06s8.32-6.19 1.14-15.38M12 19.48a1.77 1.77 0 0 1-.64-.09c0-.03.01-.04.01-.06c.06-.15.83-2.31.83-2.31c.01-.03.03-.08.06-.08c.03 0 .05.05.05.08c0 0 .77 2.15.84 2.3c.01.02.01.03.01.06c-.19.07-.45.1-.66.1"
                      />
                    </svg>
                  </div>
                  <div className="absolute -bottom-5 left-1/2 transform -translate-x-1/2 bg-[#14213D] text-[#efebe0] text-xs py-1 px-2 rounded opacity-0 transition-opacity group-hover:opacity-100">MongoDB</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Profile Image with Unique Design */}
          <div className="w-full md:w-5/12 order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Main circular container with gradient border */}
              <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-full bg-[#14213D] p-1 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#14213D] via-[#b19079] to-[#14213D] rounded-full animate-spin-slow opacity-70"></div>
                <div className="absolute inset-[3px] bg-[#14213D] rounded-full"></div>
                
                {/* Profile image */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                  <img
                    src="/passport_photo-removebg-preview.png"
                    alt="Portrait"
                    className="w-full h-full object-contain -ml-1 mt-4 scale-135 transform-gpu"
                  />
                </div>
              </div>
              
              {/* Floating decoration elements */}
              <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-dashed border-[#b19079]/30 rounded-full animate-spin-reverse-slow"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-[#14213D]/30 rounded-full"></div>
              
              {/* Geometric accents */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-6 h-6 bg-[#14213D]/10 rotate-45"></div>
              <div className="absolute -left-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-1.5">
                <div className="w-2 h-2 bg-[#b19079] rounded-full"></div>
                <div className="w-2 h-2 bg-[#b19079]/70 rounded-full"></div>
                <div className="w-2 h-2 bg-[#b19079]/40 rounded-full"></div>
              </div>
              
              {/* Pattern overlay */}
              <div className="absolute inset-0 rounded-full opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDYwIDYwIj48ZyBmaWxsPSJub25lIiBzdHJva2U9IiNCMTkwNzkiIG9wYWNpdHk9IjAuNSI+PHBhdGggZD0iTTE1LDE1IEw0NSw0NSI+PC9wYXRoPjxwYXRoIGQ9Ik00NSwxNSBMMTUsNDUiPjwvcGF0aD48L2c+PC9zdmc+')]"></div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Add some CSS keyframes for the animations */}
      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin-reverse-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 15s linear infinite;
        }
        
        .animate-spin-reverse-slow {
          animation: spin-reverse-slow 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Hero;
