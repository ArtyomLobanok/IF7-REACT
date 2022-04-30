import React from 'react';
import '../HomesGuestsLoves/HomesGuestsLoves.css';
import TextOfHeaders from "../../components/TextOfHeaders/TextOfHeaders";
import HotelCard from '../../components/HotelCard/HotelCard';
import {useSelector} from "react-redux";
import Slider from "react-slick";
import nextArrow from "../../assets/Img/nextArrow.png";
import prevArrow from "../../assets/Img/prevArrow.png";

const AvailableHotels = () => {
    const hotelCards = useSelector(state => state.hotelsLoadReducer.hotelData)
    const SampleNextArrow = (props) => {
        const {className, onClick} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <img src={nextArrow} alt="nextArrow"/>
            </div>
        );
    }

    const SamplePrevArrow = (props) => {
        const {className, onClick} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <img src={prevArrow} alt="prevArrow"/>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        nextArrow: <SampleNextArrow/>,
        prevArrow: <SamplePrevArrow/>,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: false,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    }
    return (
        <>
            {
                hotelCards.length > 0 &&
                <section className='section__overviews' id='AvailableHotels'>
                    <div className="container">
                        <div className='section__header'>
                            <TextOfHeaders text='Available hotels'/>
                        </div>
                        <div className="wrapperSlider">
                            <Slider {...settings}>
                                {hotelCards.map(hotelCard => (
                                    <HotelCard key={hotelCard.id} card={hotelCard}/>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </section>
            }
        </>
    )
}

export default AvailableHotels;