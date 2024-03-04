import "../css/CallToAction.css";
import ctaHero from "../assets/images/headerhero.png";
import { Link } from "react-router-dom";

export default function CallToAction() {
  return (
    <section className="section-call-to-action">
      <div className="wrapper">
        <div className="content-grid">
          <div className="cta-wrapper__right">
            <div className="hero-wrapper">
              <img
                src={ctaHero}
                alt="Little Lemon Restaurant food"
                className="cta-hero"
              />
            </div>
          </div>
          <div className="cta-wrapper__left">
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
    </section>
  );
}
