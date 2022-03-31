import React, {useState} from 'react';


const SelectOptions = () => {
    const [value, setValue] = useState('');

    const options = Array.from(Array(17).keys()).map((text, index) => {
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

export const Select = () => {
    const {options, value, setValue} = SelectOptions();
    return (
        <select value={value} onChange={(event) => setValue(event.target.value)}>
            {options}
        </select>
    )
}

export const AddSelect = () => {
    const [SelectCallState, setSelectCallState] = useState(false);

    const SelectStateHandler = () => {
        setSelectCallState({
            inputCallState: true
        })
    }
    return ({
        SelectCallState,
        setSelectCallState,
        SelectStateHandler
    });
}
