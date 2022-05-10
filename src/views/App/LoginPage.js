import React from "react";
import {Login} from "../../components/FormSingUp/Login";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container, StyledLinkLogin} from "../../components/Styled-components/Global"
import {HeaderWrapper, LoginFrom, HeaderWrapperShadow} from "../../components/Styled-components/Login&Registration";
import {TittleLoginPage, TittleSingUp, СhoiceText} from "../../configs/stringsData";

const LoginPage = () => {
    return (
        <>
            <HeaderWrapper>
                <HeaderWrapperShadow>
                    <Container>
                        <HeaderMenu/>
                        <LoginFrom>
                            <h2>{TittleLoginPage}</h2>
                            <Login/>
                            <p>
                                {СhoiceText} <StyledLinkLogin to="/register">{TittleSingUp}</StyledLinkLogin>
                            </p>
                        </LoginFrom>
                    </Container>
                </HeaderWrapperShadow>
            </HeaderWrapper>
        </>
    )
}
export default LoginPage;