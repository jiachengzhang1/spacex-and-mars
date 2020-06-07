import React from "react";
import PastMissionList from "./PastMissionList";
import Quote from "../../components/Quote";
import FutureMissions from "./FutureMissions";

export default function Missions() {
  return (
    <div className="missions" style={{ marginTop: "130px" }}>
      <Quote />
      <FutureMissions />
      <div className="past-missions mt-5">
        <h1 style={{ textAlign: "center" }}>Past Missions</h1>
        <PastMissionList />
      </div>
    </div>
  );
}
