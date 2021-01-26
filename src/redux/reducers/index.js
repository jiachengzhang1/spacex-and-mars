import { combineReducers } from "redux";
import news from "./news";
import launches from "./launches";
import query from "./query";
import upcomingLaunch from "./upcomingLaunch";
import launchesStats from "./launchesStats";

export default combineReducers({
    news,
    launches,
    query,
    upcomingLaunch,
    launchesStats,
});
