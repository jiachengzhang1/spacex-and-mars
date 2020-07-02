const constructFutureMissionData = (missions) => {
  let futureMissions = [];
  missions.forEach(
    ({ id, name, flight_number, date_utc, launchpad, rocket }) => {
      futureMissions.push({
        id,
        name,
        flight_number,
        date_utc,
        launchpad: launchpad.full_name,
        rocket: rocket.name,
      });
    }
  );
  return futureMissions;
};

// export default constructFutureMissionData;
module.exports = constructFutureMissionData;
