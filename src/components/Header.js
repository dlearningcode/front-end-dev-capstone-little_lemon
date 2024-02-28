import "../css/Header.css";
import headerHero from "../assets/images/headerhero.png";

export default function Header() {
  return (
    <header>
      <div class="container">
        <div class="header-container__right">
          <img src={headerHero} alt="Little Lemon Restaurant food" />
        </div>
        <div class="header-container__left">
          <h1 class="text-primary-2">Little Lemon</h1>
          <h2>Chicago</h2>
          <p class="karla-lead-text">
            We are a family owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>
          <button class="button color-primary-2">
            <a href="/">Reserve a Table</a>
          </button>
        </div>
      </div>
    </header>
  );
}
