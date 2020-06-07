import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default class Header extends React.Component {
  state = { navExpanded: false };

  componentWillMount() {
    document.addEventListener("mousedown", this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClick, false);
  }

  handleClick = (e) => {
    if (!this.node.contains(e.target)) {
      this.closeNav();
    }
  };

  setNavExpanded = (expanded) => {
    this.setState({ navExpanded: expanded });
  };

  closeNav = () => {
    this.setState({ navExpanded: false });
  };

  constructNav(routes) {
    return (
      <Nav className="header-nav m-auto">
        {routes.map(({ name, route }, i) => (
          <NavLink
            key={i}
            onClick={this.closeNav}
            exact
            className="nav-link"
            to={route}
          >
            {name}
          </NavLink>
        ))}
      </Nav>
    );
  }

  render() {
    return (
      <Navbar
        ref={(node) => (this.node = node)}
        className="header-nav-bar"
        fixed="top"
        collapseOnSelect
        expand="md"
        variant="dark"
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <NavLink to="/">
            <img
              src={require("../images/logo.png")}
              style={{ height: "70px" }}
              alt="logo"
            ></img>
          </NavLink>
          {this.constructNav([
            { name: "SpaceX Missions", route: "/" },
            { name: "Mars", route: "/mars" },
            { name: "About", route: "/about" },
          ])}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
