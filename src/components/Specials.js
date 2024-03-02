import "../css/Specials.css";

export default function Specials() {
  return (
    <section class="section-specials">
      <div class="wrapper">
        <h2 class="text-primary-2">Today's Specials</h2>
        <div class="content-grid">
          <div class="specials-wrapper">
            <div class="specials">
              <h3>Appetizer</h3>
              <p>
                Hummus, baba ganoush, and tabouli served with warm pita bread.
              </p>
            </div>
            <div class="specials">
              <h3>Entree</h3>
              <p>Lamb shank served with rice pilaf and grilled vegetables.</p>
            </div>
            <div class="specials">
              <h3>Dessert</h3>
              <p>Baklava served with a scoop of vanilla ice cream.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
