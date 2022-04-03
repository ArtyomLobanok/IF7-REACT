import React from "react";

const Counter = ({label, count, onIncrement, onDecrement}) => {
    return (
        <div className='box'>
            <span>{`${label}`}</span>
            <button className="btnMin"  onClick={onDecrement}>-</button>
            <span>{`${count}`}</span>
            <button className="btnMax"  onClick={onIncrement}>+</button>
        </div>
    )
}

export default Counter;