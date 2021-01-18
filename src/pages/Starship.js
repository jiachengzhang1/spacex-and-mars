import React, { useEffect } from "react";
import { TwitterTweetEmbed } from "react-twitter-embed";
import { Tweet } from "react-twitter-widgets";
const Starship = () => {
    return (
        <div className="starship">
            <h1 class="card-title">STARSHIP</h1>
            <div className="row">
                <div className="col-lg">
                    <img
                        className="img-fluid"
                        src="https://jzhangdeveloper.s3-us-west-2.amazonaws.com/50703878421_40f681155b_c.jpg"
                    />
                </div>
                <div className="col-lg-7">
                    <p class="card-text">
                        Starship and Super Heavy Rocket represent a fully
                        reusable transportation system designed to service all
                        Earth orbit needs as well as the Moon and Mars. This
                        two-stage vehicle — composed of the Super Heavy rocket
                        (booster) and Starship (ship) — will eventually replace
                        Falcon 9, Falcon Heavy and Dragon.
                    </p>
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
                                <th>NUMBER OF ENGINES</th>
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
                        <caption className="text-right">
                            -
                            <a href="https://en.wikipedia.org/wiki/SpaceX_Starship">
                                Wikipedia
                            </a>
                        </caption>
                    </table>
                </div>
            </div>
            <p></p>
            <h2>TESTING HIGHLIGHTS</h2>
            <hr />
            <div className="test111 ">
                <div className="row">
                    <div className="col-lg-7">
                        <h3>STARSHIP SN8 12.5km TEST FLIGHT</h3>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                className="embed-responsive-item"
                                src="https://www.youtube.com/embed/_qwLHlVjRyw"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                        <div className="col-lg">
                            <blockquote>
                                On December 9, 2020, Starship serial number 8
                                (SN8) completed a high-altitude flight test as
                                it successfully ascended, transitioned
                                propellant, and demonstrated a first-of-its-kind
                                controlled aerodynamic descent and landing flip
                                maneuver – which will enable landing where
                                prepared surfaces or runways do not exist,
                                including the Moon, Mars, and beyond.
                            </blockquote>
                        </div>
                        <div>
                            <h3>STARSHIP SN6</h3>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/_qwLHlVjRyw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                        <div>
                            <h3>STARSHIP SN6</h3>
                            <div className="embed-responsive embed-responsive-16by9">
                                <iframe
                                    className="embed-responsive-item"
                                    src="https://www.youtube.com/embed/_qwLHlVjRyw"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starship;
