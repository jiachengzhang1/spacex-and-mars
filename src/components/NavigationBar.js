import "./NavigationBar.css";
import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="mynavigation-bar">
      <Navbar
        className="mynav-bar nav-bar"
        fixed="top"
        collapseOnSelect
        expand="xl"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink to="/">
            <img
              src={require("../images/logo.png")}
              style={{ height: "70px" }}
              alt=""
            ></img>
          </NavLink>
          <Nav className="mynav nav m-auto">
            <NavLink exact className="mynav-link nav-link" to="/">
              SpaceX Missions
            </NavLink>
            <NavLink exact className="mynav-link nav-link" to="/mars">
              Mars
            </NavLink>
            {/* <NavLink exact className="nav-link" to="/rockets">
              Rockets
            </NavLink>
            <NavLink exact className="nav-link" to="/spaceships">
              Spaceships
            </NavLink> */}
            <NavLink exact className="mynav-link nav-link" to="/about">
              About
            </NavLink>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
