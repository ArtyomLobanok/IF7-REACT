// import {Navigate} from "react-router-dom";
import './App.css';
import Header from '../HeaderApp/Header';
import HomesGuestsLoves from "../HomesGuestsLoves/HomesGuestsLoves";
import AvailableHotels from "../AvailableHotels/AvailableHotels";
import Footer from "../FooterApp/Footer";
// import useAuth from "../../../src/hooks/use-auth"

// isAuth ?

function App() {
    // const {isAuth} = useAuth();
    return (
        <>
            <Header/>
            <AvailableHotels/>
            <HomesGuestsLoves/>
            <Footer/>
        </>
    )
    //     : (
    //         <Navigate replace to="/login"/>
    // )
}

export default App;
