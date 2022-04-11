import React from "react";
import './HeaderMenu.css'
import Svg from "../../assets/svg/Svg";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import useAuth from "../../hooks/use-auth";
import {removeUser} from '../../redux/slices/userSlice'

const HeaderMenu = (propsStyleHeader, propsStyleLogo) => {
    const dispatch = useDispatch();
    const { email } = useAuth();
    return (
        <>
       <Svg/>
            <header className="header" style={propsStyleHeader}>
                <div className="header__inner">
                    <Link className='Link' to={`/`}>
                    <svg style={propsStyleLogo} className="header__logo" >
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
                            <Link to="/login">
                                <svg className="header__account">
                                    <use href="#account"/>
                                </svg>
                                <button
                                    onClick={()=> dispatch(removeUser())}
                                >Log out from {email}</button>
                            </Link>
                        </div>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default HeaderMenu;