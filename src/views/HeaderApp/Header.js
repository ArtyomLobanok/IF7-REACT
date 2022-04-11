import React from "react";
import './/Header.css'
import Inner from "../../components/InnerTripHouse/InnerTripHouse";
import '../../components/Contaiter/Container.css'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const Header = ({setSearchData}) => {
    return (
        <div className="Header">
            <div className="container">
                <HeaderMenu/>
                <Inner setSearchData={setSearchData}/>
            </div>
        </div>
    );
}

export default Header;