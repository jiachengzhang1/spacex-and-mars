export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_FUTURE_MISSIONS":
      return action.payload;
    default:
      return state;
  }
};
