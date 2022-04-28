import React from "react";
import './HotelCard.css';
import {Link} from "react-router-dom";

const hotelCard = props => {
    const {id, imageUrl, name, city, country} = props.card;
    return (

        <Link className='hotelLink' to={`/hotel/${id}`}>
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
        </Link>

    )
}
export default hotelCard;