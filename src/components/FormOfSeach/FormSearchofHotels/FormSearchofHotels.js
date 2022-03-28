import React, {useState} from "react";
import '../FormOfSeach.css'

export const useForm = () => {
    const [values, setValues] = useState({
        nameOfSearch: '',
    });

    const handleChange = (e) => {
        const {name: inputName} = e.target;
        console.log(e.target.value);

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

export const FirstForm = () => {
    const {values, handleChange} = useForm();

    return (
            <div className="first__input">
                {/*//360px --->*/}
                {/*<a href="/#" className="form__icon">*/}
                {/*    <svg className="icon__search">*/}
                {/*        <use href="#search"/>*/}
                {/*    </svg>*/}
                {/*</a>*/}
                <div className="form__item">
                    <input
                        name = 'nameOfSearch'
                        type = 'text'
                        id = 'searchName'
                        className ='form__input'
                        value = {values.name}
                        onChange = {handleChange}
                        autoComplete = 'off'
                    />
                    <label
                        className='form__label'
                        htmlFor = 'nameOfSearch'>
                        Your destination or hotel
                        name
                    </label>
                </div>
                {/*<div className='overviews__slider'>*/}
                {/*    {array.map(hotelCard => (*/}
                {/*        <HotelCard key={hotelCard.id} card={hotelCard}/>*/}
                {/*    ))}*/}
                {/*</div>*/}
            </div>
)}
