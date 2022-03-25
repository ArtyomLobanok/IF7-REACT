import React, { useState, useEffect } from 'react';
import './HomesGuestsLovesSlider.css'
import HotelCard from "../HotelCard/HotelCard";
import useFetch from '../../hooks/useFetch'
const url = "https://fe-student-api.herokuapp.com/api/hotels"


const MyComponent = ({input}) => {

    const {data} = useFetch(url);

    const prepareData = data => data.filter()

    return <p>{prepareData.map()}</p>
}
