import React from "react";
import "../LoginPage/LoginPage.css"
import {Link} from "react-router-dom";
import {SignUp} from "../../components/FormSingUp/SignUp";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";

const LoginPage = () => {
    return (
        <section className="SignInSection">
            <div className="container">
                <HeaderMenu propsStyleAccount={{fill: "#FFFFFF"}}/>
                <div className="singInWindow">
                    <h3 className="singInTitle">Register</h3>
                    <SignUp/>
                    <p className="additionallyOffer">
                        Already have an account?
                        <Link to="/login">Sign in</Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
export default LoginPage;