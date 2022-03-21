import React from 'react';
import '../HomesGuestsLoves/HomesGuestsLoves.css';
import HeadersOfModules from '../../components/HeadersOfModules/HeadersOfModules';
import HomesGuestsLovesSlider from "../../components/HomesGuestsLovesSlider/HomesGuestsLovesSlider";

function HomesGuestsLoves(){
    return (
        <section className='section__overviews'>
            <HeadersOfModules/>
            <HomesGuestsLovesSlider/>
        </section>
    );
}

export default HomesGuestsLoves;

