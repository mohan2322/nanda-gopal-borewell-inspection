import "./index.css";

const Pricing = () => {
  return (
    <section className="pricing-section">

      <div className="pricing-container">

        <h2>Affordable & Transparent Pricing</h2>

        <p className="pricing-description">
          We believe every farmer deserves professional borewell inspection
          before investing in expensive equipment.
        </p>

        <div className="pricing-card">

          <span className="price-tag">Starting From</span>

          <h1>₹1000 - ₹1500</h1>

          <p>
            Final inspection charges depend on:
          </p>

          <ul>
            <li>✔ Borewell Depth</li>
            <li>✔ Distance to Location</li>
            <li>✔ Inspection Time</li>
          </ul>

          <a
            href="tel:+919845680344"
            className="pricing-btn"
          >
            📞 Book Inspection
          </a>

        </div>

      </div>

    </section>
  );
};

export default Pricing;