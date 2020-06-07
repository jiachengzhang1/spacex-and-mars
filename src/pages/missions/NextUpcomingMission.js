import "./NextUpcomingMission.css";
import React from "react";
import CountDown from "../../components/countdown";

export default function NextUpcomingMission({ mission }) {
  const { launch_date_utc, mission_name, launch_site } = mission;
  const { site_name, site_name_long } = launch_site;
  return (
    <div className="next-upcoming-mission">
      <h1>Upcoming Mission</h1>
      <div className="next-upcoming-mission-content ui  text-center ">
        <h3 className="header">{mission_name}</h3>
        <h5 className="meta">
          <i className="calendar alternate icon" />
          {new Date(launch_date_utc).toString()}
        </h5>
        <h6 className="meta">
          <i className="map marker alternate icon" />
          {`${site_name_long} (${site_name})`}
        </h6>
        <div className="description m-auto">
          <CountDown
            divider={false}
            textFontSize="15px"
            numFontSize="50px"
            time={launch_date_utc}
          />
        </div>
      </div>
    </div>
  );
}
