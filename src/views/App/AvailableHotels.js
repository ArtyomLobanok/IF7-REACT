import React from 'react';
import AvailableHotelsSlider from "../../components/AvailableHotelsSlider/AvailableHotelsSlider"
import {Container, HeaderSection, SectionAnother,} from "../../components/Styled-components/Global"

import {AvailableHotelsTitle} from "../../configs/stringsData";
import {useSelector} from "react-redux";

function AvailableHotels() {
    const hotelCards = useSelector(state => state.hotelsLoadReducer)
    return (
        <>
            {
                hotelCards.length !== 0 &&
                <SectionAnother>
                    <Container>
                        <HeaderSection>{AvailableHotelsTitle}</HeaderSection>
                        <AvailableHotelsSlider/>
                    </Container>
                </SectionAnother>
            }
        </>
    );
}

export default AvailableHotels;

