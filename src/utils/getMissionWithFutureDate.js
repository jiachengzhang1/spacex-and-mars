export default (missions) => {
  let i = 0;
  while (new Date(missions[i].launch_date_utc) < new Date()) {
    i += 1;
  }
  return missions[i];
};
