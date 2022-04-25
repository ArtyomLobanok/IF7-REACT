import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userReducer from './slices/userSlice';
import formReducer from "./reducers/formReducer";
import hotelsLoadReducer from "./reducers/DataLoadReducer";

const reducers = combineReducers({
    user: userReducer,
    formReducer,
    hotelsLoadReducer,
});

const persistConfig = {
    key: 'root',
    storage
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export const persistor = persistStore(store);