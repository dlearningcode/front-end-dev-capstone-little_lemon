import "../css/Main.css";
import React, { useReducer, useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage.js";
import About from "./About.js";
import Menu from "./Menu.js";
import Reservations from "./Reservations.js";
import OrderOnline from "./OrderOnline.js";
import Login from "./Login.js";
import ConfirmedBooking from "./ConfirmedBooking.js";
import Test from "./Test.js";
import { fetchAPI, submitAPI } from "../scripts/masterapi.js";

// Create an object to hold today's date in format YYYY-MM-DD
const today = new Date().toISOString().split("T")[0];

// use useEffect to call the fetchAPI function when the component is mounted
// to get the available times for the selected date

export default function Main() {
  const [initialTimes, setInitialTimes] = useState([]);
  const navigate = useNavigate();
  const [reservationInfo, setReservationInfo] = useState({});

  const fetchTimes = async (date) => {
    const times = await fetchAPI(date);
    dispatch({ type: "DATE_CHANGE", payload: times });
  };

  useEffect(() => {
    const initializeTimes = async () => {
      const times = await fetchAPI(today);
      setInitialTimes(times);
      dispatch({ type: "DATE_CHANGE", payload: times });
    };

    initializeTimes();
  }, []);

  const updateTimes = (state, action) => {
    switch (action.type) {
      case "DATE_CHANGE":
        // use the date provided in the action object to call the fetchAPI function
        // to get the available times for the selected date
        // return the available times
        return action.payload;
      default:
        throw new Error("Invalid action type");
    }
  };

  const submitForm = async (formData) => {
    const submittedForm = await submitAPI(formData);
    if (submittedForm) {
      setReservationInfo(formData);
      navigate("/confirmed-booking");
    }
  };

  // Initialize availableTimes with the times we are open
  // and a dispatch function to update the available times
  // based on the date selected by the user
  // The dispatch function will be passed to the ReservationForm component
  // as a prop
  // The dispatch function will be called with an action object
  // that has a type property and a date property that will be sent to the
  // reducer function updateTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, initialTimes);

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <Reservations
              availableTimes={availableTimes}
              fetchTimes={fetchTimes}
              submitForm={submitForm}
            />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/confirmed-booking"
          element={<ConfirmedBooking reservationInfo={reservationInfo} />}
        />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </main>
  );
}
