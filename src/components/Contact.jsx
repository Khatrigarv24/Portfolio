import React, { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }))
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically handle form submission
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
    alert('Thank you for your message! I will get back to you soon.')
  }
  
  return (
    <section id="contact" className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        <div data-aos="fade-right">
          <h2 className="text-3xl font-bold text-[#14213D] mb-2">Get In Touch</h2>
          <div className="w-24 h-1 bg-[#b19079] mb-8"></div>
          
          <p className="text-[#14213D] mb-8 text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out to me. I'm always open to discussing new opportunities.
          </p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="100">
              <div className="w-10 h-10 rounded-full bg-[#14213D] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#efebe0]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#14213D] font-semibold mb-1">Email</h3>
                <p className="text-[#14213D] text-sm">your.email@example.com</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="200">
              <div className="w-10 h-10 rounded-full bg-[#14213D] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#efebe0]" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#14213D] font-semibold mb-1">Location</h3>
                <p className="text-[#14213D] text-sm">San Francisco, CA</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4" data-aos="fade-up" data-aos-delay="300">
              <div className="w-10 h-10 rounded-full bg-[#14213D] flex items-center justify-center flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#efebe0]" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
              </div>
              <div>
                <h3 className="text-[#14213D] font-semibold mb-1">Phone</h3>
                <p className="text-[#14213D] text-sm">+1 (123) 456-7890</p>
              </div>
            </div>
          </div>
          
          {/* Social media links */}
          <div className="flex gap-4 mt-10" data-aos="fade-up" data-aos-delay="400">
            <a href="#" className="w-12 h-12 rounded-full bg-[#14213D] flex items-center justify-center text-[#efebe0] hover:bg-[#b19079] transition-all duration-300 hover:rotate-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#14213D] flex items-center justify-center text-[#efebe0] hover:bg-[#b19079] transition-all duration-300 hover:rotate-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" className="w-12 h-12 rounded-full bg-[#14213D] flex items-center justify-center text-[#efebe0] hover:bg-[#b19079] transition-all duration-300 hover:rotate-6">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723 9.99 9.99 0 01-3.127 1.195 4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-8 shadow-md border border-[#14213D]/10" data-aos="fade-left">
          <h3 className="text-2xl font-bold text-[#14213D] mb-6">Send me a message</h3>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="form-group" data-aos="fade-up" data-aos-delay="100">
              <label htmlFor="name" className="block mb-2 text-sm font-medium text-[#14213D]">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#efebe0] border border-[#14213D]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent text-[#14213D]"
                placeholder="Your name"
              />
            </div>
            
            <div className="form-group" data-aos="fade-up" data-aos-delay="200">
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-[#14213D]">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-[#efebe0] border border-[#14213D]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent text-[#14213D]"
                placeholder="your.email@example.com"
              />
            </div>
            
            <div className="form-group" data-aos="fade-up" data-aos-delay="300">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-[#14213D]">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-3 bg-[#efebe0] border border-[#14213D]/20 rounded-md focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent text-[#14213D]"
                placeholder="Your message here..."
              />
            </div>
            
            <button
              type="submit"
              className="w-full px-6 py-4 bg-[#b19079] text-[#14213D] rounded-md hover:bg-[#14213D] hover:text-[#efebe0] transition-all font-medium"
              data-aos="fade-up" 
              data-aos-delay="400"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact