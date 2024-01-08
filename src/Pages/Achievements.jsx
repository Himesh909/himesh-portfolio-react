import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Achievements = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="ach-main">
        <h1>Tata Consultancy Service Certicifates</h1>
        <div className="ach-container">
          <div className="ach-section">
            <img src="Certificate/TCS/Email-Etiqutte.jpg" />
            <h3>Email Etiqutte</h3>
          </div>
          <div className="ach-section">
            <img src="Certificate/TCS/Interview-Skill.jpg" />
            <h3>Interview Skills</h3>
          </div>
        </div>
      </div>

      <div className="ach-main">
        <h1>Curious Junior Certificates</h1>
        <div className="ach-container">
          <div className="ach-section">
            <img src="Certificate/Curious Jr/Completion-1.jpg" />
            <h3>Basics of Computer</h3>
          </div>
          <div className="ach-section">
            <img src="Certificate/Curious Jr/Completion-2.jpg" />
            <h3>Block Coding</h3>
          </div>
          <div className="ach-section">
            <img src="Certificate/Curious Jr/Completion-3.jpg" />
            <h3>Python Developer</h3>
          </div>
          <div className="ach-section">
            <img src="Certificate/Curious Jr/Code-Completion-1.jpg" />
            <h3>JavaScript Competition - The Circle Problem</h3>
          </div>
          <div className="ach-section">
            <img src="Certificate/Curious Jr/Code-Completion-2.jpg" />
            <h3>Blocky Competition - The Union Challenge</h3>
          </div>
          <div className="ach-section">
            <img src="Certificate/Curious Jr/Code-Completion-3.jpg" />
            <h3>Blocky Competition - The Vacation Challenge</h3>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Achievements;
