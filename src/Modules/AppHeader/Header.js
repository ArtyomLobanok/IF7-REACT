import React from "react";
import '../AppHeader/Header.css'
import HeaderTrip from "../../components/HeaderMenu/HeaderMenu";
import Inner from "../../components/InnerTripHouse/InnerTripHouse";
const Header = () => {
    return (
        <div className="Header">
            <HeaderTrip/>
            <Inner/>
        </div>
    );
}

export default Header;