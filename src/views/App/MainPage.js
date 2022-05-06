import useAuth from "../../hooks/use-auth";
import ScrollToTop from "../../components/ScrollToTop/ScrollToTop";
import Svg from "../../assets/svg/Svg";
import Header from "./Header";
import AvailableHotels from "./AvailableHotels";
import WhatDoWeOffer from "./WhatDoWeOffer";
import HomesGuestsLoves from "./HomesGuestsLoves";
import TheBestDestinations from "./TheBestDestinations";
import Promotion from "./Promotion";
import GuestsReviews from "./GuestsReviews";
import Footer from "./Footer";
import {Navigate} from "react-router-dom";

const MainPage = () => {
    const {isAuth} = useAuth();
    return isAuth ? (
            <>
                <ScrollToTop/>
                <Svg/>
                <Header/>
                <AvailableHotels/>
                <WhatDoWeOffer/>
                <HomesGuestsLoves/>
                <TheBestDestinations/>
                <Promotion/>
                <GuestsReviews/>
                <Footer/>
            </>
        )
        : (
            <Navigate replace to="/login"/>
        )
}

export default MainPage;