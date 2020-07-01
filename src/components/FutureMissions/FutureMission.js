import React from "react";
import Countdown from "../Countdown";
import IconString from "../IconString";

export default function FutureMission({ mission, showCountdown = false }) {
  const { launchpad, name, rocket, flight_number, date_utc } = mission;
  return (
    <div>
      <h3 className="header">{name}</h3>
      <IconString iconClass="th icon" string={`Flight # ${flight_number}`} />
      <IconString
        iconClass="calendar alternate icon"
        string={new Date(date_utc).toString()}
      />
      <IconString iconClass="map marker alternate icon" string={launchpad} />
      <IconString iconClass="rocket icon" string={rocket} />
      <div className="description m-auto">
        {showCountdown ? (
          <Countdown
            divider={true}
            textFontSize="12px"
            numFontSize="38px"
            time={date_utc}
          />
        ) : null}
      </div>
    </div>
  );
}
