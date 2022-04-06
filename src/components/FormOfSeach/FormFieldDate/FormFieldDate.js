import React, {useState} from "react";
import DatePicker from "react-datepicker";
import '../../Contaiter/Container.css'
import "react-datepicker/dist/react-datepicker.css";
import './FormFieldDate.css'
// <div className="second__input">
//     <div className="form__item">
//         <input autoComplete="off" name="in_date" id="in_date" className="form__input" required/>
//         <label className="form__label" htmlFor="in_date">Check-in date</label>
//     </div>
//     <div className="form__item">
//         <input autoComplete="off" name="out_date" id="out_date" className="form__input"
//                required/>
//         <label className="form__label" htmlFor="out_date">Check-out date</label>
//     </div>
// </div>



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
            />
        </div>
    );
};

export default MyDataPicker;