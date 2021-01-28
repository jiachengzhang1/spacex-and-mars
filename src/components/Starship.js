import React from "react";

const Starship = () => {
    return (
        <div className="starship">
            <h2 class="card-title">SPACEX STARSHIP</h2>
            <h5>
                <b>UPCOMING EVENT:</b> STARSHIP SN9 12.5km TEST FLIGHT (TIME:
                TBD)
            </h5>
            <div className="row">
                <div className="col-lg">
                    <p>
                        Starship and Super Heavy Rocket represent a fully
                        reusable transportation system designed to service all
                        Earth orbit needs as well as the Moon and Mars. This
                        two-stage vehicle — composed of the Super Heavy rocket
                        (booster) and Starship (ship) — will eventually replace
                        Falcon 9, Falcon Heavy and Dragon.{" "}
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
            <h3>PAST TESTS</h3>
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
                            On December 9, 2020, Starship serial number 8 (SN8)
                            completed a high-altitude flight test as it
                            successfully ascended, transitioned propellant, and
                            demonstrated a first-of-its-kind controlled
                            aerodynamic descent and landing flip maneuver –
                            which will enable landing where prepared surfaces or
                            runways do not exist, including the Moon, Mars, and
                            beyond.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h4>STARSHIP SN6, SN5 150m HOP TEST FLIGHT</h4>
                <div className="row">
                    <div className="col-md">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                src="https://www.youtube.com/embed/MdAKrzOLQTg"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-md">
                        <p>
                            On 3 September 2020, Starship SN6 has performed a
                            150-meter hop. Given that only a single rocket
                            engine has been installed on SN6, the current
                            iteration of SN6 will not conduct an orbital flight.
                        </p>
                    </div>
                </div>
            </div>
            <hr />
            <div>
                <h4>STARSHIP SN7, SN7.1 PATHFINDER TANK TEST</h4>
                <div className="row">
                    <div className="col-md">
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe
                                src="https://www.youtube.com/embed/CkFFgngw6Q4"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    <div className="col-md">
                        <p>
                            SN7 was a pathfinder test article for the SpaceX
                            rocket manufacturing process to switch to type 304L
                            stainless steel from the type 301 stainless steel
                            used for the earlier prototypes. A destructive
                            cryogenic strength test was performed on SN7 on 15
                            June 2020. The test article achieved pressure of 7.6
                            bar before it started leaking. The leak caused only
                            limited damage, relative to a burst, which would be
                            a more typical result of this type of test. After
                            repairs, the tank was tested to destruction on 23
                            June 2020.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starship;
