import React, { useEffect } from "react";

import NASAMission from "../components/NASAMission";
import Starship from "../components/Starship";
const Mars = () => {
    return (
        <div>
            <h1>MARS</h1>
            <NASAMission />
            <Starship />
        </div>
    );
};

export default Mars;
