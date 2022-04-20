import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './views/App/App';
import HotelPage from "./views/HotelPage/HotelPage";
import { Provider } from "react-redux";
import { store } from "./redux/store"
import LoginPage from "./views/LoginPage/LoginPage";
import RegisterPage from "./views/RegisterPage/RegisterPage";
import '../src/firebase'


ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path="hotel/:id" element={<HotelPage/>}/>
                    <Route path="login" element={<LoginPage/>}/>
                    <Route path="register" element={<RegisterPage/>}/>
                </Routes>
            </Provider>
        </BrowserRouter>,
    document.getElementById('root')
);

