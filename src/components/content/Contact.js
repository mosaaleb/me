import React from 'react';
import ContactForm from './ContactForm';

const Contact = () => (
  <div className="py-4">
    <h3
      id="contact"
      className="font-bold text-4xl text-indigo-600 border-b inline-block border-dashed border-gray-500"
    >
      Contact Me
    </h3>
    <div className="py-5">
      <h5 className="font-bold text-2xl pb-5">How Can I help?</h5>
      <ContactForm />
    </div>
  </div>
);

export default Contact;
