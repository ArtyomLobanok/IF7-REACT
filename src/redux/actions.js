import {
    INCREMENT,
    DECREMENT,
    INPUT_TEXT,
    HOTEL_DATA_LOAD,
    DATE_START,
    DATE_END,
    CHILDREN_COUNTER,
    ROOMS_COUNTER,
    ADULTS_COUNTER
} from "./types";

export const incrementAdults = () => {
    return {
        type: INCREMENT
    }
}

export const decrementAdults = () => {
    return {
        type: DECREMENT
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

export const adultsCounter = (adultsNumber) => {
    return {
        type: ADULTS_COUNTER,
        adults: adultsNumber
    }
}

export const childrenCounter = (childrenNumber) => {
    return {
        type: CHILDREN_COUNTER,
        children: childrenNumber
    }
}

export const roomsCounter = (roomsNumber) => {
    return {
        type: ROOMS_COUNTER,
        rooms: roomsNumber
    }
}

export const hotelsLoad = () => {
    return async dispatch => {
        const response = await fetch(`https://fe-student-api.herokuapp.com/api/hotels`);
        const jsonData = await response.json();
        dispatch({
            type: HOTEL_DATA_LOAD,
            data: jsonData
        })
    }
}