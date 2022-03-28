import React from 'react';
import '../HomesGuestsLoves/HomesGuestsLoves.css';
import {useForm} from "../../components/FormOfSeach/FormSearchofHotels/FormSearchofHotels"
import {url} from "../../api/endPoints";
import useFeatch from "../../hooks/useFetch";
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import '../../components/Contaiter/Container.css'
import HotelCard from '../../components/HotelCard/HotelCard';


const AvailableHotels = () => {
    const {values, handleChange} = useForm();
    console.log(values.nameOfSearch)
    const {array} = useFeatch(values.nameOfSearch && url.searchUrl(values.nameOfSearch));
    console.log({array})
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