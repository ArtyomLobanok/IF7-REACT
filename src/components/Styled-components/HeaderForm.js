import styled, {keyframes} from "styled-components";

const fadeEffect = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`
export const FormHeaderWrapper = styled.div`
  background: ${props => props.background || "#FFFFFF"};
  display: flex;
  max-width: 77rem;
  margin: 0 auto 9.5rem;
  border-radius: 0.5rem;
`

export const StyledForm = styled.form`
  background: ${props => props.background || "#FFFFFF"};
  display: flex;
  align-items: center;
  max-width: 77rem;
  width: 100%;
  border-radius: 0.5rem;
`

export const StyledInputWrapper = styled.div`
  background: ${props => props.background || "#FFFFFF"};
  max-width: ${(props) => props.maxWidth};
  position: ${props => props.position || "#initial"};;
  width: 100%;
`

export const StyledDatePickerWrapper = styled.div`
  background: ${props => props.background || "#FFFFFF"};
  max-width: ${(props) => props.maxWidth};
  position: ${props => props.position || "#initial"};
  width: 100%;

  div {
    div {
      left: -1px;

      input {
        background: ${props => props.background || "#FFFFFF"};
        color: ${props => props.color || "#383838"};
        padding: 20px 22px;
        border: none;
        border-radius: 0.5rem;
        outline: none;
        font-family: "Roboto", sans-serif;
        font-size: 18px;
        font-weight: 400;
        width: 100%;

        &:hover,
        &:focus {
          border-color: ${props => props.color || "#F5BD41"};
          border-width: 3px;
          border-style: solid;
          margin: -3px 0;
        }
      }
    }
  }
`

export const StyledInputFist = styled.input`
  background: ${props => props.background || "#FFFFFF"};
  color: ${props => props.color || "#383838"};
  position: relative;
  left: -1px;
  padding: 20px 22px;
  border: none;
  border-radius: 0.5rem;
  outline: none;
  font-family: "Roboto", sans-serif;
  font-size: 18px;
  font-weight: 400;
  width: 100%;

  &:hover,
  &:focus {
    border-color: ${props => props.color || "#F5BD41"};
    border-width: 3px;
    border-style: solid;
    margin: -3px 0;
  }
`
export const StyledLabelFist = styled.label`
  color: ${props => props.active ? "#FFFFFF" : "#383838"};
  transform: translateY(${props => props.active ? '-56px' : '0'});
  position: absolute;
  font-size: 18px;
  top: 21px;
  left: 24px;
  transition: .5s;
  pointer-events: none;
  border: none;
  z-index: 1000;
`

export const StyledDateLabelWrapper = styled.div`
  position: absolute;
  width: 100%;

  label {
    color: ${props => props.active ? "#FFFFFF" : "#383838"};
    transform: translateY(${props => props.active ? '-56px' : '0'});
    position: absolute;
    font-size: 18px;
    top: 21px;
    left: 40px;
    transition: .5s;
    border: none;
    pointer-events: none;
    z-index: 1000;
  }
`

export const DataFormWrapper = styled.div`
  position: relative;
  left: -1px;
  width: 100%;
  max-width: 314px;
`

export const SelectWrapper = styled.div`
  background: ${props => props.background || "#FFFFFF"};
  color: ${props => props.color || "#383838"};


  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 22px;

  border: none;
  border-radius: 0.5rem;
  outline: none;
  font-size: 18px;
  cursor: pointer;

  &:nth-child(1) {
    display: flex;
  }

  &:hover,
  &:focus {
    border-color: ${props => props.color || "#F5BD41"};
    border-width: 3px;
    border-style: solid;
    margin: -3px 0;
  }
`

export const ModalForm = styled.div`
  background: ${props => props.background || "#FFFFFF"};
  position: absolute;
  transform: translate3d(60px, 15px, 0);
  padding: 22px 22px 0;
  border-radius: 8px;
  max-height: 288px;
  max-width: 264px;
  width: 100%;
  animation: ${fadeEffect} 1s linear;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  }

  &::-webkit-scrollbar-thumb {
    background: ${props => props.background || "#3077C6"};
    border-radius: 8px;
  }
`
export const ModalFormQuestion = styled.div`
  color: ${props => props.color || "#333333"};
  margin: 28px 0 12px;
  font-size: 12px;
`
export const ModalFormCounterWrapper = styled.div`
  color: ${props => props.color || "#333333"};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  font-size: 16px;
`
export const ButtonCounter = styled.button`
  background: ${props => props.background || "#FFFFFF"};
  border-color: ${props => props.active ? "#3077C6" : "#CECECE"};
  color: ${props => props.active ? "#3077C6" : "#CECECE"};
  display: block;
  width: 30px;
  height: 30px;
  border-width: 1px;
  border-style: solid;

  background: #FFFFFF;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: ${props => props.color || "#F5BD41"};
    background: ${props => props.active ? "#3077C6" : "#FFFFFF"};
    transition: 0.5s;
  }
}
`

export const ModalMenuShowCounter = styled.input`
  background: ${props => props.background || "#FFFFFF"};
  border: none;
  -moz-appearance: textfield;
  -webkit-appearance: textfield;
  text-align: center;
  max-height: 20px;
  max-width: 25px;
  margin: 0 15px;
`

export const StyledSelects = styled.select`
  border-color: ${props => props.color || "#3077C6"};

  border-width: 1px;
  border-style: solid;
  position: relative;
  margin-bottom: 12px;
  padding-left: 5px;
  width: 100px;
  height: 30px;
  cursor: pointer;
  overflow: hidden;
  font-size: 12px;

  &:nth-child(2n) {
    margin-left: 12px;
  }

  &:focus {
    border-color: ${props => props.color || "#3077C6"};
    outline: none;
    box-shadow: none;
    border-width: 1px;
    border-style: solid;
  }

  &:hover {
    color: ${props => props.color || "#383838"};
    background: ${props => props.background || "#F3F3F4"};
    transition: 0.5s;
  }
`


