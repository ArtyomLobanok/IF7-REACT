import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../../../redux/actions";
import {
    StyledInputFist,
    StyledInputWrapper,
    StyledLabelFist
} from "../../Styled-components/HeaderForm";

const FirstForm = () => {
    const [isActive, setIsActive] = useState(false);

    const handleFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        }
        setIsActive(true);
    };
    const disableField = () => {
        setIsActive(false);
    };
    const disableFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        }
    };
    const dispatch = useDispatch();
    const handleChange = (value) => {
        dispatch(inputText(value))
    }
    const inputValue = useSelector(state => state.formReducer.search);
    console.log(inputValue)
    useEffect(
        () => {
            if (inputValue.length !== 0 && (window.scrollY > 2400)) {
                setIsActive(true)
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            };
        }, [inputValue]);

    return (
        <StyledInputWrapper position='relative' maxWidth='467px'>
            <StyledLabelFist active={isActive}>
                Your destination or hotel
                name
            </StyledLabelFist>
            <StyledInputFist
                onFocus={handleFocus}
                onBlur={disableFocus}
                name='search'
                type='text'
                id='searchName'
                value={inputValue}
                onChange={(e) => {
                    handleChange(e.target.value)
                }}
                autoComplete='off'
            />
        </StyledInputWrapper>
    )
}

export default FirstForm;