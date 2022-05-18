import { useDispatch } from "react-redux";

import { setChildAge } from "../../../../redux/actions"
import {StyledSelects} from "../../../Styled-components/HeaderForm";

const SelectOptions = () => {
    const options = Array.from(Array(18).keys()).map((text, index) => {
        return <option value={text} key={index}> {text} years old</option>;
    });
    return (
        {
            options,
        }
    )
}

const Select = ({value, index}) => {
    const onChange= (e) => {
        dispatch(setChildAge({value: e.target.value, index}))
    }
    const dispatch = useDispatch()
    const { options } = SelectOptions();
    return (
            <StyledSelects value={value} onChange={onChange}>
                {options}
            </StyledSelects>
    )
}

export default Select;

