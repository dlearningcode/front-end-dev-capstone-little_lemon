import "./css/App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Homepage from "./components/Homepage";
import About from "./components/About";
import Menu from "./components/Menu";
import Reservations from "./components/Reservations";
import OrderOnline from "./components/OrderOnline";
import Login from "./components/Login";
import Footer from "./components/Footer";
import Test from "./components/Test";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Main>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/about" element={<About />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/reservations" element={<Reservations />} />
            <Route path="/order-online" element={<OrderOnline />} />
            <Route path="/login" element={<Login />} />
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
