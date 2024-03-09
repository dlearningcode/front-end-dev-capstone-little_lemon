// This file contains the functions that are used to interact with the API

// This function fetchAPI is used to accept a date and randomly generate a list of one to six 
// available times for reservations between 17:00 and 22:00. The function is used in the 
// ReservationForm component to
// fetch the available times for the selected date. The function is only simulating an API call
// and is not actually fetching data from an API therefore does not require a try/catch block 
// or promise handling. This function will randomly generate a list of available times for the
// selected date and return the list to the component. The function will be used to populate the
// select element with the available times for the selected date. It will return one to six
// available times for reservations between 17:00 and 22:00. 


export const fetchAPI = (date) => {
    const availableTimes = [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00",
    ];
    const todaysTimes = [];
    // Iterate through the availableTimes array, randomly determining if each time is available and 
    // adding it to the todaysTimes array if it is.
    availableTimes.forEach((time) => {
        if (Math.random() > 0.5) {
            todaysTimes.push(time);
        }
    });
    return todaysTimes;
}


// This function is used to submit the form data to the API
export const submitAPI = (formData) => {
    if (Object.keys(formData).length > 0) {
        return true;
    }
    return false;
}