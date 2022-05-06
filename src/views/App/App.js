import {Route, Routes} from "react-router-dom";
import './App.css';
import HotelPage from "../HotelPage/HotelPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import React from "react";
import MainPage from "./MainPage";
import {ThemeProvider} from "styled-components";

const App = () => {
//theme={themes[theme]}
    return (
        // <ThemeProvider >
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="hotel/:id" element={<HotelPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
            </Routes>
        // </ThemeProvider>
    )
}

export default App;
