import "../css/Main.css";
import React, { useState } from "react";
import {Routes, Route} from "react-router-dom";
import Homepage from "./Homepage";
import About from "./About";
import Menu from "./Menu";
import Reservations from "./Reservations";
import OrderOnline from "./OrderOnline";
import Login from "./Login";
import Test from "./Test";



export default function Main() {
  const [availableTimes, setAvailableTimes] = useState(["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"]);

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
              setAvailableTimes={setAvailableTimes}
            />
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
