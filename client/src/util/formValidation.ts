import { FormValidationErrorParams, FormValidationParams } from "@/types/types";

export const formValidation = (userInfo: FormValidationParams) => {
  const { email, password, confirmePassword } = userInfo;

  const errors: FormValidationErrorParams = {};

  // Validate email
  if (!email) {
    errors.emailMessage = "Email is required.";
  } else if (!isValidEmail(email)) {
    errors.emailMessage = "Email is invalid.";
  }

  // Validate password
  if (!password) {
    errors.passwordMessage = "Password is required.";
  } else if (password.length < 6) {
    errors.passwordMessage = "Password must be at least 6 characters long.";
  }

  // Validate confirmPassword
  if (!confirmePassword) {
    errors.confirmePasswordMessage = "Confirm Password is required.";
  } else if (confirmePassword !== password) {
    errors.confirmePasswordMessage = "Passwords do not match.";
  }

  return errors;
};

// Helper function to validate email format
const isValidEmail = (email: string) => {
  // Regular expression to validate email format
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const resetPasswordValidation = (userInfo: {password:string,confirmePassword:string}) => {
  const { password, confirmePassword } = userInfo;

  const errors: FormValidationErrorParams = {};

  // Validate password
  if (!password) {
    errors.passwordMessage = "Password is required.";
  } else if (password.length < 6) {
    errors.passwordMessage = "Password must be at least 6 characters long.";
  }

  // Validate confirmPassword
  if (!confirmePassword) {
    errors.confirmePasswordMessage = "Confirm Password is required.";
  } else if (confirmePassword !== password) {
    errors.confirmePasswordMessage = "Passwords do not match.";
  }

  return errors;
};