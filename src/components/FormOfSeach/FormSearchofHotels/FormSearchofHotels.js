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
    useEffect(() => {
        setSearchData(values)
    }, [values])
    return (
        <div className="first__input">
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
    )
}
