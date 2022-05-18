import React from "react";
import {Section, Container, HeaderSection, Flex, Title, OfferIcon} from "../../components/Styled-components/Global"
import {
    WhatDoWeOfferBook,
    WhatDoWeOfferCommunicate, WhatDoWeOfferReviews,
    WhatDoWeOfferSupport,
    WhatDoWeOfferTitle
} from "../../configs/stringsData";


const WhatDoWeOffer = () => {
    return (
        <Section>
            <Container>
                <HeaderSection>{WhatDoWeOfferTitle}</HeaderSection>
                <Flex width='100%'>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#support"/>
                        </OfferIcon>
                        <Title>{WhatDoWeOfferSupport}</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#Communicate"/>
                        </OfferIcon>
                        <Title>{WhatDoWeOfferCommunicate}</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#Book"/>
                        </OfferIcon>
                        <Title>{WhatDoWeOfferBook}</Title>
                    </Flex>
                    <Flex align='center' width='25%' direction='column'>
                        <OfferIcon width = "100px" height = "100px" margin = "16px 0 48px">
                            <use href="#Reviews"/>
                        </OfferIcon>
                        <Title>{WhatDoWeOfferReviews}</Title>
                    </Flex>
                </Flex>
            </Container>
        </Section>
    )
}

export default WhatDoWeOffer;