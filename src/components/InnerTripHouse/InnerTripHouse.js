import React from "react";
import Form from "../FormOfSeach/Form";
import googlePlayBadge from "../../assets/Img/IconsFromHeader/google-play-badge.png"
import appStoreBadge from "../../assets/Img/IconsFromHeader/AppleStoreBadge.svg"
import {HeaderContentIconWrapper, HeaderContentTitle, HeaderContentWrapper} from "../Styled-components/Header";
import {HeaderContentTitleTextFirstPart, HeaderContentTitleTextSecondPart} from "../../configs/stringsData";

const Inner = () => {
    return (
        <HeaderContentWrapper>
            <HeaderContentTitle>{HeaderContentTitleTextFirstPart}<br/>{HeaderContentTitleTextSecondPart}</HeaderContentTitle>
            <Form/>
                <HeaderContentIconWrapper>
                    <a href="https://play.google.com/store">
                        <img src= {googlePlayBadge} alt="Img google pay store"/>
                    </a>
                    <a href="https://www.apple.com/ru/app-store/">
                        <img src={appStoreBadge} alt="Img apple store"/>
                    </a>
                </HeaderContentIconWrapper>
        </HeaderContentWrapper>
    );
}

export default Inner;