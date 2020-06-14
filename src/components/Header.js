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
        expand="xl"
        variant="dark"
        onToggle={this.setNavExpanded}
        expanded={this.state.navExpanded}
      >
        <Navbar.Brand as={NavLink} to="/">
          SpaceX and Mars
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {this.constructNav([
            { name: "Future Missions", route: "/" },
            { name: "Past Missions", route: "/past-mission" },
            { name: "Mars", route: "/mars" },
            { name: "About", route: "/about" },
          ])}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
