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
    // console.log("handleChange", formData);

    // If the name of the input field is reservationDate,
    // runc fetchTimes in Main component to get the available times
    if (e.target.name === "reservationDate") {
      fetchTimes(e.target.value);
    }
  };

  const validateField = (name, value) => {
    let fieldErrors = { ...formErrors };

    switch (name) {
      case "reservationDate":
        const todayDate = new Date(today);
        const selectedDate = new Date(value);
        const isDateValid = selectedDate >= todayDate;
        fieldErrors.reservationDate =
          isDateValid || value === ""
            ? ""
            : "Please choose a date today or in the future";
        break;
      case "reservationTime":
        fieldErrors.reservationTime = value
          ? ""
          : "Please choose an available time";
        break;
      case "guestCount":
        fieldErrors.guestCount = !value
          ? "Please enter the number of guests"
          : parseInt(value) > 10
          ? alert(
              "Please call us at (217) 555-1234 to schedule an event for 11 to 50 guests"
            )
          : "";
        break;
      case "occasion":
        fieldErrors.occasion = value ? "" : "Please choose an occasion";
        break;
      default:
        break;
    }

    setFormErrors(fieldErrors);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    validateField(name, value);
  };

  const isFormValid = () => {
    const todayDate = new Date(today);
    const selectedDate = new Date(formData.reservationDate);
    const isDateValid = selectedDate >= todayDate;
    const countForCompare = parseInt(formData.guestCount);

    let errors = {
      reservationDate: isDateValid
        ? ""
        : "Please choose a date today or in the future",
      reservationTime: formData.reservationTime
        ? ""
        : "Please choose an available time",
      guestCount:
        formData.guestCount === ""
          ? "Please enter the number of guests"
          : countForCompare > 10
          ? "Please call us at (217) 555-1234 to schedule an event for 11 to 50 guests"
          : "",
      occasion: formData.occasion ? "" : "Please choose an occasion",
    };

    setFormErrors(errors);

    // console.log("isDateValid", isDateValid);
    // console.log("formData.guestCount", formData.guestCount);
    // console.log(
    //   "isFormValid",
    //   isDateValid && parseInt(formData.guestCount) <= 10
    // );

    return isDateValid && countForCompare <= 10;
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
    <form onSubmit={handleSubmit} className="reservation-form">
      <fieldset>
        <div className="field">
          <label htmlFor="reservationDate" className="card-title">
            Choose date<span>*</span>
          </label>
          <input
            id="reservationDate"
            name="reservationDate"
            value={formData.reservationDate}
            onChange={handleChange}
            onBlur={handleBlur}
            type="date"
            aria-label="Choose date for reservation"
            className={formErrors.reservationDate ? "error-border" : ""}
            required
          />
          {formErrors.reservationDate && (
            <div className="error">{formErrors.reservationDate}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="reservationTime" className="card-title">
            Choose an available time<span>*</span>
          </label>
          <select
            id="reservationTime"
            name="reservationTime"
            value={formData.reservationTime}
            onChange={handleChange}
            onBlur={handleBlur}
            type="time"
            aria-label="Choose an available time for reservation"
            className={formErrors.reservationTime ? "error-border" : ""}
            required
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
          <label htmlFor="guestCount" className="card-title">
            Number of guests<span>*</span>
          </label>
          <input
            id="guestCount"
            name="guestCount"
            min="1"
            max="50"
            step="1"
            placeholder="1"
            value={formData.guestCount}
            onChange={handleChange}
            onBlur={handleBlur}
            type="number"
            aria-label="Enter or select number of guests"
            className={formErrors.guestCount ? "error-border" : ""}
            required
          />
          {formErrors.guestCount && (
            <div className="error">{formErrors.guestCount}</div>
          )}
        </div>
        <div className="field">
          <label htmlFor="occasion" className="card-title">
            What's the occasion?<span>*</span>
          </label>
          <select
            id="occasion"
            name="occasion"
            value={formData.occasion}
            onChange={handleChange}
            onBlur={handleBlur}
            aria-label="Choose the occasion for reservation"
            className={formErrors.occasion ? "error-border" : ""}
            required
          >
            <option value="" disabled>
              Select
            </option>
            <option value="anniversary">Anniversary</option>
            <option value="birthday">Birthday</option>
            <option value="engagement">Engagement</option>
            <option value="meal">Good Meal</option>
            <option value="other">Other Celebration</option>
          </select>
          {formErrors.occasion && (
            <div className="error">{formErrors.occasion}</div>
          )}
        </div>
        <button type="submit" className="button button-primary-2">
          Make Your Reservation
        </button>
      </fieldset>
    </form>
  );
}
