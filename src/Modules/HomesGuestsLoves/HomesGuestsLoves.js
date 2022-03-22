import React from 'react';
import '../HomesGuestsLoves/HomesGuestsLoves.css';
import HeadersOfModules from '../../components/HeadersOfModules/HeadersOfModules';
import HomesGuestsLovesSlider from "../../components/HomesGuestsLovesSlider/HomesGuestsLovesSlider";
import '../../components/Contaiter/Container.css'

function HomesGuestsLoves(){
    return (
        <section className='section__overviews'>
            <div className="container">
                <HeadersOfModules/>
                <HomesGuestsLovesSlider/>
            </div>
        </section>
    );
}

export default HomesGuestsLoves;

