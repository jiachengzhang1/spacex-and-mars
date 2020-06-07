export default (state = [], action) => {
  switch (action.type) {
    case "FETCH_PAST_MISSIONS":
      return [...state, ...action.payload];
    default:
      return state;
  }
};
