// The introduction section at the top of the page.
// The purple/blue glow and stars are done with plain CSS (see index.css).
export default function Hero() {
  return (
    <section id="home" className="hero">
      <p className="hero-greeting">Hi, this is</p>
      <h1 className="hero-name">Nishriti Tamrakar</h1>
      <p className="hero-tagline">Crafting narrative through design</p>

      <div className="hero-roles">
        <span>Web Developer</span>
        <span>UI/UX Designer</span>
        <span>Brand Identity</span>
      </div>
    </section>
  );
}
