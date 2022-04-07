import React from "react";
import './Form.css'
import FirstForm from './FormFieldSearchHotel/FormFieldSearchHotel'
import MyDataPicker from "./FormFieldDate/FormFieldDate";
import FormFieldThird from "./FormFieldWhoAreGoing/FormFieldWhoAreGoing";



function Form ({setSearchData}) {
    return (
            <div className="intro__content">
                <form className="intro__form" id="mainForm">
                    {/*//Search --->*/}
                    <FirstForm setSearchData={setSearchData}/>
                    {/*//Calendar --->*/}
                    <MyDataPicker/>
                    {/*//Modal Menu --->*/}
                    <FormFieldThird/>
                        {/*BUTTON HERE*/}
                    <button type='submit' className="form__button search">Search</button>
                </form>
            </div>
    );
}

export default Form;