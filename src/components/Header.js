import React from "react";
import { FaBars } from "react-icons/fa";
import { IconContext } from "react-icons";
import { Link } from "react-router-dom";

const Header = () => {
    const dropdownItems = [
        { name: "WEATHER ON MARS", url: "/rover" },
        { name: "STARSHIP", url: "/starship" },
    ];
    return (
        <header>
            <nav className="navbar navbar-expand-lg fixed-top">
                <Link className="navbar-brand mr-5" to="/">
                    SPACEX AND MARS
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavDropdown"
                    aria-controls="navbarNavDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <IconContext.Provider value={{ className: "bars-icon" }}>
                        <div>
                            <FaBars />
                        </div>
                    </IconContext.Provider>
                </button>
                <div
                    className="collapse navbar-collapse"
                    id="navbarNavDropdown"
                >
                    <ul className="navbar-nav">
                        {getNavItem("HOME", "/")}
                        {/* {getNavItem("STARLINK", "/starlink")} */}
                        {/* {getNavDropdown("MARS", dropdownItems)} */}
                        {getNavItem("MARS", "/mars")}
                        {getNavItem("NEWS", "/news")}
                    </ul>
                </div>
            </nav>
        </header>
    );
};

function getNavItem(name, url) {
    return (
        <li className="nav-item">
            <Link className="nav-link mr-5" to={url}>
                {name}
            </Link>
        </li>
    );
}

function getNavDropdown(name, items) {
    const itemElements = items.map(({ name, url }) => {
        return (
            <Link className="dropdown-item" to={url} key={name}>
                {name}
            </Link>
        );
    });
    return (
        <li className="nav-item dropdown mr-5">
            <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
            >
                {name}
            </a>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                {itemElements}
            </div>
        </li>
    );
}

export default Header;
