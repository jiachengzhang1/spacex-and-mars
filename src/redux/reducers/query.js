import { SET_QUERY_PAGE, SET_QUERY_SEARCH } from "../actionTypes";

const initialState = {
    searchText: "",
    page: 1,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_QUERY_SEARCH: {
            return {
                page: 1,
                searchText: action.payload,
            };
        }
        case SET_QUERY_PAGE: {
            return {
                ...state,
                page: action.payload,
            };
        }
        default: {
            return state;
        }
    }
};
