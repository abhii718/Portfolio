import "../../src/styles/Education.css"; // Hum same CSS use kar rahe hain taaki layout match kare

const Experience = () => {
  return (
    <section className="edu-card glassmorphism">
      <h2 className="section-title">
        {/* Yahan graduation cap ki jagah briefcase icon lagaya hai */}
        <i className="fas fa-briefcase"></i> Experience
      </h2>

      <div className="timeline">

        {/* Tech Mahindra Experience */}
        <div className="timeline-item">
          <div className="edu-card-content">
            <h3>Customer Support Executive</h3>
            <p className="college-name">Tech Mahindra Ltd. | Noida, UP</p>
            <p className="highlight">January 8, 2026 - Present</p>
            
            <div style={{ marginTop: "15px", lineHeight: "1.8" }}>
              <p>• Managing live technical and operational interactions for a major e-commerce process.</p>
              <p>• Investigating and troubleshooting user application errors and payment gateway failures in real-time.</p>
              <p>• Navigating multiple CRM tools simultaneously to track customer data and maintain a high First Contact Resolution (FCR) rate.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Experience;
