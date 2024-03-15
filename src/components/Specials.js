import { Link } from "react-router-dom";
import "../css/Specials.css";
import greekSalad from "../assets/images/greek_salad.jpg";
import bruschetta from "../assets/images/bruschetta.jpg";
import lemonDessert from "../assets/images/lemon_dessert.jpg";
import deliveryBike from "../assets/images/delivery_bike.svg";

export default function Specials() {
  return (
    <section
      aria-labelledby="this-weeks-specials-section"
      className="section-specials"
    >
      <div className="wrapper">
        <div className="title-button">
          <h2 id="this-weeks-specials-section">
            This Week's Specials
          </h2>
          <Link to="/menu" className="button button-primary-2">
            Online Menu
          </Link>
        </div>
        <div className="specials-wrapper">
          <div className="specials-grid">
            <div className="special">
              <img src={greekSalad} alt="Greek Salad" />
              <div className="special__text">
                <div className="special__headline">
                  <h4>Greek Salad</h4>
                  <p>$12.99</p>
                </div>
                <div className="special__description">
                  <p>
                    The famous greek salad of crispy lettuce, peppers, olives
                    and our Chicago style feta cheese, garnished with crunchy
                    garlic and rosemary croutons.
                  </p>
                </div>
                <div className="special__delivery">
                  <p>Order a delivery</p>
                  <img src={deliveryBike} alt="Delivery Bike" />
                </div>
              </div>
            </div>
            <div className="special">
              <img src={bruschetta} alt="Bruschetta" />
              <div className="special__text">
                <div className="special__headline">
                  <h4>Bruschetta</h4>
                  <p>$9.99</p>
                </div>
                <div className="special__description">
                  <p>
                    A classic Italian starter, our bruschetta is made with fresh
                    tomatoes, basil, garlic and olive oil on toasted ciabatta
                    bread.
                  </p>
                </div>
                <div className="special__delivery">
                  <p>Order a delivery</p>
                  <img src={deliveryBike} alt="Delivery Bike" />
                </div>
              </div>
            </div>
            <div className="special">
              <img src={lemonDessert} alt="Lemon Dessert" />
              <div className="special__text">
                <div className="special__headline">
                  <h4>Lemon Dessert</h4>
                  <p>$6.99</p>
                </div>
                <div className="special__description">
                  <p>
                    A refreshing dessert made with fresh lemons, our lemon
                    dessert is the perfect way to end a meal at Little Lemon.
                  </p>
                </div>
                <div className="special__delivery">
                  <p>Order a delivery</p>
                  <img src={deliveryBike} alt="Delivery Bike" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
