import {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {useDispatch, useSelector} from "react-redux";
import {datePickerStart, datePickerEnd} from "../../../redux/actions";
import {
    StyledDateLabelWrapper,
    StyledDatePickerWrapper,
} from "../../Styled-components/HeaderForm"
import {DateLabel} from "../../../configs/stringsData";

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

    const disableField = () => {
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
        <StyledDatePickerWrapper maxWidth='259px'>
            <StyledDateLabelWrapper active={isActive}>
                <label>{DateLabel}</label>
            </StyledDateLabelWrapper>
                <DatePicker
                    onFocus={handleFocus}
                    onBlur={disableFocus}
                    onChangeRaw={onChangeRaw}
                    name="datepicker"
                    Label="Timeless"
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
        </StyledDatePickerWrapper>
    );
};

export default MyDataPicker;