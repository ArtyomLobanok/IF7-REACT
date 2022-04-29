import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './FormFieldDate.css'
import {useDispatch, useSelector} from "react-redux";
import {datePickerStart, datePickerEnd} from "../../../redux/actions";

const MyDataPicker = () => {
    const [isActive, setIsActive] = useState(false);
    const form = useSelector(state => state.formReducer)
    const dispatch = useDispatch();
    const onChange = (dates) => {
        const [start, end] = dates;
        dispatch(datePickerStart(new Date(start).getTime()));
        dispatch(datePickerEnd(new Date(end).getTime()));
    };
    const handleFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        }
        setIsActive(true);
    };

    const disableField = (e) => {
        setIsActive(false);
    };

    const disableFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        }
    };
    const onChangeRaw = (e) => {
        e.preventDefault()
    }

    return (
        <div className="second__input">
            <div className="label__wrapper">
                <label className={isActive ? "active" : ""}>Check-in — Check-out</label>
            </div>
                <DatePicker
                    onFocus={handleFocus}
                    onBlur={disableFocus}
                    onChangeRaw={onChangeRaw}
                    name="datepicker"
                    Label="Timeless"
                    className="form__item"
                    selected={form.dateFrom}
                    minDate={new Date()}
                    onChange={onChange}
                    unf
                    startDate={form.dateFrom}
                    endDate={form.dateTo}
                    selectsRange
                    monthsShown={2}
                    dateFormat='E, MMM d'
                    autoComplete='off'
                />
        </div>
    );
};

export default MyDataPicker;