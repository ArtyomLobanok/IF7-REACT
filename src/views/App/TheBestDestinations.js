import React, {useState} from "react";

import CardTheBestDestinations from '../../components/TheBestDestinationsCard/CardTheBestDestinations'
import {
    firstPieceOfDataRegions,
    secondPieceOfDataRegions,
    firstPieceOfDataCities,
    secondPieceOfDataCities,
    firstPieceOfDataPlacesOfInterest,
    secondPieceOfDataPlacesOfInterest,
} from "../../components/TheBestDestinationsData/TheBestDestinationsData"
import {
    Section,
    Container,
    HeaderSection,
    TabsBtnAndSearchBtn
} from "../../components/Styled-components/Global"
import {
    DestinationsArrowCollapse,
    DestinationsCardsCollapse,
    DestinationsTabs,
} from "../../components/Styled-components/TheBestDestinations"

const TheBestDestinationsState = () => {
    const [tab, setTab] = useState('Regions');
    const [isOpen, setIsOpen] = useState(false);
    const handleClickCollapse = () => {
        setIsOpen(!isOpen)
    }
    const handleChangeFirstTab = () => {
        if (isOpen === true) {
            setIsOpen(false)
        }
        setTab(`Regions`)
    }
    const handleChangeSecondTab = () => {
        if (isOpen === true) {
            setIsOpen(false)
        }
        setTab(`Cities`)
    }

    const handleChangeThirdTab = () => {
        if (isOpen === true) {
            setIsOpen(false)
        }
        setTab(`Places`)
    }
    return {
        tab,
        isOpen,
        handleClickCollapse,
        handleChangeFirstTab,
        handleChangeSecondTab,
        handleChangeThirdTab,
    }
}

const TheBestDestinations = () => {
    const {
        tab, isOpen,
        handleClickCollapse,
        handleChangeFirstTab,
        handleChangeSecondTab,
        handleChangeThirdTab,
    } = TheBestDestinationsState()
    return (
        <Section>
            <Container>
                <HeaderSection>The best destinations</HeaderSection>

                <DestinationsTabs>
                    <TabsBtnAndSearchBtn active={tab === 'Regions'} width='30%' onClick={handleChangeFirstTab}>
                        Regions
                    </TabsBtnAndSearchBtn>
                    <TabsBtnAndSearchBtn active={tab === 'Cities'} width='30%' onClick={handleChangeSecondTab}>
                        Cities
                    </TabsBtnAndSearchBtn>
                    <TabsBtnAndSearchBtn active={tab === 'Places'} width='40%' onClick={handleChangeThirdTab}>
                        Places of interest
                    </TabsBtnAndSearchBtn>
                </DestinationsTabs>

                <DestinationsCardsCollapse>
                    {
                        tab === 'Regions' && firstPieceOfDataRegions.map
                        (
                            destinationsCard =>
                                (
                                    <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                )
                        )
                    }
                    {
                        tab === 'Cities' && firstPieceOfDataCities.map
                        (
                            destinationsCard =>
                                (
                                    <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                )
                        )
                    }
                    {
                        tab === 'Places' && firstPieceOfDataPlacesOfInterest.map
                        (
                            destinationsCard =>
                                (
                                    <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                )
                        )
                    }
                </DestinationsCardsCollapse>
                {
                    isOpen && (
                        <DestinationsCardsCollapse>
                            {
                                tab === 'Regions' && secondPieceOfDataRegions.map
                                (
                                    destinationsCard =>
                                        (
                                            <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                        )
                                )
                            }
                            {
                                tab === 'Cities' && secondPieceOfDataCities.map
                                (
                                    destinationsCard =>
                                        (
                                            <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                        )
                                )
                            }

                            {
                                tab === 'Places' && secondPieceOfDataPlacesOfInterest.map
                                (
                                    destinationsCard =>
                                        (
                                            <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                        )
                                )
                            }
                        </DestinationsCardsCollapse>
                    )
                }
                <DestinationsArrowCollapse activate={isOpen === false} onClick={handleClickCollapse}/>
            </Container>
        </Section>
    )
}
export default TheBestDestinations;