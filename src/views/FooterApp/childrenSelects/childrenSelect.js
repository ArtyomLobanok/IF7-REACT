import React, {useState} from 'react';


const Logic = () => {
    const [value, setValue] = useState('');

    const NumbersArray = () => {
        let arr = [];
        if (17) for (let i = 1; i <= 17;) arr.push(i++);
        return arr;
    }

    const optionsForSelect = ['Less than 1', ...NumbersArray()];

    const options = optionsForSelect.map((text, index) => {
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

function Select() {
    const {options, value, setValue} = Logic();
    return (
        <select value={value} onChange={(event) => setValue(event.target.value)}>
            {options}
        </select>
    )
}

export default Select;