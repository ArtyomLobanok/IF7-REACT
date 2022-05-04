import React from "react";
import Slider from "react-slick";
import GuestsReviewsData from "../../components/GuestsReviewsData/GuestsReviewsData"
import nextArrow from "../../assets/Img/nextArrow.png";
import prevArrow from "../../assets/Img/prevArrow.png";
import GuestsReviewsCard from "../../components/GuestsReviewsCard/GuestsReviewsCard";
import {Container, HeaderSection, Section} from "../../components/Styled-components/Global";
import {GuestReviewsWrapperSlider} from "../../components/Styled-components/GuestsReviews"

const GuestsReviews = () => {
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
                    <HeaderSection>Guests reviews</HeaderSection>
                    <GuestReviewsWrapperSlider >
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