import {
    INPUT_TEXT,
    DATE_START,
    DATE_END,
    SET_CHILD_AGE,
    INCREMENT_ADULTS,
    DECREMENT_ADULTS,
    ADD_CHILDREN,
    DELETE_CHILDREN,
    INCREMENT_ROOMS,
    DECREMENT_ROOMS,
    LOADING_DATA,
} from "../types";

const initialState = {search: '', dateFrom: '', dateTo: '', adults: 1, children: [], rooms: 1, loading: false,}

const formReducer = (state = initialState, action) => {
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

        case SET_CHILD_AGE:
            return {
                ...state,
                children: [...state.children.slice(0, action.childData.index), action.childData.value, ...state.children.slice(action.childData.index + 1)]
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

        case ADD_CHILDREN:
            return {
                ...state,
                children: [ ...state.children, 1 ]
            }
        case DELETE_CHILDREN:
            return {
                ...state,
                children: state.children.slice(1)
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
        case LOADING_DATA:
            return {
                ...state,
                loading: action.loading
            }
        default:
            return state;
    }
}

export default formReducer;
