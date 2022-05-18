import styled from "styled-components";

export const FooterList = styled.ul`
  width: 33.333333%;
  margin-bottom: 64px;
  font-size: 20px;
  color: ${props => props.theme.COLOR_FOOTER_LINK_};

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
      color: ${props => props.theme.COLOR_HOVER_AND_FOCUS};
      transition: 0.5s;
    }
  }

  &:last-child {
    margin-right: 0;
  }
`
export const Copyright = styled.span`
  font-size: 14px;
  color: ${props => props.theme.COLOR_FOOTER_COPYRIGHT_};
`