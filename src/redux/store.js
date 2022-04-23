import { configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/userSlice';
import testReducer from '../redux/reducers/testReducer'
import inputReducer from "./reducers/inputReducer";
import thunk from "redux-thunk";
import hotelsLoadReducer from "./reducers/DataLoadReducer";


export const store = configureStore({
    reducer: {
        user: userReducer,
        testReducer,
        inputReducer,
        hotelsLoadReducer,

    },
    middleware: [thunk],
});