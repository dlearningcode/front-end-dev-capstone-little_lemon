const timesByDate = {};

export const fetchAPI = (reservationDate) => {
  // Check object cache to see if we have already generated times for this date and if so, return them
  if (timesByDate[reservationDate]) {
    return timesByDate[reservationDate];
  }

  // If not in the object cache, check local storage
  const storedTimes = localStorage.getItem(reservationDate);
  if (storedTimes) {
    timesByDate[reservationDate] = JSON.parse(storedTimes);
    return timesByDate[reservationDate];
  }

  // Generate new times if necessary
  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  const times = availableTimes.filter((time) => Math.random() > 0.5);

  // Store the generated times in timesByDate cache and local storage so we can reuse them if the same date is selected again
  timesByDate[reservationDate] = times;
  localStorage.setItem(reservationDate, JSON.stringify(times));

  return times;
};

export const removeTime = (reservationDate, reservationTime) => {
  const times = timesByDate[reservationDate] || JSON.parse(localStorage.getItem(reservationDate) || '[]');
  const updatedTimes = times.filter((time) => time !== reservationTime);

  timesByDate[reservationDate] = updatedTimes;
  localStorage.setItem(reservationDate, JSON.stringify(updatedTimes));
};

// This function is used to submit the form data to the API
export const submitAPI = (formData) => {
  if (Object.keys(formData).length > 0) {
    return true;
  }
  return false;
};
