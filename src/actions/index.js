import spaceX from "../apis/spaceX";
import nasa from "../apis/nasa";

export const fetchFutureMissions = (limit) => async (dispatch) => {
  const response = await spaceX.get("/launches/upcoming", {
    params: {
      limit: limit,
      sort: "launch_date_utc",
      order: "asc",
    },
  });
  dispatch({ type: "FETCH_FUTURE_MISSIONS", payload: response.data });
};

export const fetchPastMissions = (limit, offset) => async (dispatch) => {
  const response = await spaceX.get("/launches/past", {
    params: {
      order: "desc",
      limit: limit,
      offset: offset,
    },
  });
  dispatch({ type: "FETCH_PAST_MISSIONS", payload: response.data });
};

export const fetchMarsWeather = () => async (dispatch) => {
  const response = await nasa.get("/insight_weather/", {
    params: {
      ver: "1.0",
      feedtype: "json",
      api_key: process.env.REACT_APP_NASA_API_KEY,
    },
  });
  dispatch({ type: "FETCH_MARS_WEATHER", payload: response.data });
};
