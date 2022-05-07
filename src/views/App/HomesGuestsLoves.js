import React from 'react';
import HomesGuestsLovesSlider from "../../components/HomesGuestsLovesSlider/HomesGuestsLovesSlider";
import { Container, HeaderSection, SectionAnother} from "../../components/Styled-components/Global"

function HomesGuestsLoves() {
    return (
        <SectionAnother>
            <Container>
                <HeaderSection>Homes guests loves</HeaderSection>
                <HomesGuestsLovesSlider/>
            </Container>
        </SectionAnother>
    );
}

export default HomesGuestsLoves;

