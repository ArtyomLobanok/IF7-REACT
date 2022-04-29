import React, { useState } from "react";
import './FormFieldSearchHotel.css'
import {useDispatch} from "react-redux";
import {inputText} from "../../../redux/actions";

const FirstForm = () => {
    const [values, setValues] = useState({
            search: '',
            searchActive: false,
        }
    );

    const activateField = (e) => {
        console.log();
        setValues({
            ...values,
            [`${e.target.name}Active`]: true
        })
    }

    const disableField = (e) => {
        setValues({
            ...values,
            [`${e.target.name}Active`]: false
        })
    }

    const disableFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        }
    }

    const dispatch = useDispatch();

    const handleFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        } else {
            activateField(e);
        }
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value,
            }
        );
    }

    const handleChange = (value) => {
        dispatch(inputText(value))
    }

    return (
        <div className="first__input">
            <label className={values.searchActive ? "active" : ""}>
                Your destination or hotel
                name
            </label>
            <input
                name='search'
                type='text'
                id='searchName'
                className='form__input'
                value={ values.name }
                onFocus={ activateField }
                onBlur={ disableFocus }

                onChange={(e)=> {
                    setValues(e.target.value)
                    handleChange(e.target.value)
                    handleFocus(e)
                }}
                autoComplete='off'
            />
        </div>
    )
}

export default FirstForm;