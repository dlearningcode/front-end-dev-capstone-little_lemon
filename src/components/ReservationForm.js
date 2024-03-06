import React, { useState } from "react";

export default function ReservationForm({ availableTimes, dispatch }) {
  const [formData, setFormData] = useState({
    resDate: "",
    resTime: "",
    guests: "",
    occasion: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    if (e.target.name === "resDate") {
      dispatch({type: "dateChange", date: e.target.value});
    }
  };

  const isFormValid = () => {
    return Object.values(formData).every((field) => field !== "");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      resDate: "",
      resTime: "",
      guests: "1",
      occasion: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <fieldset>
        <div className="field">
          <label htmlFor="resDate">Choose date</label>
          <input
            id="resDate"
            name="resDate"
            value={formData.resDate}
            onChange={handleChange}
            type="date"
          />
        </div>
        <div className="field">
          <label htmlFor="resTime">Choose time</label>
          <select
            id="resTime"
            name="resTime"
            value={formData.resTime}
            onChange={handleChange}
            type="time"
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
