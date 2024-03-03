import "../css/PeopleSay.css";

export default function PeopleSay() {
  return (
    <section className="section-people-say">
      <div className="wrapper">
        <h2 className="text-primary-2">What People Say</h2>
        <div className="content-grid">
          <div className="people-say-wrapper">
            <div className="people-say">
              <p>
                "The food is amazing! I love the atmosphere and the staff is
                great. I highly recommend the lamb shank and the baklava."
              </p>
              <h3>John Doe</h3>
            </div>
            <div className="people-say">
              <p>
                "The best Mediterranean food in Chicago! The service is
                excellent and the prices are very reasonable."
              </p>
              <h3>Jane Doe</h3>
            </div>
            <div className="people-say">
              <p>
                "The food is amazing! I love the atmosphere and the staff is
                great. I highly recommend the lamb shank and the baklava."
              </p>
              <h3>John Doe</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
