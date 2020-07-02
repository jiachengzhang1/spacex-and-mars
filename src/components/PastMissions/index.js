import "./PastMissions.scss";
import React, { useState, useEffect } from "react";
import { graphql, useStaticQuery } from "gatsby";
import { Accordion } from "react-bootstrap";

import PastMission from "./PastMission";
import { isWindowBottom, constructPastMissionData } from "../../utils";
import axios from "axios";

async function handleScroll(
  lastFlightNum,
  setLastFlightNum,
  newMissions,
  setNewMissions
) {
  // don't bother when build html pages
  if (typeof window === "undefined") {
    return;
  }
  if (lastFlightNum === 1) {
    return;
  }
  console.log(isWindowBottom());

  if (isWindowBottom()) {
    const response = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
      {
        query: {
          upcoming: false,
          flight_number: {
            $lt: lastFlightNum,
          },
        },
        options: {
          sort: { flight_number: "desc" },
          populate: [
            "payloads",
            "launchpad",
            "rocket",
            {
              path: "cores",
              populate: "core",
            },
          ],
          limit: 5,
        },
      }
    );
    const missions = [
      ...newMissions,
      ...constructPastMissionData(response.data.docs),
    ];
    setNewMissions(missions);
    setLastFlightNum(missions[missions.length - 1].flight_number);
  }
}

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

  // client side rendering as user keep scrolling
  const [newMissions, setNewMissions] = useState(spacexData.pastMissions);
  const [lastFlightNum, setLastFlightNum] = useState(
    newMissions[newMissions.length - 1].flight_number
  );

  const scrollListener = () => {
    handleScroll(lastFlightNum, setLastFlightNum, newMissions, setNewMissions);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", scrollListener);
      return () => window.removeEventListener("scroll", scrollListener);
    }
    return null;
  });

  const pastMissions = newMissions.map((mission) => (
    <PastMission key={mission.id} mission={mission} />
  ));

  return (
    <div className="past-mission-list">
      <Accordion>{pastMissions}</Accordion>
    </div>
  );
};

export default PastMissions;
