import emailjs from 'emailjs-com';

export const sendEmail = (formData) => {
  return fetch('https://formspree.io/f/xwplkdll', { // Replace with your Formspree form ID
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
  .then(response => {
    if (!response.ok) throw new Error('Network response was not ok');
    return response.json();
  });
};