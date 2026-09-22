import { useState } from "react";
import projects from "../assets/projects.js";
import ProjectCard from "./ProjectCard.jsx";

export default function SelectedWork() {
  const [index, setIndex] = useState(0);

  function showPrevious() {
    setIndex((current) => (current === 0 ? projects.length - 1 : current - 1));
  }

  function showNext() {
    setIndex((current) => (current === projects.length - 1 ? 0 : current + 1));
  }

  return (
    <section id="work" className="work">
      <h2 className="section-title">Selected Work</h2>
      <p className="section-subtitle">
        A few projects from my coursework — click one to see the code on GitHub.
      </p>

      <div className="carousel">
        <button className="carousel-arrow" onClick={showPrevious} aria-label="Previous project">
          ‹
        </button>

        <ProjectCard project={projects[index]} />

        <button className="carousel-arrow" onClick={showNext} aria-label="Next project">
          ›
        </button>
      </div>

      <div className="carousel-dots">
        {projects.map((project, i) => (
          <button
            key={project.id}
            className={i === index ? "active" : ""}
            onClick={() => setIndex(i)}
            aria-label={`Show project ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}