// One project row inside the "Selected Work" section.
export default function ProjectCard({ project }) {
  const { name, tags, description, repoUrl } = project;

  return (
    <a className="project-card" href={repoUrl} target="_blank" rel="noopener noreferrer">
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="project-tags">
        {tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
      <span className="project-link">View on GitHub →</span>
    </a>
  );
}
