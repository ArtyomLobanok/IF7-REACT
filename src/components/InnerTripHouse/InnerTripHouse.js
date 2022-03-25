import React from "react";
import '../InnerTripHouse/InnerTripHouse.css'
import Form from "../FormOfSeach/FormOfSeach";
import googlePlayBadge from "../Assets/Img/IconsFromHeader/google-play-badge.png"
import appStoreBadge from "../Assets/Img/IconsFromHeader/AppleStoreBadge.svg"
const Inner = () => {
    return (
        <div className="Inner">
            <>
            <h1 className="Inner__title">Discover stays<br/>
                to live, work or just relax</h1>
            <Form/>
                <div className="intro__icons">
                    <a href="https://play.google.com/store">
                        <img src= {googlePlayBadge} alt="Img google pay store"/>
                    </a>
                    <a href="https://www.apple.com/ru/app-store/">
                        <img src={appStoreBadge} alt="Img apple store"/>
                    </a>
                </div>
            </>
        </div>
    );
}

export default Inner;