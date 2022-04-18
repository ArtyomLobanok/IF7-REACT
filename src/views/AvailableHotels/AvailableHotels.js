import React from 'react';
import '../HomesGuestsLoves/HomesGuestsLoves.css';
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import HotelCard from '../../components/HotelCard/HotelCard';



const AvailableHotels = ({array}) => {
    return (
        <>
            <section className='section__overviews'>
            <div className="container">
                <div className='section__header'>
                    <TextOfHeaders text='Available hotels'/>
                </div>
                <div className='overviews__slider'>
                    {array.map(hotelCard => (
                        <HotelCard key={hotelCard.id} card={hotelCard}/>
                    ))}
                </div>
            </div>
            </section>
        </>
    )
}

export default AvailableHotels;