import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 79rem;
  padding: 0 1rem;
  margin: 0 auto;
  overflow: hidden;
`
const fadeEffect = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`;

const StyledFlex = styled.div`
  position: ${props => props.position || 'initial'};
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${props => props.margin || '0'};
  width: ${props => props.width || '100%'};
`

export const Flex = (props) => {
    return <StyledFlex {...props}/>
}

export const Section = styled.section`
  padding: 120px 0;
  display: flex;
  background: ${props => props.addColor ? "#EAF0F9" : "#FFFFFF"};
  animation: ${fadeEffect} 2s linear;
`

export const HeaderSection = styled.h1`
  width: 100%;
  margin: 0 auto 104px;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
  color: #383838;
`

export const Title = styled.p`
  font-size: ${props => props.little ? "18px" : "24px"};
  font-weight: ${props => props.bold ? "500" : "400"};
  color: ${props => props.blue ? "#3077C6" : "#383838"};
  margin-bottom: ${props => props.bottom ? "24px" : "0"};
`

export const SubTitle = styled.p`
  font-size: ${props => props.little ? "18px" : "24px"};
  font-weight: ${props => props.bold ? "500" : "400"};
  color: ${props => props.blue ? "#3077C6" : "#BFBFBF"};
`

export const CardImg = styled.img`
  display: block;
  height: 296px;
  width: 296px;
  object-fit: cover;
`
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const TabsBtnAndSearchBtn = styled.button`
  background: ${props => props.activate ? "#3077C6" : "#F3F3F4"};
  color: ${props => props.activate ? "#FFFFFF" : "#383838"};
  font-weight: ${props => props.bold ? "500" : "400"};
  padding: ${props => props.main ? '20px 57px' : '17px 0'};
  width: ${props => props.width || 'initial'};
  cursor: ${props => props.activate ? "initial" : "pointer"};
  display: block;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  font-size: 24px;

  &:hover {
    color: ${props => props.activate ? "#FFFFFF" : "#F5BD41"};
    background: #3077C6;
    transition: 0.5s;
  }

  &:active {
    background: #3077C6;
    cursor: initial;
  }
`

export const Button = styled.button`
  border-color: ${props => props.active ? "#3077C6" : "#F3F3F4"};
  color: ${props => props.active ? "#3077C6" : "#FFFFFF"};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || 'initial'};
  height: ${props => props.height || 'initial'};
  border-width: 1px;
  border-style: solid;
  display: block;
  background: #FFFFFF;
  border-radius: 0.5rem;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;
  &:hover {
    color: #F5BD41;
    background: #3077C6;
    transition: 0.5s;
  }
}
`

