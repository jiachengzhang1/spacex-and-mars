import React from "react";
import SpaceX from "../components/SpaceX";
import UpcomingLaunch from "../components/UpcomingLaunch";
import Launches from "../Layouts/Launches";

const Home = () => {
    return (
        <div className="home">
            <h1>SPACEX</h1>
            <div className="row">
                <SpaceX className="col-lg-7 mb-3" />
                <UpcomingLaunch className="col-lg mb-3" />
            </div>
            <Launches />
        </div>
    );
};

export default Home;
