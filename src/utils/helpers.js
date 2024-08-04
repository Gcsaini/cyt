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

export const getServiceFormats = (obj) => {
  let serviceOption = [];

  if (obj.icv !== "" || obj.ica !== "" || obj.icip !== "") {
    let formats = [];
    if (obj.icv !== "") {
      formats.push("Video Call");
    }
    if (obj.ica !== "") {
      formats.push("Audio Call");
    }
    if (obj.icip !== "") {
      formats.push("In Person-Call");
    }
    serviceOption.push({ service: "Individual Counselling", formats: formats });
  }

  if (obj.cca !== "" || obj.ccv !== "" || obj.ccip !== "") {
    let formats = [];
    if (obj.ccv !== "") {
      formats.push("Video Call");
    }
    if (obj.cca !== "") {
      formats.push("Audio Call");
    }
    if (obj.ccip !== "") {
      formats.push("In Person-Call");
    }
    serviceOption.push({ service: "Couple Counselling", formats: formats });
  }

  if (obj.tca !== "" || obj.tcv !== "" || obj.tcip !== "") {
    let formats = [];
    if (obj.tcv !== "") {
      formats.push("Video Call");
    }
    if (obj.tca !== "") {
      formats.push("Audio Call");
    }
    if (obj.tcip !== "") {
      formats.push("In Person-Call");
    }
    serviceOption.push({ service: "Teen Counselling", formats: formats });
  }

  return serviceOption;
};
