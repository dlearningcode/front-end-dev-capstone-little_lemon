import logoVertWhite from "../assets/images/logo_vert_word_white.png";
import "../css/Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer>
      <div className="wrapper">
        <section>
          <img src={logoVertWhite} alt="Little Lemon logo" />
        </section>
        <section>
          <h3>Site</h3>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/menu">Menu</Link>
            </li>
            <li>
              <Link to="/reservations">Reservations</Link>
            </li>
            <li>
              <Link to="/order-online">Order Online</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </section>
        <section>
          <h3>Contact</h3>
          <p>
            123 Main St.
            <br />
            Springfield, IL 62701
            <br />
            (217) 555-1234
            <br />
            contact@littlelemon.com
          </p>
        </section>
        <section>
          <h3>Social Media</h3>
          <ul>
            <li>
              <Link to="/">Facebook</Link>
            </li>
            <li>
              <Link to="/">X/Twitter</Link>
            </li>
            <li>
              <Link to="/">Instagram</Link>
            </li>
            <li>
              <Link to="/">LinkedIn</Link>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
