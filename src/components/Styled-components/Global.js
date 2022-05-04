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

const fadeEffect = keyframes`
  from {
    opacity: 0.5;
  }

  to {
    opacity: 1;
  }
`;

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

export const DestinationsTabsBtn = styled.btn`
  background: ${props => props.primary ? "palevioletred" : "white"};
  color: ${props => props.primary ? "white" : "palevioletred"};
  font-weight: ${props => props.bold ? "500" : "400"};
  padding: ${props => props.padding || '0'};
  width: ${props => props.padding || 'initial'};
  
  display: block;
  border: none;
  border-radius: 0.5rem;
  font-size: 24px;
  color: #383838;
  cursor: pointer;
  &:hover {
    color: red; // <Thing> when hovered
  }
}

.tabs__category:last-child {
  width: initial;
  width: 100%;
  padding: 17px 25px;
}

.tabs__category:hover {
  color: #F5BD41;
  background-color: #3077C6;
  border-radius: 0.5rem;
}
`

