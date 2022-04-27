import {
    INPUT_TEXT,
    DATE_START,
    DATE_END,
    SET_CHILD_AGE,
    INCREMENT_ADULTS,
    DECREMENT_ADULTS,
    INCREMENT_CHILDREN,
    DECREMENT_CHILDREN,
    INCREMENT_ROOMS,
    DECREMENT_ROOMS,
} from "../types";

const initialState = {search: '', dateFrom: Date.now(), dateTo: Date.now(), adults: 1, children: [], rooms: 1}

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

        case INCREMENT_CHILDREN:
            return {
                ...state,
                children: [ ...state.children, 1 ]
            }
        case DECREMENT_CHILDREN:
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
        default:
            return state;
    }
}

export default formReducer;
