import logoVertWhite from "../assets/images/logo_vert_word_white.png";
import "../css/Footer.css";

export default function Footer() {
  return (
    <footer>
      <div class="wrapper">
        <section>
          <img src={logoVertWhite} alt="Little Lemon logo" />
        </section>
        <section>
          <h3>Site</h3>
          <ul>
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
              <a href="/">Facebook</a>
            </li>
            <li>
              <a href="/">X/Twitter</a>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
            <li>
              <a href="/">LinkedIn</a>
            </li>
          </ul>
        </section>
      </div>
    </footer>
  );
}
