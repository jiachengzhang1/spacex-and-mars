import "./PastMissionDetails.css";
import React from "react";
import PastMissionImages from "./PastMissionImages";

import Table from "../../components/Table";
import ATag from "../../components/ATag";

const constructTableBody = (payloads) => {
  return payloads.map(
    (
      {
        manufacturer,
        nationality,
        orbit,
        payload_mass_kg,
        payload_mass_lbs,
        payload_type,
        reused,
      },
      i
    ) => {
      return (
        <tr key={i}>
          <td>{manufacturer ? manufacturer : "Unknow"}</td>
          <td>
            {nationality}
            {nationality ? (
              <i className={`${nationality.toLowerCase()} flag ml-1`} />
            ) : null}
          </td>
          <td>{orbit}</td>
          <td>{payload_type ? payload_type : "Unknown"}</td>
          <td>{payload_mass_kg ? payload_mass_kg : "Unknown"}</td>
          <td>{payload_mass_lbs ? payload_mass_lbs : "Unknown"}</td>
          <td>{reused ? "Yes" : "No"}</td>
        </tr>
      );
    }
  );
};

const PastMissionDetails = ({
  images,
  siteName,
  videoLink,
  payloads,
  rocketName,
}) => {
  return (
    <div
      className="past-dission-details row justify-content-center"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <div className="col col-md-12">
        <ul>
          <li>
            <div className="rocket-name">
              <h5>Rocket</h5>
              <p>{rocketName}</p>
            </div>
          </li>

          <li>
            <div className="launch-site">
              <h5>Launch Site</h5>
              <p>{siteName}</p>
            </div>
          </li>
          <li>
            <div className="payloads">
              <h5>Payloads</h5>
              <div className="table-responsive-md">
                <Table
                  headers={[
                    "Manufacturer",
                    "Nationality",
                    "Orbit",
                    "Payload Type",
                    "Payload Mass (kg)",
                    "Payload Mass (lbs)",
                    "Resused",
                  ]}
                  body={constructTableBody(payloads)}
                />
              </div>
            </div>
          </li>
          <li>
            <h5>Mission Images</h5>
            <div className="card-group images">
              <PastMissionImages images={images} />
            </div>
          </li>
          <li>
            <h5>Watch on YouTube</h5>
            <ATag href={videoLink} text="YouTube" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PastMissionDetails;
