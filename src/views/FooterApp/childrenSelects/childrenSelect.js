import React, {useState} from 'react';


const SelectOptions = () => {
    const [value, setValue] = useState('');

    const options = Array.from(Array(18).keys()).map((text, index) => {
        return <option key={index}> {text} years old</option>;
    });
    return (
        {
            options,
            value,
            setValue,
        }
    )
}

const Select = () => {
    const {options, value, setValue} = SelectOptions();
    return (
        <select value={value} onChange={(e) => setValue(e.target.value)}>
            {options}
        </select>
    )
}
export default Select;

