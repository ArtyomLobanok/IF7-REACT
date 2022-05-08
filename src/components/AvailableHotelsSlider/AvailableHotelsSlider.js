import {useSelector} from "react-redux";
import Slider from "react-slick";
import HotelCard from "../HotelCard/HotelCard";
import {SliderArrow, SliderButtonNext, SliderButtonPrev, SliderWrapper} from "../Styled-components/Global";

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

        <SliderWrapper>
            <Slider {...settings}>
                {hotelCards.map(hotelCard => (
                    <HotelCard key={hotelCard.id} card={hotelCard}/>
                ))}
            </Slider>
        </SliderWrapper>

    )
}

export default AvailableHotelsSlider;