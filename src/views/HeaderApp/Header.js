import React from "react";
import Inner from "../../components/InnerTripHouse/InnerTripHouse";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu";
import {Container} from "../../components/Styled-components/Global"
import backgroundImage from '../../assets/Img/mainBackground.png'
import styled from "styled-components";

const HeaderWrapper = styled.div`
  background-image: url(${backgroundImage});
  height: 100vh;
  background-repeat:no-repeat;
  background-position: center;
  min-height: 56.25rem;
  background-size: cover;
`

const Header = () => {
    return (
        <HeaderWrapper>
            <Container>
                <HeaderMenu/>
                <Inner/>
            </Container>
        </HeaderWrapper>
    );
}

export default Header;