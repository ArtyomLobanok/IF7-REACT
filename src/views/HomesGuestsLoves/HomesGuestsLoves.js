import React from 'react';
import HomesGuestsLovesSlider from "../../components/HomesGuestsLovesSlider/HomesGuestsLovesSlider";
import {Section, Container, HeaderSection} from "../../components/Styled-components/Global"

function HomesGuestsLoves() {
    return (
        <Section addColor='#EAF0F9'>
            <Container>
                <HeaderSection>Homes guests loves</HeaderSection>
                <HomesGuestsLovesSlider/>
            </Container>
        </Section>
    );
}

export default HomesGuestsLoves;

