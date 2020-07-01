import React from "react";

import PastMissionImages from "./PastMissionImages";
import Table from "../Table";
import ATag from "../ATag";

const constructTableBody = (payloads) => {
  return payloads.map(
    (
      { customers, nationalities, orbit, mass_kg, mass_lbs, type, reused },
      i
    ) => {
      return (
        <tr key={i}>
          <td>{customers.length !== 0 ? customers[0] : "Unknow"}</td>
          <td>
            {nationalities.length !== 0 ? (
              <div>
                {nationalities[0]}
                <i className={`${nationalities[0].toLowerCase()} flag ml-1`} />
              </div>
            ) : null}
          </td>
          <td>{orbit}</td>
          <td>{type ? type : "Unknown"}</td>
          <td>{mass_kg ? mass_kg : "Unknown"}</td>
          <td>{mass_lbs ? mass_lbs : "Unknown"}</td>
          <td>{reused ? "Yes" : "No"}</td>
        </tr>
      );
    }
  );
};

const constructFirstStageTable = (cores) => {
  return cores.map(
    ({ core, flight, gridfins, landing_success, legs, reused }, i) => {
      const { id, serial, block } = core;
      return (
        <tr key={id}>
          <td>{serial}</td>
          <td>{flight}</td>
          <td>{block}</td>
          <td>{gridfins ? "Yes" : "No"}</td>
          <td>{legs ? "Yes" : "No"}</td>
          <td>{reused ? "Yes" : "No"}</td>
          <td>{landing_success ? "Yes" : "No"}</td>
        </tr>
      );
    }
  );
};

// <PastMissionDetails
//   missionId={id}
//   details={details}
//   mission_name={name}
//   images={flickr.original}
//   cores={cores}
//   payloads={payloads}
//   article_link={article}
//   wikipedia={wikipedia}
//   video_link={youtube_id}
//   failures={failures}
// />;

const PastMissionDetails = ({
  missionId,
  failures,
  images,
  details,
  cores,
  payloads,
  article_link,
  wikipedia,
  video_link,
}) => {
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
            <h5>Cores</h5>
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
            <h5>Payloads</h5>
            <div className="payloads">
              <div className="table-responsive-md">
                <Table
                  headers={[
                    "Customer",
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
              {/* <p>{<ATag href={video_link} text="Launch Video" />}</p> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PastMissionDetails;
