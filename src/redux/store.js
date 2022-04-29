import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from "redux";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from 'redux-persist'
import localStorage from 'redux-persist/lib/storage'
import userReducer from './slices/userSlice';
import formReducer from "./reducers/formReducer";
import hotelsLoadReducer from "./reducers/DataLoadReducer";

const rootReducer = combineReducers({
    user: userReducer,
    hotelsLoadReducer,
    formReducer,
});
console.log(rootReducer)

const persistConfig = {
    key: 'root',
    storage: localStorage,
    blacklist: ['formReducer', 'hotelsLoadReducer']
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }),
})

export const persistor = persistStore(store);