import { Link } from "react-router-dom";
import logoHorizontal from "../assets/images/logo_horizontal.png";
import "../css/Nav.css";

export default function Nav() {
  return (
    <nav>
      <div className="wrapper">
        <ul>
          <li>
            <img src={logoHorizontal} alt="Little Lemon logo" />
          </li>
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
      </div>
    </nav>
  );
}
