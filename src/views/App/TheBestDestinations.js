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
    HeaderSection, SliderArrow,
} from "../../components/Styled-components/Global"
import {
    DestinationsArrowCollapseDown, DestinationsArrowCollapseUp,
    DestinationsCardsCollapse,
    DestinationsTabs, TabsBtn, TabsBtnActive,
} from "../../components/Styled-components/TheBestDestinations"
import {
    DestinationsTabsCities,
    DestinationsTabsPlaces,
    DestinationsTabsRegions,
    TheBestDestinationsTitle
} from "../../configs/stringsData";

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
                <HeaderSection>{TheBestDestinationsTitle}</HeaderSection>

                <DestinationsTabs>
                    {tab === 'Regions' ? (
                        <TabsBtnActive width='30%' onClick={handleChangeFirstTab}>
                            {DestinationsTabsRegions}
                        </TabsBtnActive>
                    ) : (
                        <TabsBtn width='30%' onClick={handleChangeFirstTab}>
                            {DestinationsTabsRegions}
                        </TabsBtn>
                    )}

                    {tab === 'Cities' ? (
                        <TabsBtnActive width='30%' onClick={handleChangeSecondTab}>
                            {DestinationsTabsCities}
                        </TabsBtnActive>
                    ) : (
                        <TabsBtn width='30%' onClick={handleChangeSecondTab}>
                            {DestinationsTabsCities}
                        </TabsBtn>
                    )}

                    {tab === 'Places' ? (
                        <TabsBtnActive width='40%' onClick={handleChangeThirdTab}>
                            {DestinationsTabsPlaces}
                        </TabsBtnActive>
                    ) : (
                        <TabsBtn width='40%' onClick={handleChangeThirdTab}>
                            {DestinationsTabsPlaces}
                        </TabsBtn>
                    )}

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
                {isOpen === false ? (
                    <DestinationsArrowCollapseDown onClick={handleClickCollapse}>
                        <SliderArrow margin='0 0 0 10px' width='9px' height='21px'>
                            <use href="#Arrow"></use>
                        </SliderArrow>
                    </DestinationsArrowCollapseDown>
                ) : (
                    <DestinationsArrowCollapseUp onClick={handleClickCollapse}>
                        <SliderArrow margin='0 0 0 10px' width='9px' height='21px'>
                            <use href="#Arrow"></use>
                        </SliderArrow>
                    </DestinationsArrowCollapseUp>
                )}
            </Container>
        </Section>
    )
}
export default TheBestDestinations;