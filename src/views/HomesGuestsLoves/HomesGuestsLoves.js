import React from 'react';
import '../HomesGuestsLoves/HomesGuestsLoves.css';
import HeadersOfModules from '../../components/HeadersOfModules/HeadersOfModules';
import DrawHotel from "../../components/HomesGuestsLovesSlider/HomesGuestsLovesSlider";
import '../../components/Contaiter/Container.css'

function HomesGuestsLoves(){
    return (
        <section className='section__overviews'>
            <div className="container">
                <HeadersOfModules/>
                <DrawHotel url="https://fe-student-api.herokuapp.com/api/hotels/popular"/>
            </div>
        </section>
    );
}

export default HomesGuestsLoves;
