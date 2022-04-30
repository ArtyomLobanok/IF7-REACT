import "./TheBestDestinations.css"
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import React from "react";
import {dataRegions, dataCities, dataPlacesOfInterest} from "../../components/TheBestDestinationsData/TheBestDestinationsData"

const TheBestDestinations = () => {
    return (
        <section className='section__noneColor'>
            <div className='container'>
                <div className='section__header'>
                    <TextOfHeaders text='The best destinations'/>
                </div>
                <div className="destinationsButtonsWrapper">
                    <button className='active'>
                        Regions
                    </button>
                    <button className='notActive'>
                        Cities
                    </button>
                    <button className='notActive'>
                        Places of interest
                    </button>
                </div>
                <div style={{
                    backgroundColor: 'gainsboro',
                    width: '1080px',
                    height: '360px'
                }}/>
            </div>
        </section>
    )
}
export default TheBestDestinations;