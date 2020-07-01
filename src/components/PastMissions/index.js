import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Accordion } from "react-bootstrap";

import PastMission from "./PastMission";

const PastMissions = () => {
  const { spacexData } = useStaticQuery(graphql`
    query {
      spacexData {
        pastMissions {
          id
          cores {
            core {
              status
              serial
              rtls_landings
              reuse_count
              id
              block
              asds_landings
            }
            flight
            gridfins
            landing_success
            landing_type
            legs
            reused
          }
          date_utc
          details
          failures
          flight_number
          launchpad
          name
          rocket
          success
          links {
            article
            wikipedia
            youtube_id
            patch {
              small
            }
            flickr {
              original
            }
          }
          payloads {
            type
            reused
            mass_kg
            mass_lbs
            customers
            nationalities
            orbit
          }
        }
      }
    }
  `);
  const missions = spacexData.pastMissions;
  const pastMissions = missions.map((mission) => (
    <PastMission key={mission.id} mission={mission} />
  ));
  return (
    <div className="past-mission-list">
      <Accordion>{pastMissions}</Accordion>
    </div>
  );
};

export default PastMissions;
