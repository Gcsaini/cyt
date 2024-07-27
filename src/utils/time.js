export const getAge = (birthDateString) => {
  const birthDate = new Date(birthDateString);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();
  const dayDifference = today.getDate() - birthDate.getDate();

  if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
    age--;
  }

  return age;
};

export const getDateDifference = (dateString) => {
  const givenDate = new Date(dateString);

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const differenceInMillis = givenDate - today;
  const differenceInDays = differenceInMillis / (1000 * 60 * 60 * 24);

  return parseInt(differenceInDays);
};
