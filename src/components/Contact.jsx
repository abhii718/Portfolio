// import "./Contact.css";
import resume from "../assets/resume.pdf";

const Contact = () => {
  return (
    <section className="contact-card glassmorphism">
      <h2><i className="fas fa-paper-plane"></i> Let's Connect</h2>
      <a href="mailto:abhinaysingh47639@gmail.com" className="contact-btn">
        <i className="fas fa-envelope"></i> Email Me
      </a>
      <a href="https://www.linkedin.com/in/abhisingh3/" className="contact-btn">
        <i className="fab fa-linkedin"></i> LinkedIn
      </a>
      <a href="https://github.com/abhii718" className="contact-btn">
        <i className="fab fa-github"></i> GitHub
      </a>
      <a href={resume} download className="contact-btn">
        <i className="fas fa-download"></i> Resume
      </a>
    </section>
  );
};

export default Contact;
