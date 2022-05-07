import styled from "styled-components";
import backgroundImage from '../../assets/Img/mainBackground.png'

export const HeaderWrapper = styled.div`
  background-image: url(${backgroundImage});
  height: 100vh;
  background-repeat:no-repeat;
  background-position: center;
  min-height: 56.25rem;
  background-size: cover;
`

export const HeaderWrapperShadow = styled.div`
  background: ${props => props.theme.BACKGROUND_SHADOW_BOX};
  position: absolute;
  height: 100vh;
  min-height: 56.25rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`
export const LoginFrom = styled.div`
  background: ${props => props.theme.BACKGROUND_COLOR_MODAL};
  margin: 171px auto 0;
  max-width: 400px;
  width: 100%;
  max-height: 390px;
  height: 100%;

  h2 {
    color: ${props => props.color || "#000000"};
    margin: 36px 0 40px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
  }

  p {
    text-align: center;
    padding: 0 40px;
    margin-bottom: 20px;

    a {
      margin-left: 4px;
      font-size: 18px;
      text-decoration: none;

      &:hover {
        color: ${props => props.color || "#F5BD41"}
      }
`

export const FormLogin = styled.form`
  padding: 0 40px 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  label {
    margin: 0 auto 16px;
    font-size: 16px;
    font-weight: 300;
    color: #333333;
  }

  input {
    background: ${props => props.theme.BACKGROUND_COLOR_INPUT};
    color: ${props => props.theme.COLOR_INPUT_FORM_TEXT};
    font-size: 12px;
    padding: 8px;
    margin-top: 8px;
    width: 320px;
    height: 41px;
    border: 1px solid #CECECE;
    border-radius: 8px;

    &:focus,
    &:hover {
      border: none;
      outline: 1px solid #F5BD41;
    }

    &:nth-child(4) {
      margin-bottom: 24px;
    }
  }

  button {
    background: ${props => props.theme.BTN_SEARCH_BACKGROUND_COLOR};
    color: ${props => props.theme.BTN_SEARCH_TEXT_COLOR};
    width: 320px;
    height: 48px;
    border: none;
    border-radius: 8px;
    font-size: 24px;
    font-weight: 500;
    text-align: center;
    cursor: pointer;

    &:hover,
    &:focus {
      background: ${props => props.theme.BTN_SEARCH_BACKGROUND_HOVER_COLOR};
      color: ${props => props.theme.BTN_SEARCH_TEXT_HOVER_COLOR};
      transition: 0.5s ease;
    }
  }


`