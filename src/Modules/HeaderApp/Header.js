import React from "react";
import './/Header.css'
import Inner from "../../components/InnerTripHouse/InnerTripHouse";
import '../../components/Contaiter/Container.css'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <header className="Header">
            <div className="container">
                <HeaderMenu/>
                <Inner/>
            </div>
        </header>
    );
}

export default Header;