import React from "react";

const TCS = [
  {
    id: 1,
    src: "Certificate/TCS/Email-Etiqutte.jpg",
    heading: "Email Etiqutte",
  },
  {
    id: 2,
    src: "Certificate/TCS/Interview-Skill.jpg",
    heading: "Interview Skills",
  },
];

const CuriousJr = [
  {
    id: 1,
    src: "Certificate/Curious Jr/Completion-1.jpg",
    heading: "Basics of Computer",
  },
  {
    id: 2,
    src: "Certificate/Curious Jr/Completion-2.jpg",
    heading: "Block Coding",
  },
  {
    id: 3,
    src: "Certificate/Curious Jr/Completion-3.jpg",
    heading: "Python Developer",
  },
  {
    id: 4,
    src: "Certificate/Curious Jr/Code-Completion-1.jpg",
    heading: "JavaScript Competition - The Circle Problem",
  },
  {
    id: 5,
    src: "Certificate/Curious Jr/Code-Completion-2.jpg",
    heading: "Blocky Competition - The Union Challenge",
  },
  {
    id: 6,
    src: "Certificate/Curious Jr/Code-Completion-3.jpg",
    heading: "Blocky Competition - The Vacation Challenge",
  },
];

const Certificate = () => {
  return (
    <>
      <div className="ach-main">
        <h1>Tata Consultancy Service Certicifates</h1>
        <div className="ach-container">
          {TCS.map((value) => {
            return (
              <div className="ach-section" key={value.index}>
                <img src={value.src} />
                <h3>{value.heading}</h3>
              </div>
            );
          })}
        </div>
      </div>

      <div className="ach-main">
        <h1>Curious Junior Certificates</h1>
        <div className="ach-container">
          {CuriousJr.map((value) => {
            return (
              <div className="ach-section" key={value.id}>
                <img src={value.src} />
                <h3>{value.heading}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Certificate;
