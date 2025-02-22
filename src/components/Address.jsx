import { motion } from "framer-motion";
import "../../src/styles/Address.css";

const Address = () => {
  return (
    <section className="address-section">
      <motion.div 
        className="address-card glassmorphism"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="section-title">
          <i className="fas fa-map-marker-alt"></i>
          Location
        </h2>
        
        <motion.div 
          className="address-content"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          <a
            href="https://www.google.com/maps/search/?api=1&query=3%2F2+Second+Floor%2C+Kohli+Enclave%2C+Near+Sahibabad+Railway+Station%2C+Ghaziabad%2C+Uttar+Pradesh+-+201005"
            target="_blank"
            rel="noopener noreferrer"
            className="address-link"
          >
            <i className="fas fa-map-pin"></i>
            <div className="address-text">
              3/2 Second Floor, Kohli Enclave<br />
              Near Sahibabad Railway Station<br />
              Ghaziabad, Uttar Pradesh - 201005
            </div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Address;