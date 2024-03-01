import "../css/Header.css";
import headerHero from "../assets/images/headerhero.png";

export default function Header() {
  return (
    <header>
      <div class="wrapper">
        <div class="content-grid">
          <div class="header-wrapper__right">
            <div class="hero-wrapper">
              <img
                src={headerHero}
                alt="Little Lemon Restaurant food"
                class="header-hero"
              />
            </div>
          </div>
          <div class="header-wrapper__left">
            <h1 class="text-primary-2">Little Lemon</h1>
            <h2>Chicago</h2>
            <p class="lead-text">
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </p>
            <a href="/" class="button button-primary-2">
              Reserve a Table
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
