import { combineReducers } from "redux";

import futureMissionsReducer from "./futureMissionsReducer";
import pastMissionsReducer from "./pastMissionsReducer";
import marsWeatherReducer from "./marsWeatherReducer";

export default combineReducers({
  futureMissions: futureMissionsReducer,
  pastMissions: pastMissionsReducer,
  marsWeather: marsWeatherReducer,
});
