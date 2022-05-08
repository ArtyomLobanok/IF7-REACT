import styled, {keyframes} from "styled-components";

export const DestinationsTabs = styled.div`
  background-color: ${props => props.theme.BTN_DESTINATIONS_IS_NOT_ACTIVE_BACKGROUND_COLOR};
  display: flex;
  max-width: 622px;
  border-radius: 0.5rem;
  margin-bottom: 65px;
`
export const DestinationsCardsCollapse = styled.div`
  color: ${props => props.theme.COLOR_TITLE_CARDS};
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
  font-size: 24px;
  padding: 0 -16px;
`
export const DestinationsArrowCollapseDown = styled.button`
  background: ${props => props.theme.BTN_SLIDER_BACKGROUND_COLOR};
  display: block;
  margin: 5px auto;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  transform: translate3d(0px,-30px,0);
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  outline: none;
  cursor: pointer;

  svg {
    transform: rotate(90deg)
  }

  &:hover {
    background: ${props => props.theme.BTN_SLIDER_BACKGROUND_HOVER_COLOR};
  }
`
export const DestinationsArrowCollapseUp = styled(DestinationsArrowCollapseDown)`
  svg {
    transform: rotate(270deg)
  }
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
export const TabsBtn = styled.button`
  background: ${props => props.theme.BTN_DESTINATIONS_IS_NOT_ACTIVE_BACKGROUND_COLOR};
  color: ${props => props.theme.BTN_DESTINATIONS_IS_NOT_ACTIVE_TEXT_COLOR};
  width: ${props => props.width || 'initial'};

  padding: 17px 0;
  display: block;
  border: none;
  border-radius: 0.5rem;
  font-weight: 400;
  font-size: 24px;

  &:hover {
    background: ${props => props.theme.BTN_DESTINATIONS_IS_NOT_HOVER_BACKGROUND_COLOR};
    color: ${props => props.theme.BTN_DESTINATIONS_IS_NOT_HOVER_TEXT_COLOR};
    transition: 0.5s ease;
    outline: none;
    cursor: pointer;
  }
`
export const TabsBtnActive = styled(TabsBtn)`
  background: ${props => props.theme.BTN_DESTINATIONS_ACTIVE_BACKGROUND_COLOR};
  color: ${props => props.theme.BTN_DESTINATIONS_ACTIVE_TEXT_COLOR};

  &:hover {
    background: ${props => props.theme.BTN_DESTINATIONS_ACTIVE_BACKGROUND_COLOR};
    color: ${props => props.theme.BTN_DESTINATIONS_ACTIVE_TEXT_COLOR};
    cursor: initial;
  }
`


