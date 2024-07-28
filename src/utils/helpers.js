export const truncateString = (str, maxLength = 50) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 3) + "...";
};

export const getMinMaxPrice = (obj) => {
  const priceKeys = [
    "icv",
    "ica",
    "icip",
    "cca",
    "ccv",
    "ccip",
    "tca",
    "tcv",
    "tcip",
  ];

  const prices = Object.fromEntries(
    Object.entries(obj).filter(([key]) => priceKeys.includes(key))
  );

  let minPrice = Infinity;
  let maxPrice = -Infinity;

  for (const [key, value] of Object.entries(prices)) {
    const price = parseInt(value, 10);

    if (price < minPrice) {
      minPrice = price;
    }

    if (price > maxPrice) {
      maxPrice = price;
    }
  }

  return `₹${minPrice} - ₹${maxPrice}`;
};
