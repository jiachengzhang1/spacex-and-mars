import React from "react";
import { Link } from "gatsby";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./header.scss";

export default class Header extends React.Component {
  state = { navExpanded: false };

  componentWillMount() {
    if (typeof document !== "undefined") {
      document.addEventListener("mousedown", this.handleClick, false);
    }
  }

  componentWillUnmount() {
    if (typeof document !== "undefined") {
      document.removeEventListener("mousedown", this.handleClick, false);
    }
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
    if (typeof window !== "undefined") {
      // const path = window.location.href.toString().split("/")[3].toLowerCase();
      // console.log(path);

      return (
        <Nav className="header-nav m-auto">
          {routes.map(({ name, route }, i) => (
            <Link
              key={i}
              onClick={this.closeNav}
              className={`nav-link `}
              activeClassName="active-nav-link"
              to={route}
            >
              {name}
            </Link>
          ))}
        </Nav>
      );
    }
    return null;
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
        <Navbar.Brand as={Link} to="/">
          <h1>SpaceX and Mars</h1>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {this.constructNav([
            { name: "Future Missions", route: "/" },
            { name: "Past Missions", route: "/pastMissions" },
            { name: "Mars", route: "/mars" },
            { name: "About", route: "/about" },
          ])}
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
