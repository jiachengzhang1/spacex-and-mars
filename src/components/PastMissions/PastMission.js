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
      onKeyPress={decoratedOnClick}
      role="button"
      tabIndex="0"
    >
      {children}
    </div>
  );
}

export default function PastMission({ mission }) {
  const {
    id,
    name,
    flight_number,
    details,
    date_utc,
    launchpad,
    success,
    failures,
    links,
    rocket,
    cores,
    payloads,
  } = mission;

  const { article, flickr, patch, wikipedia, youtube_id } = links;

  let date = new Date(date_utc);

  return (
    <Card
      className="past-mission-card shadow1"
      style={{ backgroundColor: "transparent", border: "none" }}
    >
      <ContextAwareToggle eventKey={flight_number}>
        <PastMissionSummary
          missionId={id}
          flight_number={flight_number}
          missionName={name}
          date={date}
          missionPatch={patch.small}
          launchSuccess={success}
          site_name_long={launchpad}
          rocketName={rocket}
          article_link={article}
          wikipedia={wikipedia}
          video_link={youtube_id}
        />
      </ContextAwareToggle>

      <Accordion.Collapse
        eventKey={flight_number}
        className="past-mission-accordion-collapse"
      >
        <PastMissionDetails
          missionId={id}
          details={details}
          mission_name={name}
          images={flickr.original}
          cores={cores}
          payloads={payloads}
          article_link={article}
          wikipedia={wikipedia}
          video_link={youtube_id}
          failures={failures}
        />
      </Accordion.Collapse>
    </Card>
  );
}
