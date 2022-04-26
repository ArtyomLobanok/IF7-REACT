import React from "react";
import "./Footer.css"
import FooterList from "../../components/FooterListColumb/FooterListColumb";
import Counters from "../../counters"

const Footer = () => {
    return (
        <>
        <div className="footerSection">
            <div className="container">
                <FooterList/>
                <div className="copyright">© 2020 Triphouse, Inc. All rights reserved</div>
            </div>
        </div>
            <Counters/>
        </>
    )
};

export default Footer;