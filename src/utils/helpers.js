export const truncateString = (str, maxLength = 50) => {
  if (str.length <= maxLength) {
    return str;
  }
  return str.slice(0, maxLength - 3) + "...";
};

export const getMinMaxPrice = (fees) => {
  console.log('feesssss',fees);
  const feesArray = JSON.parse(JSON.stringify(fees));

  const allFees = feesArray
    .map(f => f.formats.map(fmt => fmt.fee))
    .reduce((acc, val) => acc.concat(val), [])
    .filter(f => f !== null);

  if (allFees.length > 0) {
    const minFee = Math.min(...allFees);
    const maxFee = Math.max(...allFees);

    return `₹${minFee} - ₹${maxFee}`;
  }
  else {
    return "--"
  }
};

export const getServiceFormats = (obj) => {
  let serviceOption = [];

  if (obj.icv !== "" || obj.ica !== "" || obj.icip !== "") {
    let formats = [];
    if (obj.icv !== "") {
      formats.push({ format: "Video Call", price: parseInt(obj.icv) });
    }
    if (obj.ica !== "") {
      formats.push({ format: "Audio Call", price: parseInt(obj.ica) });
    }
    if (obj.icip !== "") {
      formats.push({ format: "In Person-Call", price: parseInt(obj.icip) });
    }
    serviceOption.push({
      service: "Individual Counselling",
      formats: formats,
    });
  }

  if (obj.cca !== "" || obj.ccv !== "" || obj.ccip !== "") {
    let formats = [];
    let prices = [];
    if (obj.ccv !== "") {
      formats.push({ format: "Video Call", price: parseInt(obj.ccv) });
    }
    if (obj.cca !== "") {
      formats.push({ format: "Audio Call", price: parseInt(obj.cca) });
    }
    if (obj.ccip !== "") {
      formats.push({ format: "In Person-Call", price: parseInt(obj.ccip) });
    }
    serviceOption.push({
      service: "Couple Counselling",
      formats: formats,
    });
  }

  if (obj.tca !== "" || obj.tcv !== "" || obj.tcip !== "") {
    let formats = [];
    let prices = [];
    if (obj.tcv !== "") {
      formats.push({ format: "Video Call", price: parseInt(obj.tcv) });
    }
    if (obj.tca !== "") {
      formats.push({ format: "Audio Call", price: parseInt(obj.tca) });
    }
    if (obj.tcip !== "") {
      formats.push({ format: "In Person-Call", price: parseInt(obj.tcip) });
    }
    serviceOption.push({
      service: "Teen Counselling",
      formats: formats,
    });
  }

  return serviceOption;
};
