import React, {useEffect, useState} from "react";
import DatePicker from "react-datepicker";
import '../../Contaiter/Container.css'
import "react-datepicker/dist/react-datepicker.css";
import './FormFieldDate.css'
import {useDispatch} from "react-redux";
import {datePickerStart,datePickerEnd} from "../../../redux/actions";

const MyDataPicker = () => {
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const formattedStartDate = new Date(startDate).getTime()
    const formattedEndDate = new Date(endDate).getTime()
    const dispatch = useDispatch();

    const dispatchDates = () => {
        dispatch(datePickerEnd(formattedEndDate))
        dispatch(datePickerStart(formattedStartDate))
    }

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    useEffect(()=>{
        dispatchDates()
    },[startDate,endDate])

    return (
        <div className="second__input">
            <DatePicker
                name="datepicker"
                Label="Timeless"
                className="form__item"
                selected={startDate}
                minDate={new Date()}
                onChange={onChange}
                unf
                startDate={startDate}
                endDate={endDate}
                selectsRange
                monthsShown={2}
                dateFormat='E, MMM d'
                placeholderText='Check-in — Check-out'
            />
        </div>
    );
};

export default MyDataPicker;