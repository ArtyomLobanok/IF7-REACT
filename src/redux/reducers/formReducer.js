import {
    INPUT_TEXT,
    DATE_START,
    DATE_END,
    CHILDREN_COUNTER,
    INCREMENT_ADULTS,
    DECREMENT_ADULTS,
    INCREMENT_CHILDREN,
    DECREMENT_CHILDREN,
    INCREMENT_ROOMS,
    DECREMENT_ROOMS,
} from "../types";

const initialState = {search: '', dateFrom: Date.now(), dateTo: Date.now(), adults: 1, children: 0, rooms: 1}

const formReducer = (state = initialState, action) => {
    console.log('form Reducer >>', action)

    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                search: action.search
            }
        case DATE_START:
            return {
                ...state,
                dateFrom: action.dateFrom
            }
        case DATE_END:
            return {
                ...state,
                dateTo: action.dateTo
            }
        case CHILDREN_COUNTER:
            return {
                ...state,
                children: action.children
            }
        case INCREMENT_ADULTS:
            return {
                ...state,
                adults: state.adults + 1
            }
        case DECREMENT_ADULTS:
            return {
                ...state,
                adults: state.adults - 1
            }
        case INCREMENT_CHILDREN:
            return {
                ...state,
                countChildren: state.children + 1
            }
        case DECREMENT_CHILDREN:
            return {
                ...state,
                countChildren: state.children - 1
            }
        case INCREMENT_ROOMS:
            return {
                ...state,
                rooms: state.rooms + 1
            }
        case DECREMENT_ROOMS:
            return {
                ...state,
                rooms: state.rooms - 1
            }
        default:
            return state;
    }
}

export default formReducer;
