import styled, {keyframes} from "styled-components";
import {Link} from "react-router-dom";

const fadeEffect = keyframes`
  from {
    opacity: 0.5;
  }
  to {
    opacity: 1;
  }
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 79rem;
  padding: 0 1rem;
  margin: 0 auto;
  overflow: hidden;
`
export const SliderWrapper = styled.div`
  .slick-next {
    transform: translate3d(-40px, -80px, 0);
  }

  .slick-prev:before, .slick-next:before {
    content: '' !important;
  }

  .slick-prev {
    z-index: 1000;
    transform: translate3d(7px, -80px, 0);
  }
  animation: ${fadeEffect} 2s linear;
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

export const Section = styled.section`
  background: ${props => props.theme.BACKGROUND_COLOR_SECTION};
  padding: 120px 0;
  display: flex;
`
export const SectionAnother = styled(Section)`
  background: ${props => props.theme.BACKGROUND_COLOR_SECTION_DARKER};
`

export const SectionFooter = styled(Section)`
  background: ${props => props.theme.BACKGROUND_COLOR_FOOTER_SECTION};
`

export const SectionPromotion = styled.section`
  background: ${props => props.theme.BACKGROUND_COLOR_SECTION};
`

export const HeaderSection = styled.h1`
  color: ${props => props.theme.COLOR_SECTION_TITLE};
  width: 100%;
  margin: 0 auto 104px;
  font-size: 40px;
  font-weight: 500;
  text-align: center;
`

export const Title = styled.p`
  color: ${props => props.theme.COLOR_TITLE};
  font-size: ${props => props.little ? "18px" : "24px"};
  font-weight: ${props => props.bold ? "500" : "400"};
  margin: ${props => props.margin || '0'};
  text-decoration: none;
`
export const TittleCards = styled(Title)`
  color: ${props => props.theme.COLOR_TITLE_CARDS};
`
export const SubTitle = styled.p`
  color: ${props => props.theme.COLOR_SUB_TITLE};
  font-size: ${props => props.little ? "18px" : "24px"};
  font-weight: ${props => props.bold ? "500" : "400"};
  text-decoration: none;
`
export const SubTittleCards = styled(SubTitle)`
  color: ${props => props.theme.COLOR_SUB_TITLE_CARDS};
`

export const Text = styled(Title)`
  color: ${props => props.theme.COLOR_ANY_TEXT};
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

export const StyledLinkLogin = styled(StyledLink)`
  color: ${props => props.theme.COLOR_LOGIN_LINK};
`;


export const ButtonBookNowAndSingUP = styled.button`
  background: ${props => props.theme.BTN_BOOK_NOW_BACKGROUND_COLOR};
  border-color: ${props => props.theme.BTN_BOOK_NOW_BORDER_COLOR};
  color: ${props => props.theme.BTN_BOOK_NOW_TEXT_COLOR};
  padding: ${props => props.padding || '0'};
  width: ${props => props.width || 'initial'};
  height: ${props => props.height || 'initial'};
  border-width: 1px;
  border-style: solid;
  display: block;
  border-radius: 0.5rem;
  outline: none;
  font-size: 18px;
  font-weight: 400;
  cursor: pointer;
  text-align: center;

  &:hover {
    background: ${props => props.theme.BTN_BOOK_NOW_HOVER_BACKGROUND_COLOR};
    border-color: ${props => props.theme.BTN_BOOK_NOW_HOVER_BORDER_COLOR};
    color: ${props => props.theme.BTN_BOOK_NOW_HOVER_TEXT_COLOR};    
    transition: 0.5s ease;
  }
}
`


export const StyledSvg = styled.svg`
  display: block;
  width: ${props => props.width || 'initial'};
  height: ${props => props.height || 'initial'};

  margin: ${props => props.margin || '0'};
  cursor: ${props => props.cursor || 'initial'};
`

export const LogotypeIcon = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_NAV_LOGOTYPE_MAIN};
`
export const SwitcherIcon = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_NAV_ICON};
`
export const SwitcherIconActive = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_ICON_ACTIVE};
`
export const PromotionIcon = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_PROMOTION_ICON};
`

export const AccountIcon = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_NAV_ICON};
`
export const AccountIconActive = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_ICON_ACTIVE};
`
export const LogOutIcon = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_NAV_ICON};
`
export const OfferIcon = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_OFFER_ICON};
`
export const AvatarIcon  = styled(StyledSvg)`
  fill: ${props => props.theme.COLOR_AVATAR_ICON};
`

