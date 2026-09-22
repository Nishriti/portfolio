// Bottom of the page: copyright on the left, quick links on the right.
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <p className="footer-copyright">© {new Date().getFullYear()} Nishriti Tamrakar</p>

        <nav className="footer-links">
          <a href="#about">About</a>
          <a href="#work">Work</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </footer>
  );
}