import React, { useState } from 'react';
import ValidationError from './ValidationError';
import validateInput from '../../contactValidations';

const ContactForm = () => {
  const [inputValues, setInputValues] = useState({
    email: '',
    firstName: '',
    lastName: '',
    message: ''
  });

  const [validation, setValidation] = useState({
    errors: {},
    isValid: true
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { errors, isValid } = validateInput(inputValues);

    if (isValid) {
      setValidation({ errors: {}, isValid: true });
    } else {
      setValidation({ errors, isValid });
    }
  };

  return (
    <form className="w-full max-w-lg" onSubmit={handleSubmit} method="POST" noValidate>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
          <label
            htmlFor="grid-first-name"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            First Name
            <input
              type="text"
              placeholder="Jane"
              id="grid-first-name"
              value={inputValues.firstName}
              onChange={(e) => setInputValues({ ...inputValues, firstName: e.target.value })}
              className={`block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 border focus:outline-none focus:bg-white focus:border-gray-500
                          ${validation.errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
            />
          </label>
          <ValidationError error={validation.errors.firstName} />
        </div>
        <div className="w-full md:w-1/2 px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-last-name"
          >
            Last Name
            <input
              type="text"
              placeholder="Doe"
              id="grid-last-name"
              value={inputValues.lastName}
              onChange={(e) => setInputValues({ ...inputValues, lastName: e.target.value })}
              className={`block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 border focus:outline-none focus:bg-white focus:border-gray-500
                          ${validation.errors.lastName ? 'border-red-500' : 'border-gray-200'}`}
            />
          </label>
          <ValidationError error={validation.errors.lastName} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="grid-password"
          >
            E-mail
            <input
              id="email"
              type="email"
              value={inputValues.email}
              onChange={(e) => setInputValues({ ...inputValues, email: e.target.value })}
              className={`block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 border focus:outline-none focus:bg-white focus:border-gray-500
                          ${validation.errors.email ? 'border-red-500' : 'border-gray-200'}`}
            />
          </label>
          <ValidationError error={validation.errors.email} />
        </div>
      </div>
      <div className="flex flex-wrap -mx-3 mb-6">
        <div className="w-full px-3">
          <label
            htmlFor="grid-password"
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
          >
            Message
            <textarea
              id="message"
              value={inputValues.message}
              onChange={(e) => setInputValues({ ...inputValues, message: e.target.value })}
              className={`no-resize block w-full bg-gray-200 text-gray-700 rounded py-3 px-4 mb-3 border focus:outline-none focus:bg-white focus:border-gray-500
                          ${validation.errors.message ? 'border-red-500' : 'border-gray-200'} h-48 resize-none`}
            />
          </label>
          <ValidationError error={validation.errors.message} />
        </div>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3">
          <button
            type="submit"
            className="shadow bg-indigo-600 hover:bg-indigo-700 focus:outline-none text-white font-bold py-2 px-4 rounded"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ContactForm;
