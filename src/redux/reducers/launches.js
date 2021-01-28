import {
    FETCH_LAUNCHES_FAILED,
    FETCH_LAUNCHES_REQUEST,
    FETCH_LAUNCHES_SUCCESS,
} from "../actionTypes";

const initialState = {
    loading: false,
    launches: [],
    error: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_LAUNCHES_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_LAUNCHES_SUCCESS: {
            return {
                loading: false,
                launches: action.payload,
                error: "",
            };
        }
        case FETCH_LAUNCHES_FAILED: {
            return {
                loading: false,
                launches: [],
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
