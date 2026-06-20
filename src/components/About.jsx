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
         A dedicated Tech Professional with a Bachelor of Computer Applications (BCA) and active expertise in web development. I have a strong command over C, JavaScript, and React. Passionate about problem-solving, I am currently applying my analytical and technical troubleshooting skills in corporate client operations to deliver innovative and effective solutions.
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
