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

export const convertTo24HourFormat = (time) => {
  const [timePart, modifier] = time.split(/(am|pm)/i);
  let [hours, minutes] = timePart.trim().split(":");

  if (modifier.toLowerCase() === "pm" && hours !== "12") {
    hours = String(parseInt(hours, 10) + 12);
  } else if (modifier.toLowerCase() === "am" && hours === "12") {
    hours = "00";
  }

  return `${hours.padStart(2, "0")}:${minutes}`;
};

export const convertTo12HourFormat = (time) => {
  const [hours, minutes] = time.split(":");
  const hour = parseInt(hours, 10);
  const suffix = hour >= 12 ? "pm" : "am";
  const adjustedHour = hour % 12 || 12;
  return `${adjustedHour}:${minutes}${suffix}`;
};

export const generateHourlyIntervals = (open, close) => {
  const intervals = [];
  let openTime = new Date(`1970-01-01T${convertTo24HourFormat(open)}`);
  const closeTime = new Date(`1970-01-01T${convertTo24HourFormat(close)}`);

  while (openTime < closeTime) {
    const nextTime = new Date(openTime);
    nextTime.setHours(openTime.getHours() + 1);

    intervals.push({
      open: openTime.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
      close: nextTime.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      }),
    });

    openTime = nextTime;
  }

  return intervals;
};

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString("en-GB"); 
};