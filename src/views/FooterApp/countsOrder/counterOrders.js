import React from "react";

const Counter = ({label, count, onIncrement, onDecrement}) => {
    return (
        <div className='box'>
            <span>{`${label}`}</span>
            <button onClick={onDecrement}>-</button>
            <span>{`${count}`}</span>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}

export default Counter;