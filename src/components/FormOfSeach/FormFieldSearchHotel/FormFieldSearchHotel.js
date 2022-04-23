import React, {useEffect, useState} from "react";
import './FormFieldSearchHotel.css'
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../../../redux/actions";



const FirstForm = () => {
    const [values, setValues] = useState('');

    const dispatch = useDispatch();


    const handleChange = (value) => {
        dispatch(inputText(value))
    }


    return (
        <div className="first__input">
            <input
                name='nameOfSearch'
                type='text'
                id='searchName'
                className='form__input'
                value={values}
                onChange={(e)=> {
                    setValues(e.target.value)
                    handleChange(e.target.value)
                }}
                autoComplete='off'
                placeholder='Your destination or hotel
                name'
            />
        </div>
    )
}

export default FirstForm;