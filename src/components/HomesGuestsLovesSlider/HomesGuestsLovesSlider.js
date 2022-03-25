import React, { useState, useEffect } from 'react';
import './HomesGuestsLovesSlider.css'
import HotelCard from "../HotelCard/HotelCard";
function  Hotels() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const url = "https://fe-student-api.herokuapp.com/api/hotels/popular"
        fetch(url)
            .then(res => res.json())
            .then(
                (result) => {
                    console.log(result)
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
        return <div>Загрузка...</div>;
    } else {
        return (
            <div className = 'overviews__slider'>
                {items.map( hotelCard => (
                        <HotelCard key={hotelCard.id} card={hotelCard}/>
                ))}
            </div>
        );
    }
}

export default Hotels;