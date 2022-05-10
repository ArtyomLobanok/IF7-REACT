import React from "react";
import {SignUp} from "../../components/FormSingUp/SignUp";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container, StyledLinkLogin} from "../../components/Styled-components/Global"
import {HeaderWrapper, LoginFrom, HeaderWrapperShadow} from "../../components/Styled-components/Login&Registration";
import {RegisterQuestionText, TittleLogin, TittleSingUp} from "../../configs/stringsData";

const LoginPage = () => {
    return (
        <>
            <HeaderWrapper>
                <HeaderWrapperShadow>
                    <Container>
                        <HeaderMenu propsStyleAccount={{fill: "#F5BD41"}}/>
                        <LoginFrom>
                            <h2>{TittleSingUp}</h2>
                            <SignUp/>
                            <p>
                                {RegisterQuestionText}
                                <StyledLinkLogin to="/login">{TittleLogin}</StyledLinkLogin>
                            </p>
                        </LoginFrom>
                    </Container>
                </HeaderWrapperShadow>
            </HeaderWrapper>
        </>

    )
}
export default LoginPage;