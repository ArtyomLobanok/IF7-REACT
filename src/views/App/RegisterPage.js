import React from "react";
import {SignUp} from "../../components/FormSingUp/SignUp";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container, StyledLinkLogin} from "../../components/Styled-components/Global"
import {HeaderWrapper, LoginFrom,HeaderWrapperShadow} from "../../components/Styled-components/Login&Registration";

const LoginPage = () => {
    return (
        <HeaderWrapper>
            <HeaderWrapperShadow>
                <Container>
                    <HeaderMenu propsStyleAccount={{fill: "#F5BD41"}}/>
                    <LoginFrom>
                        <h2>Register</h2>
                        <SignUp/>
                        <p>
                            Already have an account?
                            <StyledLinkLogin to="/login"> Sign in</StyledLinkLogin>
                        </p>
                    </LoginFrom>
                </Container>
            </HeaderWrapperShadow>
        </HeaderWrapper>
    )
}
export default LoginPage;