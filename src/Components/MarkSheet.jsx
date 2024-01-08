import React from "react";

const Marksheet = [
  {
    id: 1,
    src: "Certificate/Education/10th-MarkSheet.jpg",
    heading: "10th MarkSheet",
  },
  {
    id: 1,
    src: "Certificate/Education/Sem-1 MarkSheet.jpg",
    heading: "Semester-1 MarkSheet",
  },
];

const MarkSheet = () => {
  return (
    <>
      <div className="ach-main">
        <h1>MarkSheet</h1>
        <div className="ach-container">
          {Marksheet.map((value) => {
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

export default MarkSheet;
