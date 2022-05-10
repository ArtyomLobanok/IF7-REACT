import React from 'react';
import HomesGuestsLovesSlider from "../../components/HomesGuestsLovesSlider/HomesGuestsLovesSlider";
import { Container, HeaderSection, SectionAnother} from "../../components/Styled-components/Global"
import {HomesGuestsLovesTitle} from "../../configs/stringsData";

function HomesGuestsLoves() {
    return (
        <SectionAnother>
            <Container>
                <HeaderSection>{HomesGuestsLovesTitle}</HeaderSection>
                <HomesGuestsLovesSlider/>
            </Container>
        </SectionAnother>
    );
}

export default HomesGuestsLoves;

