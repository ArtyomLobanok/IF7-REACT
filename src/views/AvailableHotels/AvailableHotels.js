import React from 'react';
import AvailableHotelsSlider from "../../components/AvailableHotelsSlider/AvailableHotelsSlider"
import {Section, Container, HeaderSection} from "../../components/Styled-components/Global"
import {useSelector} from "react-redux";

function AvailableHotels() {
    const hotelCards = useSelector(state => state.hotelsLoadReducer.hotelData)
    return (
        <>
            {
                hotelCards.length > 0 &&
                <Section addColor='#EAF0F9'>
                    <Container>
                        <HeaderSection>Available hotels</HeaderSection>
                        <AvailableHotelsSlider/>
                    </Container>
                </Section>
            }
        </>
    );
}

export default AvailableHotels;

