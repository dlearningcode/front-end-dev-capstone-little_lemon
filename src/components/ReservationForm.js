import React, { useState } from "react";

export default function ReservationForm() {
  const [formData, setFormData] = useState({
    date: "",
    time: "",
    guests: "",
    occasion: "",
  });

  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00",
  ]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const isFormValid = () => {
    return Object.values(formData).every((field) => field !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      date: "",
      time: "",
      guests: "1",
      occasion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="res-date">Choose date</label>
          <input
            id="res-date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            type="date"
          />
        </div>
        <div className="field">
          <label htmlFor="res-time">Choose time</label>
          <select
            id="res-time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            type="time"
          >
            <option value="" disabled selected>
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
          <label htmlFor="guests">Number of guests</label>
          <input
            id="guests"
            name="guests"
            min="1"
            max="10"
            placeholder="1"
            value={formData.guests}
            onChange={handleChange}
            type="number"
          />
        </div>
        <div className="field">
          <label htmlFor="occasion">Occasion</label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
          >
            <option value="" disabled selected>
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
