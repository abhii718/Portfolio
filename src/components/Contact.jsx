import { motion } from "framer-motion";
import "../../src/styles/Contact.css";
import resume from "../assets/resume.pdf";

const Contact = () => {
  const buttonVariants = {
    hover: { scale: 1.05, y: -2 },
    tap: { scale: 0.95 }
  };

  return (
    <section className="contact-section">
      <div className="contact-card glassmorphism">
        <h2 className="section-title">
          <i className="fas fa-paper-plane"></i>
          Let's Connect
        </h2>
        
        <div className="contact-grid">
          <motion.a
            href="mailto:abhinaysingh47639@gmail.com"
            className="contact-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <i className="fas fa-envelope"></i>
            <span>Email Me</span>
          </motion.a>

          <motion.a
            href="https://www.linkedin.com/in/abhisingh3/"
            className="contact-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <i className="fab fa-linkedin"></i>
            <span>LinkedIn</span>
          </motion.a>

          <motion.a
            href="https://github.com/abhii718"
            className="contact-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <i className="fab fa-github"></i>
            <span>GitHub</span>
          </motion.a>

          <motion.a
            href={resume}
            download
            className="contact-btn"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            <i className="fas fa-download"></i>
            <span>Resume</span>
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Contact;