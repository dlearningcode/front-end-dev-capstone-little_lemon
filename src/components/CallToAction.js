import "../css/CallToAction.css";
import headerHero from "../assets/images/headerhero.png";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <header>
      <div className="wrapper">
        <div className="content-grid">
          <div className="header-wrapper__right">
            <div className="hero-wrapper">
              <img
                src={headerHero}
                alt="Little Lemon Restaurant food"
                className="header-hero"
              />
            </div>
          </div>
          <div className="header-wrapper__left">
            <h1 className="text-primary-2">Little Lemon</h1>
            <h2>Chicago</h2>
            <p className="lead-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <Link to="/reservations" className="button button-primary-2">
              Reserve a Table
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
