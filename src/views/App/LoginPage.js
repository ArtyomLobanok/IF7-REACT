import React from "react";
import {Login} from "../../components/FormSingUp/Login";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container, StyledLinkLogin} from "../../components/Styled-components/Global"
import {HeaderWrapper, LoginFrom, HeaderWrapperShadow} from "../../components/Styled-components/Login&Registration";

const LoginPage = () => {
    return (
        <>
            <HeaderWrapper>
                <HeaderWrapperShadow>
                    <Container>
                        <HeaderMenu/>
                        <LoginFrom>
                            <h2>Login</h2>
                            <Login/>
                            <p>
                                Or <StyledLinkLogin to="/register">Register</StyledLinkLogin>
                            </p>
                        </LoginFrom>
                    </Container>
                </HeaderWrapperShadow>
            </HeaderWrapper>
        </>
    )
}
export default LoginPage;