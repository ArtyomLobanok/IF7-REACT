import React from 'react';
import './App.css';
import Header from '../HeaderApp/Header';
import Footer from "../FooterApp/Footer";
import HomesGuestsLoves from "../HomesGuestsLoves/HomesGuestsLoves";
import AvailableHotels from "../AvailableHotels/AvailableHotels";

function App() {
    return (
        <>
            <Header/>
            <AvailableHotels/>
            <HomesGuestsLoves/>
            <Footer/>
        </>
    );
}

export default App;
