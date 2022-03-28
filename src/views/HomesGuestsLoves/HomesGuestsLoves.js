import React from 'react';
import './HomesGuestsLoves.css';
import DrawHotel from "../../components/HomesGuestsLovesSlider/HomesGuestsLovesSlider";
import '../../components/Contaiter/Container.css'
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";

function HomesGuestsLoves() {
    return (
        <section className='section__overviews'>
            <div className="container">
                <div className='section__header'>
                    <TextOfHeaders text='Homes guests loves'/>
                </div>
                    <DrawHotel url="https://fe-student-api.herokuapp.com/api/hotels/popular"/>
            </div>
        </section>
);
}

export default HomesGuestsLoves;

