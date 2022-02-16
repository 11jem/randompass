const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const numbers = '0123456789';
const symbols = '~!@#$%^&*_+=-';

const finalizePassword = (length, chars) => {
  let password = '';

  for (let i = 0; i < length; i++) {
    password += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return password;
};

const createPassword = (length = 8, hasNumbers = true, hasSymbols = true) => {
  let chars = letters;

  if (hasNumbers) chars += numbers;
  if (hasSymbols) chars += symbols;

  return finalizePassword(length, chars);
};

module.exports = createPassword;
