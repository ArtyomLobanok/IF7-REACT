import {useSelector} from "react-redux";
import Slider from "react-slick";
import HotelCard from "../HotelCard/HotelCard";
import {Flex, SliderArrow, SliderButtonNext, SliderButtonPrev, SliderWrapper, Text} from "../Styled-components/Global";
import React from "react";

const AvailableHotelsSlider = () => {
    const hotelCards = useSelector(state => state.hotelsLoadReducer.hotelData)
    console.log(hotelCards)
    const SampleNextArrow = (props) => {
        const {className, onClick} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <SliderButtonNext>
                    <SliderArrow margin='0 0 0 10px' width='9px' height='21px'>
                        <use href="#Arrow"></use>
                    </SliderArrow>
                </SliderButtonNext>
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
                <SliderButtonPrev>
                    <SliderArrow margin='0 0 0 8px' width='9px' height='21px'>
                        <use href="#Arrow"></use>
                    </SliderArrow>
                </SliderButtonPrev>
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
                (hotelCards.length !== 0) ? (
                    <SliderWrapper>
                        <Slider {...settings}>
                            {hotelCards.map(hotelCard => (
                                <HotelCard key={hotelCard.id} card={hotelCard}/>
                            ))}
                        </Slider>
                    </SliderWrapper>
                ) : (
                    <Flex margin="0 auto" align="center" justify="center">
                        <Text size='80px' bold>&#129402;</Text>
                        <Text size='30px' bold>Unfortunately, nothing was found... <br/>Please try to enter
                            other search data and try again</Text>
                    </Flex>

                )
            }
        </>
    )
}

export default AvailableHotelsSlider;