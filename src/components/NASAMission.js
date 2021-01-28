import React from "react";
import Countdown from "../components/Countdown";
import AddToCalendarButton from "./AddToCalendarButton";

const NASAMission = () => {
    return (
        <div className="nasa-mission">
            <h2>NASA MARS 2020 MISSION</h2>
            <div className="intro row">
                <div className="col-md">
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
                <div className="col-md">
                    <h3>QUICK OVERVIEW</h3>
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
                        Seek signs of ancient life and collect samples of rock
                        and regolith (broken rock and soil) for possible return
                        to Earth.{" "}
                        <a href="https://mars.nasa.gov/mars2020/">
                            NASA Mars 2020 Mission
                        </a>
                    </p>
                    <div className="countdown-card">
                        <Countdown
                            date={new Date("Thu Feb 18 2021 12:55:00 GMT-0800")}
                            goal="LANDING"
                        />
                        <div className="nasa-mission-schedule-buttons">
                            <a href="https://mars.nasa.gov/mars2020/timeline/landing/watch-online/">
                                UPCOMING EVENTS
                            </a>
                            <AddToCalendarButton
                                dateUtc="Thu Feb 18 2021 12:55:00 GMT-0800"
                                description="Seek signs of ancient life and collect samples of rock and regolith (broken rock and soil) for possible return to Earth."
                                title="NASA Mars 2020 Mission"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="landing-demo">
                <div className="row">
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
                    </div>
                    <div className="col-lg">
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
        </div>
    );
};

export default NASAMission;
