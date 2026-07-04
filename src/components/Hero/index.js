import "./index.css";

const Hero = () => {
  return (
    <section className="hero-section" id='home'>

      <div className="hero-overlay">

        <div className="hero-content">

          <span className="hero-tag">
            Trusted Borewell Inspection Service
          </span>

          <h1>
            Inspect Your Borewell
            <br />
            Before Investing Lakhs
          </h1>

          <p>
            Know your borewell condition, identify water-bearing fractures,
            estimate water yield and choose the right motor installation depth
            before spending money on pumps, cables and setup.
          </p>

          <div className="hero-buttons">

            <a href="tel:+919845680344" className="primary-btn">
              📞 Call Now
            </a>

            <a
              href="https://wa.me/9845680344"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              💬 WhatsApp
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default Hero;