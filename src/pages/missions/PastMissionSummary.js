import React from "react";
import StatusBadge from "../../components/StatusBadge";

export default function PastMissionSummary({
  missionName,
  details,
  date,
  missionPatch,
  launchSuccess,
}) {
  return (
    <div className="row justify-content-center">
      <div className="col col-md-2 ml-auto mt-auto mb-auto">
        <img
          alt="missionPatch"
          src={missionPatch}
          width="110px"
          height="110px"
        />
        <div className="mr-auto" style={{ marginTop: "12px" }}>
          <StatusBadge success={launchSuccess} />
        </div>
      </div>
      <div className="col col-md-10">
        <h4>{missionName}</h4>
        <p className="font-italic">
          <i className="calendar alternate icon" />
          {date.toString()}
        </p>
        <p>{details}</p>
      </div>
    </div>
  );
}
