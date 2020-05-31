import "./Header.css";
import React from "react";
import { NavLink } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

class Header extends React.Component {
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

  render() {
    return (
      <div ref={(node) => (this.node = node)} className="header-navigation-bar">
        <Navbar
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
            <Nav className="header-nav m-auto">
              <NavLink
                onClick={this.closeNav}
                exact
                className="nav-link"
                dataToggle="collapse"
                to="/"
              >
                SpaceX Missions
              </NavLink>
              <NavLink
                onClick={this.closeNav}
                exact
                className="nav-link"
                to="/mars"
              >
                Mars
              </NavLink>
              <NavLink
                onClick={this.closeNav}
                exact
                className="nav-link"
                to="/about"
              >
                About
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Header;
