import styled from "styled-components";

export const HeaderHotelCardPage = styled.section`
  background: ${props => props.theme.BACKGROUND_COLOR_FOOTER_SECTION};
  padding-bottom: 51px;
`

export const HotelCardPageImgWrapper = styled.section`
  display: block;
  margin-right: 16px;
  img {
    display: block;
    width: 450px;
    height: 450px;
  }
`

export const HotelCardPageTextWrapper = styled.div`  
  span {
    color: ${props => props.theme.COLOR_ANY_TEXT};
    font-size: 18px;
  }
  a {
    color: ${props => props.theme.COLOR_TITLE_CARDS};
    font-size: 20px;
  }
`