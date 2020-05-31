import "./NextUpcomingMission.css";
import React from "react";
import CountDown from "./CountDown";

const NextUpcomingMission = ({ mission }) => {
  const { launch_date_utc, mission_name, launch_site } = mission;
  const { site_name, site_name_long } = launch_site;
  return (
    <div className="next-upcoming-mission">
      <h1>Upcoming Mission</h1>
      <div className="next-upcoming-mission-content card text-center text-white">
        <h3 className="card-header">{mission_name}</h3>
        <div className="card-body">
          <h5 className="card-title">
            <i className="calendar alternate icon" />
            {new Date(launch_date_utc).toString()}
          </h5>
          <h6 className="card-title">
            <i className="map marker alternate icon" />
            {`${site_name_long} (${site_name})`}
          </h6>
          <div className="card-content m-auto">
            <CountDown
              divider={false}
              textFontSize="15px"
              numFontSize="50px"
              time={launch_date_utc}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NextUpcomingMission;
