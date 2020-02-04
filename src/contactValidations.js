const validateEmail = (email) => {
  const EMAIL_REGEX = /\S+@\S+\.\S+/;
  return EMAIL_REGEX.test(email);
};

const validateInput = (inputFields) => {
  const errors = {};

  if (!inputFields.firstName) {
    errors.firstName = 'Please fill out this field.';
  }

  if (!inputFields.lastName) {
    errors.lastName = 'Please fill out this field.';
  }

  if (!inputFields.message) {
    errors.message = 'Please fill out this field.';
  }

  if (!validateEmail(inputFields.email)) {
    errors.email = 'Please fill out valid email address';
  }

  return { errors, isValid: !Object.keys(errors).length };
};

export default validateInput;
