import React from "react";
import { NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <header className="hero">
      <img className="hero-img" src="Images/Himesh1-1.png" />
      <div className="hero-div">
        <h1 className="hero-heading">Khatri Himesh SohilKumar</h1>
        <p>
          I am a Student who is on the way of being a Full Stack Developer
          <br />
          <br />
          Date of Birth: 16/10/2006
          <br />
          ~~ Believe in Honesty
        </p>
        <section>
          <div className="hero-btn">
            <NavLink className="primary-link ancor" to="/achievements">
              Achievements
            </NavLink>
            <NavLink className="secondary-link ancor" to="/education">
              Education
            </NavLink>
          </div>
        </section>
      </div>
    </header>
  );
};

export default Hero;
