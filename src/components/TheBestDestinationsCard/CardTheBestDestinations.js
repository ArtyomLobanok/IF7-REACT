import React from "react";
import {inputText} from "../../redux/actions";
import {useDispatch} from "react-redux";
import {
    DestinationsBtnWrapper,
    DestinationsContentWrapper,
    DestinationsImgWrapper,
    DestinationsItem
} from "../Styled-components/TheBestDestinations";
import {Button} from "../Styled-components/Global";

const DestinationsCard = (props) => {
    const {imageUrl, subtitle} = props.card;
    const dispatch = useDispatch()

    const handleClick = (e) => {
        dispatch(inputText(e.target.value))
    }
    return (
        <>
            <DestinationsItem>
                <DestinationsContentWrapper>
                    <DestinationsImgWrapper>
                        <img src={imageUrl} alt="Pictures"/>
                    </DestinationsImgWrapper>
                    <DestinationsBtnWrapper>
                        <Button padding='13px 24px' active value={subtitle} onClick={handleClick}>Book now</Button>
                    </DestinationsBtnWrapper>
                </DestinationsContentWrapper>
                <p>{subtitle}</p>
            </DestinationsItem>
        </>
    )
}
export default DestinationsCard;