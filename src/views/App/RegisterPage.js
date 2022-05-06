import React from "react";
import {Link} from "react-router-dom";
import {SignUp} from "../../components/FormSingUp/SignUp";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container} from "../../components/Styled-components/Global"
import {HeaderWrapper, LoginFrom} from "../../components/Styled-components/Login&Registration";

const LoginPage = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderMenu propsStyleAccount={{fill: "#F5BD41"}}/>
                <LoginFrom>
                    <h2>Register</h2>
                    <SignUp/>
                    <p>
                        Already have an account?
                        <Link to="/login"> Sign in</Link>
                    </p>
                </LoginFrom>
            </Container>
        </HeaderWrapper>
    )
}
export default LoginPage;