import { hotelsLoad} from "../../redux/actions";
import {useState, useEffect} from "react";
import { useDispatch } from 'react-redux'


const HotelsCards = (props) => {
    console.log('HotelCards here >>>>', props)


    return (

        <div style={{padding: '20px', margin: "0 auto", fontSize: "30px"}}>
            <span> Here you can see every card hotel</span>
        </div>
    )
}

export default HotelsCards;

