import React, {useState} from "react";
import DatePicker from "react-datepicker";
import '../../Contaiter/Container.css'
import "react-datepicker/dist/react-datepicker.css";
import './FormFieldDate.css'

const MyDataPicker = () => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
    };

    return (
        <div className="second__input">
            <DatePicker
                name="datepicker"
                Label="Timeless"
                className="form__item"
                selected={startDate}
                minDate={new Date()}
                onChange={onChange}
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