import DatePicker from "react-datepicker";
import '../../Contaiter/Container.css'
import "react-datepicker/dist/react-datepicker.css";
import './FormFieldDate.css'
import {useDispatch, useSelector} from "react-redux";
import {datePickerStart,datePickerEnd} from "../../../redux/actions";

const MyDataPicker = () => {
    const form = useSelector(state => state.formReducer)
    const dispatch = useDispatch();
    const onChange = (dates) => {
        const [start, end] = dates;
        dispatch(datePickerStart(new Date(start).getTime()));
        dispatch(datePickerEnd(new Date(end).getTime()));

    };

    return (
        <div className="second__input">
            <DatePicker
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
                placeholderText='Check-in — Check-out'
            />
        </div>
    );
};

export default MyDataPicker;