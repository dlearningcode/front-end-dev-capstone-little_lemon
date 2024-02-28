import logoHorizontal from "../assets/images/logo_horizontal.png";
import "../css/Nav.css";

export default function Nav() {
  return (
    <nav>
      <div class="container">
        <ul>
          <li>
            <img src={logoHorizontal} alt="Little Lemon logo" />
          </li>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Menu</a>
          </li>
          <li>
            <a href="/">Reservations</a>
          </li>
          <li>
            <a href="/">Order Online</a>
          </li>
          <li>
            <a href="/">Login</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
