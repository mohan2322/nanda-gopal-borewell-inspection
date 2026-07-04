import "./index.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">

        <div className="logo-section">
          <div className="logo-circle">
            NG
          </div>

          <div className="logo-text">
            <h2>Nanda Gopal</h2>
            <p>Borewell Inspection</p>
          </div>
        </div>

        <ul className="nav-links">
          <li ><a href="#home">Home</a></li>
          <li><a href="#why">Why Inspection</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#gallery">Gallery</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        <a href="tel:+919845680344" className="primary-btn">
              📞 Call Now
            </a>

      </div>
    </nav>
  );
};

export default Navbar;