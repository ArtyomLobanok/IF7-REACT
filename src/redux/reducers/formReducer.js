import {INPUT_TEXT, DATE_START, DATE_END, ADULTS_COUNTER, CHILDREN_COUNTER, ROOMS_COUNTER} from "../types";

const initialState = {search: '', startDate: '', endDate: '', adults: '', children: '', rooms: ''}

const formReducer = (state = initialState, action) => {
    console.log('input text Reducer >>', action)

    switch (action.type) {
        case INPUT_TEXT:
            return {
                ...state,
                search: action.search
            }
        case DATE_START:
            return {
                ...state,
                startDate: action.startDate
            }
        case DATE_END:
            return {
                ...state,
                endDate: action.endDate
            }
        case ADULTS_COUNTER:
            return {
                ...state,
                adults: action.adults
            }
        case CHILDREN_COUNTER:
            return {
                ...state,
                children: action.children
            }
        case ROOMS_COUNTER:
            return {
                ...state,
                rooms: action.rooms
            }
        default:
            return state;
    }
}

export default formReducer;
