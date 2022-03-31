import React from "react";
import { AddSelect } from "./childrenSelects/childrenSelect";

const Counter = ({label, count, onIncrement, onDecrement}) => {
    const { SelectStateHandler } = AddSelect()
    return (
        <div className='box'>
            <span>{`${label}`}</span>
            <button className="btnMin" style={{ backgroundColor: "#FFF", color: "#CECECE", borderColor: "#CECECE" }} onClick={SelectStateHandler}>-</button>
            <span>{`${count}`}</span>
            <button className="btnMax" style={{ backgroundColor: "#FFF", color: "#CECECE", borderColor: "#CECECE"}} onClick={onIncrement}>+</button>
        </div>
    )
}

export default Counter;