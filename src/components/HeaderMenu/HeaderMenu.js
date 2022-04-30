import React from "react";
import './HeaderMenu.css'
import Svg from "../../assets/svg/Svg";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {removeUser} from '../../redux/slices/userSlice'
import useAuth from "../../hooks/use-auth";
import Dropdown from "./Dropdown/Dropdown";

const HeaderMenu = ({propsStyleHeader, propsStyleLogo, propsStyleAccount}) => {
    const dispatch = useDispatch();
    const {isAuth} = useAuth();
    const {isDropdown, handleClickDropdown} = Dropdown();
    return isAuth ? (
            <>
                <Svg/>
                <header className="header" style={propsStyleHeader}>
                    <div className="header__inner">
                        <Link className='Link' to={`/`}>
                            <svg style={propsStyleLogo} className="header__logo" fill={"#3077C6"}>
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
                                    <svg className="header__account"
                                         onClick={handleClickDropdown}
                                         fill={isDropdown === true ? '#F5BD41': '#FFFFFF'}
                                    >
                                        <use href="#account"/>
                                    </svg>
                                </a>
                                {
                                isDropdown && (
                                <button className="header__singOutBtn" onClick={() => dispatch(removeUser({}))}>
                                    <svg fill={"#333333"} className="header__singOutAcc">
                                        <use href="#singOut"/>
                                    </svg>
                                    Sign out
                                </button>
                                )}
                            </div>
                        </nav>
                    </div>
                </header>
            </>
        ) :
        (
            <>
                <Svg/>
                <header className="header" style={propsStyleHeader}>
                    <div className="header__inner">
                        <Link className='Link' to={`/`}>
                            <svg style={propsStyleLogo} className="header__logo" fill={"#3077C6"}>
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
                                    <svg className="header__account" style={propsStyleAccount}>
                                        <use href="#account"/>
                                    </svg>
                                </Link>
                            </div>
                        </nav>
                    </div>
                </header>
            </>
        )
}
export default HeaderMenu;