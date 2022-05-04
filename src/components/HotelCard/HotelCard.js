import React from "react";
import {Flex, Title, SubTitle, CardImg, StyledLink} from "../../components/Styled-components/Global"

const hotelCard = props => {
    const {id, imageUrl, name, city, country} = props.card;
    return (
        <StyledLink to={`/hotel/${id}`}>
            <Flex direction='column'>
                <Flex margin='0 0 24px 0'>
                    <CardImg src={imageUrl} alt="Pictures"/>
                </Flex>
                <Title blue bottom>{name}</Title>
                <SubTitle>{city}, {country}</SubTitle>
            </Flex>
        </StyledLink>
    )
}
export default hotelCard;