import './CardTheBestDestinations.css';
import React from "react";
import {inputText} from "../../redux/actions";
import {useDispatch} from "react-redux";

const DestinationsCard = (props) => {
    const {imageUrl, subtitle} = props.card;
    const dispatch = useDispatch()

    const handleClick = (e) =>{
        console.log('here', e.target.value)
        dispatch(inputText(e.target.value))
    }
    return (
        <div className="destinationsItem">
            <div className="destinations__content">
                <div className="destinations__img">
                    <img src={imageUrl} alt="Pictures"/>
                </div>
                <div className="destinations__button">
                    <button value={subtitle} onClick={handleClick}>Book now</button>
                </div>
            </div>
            <p>{subtitle}</p>
        </div>
    )
}
export default DestinationsCard;