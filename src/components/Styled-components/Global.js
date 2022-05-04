import styled, {keyframes} from "styled-components";

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
  display: flex;
  flex-direction: ${props => props.direction || 'row'};
  align-items: ${props => props.align || 'stretch'};
  justify-content: ${props => props.justify || 'stretch'};
  margin: ${({margin}) => margin || '0'};
  width: ${({width}) => width || '100%'};
  &:last-child {
    margin-right: 0;
  }
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
  margin: ${props => props.margin ? "24px" : "0"};
`

export const SubTitle = styled.p`
  font-size: ${props => props.little ? "24px" : "18px"};
  font-weight: ${props => props.bold ? "400" : "500"};
  color: ${props => props.blue ? "#3077C6" : "#BFBFBF"};

`



