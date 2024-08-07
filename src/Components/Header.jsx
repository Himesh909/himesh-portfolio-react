import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <nav className="navigation top">
        <div className="nav-heading">
          <div className="name-link">Himesh Khatri</div>
          <img className="lang-img menu" src="Images/menu-svgrepo-com.svg" />
        </div>
        <ul className="nav-pills">
          <li className="list-item-inline">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="list-item-inline">
            <NavLink className="link" to="/achievements">
              Achievements
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
