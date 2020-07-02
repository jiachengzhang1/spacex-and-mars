const constructPastMissionData = (missions) => {
  let pastMissions = [];
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
    }) => {
      pastMissions.push({
        id,
        name,
        flight_number,
        date_utc,
        launchpad: launchpad.full_name,
        success,
        failures: failures.length === 0 ? ["No failures"] : failures,
        details,
        rocket: rocket.name,
        payloads,
        cores,
        links,
      });
    }
  );
  return pastMissions;
};

module.exports = constructPastMissionData;
