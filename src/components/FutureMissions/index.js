import "./FutureMissions.scss";
import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import FutureMission from "./FutureMission";

const FutureMissions = () => {
  const { spacexData } = useStaticQuery(graphql`
    query {
      spacexData {
        futureMissions {
          id
          date_utc
          flight_number
          launchpad
          name
          rocket
        }
      }
    }
  `);

  const missions = spacexData.futureMissions;
  const futureMissions = missions.slice(1).map((mission) => {
    return (
      <div className="future-mission card shadow" key={mission.id}>
        <FutureMission mission={mission} />
      </div>
    );
  });
  return (
    <div className="future-missions">
      <div className="future-mission-first shadow">
        <FutureMission mission={missions[0]} showCountdown />
      </div>
      <div className="card-deck">{futureMissions}</div>
    </div>
  );
};

export default FutureMissions;
