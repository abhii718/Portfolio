import { useState } from 'react';
import '../../src/styles/Project.css';
// import image

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const projects = [
    {
      title: "Amazon Clone",
      description: "Full-stack e-commerce replica with real payment integration",
      tech: ["Next", "React", "Redux", "Tailwind"],
      demo: "https://amazon-clone-abhii.vercel.app/",
      github: "https://github.com/abhii718/amazon",
      // Choose one of these image solutions:
      image: "/images/amazon.png",
      // Placeholder
      // image: "https://raw.githubusercontent.com/abhii718/amazon/main/screenshot.png", // GitHub image
      // image: "https://undraw.co/svg/illustrations/ecommerce.svg", // Undraw illustration
    },
    {
      title: "Smart Calculator",
      description: "Interactive calculator with modern UI & advanced features",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demo: "https://abhii718.github.io/Project-Calculator/",
      github: "https://github.com/abhii718/Project-Calculator",
      // Choose one of these image solutions:
      image: "/images/calculator.png",
      // Placeholder
      // image: "https://raw.githubusercontent.com/abhii718/Project-Calculator/main/screenshot.png", // GitHub image
      // image: "https://undraw.co/svg/illustrations/math.svg", // Undraw illustration
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${activeCard === index ? 'active' : ''}`}
            onMouseEnter={() => setActiveCard(index)}
            onMouseLeave={() => setActiveCard(null)}
          >
            <div className="card-gradient"></div>

            <div className="card-content">
              <div className="image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = `https://placehold.co/600x400/1a202c/EDF2F7?text=${encodeURIComponent(project.title)}`;
                  }}
                />
              </div>

              {/* Rest of the card content remains same */}
              <h3 className="project-title">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {project.title}
                </a>
              </h3>

              <p className="project-description">{project.description}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i} className="tech-item">
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="demo-button"
                >
                  Live Demo
                  <svg className="link-icon">
                    <path d="M14 3v4a1 1 0 0 0 1 1h4M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-8m-16-5h5m5 0h5m-12 2h10m-10 3h10m-10 3h5" />
                  </svg>
                </a>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="github-button"
                >
                  Source Code
                  <svg className="github-icon">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;