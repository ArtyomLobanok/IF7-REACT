import React from 'react';
import AvailableHotelsSlider from "../../components/AvailableHotelsSlider/AvailableHotelsSlider"
import { Container, HeaderSection, SectionAnother} from "../../components/Styled-components/Global"
import {useSelector} from "react-redux";

function AvailableHotels() {
    const hotelCards = useSelector(state => state.hotelsLoadReducer.hotelData)
    return (
        <>
            {
                hotelCards.length > 0 &&
                <SectionAnother>
                    <Container>
                        <HeaderSection>Available hotels</HeaderSection>
                        <AvailableHotelsSlider/>
                    </Container>
                </SectionAnother>
            }
        </>
    );
}

export default AvailableHotels;

