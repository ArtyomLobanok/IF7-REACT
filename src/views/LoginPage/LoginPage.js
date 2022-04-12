import React from "react";
import "./LoginPage.css"
import {Link} from "react-router-dom";
import {Login} from "../../components/FormSingUp/Login";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const LoginPage = () => {
    return (
        <section className="SignInSection">
            <div className="container">
                <HeaderMenu propsStyleAccount={{fill: "#FFFFFF"}}/>
                <div className="singInWindow">
                    <h3 className="singInTitle">Login</h3>
                    <Login/>
                    <p className="additionallyOffer">
                        Or <Link to="/register">Register</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default LoginPage;