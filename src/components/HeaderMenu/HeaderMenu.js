import React from "react";
import {useDispatch} from "react-redux";
import {removeUser} from '../../redux/slices/userSlice'
import useAuth from "../../hooks/use-auth";
import Dropdown from "./Dropdown/Dropdown";
import {ClickAwayListener} from "@mui/material";
import {ButtonLogOut, Header, HeaderNavLink} from "../Styled-components/Header"
import {Flex, StyledLink, StyledSvg} from "../Styled-components/Global";
import Svg from "../../assets/svg/Svg";


const HeaderMenu = () => {
    const dispatch = useDispatch();
    const {isAuth} = useAuth();
    const {isDropdown, handleClickDropdown, handleClickAway} = Dropdown();
    return (
        <Header>
            <Svg/>
            <Flex align='center'>
                <div>
                    <StyledLink to={`/`}>
                        <StyledSvg width='205px' height='40px' fill='#3077C6'>
                            <use href="#logotype"></use>
                        </StyledSvg>
                    </StyledLink>
                </div>
                <Flex justify='flex-end' align="center">
                    <HeaderNavLink href="/#">Stays</HeaderNavLink>
                    <HeaderNavLink href="/#">Attractions</HeaderNavLink>
                    <HeaderNavLink href="/#">
                        <StyledSvg width='30px' height='30px' fill='#FFFFFF'>
                            <use href="#styleTimeSwitch"/>
                        </StyledSvg>
                    </HeaderNavLink>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div>
                            <StyledSvg cursor='pointer' width='40px' height='40px'
                                       fill={isDropdown === true ? '#F5BD41' : '#FFFFFF'}
                                       onClick={isAuth && handleClickDropdown}>
                                <use href="#account"/>
                            </StyledSvg>

                            {
                                isDropdown && (
                                    <ButtonLogOut onClick={() => dispatch(removeUser({}))}
                                                  width="192px" height="50px" padding="14px 0 13px 16px"
                                    >
                                        <StyledSvg width='30px' height='30px' fill='#333333' margin="12px 0 0 0">
                                            <use href="#singOut"/>
                                        </StyledSvg>
                                        Sign out
                                    </ButtonLogOut>
                                )
                            }
                        </div>
                    </ClickAwayListener>
                </Flex>
            </Flex>
        </Header>
    )
}
export default HeaderMenu;