import React from "react";
import { Accordion, Card } from "react-bootstrap";
import MissionSummary from "./MissionSummary";
import PastMissionDetails from "./PastMissionDetails";

const Mission = ({ mission }) => {
  const {
    mission_name,
    flight_number,
    details,
    rocket,
    links,
    launch_success,
    launch_site,
    launch_date_utc,
  } = mission;
  let date = new Date(launch_date_utc);

  const { rocket_name, second_stage, rocket_type } = rocket;
  const { flickr_images, mission_patch_small, video_link } = links;
  const { site_name, site_name_long } = launch_site;

  return (
    <Card
      className="mt-3"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <Accordion.Toggle
        as={Card.Header}
        eventKey={flight_number}
        style={{
          backgroundColor: "transparent",
          border: "none",
          cursor: "pointer",
        }}
      >
        <MissionSummary
          missionName={mission_name}
          details={details}
          date={date}
          missionPatch={mission_patch_small}
          launchSuccess={launch_success}
        />
      </Accordion.Toggle>
      <Accordion.Collapse eventKey={flight_number}>
        <Card.Body>
          <PastMissionDetails
            images={flickr_images}
            videoLink={video_link}
            payloads={second_stage.payloads}
            siteName={`${site_name} (${site_name_long})`}
            rocketName={`${rocket_name} (${rocket_type})`}
          />
        </Card.Body>
      </Accordion.Collapse>
    </Card>
  );
};
export default Mission;
