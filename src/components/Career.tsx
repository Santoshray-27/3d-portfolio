import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Development</h4>
                <h5>Self-Driven Projects</h5>
              </div>
              <h3>PRESENT</h3>
            </div>
            <p>
              Engineering a suite of production-ready MERN applications. Deep-diving into 
              RESTful API design, database optimization, and secure authentication protocols.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech Computer Science</h4>
                <h5>PIEMR, Indore</h5>
              </div>
              <h3>2024–28</h3>
            </div>
            <p>
              Currently pursuing a B.Tech in Computer Science, maintaining a strong focus 
              on core engineering principles, algorithms, and full-stack development.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Exploration</h4>
                <h5>Foundational Phase</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Started the journey into web technologies, mastering HTML, CSS, and 
              JavaScript before transitioning into the modern React ecosystem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
