import React from 'react';
import './HomesGuestsLovesSlider.css'
import HotelCard from "../HotelCard/HotelCard";
import useFeatch from "../../hooks/useFetch"

function DrawHotel (){
    const url = "https://fe-student-api.herokuapp.com/api/hotels/popular";
    const {error, loading, array,} = useFeatch(url);
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (loading) {
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className = 'overviews__slider'>
                {array.map( hotelCard => (
                    <HotelCard key={hotelCard.id} card={hotelCard}/>
                ))}
            </div>
        );
    }
}

export default DrawHotel;