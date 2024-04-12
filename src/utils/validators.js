export const isValidMail = (email) => {
  let emailRegex = /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/;
  return !emailRegex.test(email) ? false : true;
};
