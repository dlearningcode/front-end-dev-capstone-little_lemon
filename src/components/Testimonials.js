import "../css/Testimonials.css";
import fiveStars from "../assets/images/5-stars.png";
import anthony from "../assets/images/anthony.jpeg";
import blake from "../assets/images/blake.jpeg";
import ji from "../assets/images/ji.jpeg";
import john from "../assets/images/john.jpeg";

export default function Testimonials() {
  return (
    <section className="section-testimonials">
      <div className="wrapper">
        <h2 className="text-primary-2">Testimonials</h2>
        <div className="testimonials-grid">
          <div className="testimonial">
            <div className="testimonial__stars">
              <img src={fiveStars} alt="5 Stars" />
            </div>
            <div className="testimonial__profile">
              <img src={anthony} alt="Anthony" />
              <h6>Anthony</h6>
            </div>
            <div className="testimonial__text">
              <p>
                "The food is amazing! I love the atmosphere and the staff is
                great."
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial__stars">
              <img src={fiveStars} alt="5 Stars" />
            </div>
            <div className="testimonial__profile">
              <img src={blake} alt="Blake" />
              <h6>Blake</h6>
            </div>
            <div className="testimonial__text">
              <p>"I highly recommend the lamb shank and the baklava."</p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial__stars">
              <img src={fiveStars} alt="5 Stars" />
            </div>
            <div className="testimonial__profile">
              <img src={ji} alt="Ji" />
              <h6>Ji</h6>
            </div>
            <div className="testimonial__text">
              <p>
                "Mario and Adrian built a place that feels like home, with amazing food."
              </p>
            </div>
          </div>
          <div className="testimonial">
            <div className="testimonial__stars">
              <img src={fiveStars} alt="5 Stars" />
            </div>
            <div className="testimonial__profile">
              <img src={john} alt="John" />
              <h6>John</h6>
            </div>
            <div className="testimonial__text">
              <p>
                "Best lemon dessert, Turkish coffee and service in Chicago."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
