import {HOTEL_DATA_LOAD} from "../types";

const initialState = [];

const hotelsLoadReducer = (state = initialState, action) => {
    switch (action.type) {
        case HOTEL_DATA_LOAD:
            return action.data
        default:
            return state;
    }
}

export default hotelsLoadReducer;
