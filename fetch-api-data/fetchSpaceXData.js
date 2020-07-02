const axios = require("axios");

const constructFutureMissionData = require("../src/utils/constructFutureMissionData");
const constructPastMissionData = require("../src/utils/constructPastMissionData");

module.exports = async function fetchSpaceXData() {
  try {
    const futureMissionsRequestBody = {
      query: { upcoming: true },
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
        limit: 5,
      },
    };
    const futureMissionresponse = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
      futureMissionsRequestBody
    );
    const futureMissions = constructFutureMissionData(
      futureMissionresponse.data.docs
    );

    const pastMissionsRequestBody = {
      query: { upcoming: false },
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
    };
    const pastMissionresponse = await axios.post(
      "https://api.spacexdata.com/v4/launches/query",
      pastMissionsRequestBody
    );
    const pastMissions = constructPastMissionData(
      pastMissionresponse.data.docs
    );
    // console.log(pastMissions);

    return { futureMissions, pastMissions };
  } catch (error) {
    console.error(error);
  }
};
