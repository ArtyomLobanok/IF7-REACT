import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';

import formReducer from "./reducers/formReducer";
import thunk from "redux-thunk";
import hotelsLoadReducer from "./reducers/DataLoadReducer";


export const store = configureStore({
    reducer: {
        user: userReducer,
        formReducer,
        hotelsLoadReducer,

    },
    middleware: [thunk],
});