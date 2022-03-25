import React, { useState, useEffect } from 'react';
import './HomesGuestsLovesSlider.css'
import HotelCard from "../HotelCard/HotelCard";


function  Hotels() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [array, setItems] = useState([]);
    useEffect(() => {
        fetch("https://fe-student-api.herokuapp.com/api/hotels/popular")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setItems(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    if (error) {
        return <div>Ошибка: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className = 'overviews__slider'>
                {array.map( hotelCard => (
                    <>
                    <HotelCard card={hotelCard}/>
                    </>
                ))}
            </div>
        );
    }
}

export default Hotels;