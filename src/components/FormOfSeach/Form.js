import React from "react";
import './Form.css'
import FirstForm from './FormFieldSearchHotel/FormFieldSearchHotel'
import MyDataPicker from "./FormFieldDate/FormFieldDate";
import FormFieldThird from "./FormFieldWhoAreGoing/FormFieldWhoAreGoing";
import {useDispatch, useSelector} from "react-redux";
import {hotelsLoad} from "../../redux/actions";



function Form ({setSearchData}){

    const mock = {searchText: '1723', startDate: '5123', endDate: '1423', adults: '1233', children: '321'}



    const dispatch = useDispatch()

    const queryParams = useSelector(state => {
        const { inputReducer } = state;
        return inputReducer;
    });

    console.log(new URLSearchParams(queryParams).toString())


    const handleChange = (e) => {
        dispatch(hotelsLoad());

        e.preventDefault()
}

    return (
            <div className="intro__content">
                <form className="intro__form" id="mainForm">
                    <FirstForm setSearchData={setSearchData}/>
                    <MyDataPicker/>
                    <FormFieldThird/>
                    <button onClick={handleChange} type='submit' className="form__button search">Search</button>
                </form>
            </div>
    );
}

export default Form;