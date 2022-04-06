import React from "react";
import "./Footer.css"
import FooterListColumb from "./FooterListColumb/FooterListColumb";


const Footer = () => {
    return (
        <div className="footerSection">
            <div className="container">
                <FooterListColumb/>
                <div className="copyright">© 2020 Triphouse, Inc. All rights reserved</div>
            </div>
        </div>
    )
};

export default Footer;