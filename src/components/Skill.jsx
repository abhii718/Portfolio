import "../../src/styles/skill.css"

const Skill = () => {
  const skill = [
    { name: "C", color: "#1995ad" },
    { name: "JavaScript", color: "#a1d6e2" },
    { name: "React.js", color: "#4ecdc4" },
    { name: "Node.js", color: "#ff9f43" },
    { name: "MongoDB", color: "#5f27cd" },
    { name: "HTML & CSS", color: "#ee5253" },
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

export default Skill;;
