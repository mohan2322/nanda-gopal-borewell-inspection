import "./index.css";

const Gallery = () => {
  return (
    <section className="gallery-section" id='gallery'>

      <div className="gallery-container">

        <span className="gallery-tag">
          Our Work
        </span>

        <h2>
          Gallery
        </h2>

        <p className="gallery-description">
          A glimpse of our borewell inspection work, equipment and field
          experience.
        </p>

        <div className="gallery-grid">

          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=700&q=80"
            alt="Gallery 1"
          />

          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=80"
            alt="Gallery 2"
          />

          <img
            src="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=700&q=80"
            alt="Gallery 3"
          />

          <img
            src="https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=700&q=80"
            alt="Gallery 4"
          />

          <img
            src="https://images.unsplash.com/photo-1499529112087-3cb3b73cec95?auto=format&fit=crop&w=700&q=80"
            alt="Gallery 5"
          />

          <img
            src="https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=700&q=80"
            alt="Gallery 6"
          />

        </div>

      </div>

    </section>
  );
};

export default Gallery;