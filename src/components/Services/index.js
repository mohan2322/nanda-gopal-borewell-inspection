import "./index.css";

const Services = () => {
  return (
    <section className="services-section" id='services'>

      <div className="services-container">

        <h2>Our Inspection Services</h2>

        <p className="service-description">
          We provide professional borewell inspection to help you understand
          your borewell condition before investing in expensive equipment.
        </p>

        <div className="services-grid">

          <div className="service-card">
            <div className="service-icon">💧</div>
            <h3>Water Source Identification</h3>
            <p>
              Identify water-bearing fractures and understand where water is
              entering the borewell.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">📊</div>
            <h3>Water Yield Estimation</h3>
            <p>
              Estimate approximate water yield such as 1 inch or 2 inch based
              on inspection and field experience.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">⚙️</div>
            <h3>Motor Installation Guidance</h3>
            <p>
              Find the suitable depth for installing the submersible motor to
              avoid future problems.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🏞️</div>
            <h3>Borewell Condition Analysis</h3>
            <p>
              Inspect loose sand, borewell condition and identify possible
              issues before installation.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🎥</div>
            <h3>Live Camera Inspection</h3>
            <p>
              Watch the complete borewell inspection live on the monitor with
              expert explanation.
            </p>
          </div>

          <div className="service-card">
            <div className="service-icon">🌾</div>
            <h3>Farmer Friendly Consultation</h3>
            <p>
              Honest guidance from an experienced farmer helping fellow
              farmers make better decisions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Services;