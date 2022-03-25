import React from "react";
import './HotelCard.css';


const hotelCard = props => {
    const {imageUrl, name, city, country} = props.card;
    return (
        <div className="overviews__item">
        <div className="overviews__img">
            <img src={imageUrl} alt="Pictures"/>
        </div>
        <div className="overviews__tittle">
        {name}
        </div>
        <div className="overviews__location">
            {city}, {country}
        </div>
        </div>
    )
}
export default hotelCard;