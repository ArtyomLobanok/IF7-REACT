import React, { useState, useEffect } from 'react';
import './HomesGuestsLovesSlider.css'
import HotelCard from "../HotelCard/HotelCard";

const url = "https://fe-student-api.herokuapp.com/api/hotels/popular"

function useFeacth(url) {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [array, setArray] = useState([]);
    useEffect(() => {
    function getData (){
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setArray(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    } getData ()
    }, [url])
    return {
        error,
        isLoaded,
        array,
    }
}

function DrawHotel (){
    const {error, isLoaded, array} = useFeacth(url);
    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
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