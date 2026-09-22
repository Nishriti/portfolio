import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import About from "../components/About.jsx";
import SelectedWork from "../components/SelectedWork.jsx";
import Services from "../components/Services.jsx";
import Contact from "../components/Contact.jsx";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <>
      {/* Fixed background — stays in place while the page scrolls */}
      <div className="page-background" aria-hidden="true" />

      <Navbar />
      <main>
        <Hero />
        <About />
        <SelectedWork />
        <Services />
        <Contact />
      </main>
      <Footer />
    </>
  );
}