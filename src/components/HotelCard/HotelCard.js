import React from "react";
import {
    Flex,
    SubTitle,
    CardImg,
    StyledLink,
    AnyTitle,
} from "../../components/Styled-components/Global"

const hotelCard = props => {
    const {id, imageUrl, name, city, country} = props.card;
    return (
        <StyledLink to={`/hotel/${id}`}>
            <Flex direction='column'>
                <Flex margin='0 0 24px 0'>
                    <CardImg src={imageUrl} alt="Pictures"/>
                </Flex>
                <AnyTitle blue margin='0 0 24px 0'>{name}</AnyTitle>
                <SubTitle>{city}, {country}</SubTitle>
            </Flex>
        </StyledLink>
    )
}
export default hotelCard;