import styled from "styled-components";

export const GuestReviewsWrapperSlider = styled.div`
  margin: -8px;

  div {
    div {
      &:first-child {
        z-index: 1000;
      }

      &:first-child:before {
        content: "";
      }

      &:last-child {
        z-index: 1000;

        &:last-child:before {
          content: "";
        }
      }
    }
  }
`
export const GuestsReviewsSliderButtonNext = styled.button`
  background: ${props => props.theme.BTN_SLIDER_BACKGROUND_COLOR};
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  transform: translate3d(-41px, -190px, 0);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.BTN_SLIDER_BACKGROUND_HOVER_COLOR};
  }
`
export const GuestsReviewsSliderButtonPrev = styled.button`
  background: ${props => props.theme.BTN_SLIDER_BACKGROUND_COLOR};
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  transform: translate3d(21px, -190px, 0);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  cursor: pointer;

  svg {
    transform: rotate(180deg)
  }

  &:hover {
    background: ${props => props.theme.BTN_SLIDER_BACKGROUND_HOVER_COLOR};
  }
`
export const GuestsReviewsCardWrapper = styled.div`
  background: ${props => props.theme.BACKGROUND_COLOR_SECTION_DARKER};
  display: flex;
  flex-direction: column;
  margin: 0 8px;
  height: 100%;
  min-height: 760px;
`
export const GuestsReviewsCardHeader = styled.div`
  color: ${props => props.theme.COLOR_PRICE_TEXT};
  display: block;
  position: relative;
  font-size: 18px;
  font-weight: 400;


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
    color: ${props => props.theme.BTN_RATING_TEXT_COLOR};
    background-color: ${props => props.theme.BTN_RATING_BACKGROUND_COLOR};
    padding: 4px 10px;
    margin-bottom: 0.5rem;
    border: 0.0625rem solid #10367C;
    border-radius: 0.5rem;
    font-family: "Open Sans", sans-serif;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;

    &:hover {
      color: ${props => props.theme.COLOR_HOVER_AND_FOCUS};
      transition: opacity 0.1s linear;
    }
  }

  p {
    color: ${props => props.theme.COLOR_TEXT_REVIEWS};
    position: absolute;
    left: -38px;
    font-size: 14px;
  }
`
export const FlagReviewUser = styled.img`
  max-width: 18px;
  margin-right: 8px;
`


