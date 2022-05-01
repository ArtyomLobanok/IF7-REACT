import React, {useEffect, useState} from "react";
import './FormFieldSearchHotel.css'
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../../../redux/actions";

const FirstForm = () => {
    const [values, setValues] = useState('');
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

    const searchText = useSelector(state => state.formReducer.search);
    useEffect(
        () => {
            if (searchText.length !== 0 && (window.scrollY > 400)) {
                setIsActive(true)
                window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                });
            };
            setValues(searchText)
        }, [searchText]);

    return (
        <div className="first__input">
            <label className={isActive ? "active" : ""}>
                Your destination or hotel
                name
            </label>
            <input
                onFocus={handleFocus}
                onBlur={disableFocus}
                name='search'
                type='text'
                id='searchName'
                className='form__input'
                value={values}
                onChange={(e) => {
                    setValues(e.target.value)
                    handleChange(e.target.value)
                }}
                autoComplete='off'
            />
        </div>
    )
}

export default FirstForm;