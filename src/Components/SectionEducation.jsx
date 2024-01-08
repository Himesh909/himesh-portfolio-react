import React from "react";
import { NavLink } from "react-router-dom";

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
          <br />
          <div className="container-btn">
            <NavLink className="secondary-link ancor" to="/education">
              Education
            </NavLink>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default SectionEducation;
