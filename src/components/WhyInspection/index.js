import "./index.css";

const WhyInspection = () => {
  return (
    <section className="why-section" id='why'>

      <div className="why-container">

        <h2>
          Why Borewell Inspection is Important?
        </h2>

        <p className="why-description">
          Spending ₹50,000 to ₹1,50,000 on a borewell setup without knowing
          the borewell condition can lead to unnecessary expenses.
          Our inspection helps you make an informed decision before investing.
        </p>

        <div className="cards-container">

          <div className="card">
            <div className="icon">💰</div>
            <h3>Save Investment</h3>
            <p>
              Avoid unnecessary spending on motors, cables,
              pipes and installation.
            </p>
          </div>

          <div className="card">
            <div className="icon">💧</div>
            <h3>Know Water Yield</h3>
            <p>
              Estimate water availability by observing
              water-bearing fractures.
            </p>
          </div>

          <div className="card">
            <div className="icon">⚙</div>
            <h3>Choose Right Motor</h3>
            <p>
              Install the correct motor capacity based
              on the borewell condition.
            </p>
          </div>

          <div className="card">
            <div className="icon">📹</div>
            <h3>Professional Inspection</h3>
            <p>
              5+ years of experience helping farmers
              make better decisions.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default WhyInspection;