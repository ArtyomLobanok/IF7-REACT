import React from "react";
import {Link} from "react-router-dom";
import {Login} from "../../components/FormSingUp/Login";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container} from "../../components/Styled-components/Global"
import {HeaderWrapper, LoginFrom} from "../../components/Styled-components/Login&Registration";


const LoginPage = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderMenu/>
                <LoginFrom>
                    <h2>Login</h2>
                    <Login/>
                    <p>
                        Or <Link to="/register">Register</Link>
                    </p>
                </LoginFrom>
            </Container>
        </HeaderWrapper>
    )
}
export default LoginPage;