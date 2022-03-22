import React from "react";
import '../AppHeader/Header.css'
import Inner from "../../components/InnerTripHouse/InnerTripHouse";
import '../../components/Contaiter/Container.css'
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const Header = () => {
    return (
        <section className="Header">
            <div className="container">
                <HeaderMenu/>
                <Inner/>
            </div>
        </section>
    );
}

export default Header;