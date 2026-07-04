import "./index.css";

const FAQ = () => {
  return (
    <section className="faq-section" id='FAQ'>

      <div className="faq-container">

        <span className="faq-tag">
          Frequently Asked Questions
        </span>

        <h2>
          Got Questions?
        </h2>

        <p className="faq-description">
          Here are some common questions asked by our customers.
        </p>

        <div className="faq-list">

          <div className="faq-item">
            <h3>Why should I inspect my borewell before installing a motor?</h3>
            <p>
              Borewell inspection helps you understand water availability,
              suitable motor depth and borewell condition before investing
              thousands of rupees on pumps, cables and installation.
            </p>
          </div>

          <div className="faq-item">
            <h3>How much does borewell inspection cost?</h3>
            <p>
              Our inspection charges usually range between ₹1000 and ₹1500
              depending on borewell depth and travel distance.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can you estimate water availability?</h3>
            <p>
              Yes. Based on visible water-bearing fractures and practical field
              experience, we provide an approximate estimate of water yield.
            </p>
          </div>

          <div className="faq-item">
            <h3>Can I watch the inspection live?</h3>
            <p>
              Yes. You can watch the entire borewell inspection live on the
              monitor while our expert explains the findings.
            </p>
          </div>

          <div className="faq-item">
            <h3>Which areas do you provide service?</h3>
            <p>
              We currently provide borewell inspection services in
              Chikkaballapur and nearby districts. Contact us to confirm
              availability for your location.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;