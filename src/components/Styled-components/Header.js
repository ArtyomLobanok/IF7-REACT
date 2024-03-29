import styled, {keyframes} from "styled-components";

export const Header = styled.header`
  position: relative;
  padding-top: 51px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
`
export const HeaderNavLink = styled.a`
  color: ${props => props.theme.COLOR_NAV_TEXT};
  margin-right: 24px;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
  position: relative;
  display: flex;
  justify-content: center;

  &:nth-child(2) {
    margin-right: 48px;
  }

  &:hover:after {
    opacity: 1;
    transition: 0.5s;
  }

  &:after {
    background-color: ${props => props.theme.COLOR_NAV_ICON_ACTIVE_AND_FOCUS};
    border-color: ${props => props.theme.COLOR_NAV_ICON_ACTIVE_AND_FOCUS};
    content: "";
    display: block;
    width: 85%;
    bottom: -10px;
    position: absolute;
    border-width: 2px;
    border-style: solid;
    opacity: 0;
    z-index: 1;
    transition: opacity 0.1s linear;
  }

  &:nth-child(3) {
    &:after {
      content: none;
    }
  }
}
`
const fadeEffect = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`

export const ButtonLogOut = styled.button`
  color: ${props => props.theme.BTN_LOGOUT_TEXT_COLOR};
  background: ${props => props.theme.BTN_LOGOUT_BACKGROUND_COLOR};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || 'initial'};
  height: ${props => props.height || 'initial'};
  border-width: 1px;
  border-style: solid;

  position: absolute;
  right: 0;
  display: flex;
  align-items: center;
  outline: none;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  transform: translateY(24px);
  animation: ${fadeEffect} 0.5s linear;

  &:hover {
    color: ${props => props.theme.BTN_LOGOUT_TEXT_HOVER_COLOR};
    background: ${props => props.theme.BTN_LOGOUT_BACKGROUND_HOVER_COLOR};
    transition: 0.5s;
  }
}
`
export const HeaderContentWrapper = styled.div`
  margin: 196px 0 120px;
`
export const HeaderContentTitle = styled.h1`
  color: ${props => props.theme.COLOR_MAIN_TITLE};
  margin-bottom: 145px;
  font-size: 50px;
  font-weight: 500;
}
`
export const HeaderContentIconWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 auto;

  a {
    margin-right: 16px;

    &:last-child {
      margin-right: 0;
    }
  }
`