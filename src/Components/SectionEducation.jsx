import React from "react";

const SectionEducation = ({ heading, l1, l2, l3 }) => {
  return (
    <section>
      <div className="container">
        <h3>{heading}</h3>
        <ul>
          <li>{l1}</li>
          <br />
          <li>{l2}</li>
          <br />
          <li>{l3}</li>
        </ul>
      </div>
    </section>
  );
};

export default SectionEducation;
