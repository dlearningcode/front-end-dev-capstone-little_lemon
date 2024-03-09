const timesByDate = {};

export const fetchAPI = (reservationDate) => {
  // If we have already generated times for this date, return them
  if (timesByDate[reservationDate]) {
    return timesByDate[reservationDate];
  }

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const times = availableTimes.filter((time) => Math.random() > 0.5);

  // Store the generated times in timesByDate so we can reuse them if the same date is selected again
  timesByDate[reservationDate] = times;
  console.log("Date: ", reservationDate, "Times: ", times);

  return times;
};

// This function is used to submit the form data to the API
export const submitAPI = (formData) => {
  if (Object.keys(formData).length > 0) {
    return true;
  }
  return false;
};
