import "./TheBestDestinations.css"
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import React, {useState} from "react";
import {
    dataRegions,
    dataCities,
    dataPlacesOfInterest
} from "../../components/TheBestDestinationsData/TheBestDestinationsData"
import CardTheBestDestinations from '../../components/CardTheBestDestinations/CardTheBestDestinations'
import classNames from "classnames";

const TheBestDestinations = () => {
    const [button, setButton] = useState('Regions');
    return (
        <section className='section__noneColor'>
            <div className='container'>
                <div className='section__header'>
                    <TextOfHeaders text='The best destinations'/>
                </div>
                <div className="destinations__tabs">
                    <button onClick={()=>setButton( `Regions`)}
                            className={button !== 'Regions' ?  'tabs__category' : "tabs__categoryActive"}>
                        Regions
                    </button>
                    <button onClick={()=>setButton('Cities')}
                            className={button !== 'Cities' ?  'tabs__category' : "tabs__categoryActive"}>
                        Cities
                    </button>
                    <button onClick={()=>setButton('Places')}
                            className={button !== 'Places' ? 'tabs__category' : "tabs__categoryActive"}>
                        Places of interest
                    </button>
                </div>
                <div className='destinationsDataCollapse'>
                    {button === 'Regions' &&  dataRegions.map(destinationsCard => (
                        <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                    ))}
                    {button === 'Cities' && dataCities.map(destinationsCard => (
                        <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                    ))}
                    {button === 'Places' && dataPlacesOfInterest.map(destinationsCard => (
                        <CardTheBestDestinations key={destinationsCard.id} card={destinationsCard}/>
                    ))}
                </div>
            </div>
        </section>
    )
}
export default TheBestDestinations;