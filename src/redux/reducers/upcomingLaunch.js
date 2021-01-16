import {
    FETCH_UPCOMING_LAUNCH_FAILED,
    FETCH_UPCOMING_LAUNCH_REQUEST,
    FETCH_UPCOMING_LAUNCH_SUCCESS,
} from "../actionTypes";

const initialState = {
    loading: false,
    launch: null,
    error: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_UPCOMING_LAUNCH_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_UPCOMING_LAUNCH_SUCCESS: {
            return {
                loading: false,
                launch: action.payload.docs[0],
                error: "",
            };
        }
        case FETCH_UPCOMING_LAUNCH_FAILED: {
            return {
                loading: false,
                launch: null,
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
