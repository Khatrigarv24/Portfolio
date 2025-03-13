import React, { useState } from 'react';
import { sendEmail } from '../services/emailService';
import { validateForm } from '../utils/validation';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm(formData);
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);
    try {
      await sendEmail(formData);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      setError('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => {
        setIsSubmitted(false);
      }, 4000);
    }
  };

  return (
    <section id="contact" className="py-20">
      <h2 className="text-3xl font-bold mb-6 text-[#14213D]">Get In Touch</h2>
      {error && <div className="text-red-500 mb-4">{error}</div>}
      {isSubmitted && (
        <div className="bg-green-50 border border-green-200 text-green-800 rounded-lg p-4 mb-6">
          Thank you for your message! I'll get back to you soon.
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-[#14213D]">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#14213D]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent bg-[#efebe0] text-[#14213D]"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-[#14213D]">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-[#14213D]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent bg-[#efebe0] text-[#14213D]"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-2 text-[#14213D]">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            rows={4}
            className="w-full px-4 py-2 border border-[#14213D]/20 rounded focus:outline-none focus:ring-2 focus:ring-[#b19079] focus:border-transparent bg-[#efebe0] text-[#14213D]"
            placeholder="Your message here..."
          />
        </div>
        <button
          type="submit"
          disabled={isSubmitting}
          className={`group relative w-full px-6 py-3 overflow-hidden ${
            isSubmitting 
              ? 'bg-[#14213D]/50 text-[#efebe0] cursor-not-allowed' 
              : 'bg-[#14213D] text-[#efebe0] hover:bg-[#b19079] hover:text-[#14213D] transition-all duration-300'
          } rounded-md font-medium`}
        >
          <span className="relative z-10">
            {isSubmitting ? (
              <div className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Sending...
              </div>
            ) : (
              "Send Message"
            )}
          </span>
          {!isSubmitting && (
            <span className="absolute inset-0 bg-[#b19079] transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
          )}
        </button>
      </form>
    </section>
  );
};

export default Contact;