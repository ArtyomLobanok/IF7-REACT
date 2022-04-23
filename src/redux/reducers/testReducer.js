import {DECREMENT, INCREMENT} from "../types";

const initialState = {
    countAdults: 10
}

 const countAd  = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                countAdults: state.countAdults + 1
            }
        case DECREMENT:
            return {
                ...state,
                countAdults: state.countAdults - 1
            }
        default:
            return state;
    }
}

export default countAd;