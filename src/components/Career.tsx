import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> Experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Web Development Intern</h4>
                <h5>Ontum</h5>
              </div>
              <h3>RECENT</h3>
            </div>
            <p>
              Gained practical, hands-on experience in Java Full Stack web development, actively building robust full stack applications.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications</h4>
                <h5>BCA Student</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Enthusiastic and self-motivated BCA student with hands-on experience in full stack web development, eager to contribute technical expertise to dynamic IT environments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
