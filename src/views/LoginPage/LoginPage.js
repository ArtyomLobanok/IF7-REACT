import React from "react";
import "./LoginPage.css"
import {Link} from "react-router-dom";
import {Login} from "../../components/FormSingUp/Login";

const LoginPage = () => {
    return (
        <>

                    <div className="singInWindow">
                        <h3 className="singInTitle">Login</h3>
                        <Login/>
                        <p className="additionallyOffer">
                            Or <Link to="/register">register</Link>
                        </p>
                    </div>

        </>
    )
}
export default LoginPage;