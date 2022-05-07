import React from "react";
import {Section, Container, HeaderSection, Flex, Title, OfferIcon} from "../../components/Styled-components/Global"


const WhatDoWeOffer = () => {
    return (
        <Section>
            <Container>
                <HeaderSection>What do we offer</HeaderSection>
                <Flex width='100%'>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#support"/>
                        </OfferIcon>
                        <Title>Support 24/7</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#Communicate"/>
                        </OfferIcon>
                        <Title>Communicate directly</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#Book"/>
                        </OfferIcon>
                        <Title>Book online</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#Reviews"/>
                        </OfferIcon>
                        <Title>Real guest reviews</Title>
                    </Flex>
                </Flex>
            </Container>
        </Section>
    )
}

export default WhatDoWeOffer;