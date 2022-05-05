import "./GuestsReviewsCard.css"
import React from "react";
import {GuestsReviewsCardHeader, GuestsReviewsCardWrapper} from "../Styled-components/GuestsReviews";

const GuestsReviewsCard = (props) => {
    const {imageUrl, title, city, country, cost, rating, reviews, user, userFrom, flag, post} = props.card;
    return (
        <GuestsReviewsCardWrapper>
            <GuestsReviewsCardHeader>
                <div>
                    <img src={imageUrl} alt={title}/>
                </div>
                <div>
                    From{` `}<span>{cost}</span>
                </div>
            </GuestsReviewsCardHeader>
            <div className="reviewsContent">
                <div className="reviewLocationWrapper">
                    <p>{title}</p>
                    <p className="reviewLocation">{city},{country}</p>
                </div>
                <div className="reviewCounterWrapper">
                    <button>{rating}</button>
                    <p>{reviews}</p>
                </div>
            </div>
            <div className="reviewUserWrapper">
                <div className="reviewAvatarUserWrapper">
                    <svg>
                        <use href="#account"></use>
                    </svg>
                </div>
                <div className="reviewUserInfoWrapper">
                    <p>{user}</p>
                    <div className= "reviewUserFromWrapper">
                        <img src={flag} alt='flag'/>{userFrom}
                    </div>
                </div>
            </div>
            <p className="review__text">{post}</p>
        </GuestsReviewsCardWrapper>
    )
}
export default GuestsReviewsCard;