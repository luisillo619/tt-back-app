/* eslint-disable prettier/prettier */
export function isEmail(email: string): boolean {
  // Regex pattern for email validation
  const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return pattern.test(email);
}

export function isStrongPassword(password: string): boolean {
  if (password.length < 8) {
    return false;
  }
  const lowercasePattern = /[a-z]/;
  const uppercasePattern = /[A-Z]/;
  const digitPattern = /[0-9]/;
  const specialCharPattern = /[^A-Za-z0-9]/;

  if (!lowercasePattern.test(password)) {
    return false;
  }

  if (!uppercasePattern.test(password)) {
    return false;
  }

  if (!digitPattern.test(password)) {
    return false;
  }

  if (!specialCharPattern.test(password)) {
    return false;
  }

  return true;
}
