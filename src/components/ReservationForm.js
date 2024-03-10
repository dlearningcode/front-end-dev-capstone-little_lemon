import React, { useState } from "react";
import "../css/ReservationForm.css";

export default function ReservationForm({ availableTimes, fetchTimes, submitForm }) {
  const [formData, setFormData] = useState({
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
    // dispatch an action object to the reducer function
    if (e.target.name === "reservationDate") {
      fetchTimes(e.target.value);
    }
  };

  const isFormValid = () => {
    return Object.values(formData).every((field) => field !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Call the submitForm function and pass the form data as an argument
    // to submit the form data to the API
    submitForm(formData);
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
          <label htmlFor="reservationDate">Choose date</label>
          <input
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            type="date"
            aria-label="Choose date for reservation"
          />
        </div>
        <div className="field">
          <label htmlFor="reservationTime">Choose time</label>
          <select
            id="reservationTime"
            name="reservationTime"
            value={formData.reservationTime}
            onChange={handleChange}
            type="time"
            aria-label="Choose time for reservation"
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
        </div>
        <div className="field">
          <label htmlFor="guestCount">Number of guests</label>
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
          />
        </div>
        <div className="field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            aria-label="Choose the occasion for reservation"
          >
            <option value="" disabled>
              Select
            </option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
            <option value="engagement">Engagement</option>
            <option value="other">Other</option>
          </select>
        </div>
        <button type="submit" disabled={!isFormValid()}>
          Make Your Reservation
        </button>
      </fieldset>
    </form>
  );
}
