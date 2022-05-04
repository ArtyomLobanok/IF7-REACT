import React, {useState} from "react";
import "./TheBestDestinations.css"
import CardTheBestDestinations from '../../components/TheBestDestinationsCard/CardTheBestDestinations'
import {
    firstPieceOfDataRegions,
    secondPieceOfDataRegions,
    firstPieceOfDataCities,
    secondPieceOfDataCities,
    firstPieceOfDataPlacesOfInterest,
    secondPieceOfDataPlacesOfInterest,
} from "../../components/TheBestDestinationsData/TheBestDestinationsData"
import {Section, Container, HeaderSection} from "../../components/Styled-components/Global"
import {DestinationsTabs} from "../../components/Styled-components/TheBestDestinations"

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
                    <button onClick={handleChangeFirstTab}
                            className={tab !== 'Regions' ? 'tabs__category' : "tabs__categoryActive"}>
                        Regions
                    </button>
                    <button onClick={handleChangeSecondTab}
                            className={tab !== 'Cities' ? 'tabs__category' : "tabs__categoryActive"}>
                        Cities
                    </button>
                    <button onClick={handleChangeThirdTab}
                            className={tab !== 'Places' ? 'tabs__category' : "tabs__categoryActive"}>
                        Places of interest
                    </button>
                </DestinationsTabs>

                <div className='destinationsDataCollapse'>
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
                </div>
                {
                    isOpen && (
                        <div className='destinationsDataCollapse'>
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
                        </div>
                    )
                }
                <button onClick={handleClickCollapse}
                        className={isOpen === false ? "destinationsArrowBottom" : 'destinationsArrowTop'}/>
            </Container>
        </Section>
    )
}
export default TheBestDestinations;