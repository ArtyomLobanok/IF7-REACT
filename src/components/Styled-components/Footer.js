import styled from "styled-components";

export const FooterList = styled.ul`
  width: 33.333333%;
  margin-bottom: 64px;
  font-size: 20px;
  color: ${props => props.color || "#FFFFFF"};

  &:last-child {
    margin-bottom: 0;
  }

  li {
    margin-bottom: 24px;
    cursor: pointer;

    &:first-child {
      font-weight: 500;
    }

    &:last-child {
      margin-bottom: 0;
    }
    &:hover {
      color: ${props => props.color || "#F5BD41"};
      transition: 0.5s;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`
export const Copyright = styled.span`
  font-size: 14px;
  color: ${props => props.color || "#FFFFFF"};
`