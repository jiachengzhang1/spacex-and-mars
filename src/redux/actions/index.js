import axios from "axios";
import {
    FETCH_LAUNCHES_FAILED,
    FETCH_LAUNCHES_REQUEST,
    FETCH_LAUNCHES_STATS_FAILED,
    FETCH_LAUNCHES_STATS_REQUEST,
    FETCH_LAUNCHES_STATS_SUCCESS,
    FETCH_LAUNCHES_SUCCESS,
    FETCH_NEWS_FAILED,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
    FETCH_STARLINK_STATS_FAILED,
    FETCH_STARLINK_STATS_REQUEST,
    FETCH_STARLINK_STATS_SUCCESS,
    FETCH_UPCOMING_LAUNCH_FAILED,
    FETCH_UPCOMING_LAUNCH_REQUEST,
    FETCH_UPCOMING_LAUNCH_SUCCESS,
    SET_QUERY_PAGE,
    SET_QUERY_SEARCH,
} from "../actionTypes";

export const setQuerySearch = (text) => {
    return {
        type: SET_QUERY_SEARCH,
        payload: text,
    };
};

export const setQueryPage = (page) => {
    return {
        type: SET_QUERY_PAGE,
        payload: page,
    };
};

export const fetchNewSuccess = (news) => {
    return {
        type: FETCH_NEWS_SUCCESS,
        payload: news,
    };
};

export const fetchNewsFailed = (error) => {
    return {
        type: FETCH_NEWS_FAILED,
        payload: error,
    };
};

export const fetchNewsRequest = () => {
    return {
        type: FETCH_NEWS_REQUEST,
    };
};

export const fetchNews = () => {
    return async (dispatch) => {
        dispatch(fetchNewsRequest());
        try {
            const response = await axios.get(
                "https://spaceflightnewsapi.net/api/v2/articles"
            );
            dispatch(fetchNewSuccess(response.data));
        } catch (error) {
            dispatch(fetchNewsFailed(error.message));
        }
    };
};

export const fetchLaunchesRequest = () => {
    return {
        type: FETCH_LAUNCHES_REQUEST,
    };
};

export const fetchLaunchesSuccess = (launches) => {
    return {
        type: FETCH_LAUNCHES_SUCCESS,
        payload: launches,
    };
};

export const fetchLaunchesFailed = (error) => {
    return {
        type: FETCH_LAUNCHES_FAILED,
        payload: error,
    };
};

export const fetchLaunches = (params) => {
    return fetchLaunchesHelper(getBody(params));
};

export const fetchLaunchesStatsRequest = () => {
    return {
        type: FETCH_LAUNCHES_STATS_REQUEST,
    };
};

export const fetchLaunchesStatsSuccess = (data) => {
    return {
        type: FETCH_LAUNCHES_STATS_SUCCESS,
        payload: data,
    };
};

export const fetchLaunchesStatsFailed = (error) => {
    return {
        type: FETCH_LAUNCHES_STATS_FAILED,
        payload: error,
    };
};

export const fetchLaunchesStats = () => {
    const body = {
        query: {
            upcoming: false,
        },
        options: {
            select: {
                success: true,
                date_utc: true,
                "cores.reused": true,
                _id: false,
            },
            sort: {
                date_utc: "asc",
            },
            pagination: false,
        },
    };
    return async (dispatch) => {
        dispatch(fetchLaunchesStatsRequest());
        try {
            const response = await axios.post(
                "https://api.spacexdata.com/v4/launches/query",
                body
            );
            console.log(response.data);
            dispatch(fetchLaunchesStatsSuccess(response.data));
        } catch (error) {
            dispatch(fetchLaunchesStatsFailed(error));
        }
    };
};

export const fetchRocketsStats = () => {
    const body = {
        options: {
            select: {
                name: true,
                success_rate_pct: true,
                cost_per_launch: true,
                active: true,
                _id: false,
            },
            pagination: false,
        },
    };
};

export const fetchStarlinkStatsRequest = () => {
    return {
        type: FETCH_STARLINK_STATS_REQUEST,
    };
};

export const fetchStarlinkStatsSuccess = (data) => {
    return {
        type: FETCH_STARLINK_STATS_SUCCESS,
        payload: data,
    };
};

export const fetchStarlinkStatsFailed = (error) => {
    return {
        type: FETCH_STARLINK_STATS_FAILED,
        payload: error,
    };
};

export const fetchStarlinkStats = () => {
    const body = {
        query: {},
        options: {
            select: {
                _id: false,
                launch: true,
            },
            populate: {
                path: "launch",
                select: ["date_utc"],
            },

            pagination: false,
        },
    };
    return async (dispatch) => {
        dispatch(fetchStarlinkStatsRequest());
        try {
            const response = await axios.post(
                "https://api.spacexdata.com/v4/starlink/query",
                body
            );
            dispatch(fetchStarlinkStatsSuccess(response.data));
        } catch (error) {
            dispatch(fetchStarlinkStatsFailed(error));
        }
    };
};

export const fetchNextUpcomingLaunch = () => {
    const body = {
        query: {
            upcoming: true,
        },
        options: {
            limit: 1,
            sort: {
                flight_number: "asc",
            },
            select: {
                name: 1,
                details: 1,
                date_utc: 1,
            },
            populate: [
                {
                    path: "rocket",
                    select: {
                        name: 1,
                    },
                },
            ],
        },
    };
    return async (dispatch) => {
        dispatch(fetchNextUpcomingLaunchRequest());
        try {
            const response = await axios.post(
                "https://api.spacexdata.com/v4/launches/query",
                body
            );
            dispatch(fetchNextUpcomingLaunchSuccess(response.data));
        } catch (error) {
            dispatch(fetchNextUpcomingLaunchFailed(error));
        }
    };
};

export const fetchNextUpcomingLaunchRequest = () => {
    return {
        type: FETCH_UPCOMING_LAUNCH_REQUEST,
    };
};

export const fetchNextUpcomingLaunchSuccess = (launch) => {
    return {
        type: FETCH_UPCOMING_LAUNCH_SUCCESS,
        payload: launch,
    };
};

export const fetchNextUpcomingLaunchFailed = (error) => {
    return {
        type: FETCH_UPCOMING_LAUNCH_FAILED,
        payload: error,
    };
};

const fetchLaunchesHelper = (body) => {
    return async (dispatch) => {
        dispatch(fetchLaunchesRequest());
        try {
            const response = await axios.post(
                "https://api.spacexdata.com/v4/launches/query",
                body
            );
            dispatch(fetchLaunchesSuccess(response.data));
        } catch (error) {
            dispatch(fetchLaunchesFailed(error));
        }
    };
};

function getBody({
    page = 1,
    search = "",
    order = "desc",
    upcoming = false,
    limit = 10,
}) {
    let query = { upcoming };
    if (search !== "") {
        query = { ...query, $text: { $search: search } };
    }
    const body = {
        query,
        options: {
            sort: {
                flight_number: order,
            },
            select: {
                flight_number: 1,
                name: 1,
                upcoming: 1,
                success: 1,
                date_utc: 1,
            },
            populate: [
                { path: "launchpad", select: { full_name: 1, name: 1 } },
                {
                    path: "rocket",
                    select: {
                        name: 1,
                    },
                },
            ],
            page,
            limit,
        },
    };
    return body;
}
