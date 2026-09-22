// A short introduction about me.
import profilePic from "../assets/images/profile-pic.png";
import aboutElement1 from "../assets/images/about-element-1.png";
import aboutElement2 from "../assets/images/about-element-2.png";
export default function About() {
  return (
    <section id="about" className="about">
      <div className="about-grid">
  <div className="about-copy">
    <h2 className="section-title">About Me</h2>

    <p className="about-text">
      I'm Nishriti, a BSc (Hons) Computing student at Islington College who enjoys
      the mix of design and code. I like building responsive, easy-to-use interfaces —
      from prototyping in Figma to bringing them to life with HTML, CSS, and React.
      I'm always learning new tools and looking for ways to make my work more polished.
    </p>
  </div>

  <div className="about-photo-wrap">
    <img
      src={aboutElement1}
      alt=""
      className="about-element about-element-1"
      aria-hidden="true"
    />
    <img
      src={aboutElement2}
      alt=""
      className="about-element about-element-2"
      aria-hidden="true"
    />
    <img src={profilePic} alt="Nishriti" className="about-photo" />
  </div>
</div>
    </section>
  );
}
