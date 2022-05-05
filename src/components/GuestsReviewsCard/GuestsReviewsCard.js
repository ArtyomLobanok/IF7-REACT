import React from "react";
import {
    FlagReviewUser,
    GuestsReviewsCardHeader,
    GuestsReviewsCardWrapper,
    ReviewCounterWrapper
} from "../Styled-components/GuestsReviews";
import {Flex, SubTitle, Title, StyledSvg} from "../Styled-components/Global";

const GuestsReviewsCard = (props) => {
    const {imageUrl, title, city, country, cost, rating, reviews, user, userFrom, flag, post} = props.card;
    return (
        <GuestsReviewsCardWrapper>
            <GuestsReviewsCardHeader>
                <div>
                    <img src={imageUrl} alt={title}/>
                </div>
                <p>
                    From{` `}<span>{cost}</span>
                </p>
            </GuestsReviewsCardHeader>
            <Flex width='initial' margin='24px'>
                <Flex direction='column' margin='0 88px 0 0'>
                    <Title little margin='0 0 16px 0' blue>{title}</Title>
                    <SubTitle little blue>{city},{country}</SubTitle>
                </Flex>
                <ReviewCounterWrapper>
                    <button>{rating}</button>
                    <p>{reviews}</p>
                </ReviewCounterWrapper>
            </Flex>
            <Flex margin="0 0 0 24px">
                <StyledSvg width="3.3125rem" height="3.3125rem" fill="#BFBFBF" margin="0 16px 0 0">
                    <use href="#account"></use>
                </StyledSvg>
                <Flex justify="center" direction="column">
                    <Title little margin="0 0 8px 0">{user}</Title>
                    <Flex>
                        <FlagReviewUser src={flag} alt='flag'/>
                        <SubTitle little >{userFrom} </SubTitle>
                    </Flex>
                </Flex>
            </Flex>
            <Title little margin = "24px">{post}</Title>
        </GuestsReviewsCardWrapper>
    )
}
export default GuestsReviewsCard;