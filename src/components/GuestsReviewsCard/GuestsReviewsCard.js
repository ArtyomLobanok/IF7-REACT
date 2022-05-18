import React from "react";
import {
    FlagReviewUser,
    GuestsReviewsCardHeader,
    GuestsReviewsCardWrapper,
    ReviewCounterWrapper
} from "../Styled-components/GuestsReviews";
import {
    Flex,
    SubTitle,
    Title,
    TittleCards,
    SubTittleCards,
    Text,
    AvatarIcon
} from "../Styled-components/Global";

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
                    <TittleCards little bold margin='0 0 16px 0' blue>{title}</TittleCards>
                    <SubTittleCards little>{city},{country}</SubTittleCards>
                </Flex>
                <ReviewCounterWrapper>
                    <button>{rating}</button>
                    <p>{reviews}</p>
                </ReviewCounterWrapper>
            </Flex>
            <Flex margin="0 0 0 24px">
                <AvatarIcon width="3.3125rem" height="3.3125rem" margin="0 16px 0 0">
                    <use href="#account"></use>
                </AvatarIcon>
                <Flex justify="center" direction="column">
                    <Title little margin="0 0 8px 0">{user}</Title>
                    <Flex>
                        <FlagReviewUser src={flag} alt='flag'/>
                        <SubTitle little>{userFrom} </SubTitle>
                    </Flex>
                </Flex>
            </Flex>
            <Text size="18px" margin="24px">{post}</Text>
        </GuestsReviewsCardWrapper>
    )
}
export default GuestsReviewsCard;