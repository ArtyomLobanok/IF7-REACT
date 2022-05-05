import styled, {keyframes} from "styled-components";

const movebtn = keyframes`
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(20px);
  }
  50% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0px);
  }
`
export const ScrollBtn = styled.div`
  svg {
    bottom: 40px;
    right: 25px;
    z-index: 20;
    height: 50px;
    width: 50px;
  }

  :first-child {
    background-color: ${props => props.background || "#3077C6"};
    color: ${props => props.color || "#FFFFFF"};
    border-color: ${props => props.color || "#FFFFFF"};
    display: block;
    position: fixed;
    bottom: 40px;
    right: 25px;
    z-index: 20;
    border-width: 2px;
    border-style: solid;
    border-radius: 50%;
    cursor: pointer;
    animation: ${movebtn} 3s ease-in-out infinite;
    transition: all .5s ease-in-out;

    &:hover {
      background-color: ${props => props.background || "#FFFFFF"};
      color: ${props => props.color || "#3077C6"};
      border-color: ${props => props.color || "#3077C6"};
      animation: none;
    }
  }
`

