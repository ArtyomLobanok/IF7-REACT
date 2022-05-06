import {lightTheme} from "../../components/Styled-components/ThemeData"
import {SWITCH_THEMES} from "../types";

const initialState = {
    theme: lightTheme
}

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SWITCH_THEMES:
            return {theme: action.theme};

        default:
            return state;
    }
}

export default themeReducer;