import React, { useState, useEffect } from 'react';
import './HomesGuestsLovesSlider.css'
import HotelCard from "../HotelCard/HotelCard";
import useFetch from '../../hooks/useFetch'
import TestForm from "../../components/FormOfSeach/FormSearchofHotels/FormSearchofHotels"
import {url} from "../../api/endPoints";


const MyComponent = ({query}) => {

    const {data} = useFetch(url.searchUrl(query));

    // const prepareData = data => data.filter(hotel => hotel.name === {input})

    // return <p>{prepareData.map()}</p>
}
