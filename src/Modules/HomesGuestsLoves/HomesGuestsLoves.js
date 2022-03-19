import React from 'react';
import '../App/App.css';
import HeadersOfModules from '../../components/HeadersOfModules/HeadersOfModules';
import Slider from "../../components/Slider/Slider";

function HomesGuestsLoves(){
    return (
        <div className='section__overviews'>
            <HeadersOfModules/>
            <Slider/>
        </div>
    );
}

export default HomesGuestsLoves;

