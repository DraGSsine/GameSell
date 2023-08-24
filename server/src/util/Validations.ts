import Joi from "joi";

// Function to validate email
export const EmailValidate = (email: string) => {
  // Define the email validation schema using Joi
  const emailSchema = Joi.object({
    email: Joi.string().email().min(6).required(),
  });

  // Validate the provided email against the schema
  const validation = emailSchema.validate({ email });

  // Return the validation result
  return validation;
};

// Function to validate password
export const PasswordValidate = (password: string) => {
  // Define the password validation schema using Joi
  const passwordSchema = Joi.object({
    password: Joi.string().min(6).required(),
  });

  // Validate the provided password against the schema
  const validation = passwordSchema.validate({ password });

  // Return the validation result
  return validation;
};
