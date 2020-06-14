import React, { useContext } from "react";
import { Accordion, Card } from "react-bootstrap";
import { useAccordionToggle } from "react-bootstrap/AccordionToggle";
import AccordionContext from "react-bootstrap/AccordionContext";

import PastMissionSummary from "./PastMissionSummary";
import PastMissionDetails from "./PastMissionDetails";

function ContextAwareToggle({ children, eventKey, callback }) {
  const currentEventKey = useContext(AccordionContext);
  const decoratedOnClick = useAccordionToggle(
    eventKey,
    () => callback && callback(eventKey)
  );
  const isCurrentEventKey = currentEventKey === eventKey;

  return (
    <div
      style={{
        backgroundColor: isCurrentEventKey ? "#382929" : "#38292942",
      }}
      onClick={decoratedOnClick}
    >
      {children}
    </div>
  );
}

export default function PastMission({ mission }) {
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

  const { rocket_name, first_stage, second_stage, rocket_type } = rocket;
  const {
    flickr_images,
    mission_patch_small,
    video_link,
    article_link,
    wikipedia,
  } = links;
  const { site_name_long } = launch_site;

  return (
    <Card
      className="past-mission-card mt-4"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <ContextAwareToggle eventKey={flight_number}>
        <PastMissionSummary
          flight_number={flight_number}
          missionName={mission_name}
          date={date}
          missionPatch={mission_patch_small}
          launchSuccess={launch_success}
          site_name_long={site_name_long}
          rocketName={`${rocket_name} (${rocket_type})`}
          article_link={article_link}
          wikipedia={wikipedia}
          video_link={video_link}
        />
      </ContextAwareToggle>

      <Accordion.Collapse
        eventKey={flight_number}
        className="past-mission-accordion-collapse"
      >
        {/* <Card.Body> */}
        <PastMissionDetails
          details={details}
          mission_name={mission_name}
          images={flickr_images}
          secondStage={second_stage}
          firstStage={first_stage}
          article_link={article_link}
          wikipedia={wikipedia}
          video_link={video_link}
        />
        {/* </Card.Body> */}
      </Accordion.Collapse>
    </Card>
  );
}
