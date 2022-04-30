import { Navigate } from "react-router-dom";
import './App.css';
import Header from '../HeaderApp/Header';
import HomesGuestsLoves from "../HomesGuestsLoves/HomesGuestsLoves";
import AvailableHotels from "../AvailableHotels/AvailableHotels";
import Footer from "../FooterApp/Footer";
import useAuth from "../../../src/hooks/use-auth"
import React from "react";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import WhatDoWeOffer from "../WhatDoWeOffer/WhatDoWeOffer";
import TheBestDestinations from "../TheBestDestinations/TheBestDestinations";


function App() {
    const {isAuth} = useAuth();
    return isAuth ? (
        <>
            <ScrollToTop/>
            <Header/>
            <WhatDoWeOffer/>
            <AvailableHotels/>
            <HomesGuestsLoves/>
            <TheBestDestinations/>
            <Footer/>
        </>
    )
        : (
            <Navigate replace to="/login"/>
    )
}

export default App;
