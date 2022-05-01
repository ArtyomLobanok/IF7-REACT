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
    const [button, setButton] = useState('Regions');
    const [isOpen, setIsOpen] = useState(false);
    const handleClickOpen = () => {
        setIsOpen(!isOpen)
    }

    return {
        button,
        setButton,
        isOpen,
        setIsOpen,
        handleClickOpen
    }
}

const TheBestDestinations = () => {
    const {button,setButton, isOpen, handleClickOpen} = TheBestDestinationsState()
    return (
        <section className='section__noneColor'>
            <div className='container'>
                <div className='section__header'>
                    <TextOfHeaders text='The best destinations'/>
                </div>
                <div className="destinations__tabs">
                    <button onClick={() => setButton(`Regions`)}
                            className={button !== 'Regions' ? 'tabs__category' : "tabs__categoryActive"}>
                        Regions
                    </button>
                    <button onClick={() => setButton('Cities')}
                            className={button !== 'Cities' ? 'tabs__category' : "tabs__categoryActive"}>
                        Cities
                    </button>
                    <button onClick={() => setButton('Places')}
                            className={button !== 'Places' ? 'tabs__category' : "tabs__categoryActive"}>
                        Places of interest
                    </button>
                </div>
                <div className='destinationsDataCollapse'>
                    {
                        button === 'Regions' && firstPieceOfDataRegions.map
                        (
                            destinationsCard =>
                                (
                                    <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                )
                        )
                    }
                    {
                        button === 'Cities' && firstPieceOfDataCities.map
                        (
                            destinationsCard =>
                                (
                                    <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                )
                        )
                    }
                    {
                        button === 'Places' && firstPieceOfDataPlacesOfInterest.map
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
                                button === 'Regions' && secondPieceOfDataRegions.map
                                (
                                    destinationsCard =>
                                        (
                                            <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                        )
                                )
                            }
                            {
                                button === 'Cities' && secondPieceOfDataCities.map
                                (
                                    destinationsCard =>
                                        (
                                            <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                                        )
                                )
                            }

                            {
                                button === 'Places' && secondPieceOfDataPlacesOfInterest.map
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
                <button onClick={handleClickOpen}
                        className={isOpen === false ? "destinationsArrowBottom" : 'destinationsArrowTop'}/>
            </div>
        </section>
    )
}
export default TheBestDestinations;