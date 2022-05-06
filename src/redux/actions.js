import {
    INCREMENT_ADULTS,
    DECREMENT_ADULTS,
    ADD_CHILDREN,
    DELETE_CHILDREN,
    INCREMENT_ROOMS,
    DECREMENT_ROOMS,
    INPUT_TEXT,
    HOTEL_DATA_LOAD,
    DATE_START,
    DATE_END,
    SET_CHILD_AGE,
    SWITCH_THEMES,
} from "./types";

export const incrementAdults = () => {
    return {
        type: INCREMENT_ADULTS
    };
};

export const decrementAdults = () => {
    return {
        type: DECREMENT_ADULTS
    };
};

export const incrementChildren = () => {
    return {
        type: ADD_CHILDREN
    };
};

export const setChildAge = (childData) => {
    return {
        type: SET_CHILD_AGE,
        childData
    };
};

export const decrementChildren = () => {
    return {
        type: DELETE_CHILDREN
    };
};

export const incrementRooms = () => {
    return {
        type: INCREMENT_ROOMS
    };
};

export const decrementRooms = () => {
    return {
        type: DECREMENT_ROOMS
    };
};

export const inputText = (search) => {
    return {
        type: INPUT_TEXT,
        search
    };
};

export const datePickerStart = (dateFrom) => {
    return {
        type: DATE_START,
        dateFrom
    };
};

export const datePickerEnd = (dateTo) => {
    return {
        type: DATE_END,
        dateTo
    };
};

export const hotelsLoad = (params) => {
    return async dispatch => {
        const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels?${params}`);
        const jsonData = await response.json();
        dispatch({
            type: HOTEL_DATA_LOAD,
            data: jsonData
        });
    };
};

export const switchTheme = (theme) => {
    return (dispatch) => {
        dispatch({
            type:SWITCH_THEMES,
            theme: theme,
        });
    };
};