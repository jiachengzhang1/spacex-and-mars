import React from "react";

const getStatus = (launch_success) => {
  return launch_success ? (
    <span
      style={{
        border: "solid",
        borderColor: "green",
        borderRadius: "30px",
        color: "green",
        fontSize: "10px",
        padding: "8px",
        textAlign: "center",
        marginLeft: "8px",
      }}
    >
      <i className="green circular check small icon" />
      Successful
    </span>
  ) : (
    <span
      style={{
        border: "solid",
        borderColor: "red",
        borderRadius: "30px",
        color: "red",
        fontSize: "10px",
        padding: "8px",
        textAlign: "center",
        marginLeft: "20px",
      }}
    >
      <i className="red circular x icon" />
      Failed
    </span>
  );
};

const MissionSummary = ({
  missionName,
  details,
  date,
  missionPatch,
  launchSuccess,
}) => {
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
          {getStatus(launchSuccess)}
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
};

export default MissionSummary;
