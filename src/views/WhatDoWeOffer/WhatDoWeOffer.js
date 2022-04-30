import "./WhatDoWeOffer.css"
import React from "react";
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";

const WhatDoWeOffer = () => {
    return (
        <section className='section__noneColor'>
            <div className='container'>
                <div className='section__header'>
                    <TextOfHeaders text='What do we offer'/>
                </div>
                <div className='WhatDoWeOfferWrapper'>
                    <div>
                        <svg>
                            <use href="#support"/>
                        </svg>
                        <p>Support 24/7</p>
                    </div>
                    <div>
                        <svg>
                            <use href="#Communicate"/>
                        </svg>
                        <p>Communicate directly</p>
                    </div>
                    <div>
                        <svg>
                            <use href="#Book"/>
                        </svg>
                        <p>Book online</p>
                    </div>
                    <div>
                        <svg>
                            <use href="#Reviews"/>
                        </svg>
                        <p>Real guest reviews</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatDoWeOffer;