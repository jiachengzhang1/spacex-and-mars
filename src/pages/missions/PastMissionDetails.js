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

const constructFirstStageTable = (cores) => {
  return cores.map(
    (
      { core_serial, flight, block, gridfins, legs, reused, land_success },
      i
    ) => {
      return (
        <tr key={i}>
          <td>{core_serial}</td>
          <td>{flight}</td>
          <td>{block}</td>
          <td>{gridfins ? "Yes" : "No"}</td>
          <td>{legs ? "Yes" : "No"}</td>
          <td>{reused ? "Yes" : "No"}</td>
          <td>{land_success ? "Yes" : "No"}</td>
        </tr>
      );
    }
  );
};

const PastMissionDetails = ({
  images,
  details,
  firstStage,
  secondStage,
  article_link,
  wikipedia,
  video_link,
}) => {
  const { block, payloads } = secondStage;
  const { cores } = firstStage;
  return (
    <div
      className="past-dission-details row justify-content-center"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <div className="col col-md-12">
        <ul>
          <li>
            <p className="past-dission-details-p">&emsp;&emsp;{details}</p>
          </li>
          <li>
            <h5>First Stage</h5>
            <div className="table-responsive-md">
              <Table
                headers={[
                  "Core Serial",
                  "Number of Flights",
                  "Block Number",
                  "Has Gridfins",
                  "Has Legs",
                  "Reused",
                  "Successful Landing",
                ]}
                body={constructFirstStageTable(cores)}
              />
            </div>
          </li>
          <li>
            <h5>Second Stage</h5>
            <h6>Block Number: {block}</h6>
            <div className="payloads">
              <h6>Payloads</h6>
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
            <h5>Links</h5>
            <div className="past-mission-links">
              <p>{<ATag href={article_link} text="Article" />}</p>
              <p>{<ATag href={wikipedia} text="Wikipedia Page" />}</p>
              <p>{<ATag href={video_link} text="Launch Video" />}</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PastMissionDetails;
