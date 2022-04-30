import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import App from './views/App/App';
import HotelPage from "./views/HotelPage/HotelPage";
import {Provider} from "react-redux";
import {store, persistor} from "./redux/store"
import {PersistGate} from "redux-persist/integration/react";
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import '../src/firebase'

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="hotel/:id" element={<HotelPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                </Routes>
            </PersistGate>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root')
);

