import React from "react";
import Inner from "../../components/InnerTripHouse/InnerTripHouse";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container} from "../../components/Styled-components/Global"
import backgroundImage from '../../assets/Img/mainBackground.png'
import styled from "styled-components";

const HeaderWrapper = styled.div`
  position: relative;
  background-image: url(${backgroundImage});
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  min-height: 56.25rem;
  background-size: cover;
`
const HeaderWrapperShadow = styled.div`
  background: ${props => props.theme.BACKGROUND_SHADOW_BOX};
  position: absolute;
  height: 100vh;
  min-height: 56.25rem;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <HeaderWrapperShadow>
                <Container>
                    <HeaderMenu/>
                    <Inner/>
                </Container>
            </HeaderWrapperShadow>
        </HeaderWrapper>
    );
}

export default Header;