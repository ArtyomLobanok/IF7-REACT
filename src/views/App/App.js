import React, {useState} from 'react';
// import {Navigate} from "react-router-dom";
import './App.css';
import Header from '../HeaderApp/Header';
import HomesGuestsLoves from "../HomesGuestsLoves/HomesGuestsLoves";
import AvailableHotels from "../AvailableHotels/AvailableHotels";
import useFeatch from "../../hooks/useFetch";
import {url} from "../../api/endPoints";
import Footer from "../FooterApp/Footer";
// import useAuth from "../../../src/hooks/use-auth"
import TestBlock from "../TestBlock/TestBlock"
// isAuth ?

function App() {
    const [searchData, setSearchData] = useState('')
    const {array} = useFeatch(searchData.nameOfSearch && url.searchUrl(searchData.nameOfSearch));
    // const {isAuth} = useAuth();
    return (
            <>
                <Header setSearchData={setSearchData}/>
                 <AvailableHotels/>
                <HomesGuestsLoves/>
                <Footer/>
                <TestBlock/>
            </>
        )
    //     : (
    //         <Navigate replace to="/login"/>
    // )
}

export default App;
