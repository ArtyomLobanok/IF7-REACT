import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './views/App/App';
import Footer from "./views/FooterApp/Footer";
import HotelPage from "./views/HotelPage/HotelPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="/hotels/:id" element={<HotelPage/>}/>
            </Routes>
            <Footer/>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById('root')
);

