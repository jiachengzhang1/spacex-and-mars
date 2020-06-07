export default (state = {}, action) => {
  switch (action.type) {
    case "FETCH_MARS_WEATHER":
      return action.payload;
    default:
      return state;
  }
};
