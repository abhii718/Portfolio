// Projects.jsx
import { useState } from 'react';
import '../../src/styles/Project.css';
import ProjectCard from './ProjectCard';

const Projects = () => {
  const [activeCard, setActiveCard] = useState(null);

  const projects = [
    {
      title: "Amazon Clone",
      description: "Full-stack e-commerce replica with real payment integration",
      tech: ["Next", "React", "Redux", "Tailwind"],
      demo: "https://amazon-clone-abhii.vercel.app/",
      github: "https://github.com/abhii718/amazon",
      image: "assets/amazon.png",
    },
    {
      title: "Smart Calculator",
      description: "Interactive calculator with modern UI & advanced features",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demo: "https://abhii718.github.io/Project-Calculator/",
      github: "https://github.com/abhii718/Project-Calculator",
      image: "/assets/calculator.png",
    },
    {
      title: "Currency Converter",
      description: "Real-time currency converter with exchange rate API integration",
      tech: ["HTML5", "CSS3", "JavaScript", "API"],
      demo: "https://abhii718.github.io/Project-CurrConverter/",
      github: "https://github.com/abhii718/Project-CurrConverter",
      image: "/assets/currency.png",
    },
    {
      title: "Guess The Number",
      description: "A fun game to guess the number with hints and score tracking",
      tech: ["HTML5", "CSS3", "JavaScript"],
      demo: "https://abhii718.github.io/guessthenumber/",
      github: "https://github.com/abhii718/guessthenumber",
      image: "/assets/guessthenumber.png", // Ensure this path is correct
    }
  ];

  return (
    <section className="projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            project={project}
            index={index}
            activeCard={activeCard}
            setActiveCard={setActiveCard}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;