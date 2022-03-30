import React, {useState} from 'react';


const Logic = () => {
    const [value, setValue] = useState('');

    // const NumbersArray = () => {
    //     let arr = [];
    //     if (17) for (let i = 1; i <= 17;) arr.push(i++);
    //     return arr;
    // }

    // const optionsForSelect = ['Less than 1', ...NumbersArray()];

    const options = Array.from(Array(17).keys()).map((text, index) => {
        return <option key={index+1}> {text+1} years old</option>;
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
    const {options, value, setValue} = Logic();
    return (
        <select value={value} onChange={(event) => setValue(event.target.value)}>
            {options}
        </select>
    )
}

export default Select;