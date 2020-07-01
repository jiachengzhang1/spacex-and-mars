const axios = require("axios");

function getMissionObjects(missions) {
  let pastMissions = [];
  let futureMissions = [];
  missions.forEach(
    ({
      id,
      name,
      flight_number,
      date_utc,
      launchpad,
      success,
      failures,
      details,
      rocket,
      payloads,
      cores,
      links,
      upcoming,
    }) => {
      if (upcoming) {
        if (futureMissions.length <= 4) {
          futureMissions.push({
            id,
            name,
            flight_number,
            date_utc,
            launchpad: launchpad.full_name,
            rocket: rocket.name,
          });
        }
      } else {
        pastMissions.push({
          id,
          name,
          flight_number,
          date_utc,
          launchpad: launchpad.full_name,
          success,
          failures,
          details,
          rocket: rocket.name,
          payloads,
          cores,
          links,
        });
      }
    }
  );
  return {
    pastMissions: pastMissions.reverse(),
    futureMissions,
  };
}

module.exports = async function fetchSpaceXData() {
  try {
    const requestBody = {
      query: {},
      options: {
        sort: { flight_number: "asc" },
        populate: [
          "payloads",
          "launchpad",
          "rocket",
          {
            path: "cores",
            populate: "core",
          },
        ],
        pagination: false,
      },
    };

    const response = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
      requestBody
    );

    return getMissionObjects(response.data.docs);
  } catch (error) {
    console.error(error);
  }
};
