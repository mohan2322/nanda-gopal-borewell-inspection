import "./index.css";

const Contact = () => {
  return (
    <section className="contact-section" id='contact'>

      <div className="contact-container">

        <span className="contact-tag">
          Contact Us
        </span>

        <h2>
          Book Your Borewell Inspection Today
        </h2>

        <p className="contact-description">
          Call or WhatsApp us to schedule a professional borewell inspection.
          We are happy to help you make the right decision before investing in
          your borewell setup.
        </p>

        <div className="contact-grid">

          <div className="contact-card">
            <h3>📞 Call Us</h3>

            <a href="tel:+919845680344">
              +91 9845680344
            </a>
          </div>

          <div className="contact-card">
            <h3>💬 WhatsApp</h3>

            <a
              href="https://wa.me/919845680344"
              target="_blank"
              rel="noreferrer"
            >
              Chat on WhatsApp
            </a>
          </div>

          <div className="contact-card">
            <h3>📍 Service Area</h3>

            <p>
              Chikkaballapur District
              <br />
              Karnataka
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default Contact;