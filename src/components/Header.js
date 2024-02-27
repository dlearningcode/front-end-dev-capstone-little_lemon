import "../css/Header.css";

export default function Header() {
  return (
    <header>
      <div class="container">
        <h1 class="text-primary-2">Little Lemon</h1>
        <h2>Chicago</h2>
        <p class="karla-lead-text">
          We are a family owned Mediterranean restaurant, focused on traditional
          recipes served with a modern twist.
        </p>
        <div class="button color-primary-2">
          <a href="/">Reserve a table</a>
        </div>
      </div>
    </header>
  );
}
