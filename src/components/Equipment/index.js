import "./index.css";

const Equipment = () => {
  return (
    <section className="equipment-section" id='equipment'>

      <div className="equipment-container">

        <div className="equipment-content">

          <span>Professional Equipment</span>

          <h2>Modern Borewell Inspection Equipment</h2>

          <p>
            We use high-quality borewell inspection cameras with powerful LED
            lighting to inspect deep borewells and identify water-bearing
            fractures, motor installation depth and borewell condition.
          </p>

          <div className="equipment-list">

            <div className="equipment-item">
              ✅ HD Borewell Camera
            </div>

            <div className="equipment-item">
              ✅ Powerful LED Lights
            </div>

            <div className="equipment-item">
              ✅ Live Video Monitoring
            </div>

            <div className="equipment-item">
              ✅ Deep Borewell Inspection
            </div>

            <div className="equipment-item">
              ✅ Professional Guidance
            </div>

          </div>

        </div>

        <div className="equipment-image">

          <img
            src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=900&q=80"
            alt="Borewell Equipment"
          />

        </div>

      </div>

    </section>
  );
};

export default Equipment;