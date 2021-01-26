import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Tweet } from "react-twitter-widgets";
import Countdown from "../components/Countdown";
const Starship = () => {
    return (
        <div>
            <h1>MARS</h1>
            <div className="weather-on-mars">
                <h2>NASA MARS 2020 MISSION</h2>
                <div className="row">
                    <div className="col-md">
                        <h3>Countdown</h3>
                        <Countdown
                            date={new Date("Thu Feb 18 2021 12:55:00 GMT-0800")}
                        />
                        <p>
                            <a href="https://mars.nasa.gov/mars2020/timeline/landing/watch-online/">
                                UPCOMING EVENTS
                            </a>
                        </p>
                    </div>
                    <div className="col-md">
                        <h3>QUICK FACTS</h3>
                        <div className="row">
                            <div className="col">
                                <h5>Launch</h5>
                                <p>July 30, 2020</p>
                            </div>
                            <div className="col">
                                <h5>Landing</h5>
                                <p>Feb. 18, 2021</p>
                            </div>
                            <div className="col">
                                <h5>Landing Site</h5>
                                <p>Jezero Crater, Mars</p>
                            </div>
                        </div>

                        <h5>Main Task</h5>
                        <p>
                            Seek signs of ancient life and collect samples of
                            rock and regolith (broken rock and soil) for
                            possible return to Earth.{" "}
                            <a href="https://mars.nasa.gov/mars2020/">
                                NASA Mars 2020 Mission
                            </a>
                        </p>
                    </div>
                </div>
                <h3>LANDING DEMO</h3>
                <div className="row">
                    <div className="col-lg">
                        <iframe
                            className="embed-responsive embed-responsive-16by9"
                            // width="560"
                            height="350"
                            src="https://www.youtube.com/embed/tITni_HY1Bk?autoplay=1&cc_load_policy=1"
                            frameborder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowfullscreen
                        ></iframe>
                    </div>
                    <div className="col-lg">
                        <h3>
                            Perseverance Rover{" "}
                            <span>
                                <a href="https://mars.nasa.gov/mars2020/spacecraft/rover/">
                                    3D Model from NASA
                                </a>
                            </span>
                        </h3>
                        <p>
                            Perseverance will investigate an astrobiologically
                            relevant ancient environment on Mars and investigate
                            its surface geological processes and history,
                            including the assessment of its past habitability,
                            the possibility of past life on Mars, and the
                            potential for preservation of biosignatures within
                            accessible geological materials. It will cache
                            sample containers along its route for retrieval by a
                            potential future Mars sample-return mission.{" "}
                            <a href="https://en.wikipedia.org/wiki/Mars_2020">
                                wikipedia
                            </a>
                        </p>
                        <h3>
                            Ingenuity Helicopter{" "}
                            <span>
                                <a href="https://mars.nasa.gov/resources/25043/mars-ingenuity-helicopter-3d-model/">
                                    3D Model from NASA
                                </a>
                            </span>
                        </h3>
                        <p>
                            Mars Helicopter Ingenuity is a robotic helicopter
                            that is planned to be used to test the technology to
                            scout targets of interest on Mars, and help plan the
                            best driving route for future Mars rovers.{" "}
                            <a href="https://en.wikipedia.org/wiki/Mars_Helicopter_Ingenuity">
                                wikipedia
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="starship">
                <h2 class="card-title">SPACEX STARSHIP</h2>
                <h5>
                    UPCOMING EVENT: STARSHIP SN9 12.5km TEST FLIGHT (TIME: TBD)
                </h5>
                <div className="row">
                    <div className="col-lg">
                        <p>
                            Starship and Super Heavy Rocket represent a fully
                            reusable transportation system designed to service
                            all Earth orbit needs as well as the Moon and Mars.
                            This two-stage vehicle — composed of the Super Heavy
                            rocket (booster) and Starship (ship) — will
                            eventually replace Falcon 9, Falcon Heavy and
                            Dragon.{" "}
                            <a href="https://en.wikipedia.org/wiki/SpaceX_Starship">
                                Wikipedia
                            </a>
                        </p>
                    </div>
                    <div className="col-lg">
                        <table>
                            <thead>
                                <tr>
                                    <th>LENGTH</th>
                                    <th>DIAMETER</th>
                                    <th>EMPTY MASS</th>
                                    <th>GROSS MASS</th>
                                    <th>FUEL MASS</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>50 m</td>
                                    <td>9 m</td>
                                    <td>120 TONS</td>
                                    <td>1,320 TONS</td>
                                    <td>1,200 TONS</td>
                                </tr>
                            </tbody>
                        </table>
                        <table>
                            <thead>
                                <tr>
                                    <th>THRUST</th>
                                    <th>REUSABLE</th>
                                    <th># ENGINES</th>
                                    <th>SPECIFIC IMPULSE</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>12,000 kN</td>
                                    <td>YES</td>
                                    <td>6 RAPTORS</td>
                                    <td>380 s (3.7 km/s) (vacuum)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <h3>Past Events</h3>
                <div>
                    <h4>STARSHIP SN8 12.5km TEST FLIGHT</h4>
                    <div className="row">
                        <div className="col-md">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/_qwLHlVjRyw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md">
                            <p>
                                On December 9, 2020, Starship serial number 8
                                (SN8) completed a high-altitude flight test as
                                it successfully ascended, transitioned
                                propellant, and demonstrated a first-of-its-kind
                                controlled aerodynamic descent and landing flip
                                maneuver – which will enable landing where
                                prepared surfaces or runways do not exist,
                                including the Moon, Mars, and beyond.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h4>STARSHIP SN8 12.5km TEST FLIGHT</h4>
                    <div className="row">
                        <div className="col-md">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/_qwLHlVjRyw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md">
                            <p>
                                On December 9, 2020, Starship serial number 8
                                (SN8) completed a high-altitude flight test as
                                it successfully ascended, transitioned
                                propellant, and demonstrated a first-of-its-kind
                                controlled aerodynamic descent and landing flip
                                maneuver – which will enable landing where
                                prepared surfaces or runways do not exist,
                                including the Moon, Mars, and beyond.
                            </p>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    <h4>STARSHIP SN8 12.5km TEST FLIGHT</h4>
                    <div className="row">
                        <div className="col-md">
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/_qwLHlVjRyw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="col-md">
                            <p>
                                On December 9, 2020, Starship serial number 8
                                (SN8) completed a high-altitude flight test as
                                it successfully ascended, transitioned
                                propellant, and demonstrated a first-of-its-kind
                                controlled aerodynamic descent and landing flip
                                maneuver – which will enable landing where
                                prepared surfaces or runways do not exist,
                                including the Moon, Mars, and beyond.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starship;
