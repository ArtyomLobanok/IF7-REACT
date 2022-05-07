import {Route, Routes} from "react-router-dom";
import HotelPage from "./HotelPage";
import LoginPage from "./LoginPage";
import RegisterPage from "./RegisterPage";
import React from "react";
import MainPage from "./MainPage";
import {ThemeProvider} from "styled-components";
import {useSelector} from "react-redux";

const App = () => {
    const theme = useSelector((state) => state.themeReducer.theme)
    return (
        <ThemeProvider theme={theme} >
            <Routes>
                <Route path="/" element={<MainPage/>}/>
                <Route path="hotel/:id" element={<HotelPage/>}/>
                <Route path="login" element={<LoginPage/>}/>
                <Route path="register" element={<RegisterPage/>}/>
            </Routes>
        </ThemeProvider>
    )
}

export default App;
