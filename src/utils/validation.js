import { useState } from 'react';

export const validateName = (name) => {
  return name.trim().length > 0;
};

export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validateMessage = (message) => {
  return message.trim().length > 0;
};

export const validateForm = (formData) => {
  const { name, email, message } = formData;

  if (!name.trim()) {
    return 'Name is required.';
  }

  if (!email.trim()) {
    return 'Email is required.';
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return 'Invalid email address.';
  }

  if (!message.trim()) {
    return 'Message is required.';
  }

  return null;
};