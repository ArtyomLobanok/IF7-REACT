import React from "react";
import './counterOrders.css'


const Counter = ({label, count, onIncrement, onDecrement, minValue, maxValue}) => {

    return (
        <div className='box'>
            <span>{`${label}`}</span>
            <button className={
                count === minValue ? 'btn' : 'active btn'
            }  onClick={onDecrement}>-</button>
            <span>{`${count}`}</span>
            <button className={
                count === maxValue ? 'btn' : 'active btn'
            }  onClick={onIncrement}>+</button>
        </div>
    )
}

export default Counter;