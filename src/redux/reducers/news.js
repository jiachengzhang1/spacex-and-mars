import {
    FETCH_NEWS_FAILED,
    FETCH_NEWS_REQUEST,
    FETCH_NEWS_SUCCESS,
} from "../actionTypes";

const initialState = {
    loading: false,
    news: [],
    error: "",
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NEWS_REQUEST: {
            return {
                ...state,
                loading: true,
            };
        }
        case FETCH_NEWS_SUCCESS: {
            return {
                loading: false,
                news: action.payload,
                error: "",
            };
        }
        case FETCH_NEWS_FAILED: {
            return {
                loading: false,
                news: [],
                error: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
