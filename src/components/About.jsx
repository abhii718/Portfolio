import { useState } from 'react';
import "../../src/styles/About.css";

const About = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="about-section">
      <div 
        className={`about-card ${isHovered ? 'active' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="card-gradient"></div>
        
        <div className="card-content">
          <h2 className="section-title">
            <i className="fas fa-user"></i>
            About Me
          </h2>
          
          <p className="about-description">
            A dedicated BCA student with expertise in C, JavaScript, and web development.
            Passionate about problem-solving and creating innovative solutions.
          </p>

          <div className="tech-stack">
            <span className="tech-item">C Programming</span>
            <span className="tech-item">JavaScript</span>
            <span className="tech-item">React</span>
            <span className="tech-item">Web Development</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;