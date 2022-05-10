import React from "react";
import Slider from "react-slick";
import GuestsReviewsData from "../../components/GuestsReviewsData/GuestsReviewsData"
import GuestsReviewsCard from "../../components/GuestsReviewsCard/GuestsReviewsCard";
import {Container, HeaderSection, LogotypeIcon, Section, SliderArrow} from "../../components/Styled-components/Global";
import {
    GuestReviewsWrapperSlider,
    GuestsReviewsSliderButtonNext, GuestsReviewsSliderButtonPrev
} from "../../components/Styled-components/GuestsReviews"
import {GuestsReviewsHotelsTitle} from "../../configs/stringsData";

const GuestsReviews = () => {
    const SampleNextArrow = (props) => {
        const {className, onClick} = props;
        return (
            <div
                className={className}
                onClick={onClick}
            >
                <div>
                    <GuestsReviewsSliderButtonNext>
                        <SliderArrow margin='0 0 0 10px' width='9px' height='21px'>
                            <use href="#Arrow"></use>
                        </SliderArrow>
                    </GuestsReviewsSliderButtonNext>
                </div>
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
                <div>
                    <GuestsReviewsSliderButtonPrev>
                        <SliderArrow margin='0 0 0 8px' width='9px' height='21px'>
                            <use href="#Arrow"></use>
                        </SliderArrow>
                    </GuestsReviewsSliderButtonPrev>
                </div>
            </div>
        );
    }
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
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
            <Section>
                <Container>
                    <HeaderSection>{GuestsReviewsHotelsTitle}</HeaderSection>
                    <GuestReviewsWrapperSlider>
                        <Slider {...settings} >
                            {GuestsReviewsData.map(reviewCard => (
                                <GuestsReviewsCard key={reviewCard.id} card={reviewCard}/>
                            ))}
                        </Slider>
                    </GuestReviewsWrapperSlider>
                </Container>
            </Section>
        </>
    )
}

export default GuestsReviews;