import React, {useState} from "react";
import "./TheBestDestinations.css"
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import CardTheBestDestinations from '../../components/CardTheBestDestinations/CardTheBestDestinations'
import {
    firstPieceOfDataRegions,
    secondPieceOfDataRegions,
    firstPieceOfDataCities,
    secondPieceOfDataCities,
    firstPieceOfDataPlacesOfInterest,
    secondPieceOfDataPlacesOfInterest,
} from "../../components/TheBestDestinationsData/TheBestDestinationsData"

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
        setTab,
        isOpen,
        setIsOpen,
        handleClickCollapse,
        handleChangeFirstTab,
        handleChangeSecondTab,
        handleChangeThirdTab,
    }
}

const TheBestDestinations = () => {
    const {
        tab, setTab, isOpen,
        handleClickCollapse,
        handleChangeFirstTab,
        handleChangeSecondTab,
        handleChangeThirdTab,
    } = TheBestDestinationsState()
    return (
        <section className='section__noneColor'>
            <div className='container'>
                <div className='section__header'>
                    <TextOfHeaders text='The best destinations'/>
                </div>
                <div className="destinations__tabs">
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
                </div>
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
            </div>
        </section>
    )
}
export default TheBestDestinations;