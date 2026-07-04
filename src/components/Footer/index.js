import "./index.css";

const Footer = () => {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-about">

          <h2>Nanda Gopal Borewell Inspection</h2>

          <p>
            Professional borewell inspection services helping farmers and
            property owners make informed decisions before investing in motors,
            cables and borewell setup.
          </p>

        </div>

        <div className="footer-links">

          <h3>Quick Links</h3>

          <ul>

            <li>Home</li>

            <li>Services</li>

            <li>Gallery</li>

            <li>About</li>

            <li>Contact</li>

          </ul>

        </div>

        <div className="footer-contact">

          <h3>Contact</h3>

          <p>📞 +91 9845680344</p>

          <p>📍 Chikkaballapur, Karnataka</p>

          <p>💬 WhatsApp Available</p>

        </div>

      </div>

      <hr />

      <div className="copyright">

        © {new Date().getFullYear()} Nanda Gopal Borewell Inspection.
        All Rights Reserved.

      </div>

    </footer>
  );
};

export default Footer;