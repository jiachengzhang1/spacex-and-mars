import React from "react";
import {
    FaLaptopCode,
    FaInstagram,
    FaTwitter,
    FaFacebook,
    FaYoutube,
} from "react-icons/fa";
import { IconContext } from "react-icons";
import Histogram from "./AHistogram";

const SpaceX = ({ className }) => {
    return (
        <div className={`spacex-img ${className}`}>
            <Histogram />
            <p>
                SpaceX designs, manufactures and launches advanced rockets and
                spacecraft. The company was founded in 2002 to revolutionize
                space technology, with the ultimate goal of enabling people to
                live on other planets.
            </p>
            <p>
                <span>
                    <b>CEO: </b>
                </span>
                <span>Elon Musk</span>,{" "}
                <span>
                    <b>COO: </b>
                </span>
                <span>Gwynne Shotwell</span>
            </p>
            <div
                id="carouselExampleControls"
                className="carousel slide"
                data-ride="carousel"
            >
                <div className="carousel-inner mb-3">
                    <div className="carousel-item active" data-interval="10000">
                        <div className="">
                            <h3>LAUNCH STATISTICS</h3>
                            <Histogram />
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="10000">
                        <div className="">
                            <h3>STARLINK STATISTICS</h3>
                        </div>
                    </div>
                    <div className="carousel-item" data-interval="10000">
                        <div className="">
                            <h3>ROCKET STATISTICS</h3>
                        </div>
                    </div>
                </div>
                <a
                    className="carousel-control-prev"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a
                    className="carousel-control-next"
                    href="#carouselExampleControls"
                    role="button"
                    data-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
            <a
                href="https://www.facebook.com/spacenewsx/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <IconContext.Provider value={{ color: "#3b5998" }}>
                    <FaFacebook />
                </IconContext.Provider>
            </a>
            <a
                href="https://www.instagram.com/spacex/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <IconContext.Provider
                    value={{ color: "#fbad50" }}
                ></IconContext.Provider>
                <FaInstagram />
            </a>
            <a
                href="https://www.youtube.com/spacex"
                rel="noopener noreferrer"
                target="_blank"
            >
                <IconContext.Provider value={{ color: "#c4302b" }}>
                    <FaYoutube />
                </IconContext.Provider>
            </a>
            <a
                href="https://twitter.com/SpaceX"
                rel="noopener noreferrer"
                target="_blank"
            >
                <IconContext.Provider value={{ color: "#0084b4" }}>
                    <FaTwitter />
                </IconContext.Provider>
            </a>
            <a
                href="https://www.spacex.com/"
                rel="noopener noreferrer"
                target="_blank"
            >
                <IconContext.Provider value={{ color: "#005288" }}>
                    <FaLaptopCode />
                </IconContext.Provider>
            </a>
        </div>
    );
};

export default SpaceX;
