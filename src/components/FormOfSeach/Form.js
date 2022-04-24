import React from "react";
import './Form.css'
import FirstForm from './FormFieldSearchHotel/FormFieldSearchHotel'
import MyDataPicker from "./FormFieldDate/FormFieldDate";
import FormFieldThird from "./FormFieldWhoAreGoing/FormFieldWhoAreGoing";
import {useDispatch, useSelector} from "react-redux";
import {hotelsLoad} from "../../redux/actions";

function Form() {

    const dispatch = useDispatch()
    const queryParams = useSelector(state => {
        const {formReducer} = state;
        return formReducer;
    });
    const params = new URLSearchParams(queryParams).toString()
    console.log(params)

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(hotelsLoad(params));
        console.log(params)
    }

    return (
        <div className="intro__content">
            <form className="intro__form" id="mainForm">
                <FirstForm/>
                <MyDataPicker/>
                <FormFieldThird/>
                <button onClick={handleChange} type='submit' className="form__button search">Search</button>
            </form>
        </div>
    );
}

export default Form;