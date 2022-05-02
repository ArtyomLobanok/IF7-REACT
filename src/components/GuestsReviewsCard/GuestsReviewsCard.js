import "./GuestsReviewsCard.css"
import React from "react";

const GuestsReviewsCard = (props) => {
    const {imageUrl, title, city, country, cost, rating, reviews, user, userFrom, flag, post} = props.card;
    return (
        <div className="reviewItem">
            <div className="reviewHeader">
                <div className="reviewImgWrapper">
                    <img src={imageUrl} alt={title}/>
                </div>
                <div className="reviewPriceWrapper">
                    <p>{cost}</p>
                </div>
            </div>
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
        </div>
    )
}
export default GuestsReviewsCard;