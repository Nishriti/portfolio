// A simple list of what I can help with, shown as three cards.
// Each icon is a small inline SVG inside a gradient badge.
const services = [
  {
    name: "UI/UX Design",
    description: "Wireframes and interfaces designed in Figma, focused on clarity and how people use the product.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M20 4c-8 0-14 6-14 14 8 0 14-6 14-14z"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path d="M6 18l4-4" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    name: "Frontend Development",
    description: "Clean, responsive React builds that turn a design file into a fast, working site.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <polyline points="9 7 4 12 9 17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="14" y1="6" x2="10" y2="18" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" />
        <polyline points="15 7 20 12 15 17" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    name: "Brand & Visual Design",
    description: "Type, colour, and visual language that give a product a personality people remember.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none">
        <path
          d="M12 3a9 9 0 100 18c1.2 0 2-.9 2-2 0-.5-.2-1-.5-1.3-.3-.4-.5-.8-.5-1.2 0-.9.7-1.5 1.5-1.5H16a5 5 0 005-5c0-3.9-4-7-9-7z"
          stroke="#fff"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
        <circle cx="7.5" cy="11" r="1.1" fill="#fff" />
        <circle cx="10.5" cy="7.5" r="1.1" fill="#fff" />
        <circle cx="15" cy="8" r="1.1" fill="#fff" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="services">
      
      <h2 className="section-title">Our Services</h2>

      <div className="services-grid">
        {services.map((service) => (
          <div className="service-card" key={service.name}>
            <div className="service-icon-badge">{service.icon}</div>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}