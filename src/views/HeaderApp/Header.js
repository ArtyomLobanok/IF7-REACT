import React from "react";
import './/Header.css'
import Inner from "../../components/InnerTripHouse/InnerTripHouse";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <div className="Header">
            <div className="container">
                <HeaderMenu/>
                <Inner/>
            </div>
        </div>
    );
}

export default Header;