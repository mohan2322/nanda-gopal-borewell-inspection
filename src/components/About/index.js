import "./index.css";

const About = () => {
  return (
    <section className="about-section" id='about'>

      <div className="about-container">

        <div className="about-image">

          <img
            src="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=900&q=80"
            alt="Farmer"
          />

        </div>

        <div className="about-content">

          <span>About Our Founder</span>

          <h2>
            A Farmer Helping Fellow Farmers
          </h2>

          <p>
            Nanda Gopal is a dedicated farmer who understands the importance of
            every rupee invested in agriculture.
          </p>

          <p>
            After seeing many people invest huge amounts on borewell motors,
            cables and installations without knowing the actual borewell
            condition, he started providing professional borewell inspection
            services.
          </p>

          <p>
            With more than <strong>5 years of practical field experience</strong>,
            he has helped hundreds of customers inspect their borewells,
            identify water-bearing fractures, estimate water availability and
            decide the right depth for motor installation.
          </p>

          <p>
            His mission is simple:
            <strong>
              {" "}
              Help farmers make informed decisions before investing their
              hard-earned money.
            </strong>
          </p>

        </div>

      </div>

    </section>
  );
};

export default About;