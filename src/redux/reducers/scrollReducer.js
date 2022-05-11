import {SCROLL_TO_TOP} from "../types";

const initialState = 0;

const scrollReducer = (state = initialState, action) => {
    switch (action.type) {
        case SCROLL_TO_TOP:
            return {
                scrollToTop: action.scrollToTop
            }
        default:
            return state
    }
}
export default scrollReducer;