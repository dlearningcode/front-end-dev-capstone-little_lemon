import "../css/Chicago.css";
import marioAdrianA from "../assets/images/mario-adrian-a.jpg";
import marioAdrianB from "../assets/images/mario-adrian-b.jpg";

export default function Chicago() {
  return (
    <section className="section-chicago">
      <div className="wrapper">
        <div className="chicago-grid">
          <div className="chicago-text">
            <h2 className="display-title">Little Lemon</h2>
            <h3 className="sub-title">Chicago</h3>
            <div className="chicago">
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Molestiae ipsam maxime ea veniam nostrum! Nihil harum quis at
                labore, ducimus necessitatibus repudiandae blanditiis eius
                cumque. Minima quaerat hic iure sint. Modi enim reprehenderit
                impedit distinctio nisi? Cumque repellat a aspernatur, nihil
                excepturi possimus autem sunt, inventore eveniet incidunt
                tenetur nam consectetur enim sed placeat rem voluptatum, libero
                aliquam soluta deserunt?
              </p>
            </div>
          </div>
          <div className="chicago-pics">
            <div className="chicago-pic-1">
              <img
                src={marioAdrianA}
                alt="Mario and Adrian"
                className="mario-adrian-a"
              />
            </div>
            <div className="chicago-pic-2">
              <img
                src={marioAdrianB}
                alt="Mario and Adrian"
                className="mario-adrian-b"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
