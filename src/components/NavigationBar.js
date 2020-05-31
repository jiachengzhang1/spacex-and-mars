import "./NavigationBar.css";

import React from "react";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  return (
    <div className="mynavigation-bar">
      <NavLink className="my-link item" to="/">
        <img src={require("../images/logo.png")} />
      </NavLink>
      <div class="ui inverted secondary pointing menu my-menu">
        <div class="right menu">
          <NavLink exact className="my-link item" to="/">
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
      <NavLink className="my-link" to="/">
        <img src={require("../images/logo.png")} />
      </NavLink>
    </div>
  );
};

export default NavigationBar;
