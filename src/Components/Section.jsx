import React from "react";

const Section = ({ heading, l1, l2, section }) => {
  return (
    <section className={section}>
      <div className="container">
        <h3>{heading}</h3>
        <ul>
          <li>{l1}</li>
          <br />
          <li>{l2}</li>
        </ul>
      </div>
    </section>
  );
};

export default Section;
