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
  
];

export default function Services() {
  return (
    <section id="services" className="services">
      
      <h2 className="section-title">Skills</h2>

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