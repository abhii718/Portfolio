import "../../src/styles/skill.css"

const Skill = () => {
  const skill = [
    // Top Priority: Corporate & Tech Support Skills
    { name: "IT Troubleshooting", color: "#ff6b6b" },
    { name: "Technical Support", color: "#0abde3" },
    { name: "CRM Management", color: "#feca57" },
    { name: "Customer Experience (CX)", color: "#9b59b6" },
    
    // Technical Foundation: Web Skills
    { name: "HTML & CSS", color: "#ee5253" },
    { name: "JavaScript", color: "#a1d6e2" },
    { name: "React.js", color: "#4ecdc4" }
  ];

  return (
    <section className="skills-card glassmorphism">
      <h2><i className="fas fa-laptop-code"></i> Skills</h2>
      <div className="skills-grid">
        {skill.map((skill, index) => (
          <div key={index} className="skill" style={{ borderColor: skill.color }}>
            {skill.name}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skill;
