import "../css/Main.css";
import React, { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import Test from "./Test";

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "DATE_CHANGE":
      // For now, return the same times regardless of date
      //
      return state;
    default:
      throw new Error("Invalid action type");
  }
};

export const initializeTimes = () => [
  "17:00",
  "18:00",
  "19:00",
  "20:00",
  "21:00",
  "22:00",
];

export default function Main() {
  // Initialize availableTimes with the times we are open
  // and a dispatch function to update the available times
  // based on the date selected by the user
  // The dispatch function will be passed to the ReservationForm component
  // as a prop
  // The dispatch function will be called with an action object
  // that has a type property and a date property that will be sent to the reducer function updateTimes
  const [availableTimes, dispatch] = useReducer(updateTimes, initializeTimes());

  return (
    <main>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route
          path="/reservations"
          element={
            <Reservations availableTimes={availableTimes} dispatch={dispatch} />
          }
        />
        <Route path="/order-online" element={<OrderOnline />} />
        <Route path="/login" element={<Login />} />
        <Route path="/test" element={<Test />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </main>
  );
}
