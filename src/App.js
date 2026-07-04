import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyInspection from "./components/WhyInspection";
import Services from "./components/Services";
import Pricing from "./components/Pricing";
import About from "./components/About";
import Equipment from "./components/Equipment";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Hero/>
      <WhyInspection />
      <Services/>
      <Pricing/>
      <About/>
      <Equipment/>
      <Gallery/>
      <Testimonials/>
      <FAQ/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;