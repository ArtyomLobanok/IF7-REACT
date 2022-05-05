import React from "react";
import "./Footer.css"
import {Copyright, FooterList} from '../../components/Styled-components/Footer'
import {Section, Container, Flex} from "../../components/Styled-components/Global";

const Footer = () => {
    return (
        <>
            <Section addColor="#10367C">
                <Container>
                    <Flex>
                        <FooterList>
                            <li>About</li>
                            <li>How Triphouse works</li>
                            <li>Careers</li>
                            <li>Privacy</li>
                            <li>Terms</li>
                        </FooterList>
                        <FooterList>
                            <li>Property types</li>
                            <li>Guest houses</li>
                            <li>Hotels</li>
                            <li>Apartments</li>
                            <li>Villas</li>
                            <li>Holiday homes</li>
                            <li>Hostels</li>
                        </FooterList>
                        <FooterList>
                            <li>Support</li>
                            <li>Contact Customer Service</li>
                            <li>FAQ</li>
                        </FooterList>
                    </Flex>
                    <Copyright>© 2020 Triphouse, Inc. All rights reserved</Copyright>
                </Container>
            </Section>
        </>
    )
};

export default Footer;