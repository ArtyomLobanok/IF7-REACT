import React, {useEffect, useState} from "react";
import '../FormOfSeach.css'

export const useForm = () => {
    const [values, setValues] = useState({
        nameOfSearch: '',
    });

    const handleChange = (e) => {
        const {name: inputName} = e.target;


        setValues({
            ...values,
            [inputName]: e.target.value,
        });
    }

    return {
        values,
        handleChange,
    }
}

export const FirstForm = ({setSearchData}) => {
    const {values, handleChange} = useForm();
    useEffect(()=>{
        setSearchData(values)
    },[values])
    console.log(setSearchData)
    return (
        <div className="first__input">
            {/*//360px --->*/}
            {/*<a href="/#" className="form__icon">*/}
            {/*    <svg className="icon__search">*/}
            {/*        <use href="#search"/>*/}
            {/*    </svg>*/}
            {/*</a>*/}
            <div>
                <input
                    name='nameOfSearch'
                    type='text'
                    id='searchName'
                    className='form__input'
                    value={values.name}
                    onChange={handleChange}
                    autoComplete='off'
                />
                <label
                    className='form__label'
                    htmlFor='nameOfSearch'>
                    Your destination or hotel
                    name
                </label>
            </div>
        </div>
    )
}
