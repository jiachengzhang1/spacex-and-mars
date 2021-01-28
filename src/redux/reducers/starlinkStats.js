import {
    FETCH_STARLINK_STATS_FAILED,
    FETCH_STARLINK_STATS_REQUEST,
    FETCH_STARLINK_STATS_SUCCESS,
} from "../actionTypes";

const initialState = {
    loading: false,
    stats: {},
    error: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_STARLINK_STATS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_STARLINK_STATS_SUCCESS: {
            console.log(action.payload);
            return {
                loading: false,
                stats: action.payload,
                error: "",
            };
        }
        case FETCH_STARLINK_STATS_FAILED: {
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
