import React from "react";
import "../SignIn/SingIn.css"
import {Link} from "react-router-dom";


const SignIn = () => {
    return (
        <div className="singInWindow">
            <h3 className="singInTitle">Register</h3>
                           <p className="additionallyOffer">
                    Already have an account?
                    <Link to="/login">Sign in</Link>
                </p>

        </div>
    )
}

export default SignIn