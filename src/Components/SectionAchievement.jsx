import React from "react";
import { NavLink } from "react-router-dom";

const SectionAchievement = ({ heading, l1 }) => {
  return (
    <section className="section">
      <div className="container">
        <h3>{heading}</h3>
        <ul>
          <li>{l1}</li>
          <br />
          <div className="container-btn">
            <NavLink className="primary-link ancor" to="/achievements">
              Achievements
            </NavLink>
          </div>
        </ul>
      </div>
    </section>
  );
};

export default SectionAchievement;
