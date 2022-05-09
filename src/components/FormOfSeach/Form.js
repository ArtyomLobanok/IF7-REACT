import React, {useEffect} from "react";
import FirstForm from './FormFieldSearchHotel/FormFieldSearchHotel'
import MyDataPicker from "./FormFieldDate/FormFieldDate";
import FormFieldThird from "./FormFieldWhoAreGoing/FormFieldWhoAreGoing";
import {useDispatch, useSelector} from "react-redux";
import {hotelsLoad} from "../../redux/actions";
import {FormHeaderWrapper, SearchBtn, StyledForm} from "../Styled-components/HeaderForm";

function Form() {
    const dispatch = useDispatch()
    const {search, dateFrom, dateTo, adults, children, rooms} = useSelector(state => {
        const {formReducer} = state;
        return formReducer;
    });
    const params = `search=${search}&dateFrom=${dateFrom}&dateTo=${dateTo}&adults=${adults}&children=${children.toString()}&rooms=${rooms}`

    const handleChange = (e) => {
        e.preventDefault()
        dispatch(hotelsLoad(params));
    }

    const hotelArray = useSelector(state => state.hotelsLoadReducer.hotelData)
    useEffect(
        () => {
            if (hotelArray.length !== 0) {
                window.scrollTo({
                    top: 900,
                    behavior: "smooth"
                });
            }
        }, [hotelArray]
    );
    return (
        <FormHeaderWrapper>
            <StyledForm id="mainForm">
                <FirstForm/>
                <MyDataPicker/>
                <FormFieldThird/>
                <SearchBtn
                    onClick={handleChange}>Search</SearchBtn>
            </StyledForm>
        </FormHeaderWrapper>
    );
}

export default Form;