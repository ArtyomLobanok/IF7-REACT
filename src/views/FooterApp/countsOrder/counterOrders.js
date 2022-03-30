import React from "react";

const Counter = ({minValue, maxValue, label, count, onChange}) => {
    function decrement() {
        if (count === minValue) {
            return count
        }
        onChange(prevCount => prevCount - 1)
    }

    function increment() {
        if (count === maxValue) {
            return count
        }
        onChange(prevCount => prevCount + 1)
    }
    return (
        <div className='box'>
            <span>{`${label}`}</span>
            <button onClick={decrement}>Minus</button>
            <span>{`${count}`}</span>
            <button onClick={increment}>Plus</button>
        </div>
    )
}

export default Counter;