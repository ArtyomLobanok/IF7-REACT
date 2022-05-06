import styled from "styled-components";

export const GuestReviewsWrapperSlider = styled.div`
  margin: -8px;

  .slick-next {
    z-index: 1000;
    transform: translate3d(-44px, -190px, 0);
  }

  .slick-next img {
    z-index: 1000;
  }

  .slick-prev:before,
  .slick-next:before {
    content: '' !important;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  }

  .slick-prev {
    z-index: 1000;
    transform: translate3d(15px, -190px, 0);
  }
`
export const GuestsReviewsCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  background: #EAF0F9;
  height: 100%;
  min-height: 760px;
`
export const GuestsReviewsCardHeader = styled.div`
  display: block;
  position: relative;
  font-size: 18px;
  font-weight: 400;
  color: #FFFFFF;

  &:hover :last-child {
    opacity: 1;
    transition: opacity 0.3s linear;
  }

  &:first-child {
    img {
      display: block;
      width: 100%;
    }
  }

  p {
    width: 100%;
    padding: 1rem 0 1.125rem 1.5rem;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    opacity: 0;
    background-color: rgba(56, 56, 56, 0.7);
  }

  span {
    font-weight: 500;
  }
`
export const ReviewCounterWrapper = styled.div`
  position: relative;

  button {
    padding: 4px 10px;
    margin-bottom: 0.5rem;
    border: 0.0625rem solid #10367C;
    border-radius: 0.5rem;
    background-color: #10367C;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    color: #FFFFFF;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: #F5BD41;
      transition: opacity 0.1s linear;
    }
  }

  p {
    position: absolute;
    left: -38px;
    font-size: 14px;
    color: #BFBFBF;
  }
`
export const FlagReviewUser = styled.img`
  max-width: 18px;
  margin-right: 8px;
`

