import React, { useState } from "react";
import "../css/ReservationForm.css";
import { removeTime } from "../scripts/masterapi.js";

export default function ReservationForm({
  availableTimes,
  fetchTimes,
  submitForm,
  today,
}) {
  const [formData, setFormData] = useState({
    reservationDate: "",
    reservationTime: "",
    guestCount: "",
    occasion: "",
  });

  const [formErrors, setFormErrors] = useState({
    reservationDate: "",
    reservationTime: "",
    guestCount: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    // If the name of the input field is reservationDate,
    // runc fetchTimes in Main component to get the available times
    if (e.target.name === "reservationDate") {
      fetchTimes(e.target.value);
    }
  };

  const isFormValid = () => {
    const todayDate = new Date(today);
    const selectedDate = new Date(formData.reservationDate);
    const isDateValid = selectedDate >= todayDate;

    let errors = {
      reservationDate: isDateValid
        ? ""
        : "Please choose a date today or in the future",
      reservationTime: formData.reservationTime
        ? ""
        : "Please choose an available time",
      guestCount: formData.guestCount
        ? ""
        : "Please enter the number of guests",
      occasion: formData.occasion ? "" : "Please choose an occasion",
    };

    setFormErrors(errors);

    return (
      isDateValid && Object.values(formData).every((field) => field !== "")
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // If the form is not valid, return early
    if (!isFormValid()) {
      return;
    }
    // Call the submitForm function and pass the form data as an argument
    // to submit the form data to the API
    submitForm(formData);
    removeTime(formData.reservationDate, formData.reservationTime);
    setFormData({
      reservationDate: "",
      reservationTime: "",
      guestCount: "",
      occasion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="reservationDate">
            Choose date<span>*</span>
          </label>
          <input
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            type="date"
            aria-label="Choose date for reservation"
            className={formErrors.reservationDate ? "error-border" : ""}
          />
          {formErrors.reservationDate && (
            <div className="error">{formErrors.reservationDate}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="reservationTime">
            Choose an available time<span>*</span>
          </label>
          <select
            id="reservationTime"
            name="reservationTime"
            value={formData.reservationTime}
            onChange={handleChange}
            type="time"
            aria-label="Choose an available time for reservation"
            className={formErrors.reservationTime ? "error-border" : ""}
          >
            <option value="" disabled>
              Select
            </option>
            {availableTimes.map((time, index) => {
              return (
                <option key={index} value={time}>
                  {time}
                </option>
              );
            })}
          </select>
          {formErrors.reservationTime && (
            <div className="error">{formErrors.reservationTime}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="guestCount">
            Number of guests<span>*</span>
          </label>
          <input
            id="guestCount"
            name="guestCount"
            min="1"
            max="10"
            placeholder="1"
            value={formData.guestCount}
            onChange={handleChange}
            type="number"
            aria-label="Enter or select number of guests"
            className={formErrors.guestCount ? "error-border" : ""}
          />
          {formErrors.guestCount && (
            <div className="error">{formErrors.guestCount}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="occasion">
            What's the occasion?<span>*</span>
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            aria-label="Choose the occasion for reservation"
            className={formErrors.occasion ? "error-border" : ""}
          >
            <option value="" disabled>
              Select
            </option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="other">Other</option>
          </select>
          {formErrors.occasion && (
            <div className="error">{formErrors.occasion}</div>
          )}
        </div>
        <button type="submit">Make Your Reservation</button>
      </fieldset>
    </form>
  );
}
