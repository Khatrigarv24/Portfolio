import React, { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [focused, setFocused] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  // Refs for magnetic effect
  const socialButtons = useRef([]);
  const submitButton = useRef(null);
  
  // Typewriter effect for heading
  const [displayText, setDisplayText] = useState("");
  const headingText = "Let's Create Something Amazing Together";
  
  // Implement magnetic button effect
  useEffect(() => {
    const buttons = [...socialButtons.current, submitButton.current].filter(Boolean);
    
    const handleMouseMove = (e, button) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      // Move button slightly towards cursor (magnetic effect)
      button.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
    };
    
    const handleMouseLeave = (button) => {
      button.style.transform = 'translate(0, 0)';
    };
    
    buttons.forEach(button => {
      if (button) {
        button.addEventListener('mousemove', (e) => handleMouseMove(e, button));
        button.addEventListener('mouseleave', () => handleMouseLeave(button));
      }
    });
    
    return () => {
      buttons.forEach(button => {
        if (button) {
          button.removeEventListener('mousemove', handleMouseMove);
          button.removeEventListener('mouseleave', handleMouseLeave);
        }
      });
    };
  }, []);
  
  useEffect(() => {
    if (displayText.length < headingText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(headingText.slice(0, displayText.length + 1));
      }, 100);
      
      return () => clearTimeout(timeout);
    }
  }, [displayText, headingText]);
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    setIsSubmitting(true);
    
    // Simulate form submission with animation
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form
      setFormData({ name: '', email: '', message: '' })
      
      // Reset submission state after showing success message
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }, 1000);
  }
  
  return (
    <section id="contact" className="py-20 relative">
      {/* Animated background shapes */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-20 -left-20 w-40 h-40 bg-[#b19079]/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-40 right-10 w-60 h-60 bg-[#14213D]/5 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start relative z-10">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-[#14213D] mb-2">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#b19079] mb-8 relative overflow-hidden">
            {/* Animated shimmer effect */}
            <div className="absolute inset-0 w-full h-full bg-[#b19079]/70 -translate-x-full animate-shimmer"></div>
          </div>
          
          {/* Typewriter effect */}
          <p className="text-[#14213D] mb-8 text-lg font-light">
            <span className="block text-2xl font-medium mb-2">{displayText}</span>
            <span className={`inline-block w-1 h-5 bg-[#b19079] ml-1 align-middle ${displayText.length === headingText.length ? 'animate-blink' : 'opacity-0'}`}></span>
          </p>
          
          <div className="space-y-6">
            <div 
              className="flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg" 
              data-aos="fade-up" 
              data-aos-delay="100"
            >
              <div className="w-10 h-10 rounded-full bg-[#14213D] flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#efebe0]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#14213D] font-semibold mb-1">Email</h3>
                <p className="text-[#14213D] text-sm group">
                  <a href="mailto:your.email@example.com" className="relative overflow-hidden inline-block">
                    garv3144@gmail.com
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#b19079] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
                  </a>
                </p>
              </div>
            </div>
            
            <div 
              className="flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg" 
              data-aos="fade-up" 
              data-aos-delay="200"
            >
              <div className="w-10 h-10 rounded-full bg-[#14213D] flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#efebe0]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#14213D] font-semibold mb-1">Location</h3>
                <p className="text-[#14213D] text-sm">Chennai, TN</p>
              </div>
            </div>
            
            <div 
              className="flex items-start gap-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-md p-4 rounded-lg" 
              data-aos="fade-up" 
              data-aos-delay="300"
            >
              <div className="w-10 h-10 rounded-full bg-[#14213D] flex items-center justify-center flex-shrink-0 transition-all duration-500 hover:rotate-12">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#efebe0]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#14213D] font-semibold mb-1">Phone</h3>
                <p className="text-[#14213D] text-sm">+91 9940640548</p>
              </div>
            </div>
          </div>
          
          {/* Social media links with hover effects */}
          <div className="flex gap-4 mt-10" data-aos="fade-up" data-aos-delay="400">
            <a 
              href="#" 
              ref={el => socialButtons.current[0] = el}
              className="group w-12 h-12 rounded-full bg-[#14213D] flex items-center justify-center text-[#efebe0] hover:bg-[#b19079] transition-all duration-300 hover:scale-110 relative overflow-hidden interactive"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#b19079] to-[#14213D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shimmer-x"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a 
              href="#" 
              ref={el => socialButtons.current[1] = el}
              className="group w-12 h-12 rounded-full bg-[#14213D] flex items-center justify-center text-[#efebe0] hover:bg-[#b19079] transition-all duration-300 hover:scale-110 relative overflow-hidden interactive"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#b19079] to-[#14213D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shimmer-x"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a 
              href="#" 
              ref={el => socialButtons.current[2] = el}
              className="group w-12 h-12 rounded-full bg-[#14213D] flex items-center justify-center text-[#efebe0] hover:bg-[#b19079] transition-all duration-300 hover:scale-110 relative overflow-hidden interactive"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#14213D] via-[#b19079] to-[#14213D] opacity-0 group-hover:opacity-100 transition-opacity duration-500 group-hover:animate-shimmer-x"></div>
              <svg className="w-5 h-5 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md border border-[#14213D]/10 relative group" data-aos="fade-left">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-[#14213D] to-[#b19079] rounded-lg blur opacity-0 group-hover:opacity-10 transition duration-1000"></div>
          
          <h3 className="text-2xl font-bold text-[#14213D] mb-6 relative">Send me a message</h3>
          
          {/* Success message with animation */}
          {isSubmitted && (
            <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6 animate-fade-in">
              <div className="flex">
                <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group" data-aos="fade-up" data-aos-delay="100">
              <label 
                htmlFor="name" 
                className={`block mb-2 text-sm font-medium transition-all duration-300 ${
                  focused === 'name' ? 'text-[#b19079]' : 'text-[#14213D]'
                }`}
              >
                Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full px-4 py-3 bg-[#efebe0] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent text-[#14213D] transition-all duration-300 ${
                    focused === 'name' ? 'border-[#b19079]' : 'border-[#14213D]/20'
                  }`}
                  placeholder="Your name"
                />
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#b19079] transition-all duration-300 rounded-full ${
                    focused === 'name' ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                ></div>
              </div>
            </div>
            
            <div className="form-group" data-aos="fade-up" data-aos-delay="200">
              <label 
                htmlFor="email"
                className={`block mb-2 text-sm font-medium transition-all duration-300 ${
                  focused === 'email' ? 'text-[#b19079]' : 'text-[#14213D]'
                }`}
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                  required
                  className={`w-full px-4 py-3 bg-[#efebe0] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent text-[#14213D] transition-all duration-300 ${
                    focused === 'email' ? 'border-[#b19079]' : 'border-[#14213D]/20'
                  }`}
                  placeholder="your.email@example.com"
                />
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#b19079] transition-all duration-300 rounded-full ${
                    focused === 'email' ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                ></div>
              </div>
            </div>
            
            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
              <label 
                htmlFor="message"
                className={`block mb-2 text-sm font-medium transition-all duration-300 ${
                  focused === 'message' ? 'text-[#b19079]' : 'text-[#14213D]'
                }`}
              >
                Message
              </label>
              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                  required
                  rows={4}
                  className={`w-full px-4 py-3 bg-[#efebe0] border rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent text-[#14213D] transition-all duration-300 ${
                    focused === 'message' ? 'border-[#b19079]' : 'border-[#14213D]/20'
                  }`}
                  placeholder="Your message here..."
                />
                <div 
                  className={`absolute bottom-0 left-0 h-0.5 bg-[#b19079] transition-all duration-300 rounded-full ${
                    focused === 'message' ? 'w-full opacity-100' : 'w-0 opacity-0'
                  }`}
                ></div>
              </div>
            </div>
            
            <button
              ref={submitButton}
              type="submit"
              disabled={isSubmitting}
              className={`relative w-full px-6 py-4 bg-[#b19079] text-[#14213D] rounded-md hover:bg-[#14213D] hover:text-[#efebe0] transition-all font-medium overflow-hidden group interactive ${
                isSubmitting ? 'opacity-90 cursor-not-allowed' : 'hover:-translate-y-0.5 hover:shadow-lg'
              }`}
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              {/* Button background animation */}
              <span className="absolute inset-0 w-full h-full bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></span>
              
              {/* Submit button content with loading state */}
              <div className="relative z-10 flex items-center justify-center">
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </div>
            </button>
          </form>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        @keyframes shimmer-x {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(-10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        
        .animate-shimmer-x {
          animation: shimmer-x 3s infinite;
          background-size: 200% 100%;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s step-start infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.5s ease-out forwards;
        }
      `}</style>
    </section>
  )
}

export default Contact