import React from "react";
import './HeaderMenu.css'
import Svg from "../../assets/svg/Svg";
import {Link} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <>
       <Svg/>
            <header className="header">
                <div className="header__inner">
                    <Link className='Link' to={`/`}>
                    <svg className="header__logo">
                        <use href="#logotype"/>
                    </svg>
                    </Link>
                    <nav className="navigation">
                        <div className="nav__links">
                            <a href="/#">Stays</a>
                            <a href="/#">Attractions</a>
                        </div>
                        <div className="nav__icons">
                            <a href="/#">
                                <svg className="header__switcher">
                                    <use href="#styleTimeSwitch"/>
                                </svg>
                            </a>
                            <a href="/#">
                                <svg className="header__account">
                                    <use href="#account"/>
                                </svg>
                            </a>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default HeaderMenu;