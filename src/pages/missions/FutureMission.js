import React from "react";
import CountDown from "../../components/countdown";
import IconString from "../../components/IconString";

export default function FutureMission({ mission, showCountdown = false }) {
  const {
    flight_number,
    launch_date_utc,
    mission_name,
    launch_site,
    rocket,
  } = mission;
  const { rocket_name, rocket_type } = rocket;
  const { site_name, site_name_long } = launch_site;
  return (
    <div>
      <h3 className="header">{mission_name}</h3>
      <IconString iconClass="th icon" string={`Flight # ${flight_number}`} />
      <IconString
        iconClass="calendar alternate icon"
        string={new Date(launch_date_utc).toString()}
      />
      <IconString
        iconClass="map marker alternate icon"
        string={`${site_name_long} (${site_name})`}
      />
      <IconString
        iconClass="rocket icon"
        string={`${rocket_name} rocket (${rocket_type})`}
      />
      <div className="description m-auto">
        {showCountdown ? (
          <CountDown
            divider={true}
            textFontSize="12px"
            numFontSize="38px"
            time={launch_date_utc}
          />
        ) : null}
      </div>
    </div>
  );
}
