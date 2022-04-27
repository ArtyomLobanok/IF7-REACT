import { useDispatch } from "react-redux";
import './childrenSelect.css'
import { setChildAge } from "../../../../redux/actions"

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
            <select value={value} onChange={onChange}>
                {options}
            </select>
    )
}

export default Select;

