import "./Missions.scss";
import React from "react";
// import PastMissionList from "./PastMissionList";
import Quote from "../../components/Quote";
import FutureMissionCards from "./FutureMissionCards";

export default function Missions() {
  return (
    <div className="missions">
      <div className="future-missions-countdown">
        <FutureMissionCards />
        <div className="quote">
          <Quote />
        </div>
      </div>
    </div>
  );
}
