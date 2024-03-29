import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {removeUser} from '../../redux/slices/userSlice'
import Dropdown from "./Dropdown/Dropdown";
import {ClickAwayListener} from "@mui/material";
import {ButtonLogOut, Header, HeaderNavLink} from "../Styled-components/Header"
import {
    AccountIcon, AccountIconActive,
    Flex,
    LogotypeIcon,
    LogOutIcon,
    StyledLink,
    SwitcherIcon, SwitcherIconActive
} from "../Styled-components/Global";
import Svg from "../../assets/svg/Svg";
import {switchTheme} from "../../redux/actions"
import {lightTheme, darkTheme} from "../Styled-components/ThemeData";
import {ButtonLogOutText, HeaderNavLinkTextFirst, HeaderNavLinkTextSecond} from "../../configs/stringsData";

const HeaderMenu = () => {
    const theme = useSelector((state) => state.themeReducer.theme)
    const dispatch = useDispatch();
    const {isDropdown, handleClickDropdown, handleClickAway} = Dropdown();
    return (
        <Header>
            <Svg/>
            <Flex align='center'>
                <div>
                    <StyledLink to={`/`}>
                        <LogotypeIcon cursor="pointer" width='205px' height='40px' fill='#3077C6'>
                            <use href="#logotype"></use>
                        </LogotypeIcon>
                    </StyledLink>
                </div>
                <Flex justify='flex-end' align="center">
                    <HeaderNavLink href="/#" onClick={(e)=>e.preventDefault()}>{HeaderNavLinkTextFirst}</HeaderNavLink>
                    <HeaderNavLink href="/#" onClick={(e)=>e.preventDefault()}>{HeaderNavLinkTextSecond}</HeaderNavLink>
                    <HeaderNavLink>
                        {theme.mode === 'light' ? (
                            <SwitcherIcon cursor='pointer' width='30px' height='30px'
                                          onClick={() => dispatch(switchTheme(darkTheme))}>
                                <use href="#styleTimeSwitch"/>
                            </SwitcherIcon>
                        ) : (
                            <SwitcherIconActive cursor='pointer' width='30px' height='30px'
                                          onClick={() => dispatch(switchTheme(lightTheme))}>
                                <use href="#styleTimeSwitch"/>
                            </SwitcherIconActive>
                        )}
                    </HeaderNavLink>
                    <ClickAwayListener onClickAway={handleClickAway}>
                        <div>
                            {isDropdown === true ? (
                                <AccountIconActive cursor='pointer' width='40px' height='40px'
                                             onClick={handleClickDropdown}>
                                    <use href="#account"/>
                                </AccountIconActive>
                            ) : (
                                <AccountIcon cursor='pointer' width='40px' height='40px'
                                             onClick={handleClickDropdown}>
                                    <use href="#account"/>
                                </AccountIcon>
                            )
                            }
                            {
                                isDropdown && (
                                    <ButtonLogOut onClick={() => dispatch(removeUser({}))}
                                                  width="192px" height="50px" padding="14px 0 13px 16px"
                                    >
                                        <LogOutIcon width='30px' height='30px' margin="12px 0 0 0">
                                            <use href="#singOut"/>
                                        </LogOutIcon>
                                        {ButtonLogOutText}
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