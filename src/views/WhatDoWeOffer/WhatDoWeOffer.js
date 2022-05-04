import React from "react";
import {Section, Container, HeaderSection, Flex, Title} from "../../components/Styled-components/Global"
import styled from "styled-components";

const OfferItem = styled.svg`
    margin-top: 16px;
    width: 100px;
    height: 100px;
    fill: #3077C6;
    margin-bottom: 48px
`

const WhatDoWeOffer = () => {
    return (
        <Section>
            <Container>
                <HeaderSection>What do we offer</HeaderSection>
                <Flex width='100%'>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferItem>
                            <use href="#support"/>
                        </OfferItem>
                        <Title>Support 24/7</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferItem>
                            <use href="#Communicate"/>
                        </OfferItem>
                        <Title>Communicate directly</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferItem>
                            <use href="#Book"/>
                        </OfferItem>
                        <Title>Book online</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferItem>
                            <use href="#Reviews"/>
                        </OfferItem>
                        <Title>Real guest reviews</Title>
                    </Flex>
                </Flex>
            </Container>
        </Section>
    )
}

export default WhatDoWeOffer;