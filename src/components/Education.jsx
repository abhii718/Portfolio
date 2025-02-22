import "../../src/styles/Education.css";

const Education = () => {
  return (
    <section className="edu-card glassmorphism">
      <h2 className="section-title">
        <i className="fas fa-graduation-cap"></i> Education
      </h2>

      <div className="timeline">

        {/* BCA */}
        <div className="timeline-item">
          <div className="edu-card-content">
            <h3>Bachelor of Computer Applications (BCA)</h3>
            <p className="college-name">Mewar Institute of Management Vasundhara, Ghaziabad </p>
            <p className="highlight">2022-2025</p>
            <p >Expected month of completing graduation August b</p>
          </div>
        </div>
        <br />
        {/* 12th Grade */}
        <div className="timeline-item">
          <div className="edu-card-content">
            <h3>Senior Secondary (12th Grade, PCM)</h3>
            <p className="college-name">BSRK Inter College</p>
            <p className="highlight">2020-2022</p>
            <p>Completed 12th with <strong>70.4% (352/500)</strong>.</p>

            <table className="edu-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Physics</td><td>75</td></tr>
                <tr><td>Chemistry</td><td>75</td></tr>
                <tr><td>Mathematics</td><td>48</td></tr>
                <tr><td>English</td><td>76</td></tr>
                <tr><td>Physical Education</td><td>78</td></tr>
              </tbody>
            </table>
          </div>
        </div>
        <br />
        {/* 10th Grade */}
        <div className="timeline-item">
          <div className="edu-card-content">
            <h3>Secondary (10th Grade)</h3>
            <p className="college-name">BSRK Inter College</p>
            <p className="highlight">2019-2020</p>
            <p>Completed 10th with <strong>73.5%(441/600)</strong>.</p>

            <table className="edu-table">
              <thead>
                <tr>
                  <th>Subject</th>
                  <th>Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Hindi</td><td>83</td></tr>
                <tr><td>English</td><td>90</td></tr>
                <tr><td>Mathematics</td><td>63</td></tr>
                <tr><td>Science</td><td>70</td></tr>
                <tr><td>Social Science</td><td>69</td></tr>
                <tr><td>Drawing</td><td>66</td></tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Education;
