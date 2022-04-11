import React from "react";
import "../LoginPage/LoginPage.css"
import {Link} from "react-router-dom";
import {SignUp} from "../../components/FormSingUp/SignUp";

const LoginPage = () => {
    return (
        <>
            <h3 className="singInTitle">Register</h3>
            <SignUp/>
            <p className="additionallyOffer">
                Already have an account?
                <Link to="/login">Sign in</Link>
            </p>
        </>
    )
}
export default LoginPage;