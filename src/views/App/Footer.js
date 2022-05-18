import React from "react";
import {Copyright, FooterList} from '../../components/Styled-components/Footer'
import {Container, Flex, SectionFooter} from "../../components/Styled-components/Global";
import {
    CopyrightText,
    FooterListTextAbout, FooterListTextApartments,
    FooterListTextCareers, FooterListTextContact, FooterListTextFAQ, FooterListTextHomes, FooterListTextHostels,
    FooterListTextHotels,
    FooterListTextHouses,
    FooterListTextPrivacy,
    FooterListTextProperty, FooterListTextSupport,
    FooterListTextTerms, FooterListTextVillas,
    FooterListTextWorks
} from "../../configs/stringsData";

const Footer = () => {
    return (
        <>
            <SectionFooter>
                <Container>
                    <Flex>
                        <FooterList>
                            <li>{FooterListTextAbout}</li>
                            <li>{FooterListTextWorks}</li>
                            <li>{FooterListTextCareers}</li>
                            <li>{FooterListTextPrivacy}</li>
                            <li>{FooterListTextTerms}</li>
                        </FooterList>
                        <FooterList>
                            <li>{FooterListTextProperty}</li>
                            <li>{FooterListTextHouses}</li>
                            <li>{FooterListTextHotels}</li>
                            <li>{FooterListTextApartments}</li>
                            <li>{FooterListTextVillas}</li>
                            <li>{FooterListTextHomes}</li>
                            <li>{FooterListTextHostels}</li>
                        </FooterList>
                        <FooterList>
                            <li>{FooterListTextSupport}</li>
                            <li>{FooterListTextContact}</li>
                            <li>{FooterListTextFAQ}</li>
                        </FooterList>
                    </Flex>
                    <Copyright>{CopyrightText}</Copyright>
                </Container>
            </SectionFooter>
        </>
    )
};

export default Footer;