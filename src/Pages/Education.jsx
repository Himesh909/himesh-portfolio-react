import React from "react";
import Header from "../Components/Header";
import Footer from "../Components/Footer";

const Education = () => {
  return (
    <React.Fragment>
      <Header />
      <div className="ach-main">
        <h1>MarkSheet</h1>
        <div className="ach-container">
          <div className="ach-section">
            <img src="Certificate/Education/10th-MarkSheet.jpg" />
            <h3>10th MarkSheet</h3>
          </div>
          <div className="ach-section">
            <img src="Certificate/Education/Sem-1 MarkSheet.jpg" />
            <h3>Semester-1 MarkSheet</h3>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default Education;
