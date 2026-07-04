import "./index.css";

const Testimonials = () => {
  return (
    <section className="testimonial-section">

      <div className="testimonial-container">

        <span className="testimonial-tag">
          Customer Reviews
        </span>

        <h2>
          What Our Customers Say
        </h2>

        <p className="testimonial-description">
          We are proud to help farmers and customers make informed decisions
          before investing in borewell equipment.
        </p>

        <div className="testimonial-grid">

          <div className="testimonial-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "Very professional inspection. We understood the exact water
              source before installing the motor. Highly recommended."
            </p>

            <h4>Ramesh</h4>

            <span>Farmer</span>

          </div>

          <div className="testimonial-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "Saved us from investing in a bigger motor. Honest guidance and
              excellent service."
            </p>

            <h4>Srinivas</h4>

            <span>Land Owner</span>

          </div>

          <div className="testimonial-card">

            <div className="stars">
              ⭐⭐⭐⭐⭐
            </div>

            <p>
              "Very experienced person. Explained every water source clearly
              during inspection."
            </p>

            <h4>Mahesh</h4>

            <span>Farmer</span>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;