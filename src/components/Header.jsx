import { motion } from "framer-motion";
import "../../src/styles/Header.css";

const Header = () => {
  return (
    <motion.header 
      className="header"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-content">
        <motion.div 
          className="profile-container"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <div className="profile-glow" />
          <img 
            src="/assets/your-photo.jpg" 
            alt="Abhinay Singh" 
            className="profile-img"
          />
        </motion.div>

        <div className="header-text">
          <motion.h1 
            className="name-title"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Abhinay Singh
            <span className="status-dot" />
          </motion.h1>
          
          <motion.div 
            className="tagline"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="tagline-part">Aspiring Web Developer</span>
            <div className="animated-divider" />
            <span className="tagline-part">Turning Code into Solutions</span>
          </motion.div>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;