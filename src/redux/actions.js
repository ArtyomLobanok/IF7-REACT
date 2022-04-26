import {
    INCREMENT_ADULTS,
    DECREMENT_ADULTS,
    INCREMENT_CHILDREN,
    DECREMENT_CHILDREN,
    INCREMENT_ROOMS,
    DECREMENT_ROOMS,
    INPUT_TEXT,
    HOTEL_DATA_LOAD,
    DATE_START,
    DATE_END,
    CHILDREN_COUNTER,

} from "./types";

export const incrementAdults = () => {
    return {
        type: INCREMENT_ADULTS
    }
}

export const decrementAdults = () => {
    return {
        type: DECREMENT_ADULTS
    }
}

export const incrementChildren = () => {
    return {
        type: INCREMENT_CHILDREN
    }
}

export const decrementChildren = () => {
    return {
        type: DECREMENT_CHILDREN
    }
}

export const incrementRooms = () => {
    return {
        type: INCREMENT_ROOMS
    }
}

export const decrementRooms = () => {
    return {
        type: DECREMENT_ROOMS
    }
}

export const inputText = (search) => {
    return {
        type: INPUT_TEXT,
        search
    }
}

export const datePickerStart = (dateFrom) => {
    return {
        type: DATE_START,
        dateFrom
    }
}

export const datePickerEnd = (dateTo) => {
    return {
        type: DATE_END,
        dateTo
    }
}

export const childrenCounter = (children) => {
    return {
        type: CHILDREN_COUNTER,
        children
    }
}

export const hotelsLoad = (params) => {
    return async dispatch => {
        const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels?${params}`);
        const jsonData = await response.json();
        dispatch({
            type: HOTEL_DATA_LOAD,
            data: jsonData
        })
    }
}