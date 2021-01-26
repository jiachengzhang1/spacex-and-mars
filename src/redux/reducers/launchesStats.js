import {
    FETCH_LAUNCHES_STATS_FAILED,
    FETCH_LAUNCHES_STATS_REQUEST,
    FETCH_LAUNCHES_STATS_SUCCESS,
} from "../actionTypes";

const initialState = {
    loading: false,
    stats: {},
    error: "",
};


export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LAUNCHES_STATS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_LAUNCHES_STATS_SUCCESS: {
            return {
                loading: false,
                stats: action.payload,
                error: "",
            };
        }
        case FETCH_LAUNCHES_STATS_FAILED: {
            return {
                loading: false,
                stats: {},
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
