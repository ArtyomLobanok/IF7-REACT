import styled, {keyframes} from "styled-components";
import arrowDown from "../../assets/Img/arrowBottom.png"
import arrowTop from "../../assets/Img/arrowTop.png"

export const DestinationsTabs = styled.div`
  background-color: ${props => props.theme.BTN_IS_NOT_ACTIVE_BACKGROUND_COLOR};
  display: flex;
  max-width: 622px;
  border-radius: 0.5rem;
  margin-bottom: 65px;
`
export const DestinationsCardsCollapse = styled.div`
  color: ${props => props.theme.ANY_TITLE_COLOR};
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  font-size: 24px;
  padding: 0 -16px;
`
export const DestinationsArrowCollapse = styled.div`
  border: none;
  outline: none;
  border-radius: 50%;
  background-image: ${props => props.activate ? `url(${arrowDown})` : `url(${arrowTop})`};
  background-position: center;
  background-repeat: no-repeat;
  cursor: pointer;
  margin: 5px auto;
  width: 40px;
  height: 40px;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
`
export const DestinationsContentWrapper = styled.div`
  position: relative;
`
const fadeEffect = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

export const DestinationsItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 24%;
  margin: 0 16px 48px 0;
  animation: ${fadeEffect} 2s linear;

  &:nth-child(4),
  &:nth-child(8) {
    margin: 0 0 48px 0;
  }

  &:hover {
    div {
      opacity: 1;
    }

    img {
      opacity: 0.7;
    }
  }
`
export const DestinationsImgWrapper = styled.div`
  position: relative;
  background: rgba(56, 56, 56, 0.4);
  box-shadow: inset 0 0.25rem 4.375rem rgba(56, 56, 56, 0.5);
  margin-bottom: 1.5rem;

  img {
    display: block;
    width: 100%;
    height: auto;
    transition: opacity 0.3s linear;
    object-fit: contain;
  }
`
export const DestinationsBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1000;
  width: 100%;
  text-align: center;
  opacity: 0;
  transform: translate3d(0, -50%, 0);
  transition: opacity 0.1s linear;
`
