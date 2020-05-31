import "./Header.css";

import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="mynavigation-bar" style={{ backgroundColor: "#000000" }}>
      <NavLink className="my-link item" to="/">
        <img src={require("../images/logo.png")} alt="logo" />
      </NavLink>
      <div className="ui inverted secondary pointing menu my-menu">
        <div className="right menu">
          <NavLink
            style={{ color: "white !important" }}
            exact
            className="my-link item"
            to="/"
          >
            SpaceX Missions
          </NavLink>
          <NavLink className="my-link item" to="/mars">
            Mars
          </NavLink>
          <NavLink className="my-link item" to="/about">
            About
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
