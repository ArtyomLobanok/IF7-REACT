import React, {useState} from 'react';
import './App.css';
import Header from '../HeaderApp/Header';
import HomesGuestsLoves from "../HomesGuestsLoves/HomesGuestsLoves";
import AvailableHotels from "../AvailableHotels/AvailableHotels";
import useFeatch from "../../hooks/useFetch";
import {url} from "../../api/endPoints";
import Footer from "../FooterApp/Footer";

function App() {
    const [searchData, setSearchData] = useState('')
    const {array} = useFeatch(searchData.nameOfSearch && url.searchUrl(searchData.nameOfSearch));
    return (
        <>
            <Header setSearchData={setSearchData}/>
            {array.length > 0 && <AvailableHotels array={array}/>}
            <HomesGuestsLoves/>
            <Footer/>
        </>
    );
}

export default App;
