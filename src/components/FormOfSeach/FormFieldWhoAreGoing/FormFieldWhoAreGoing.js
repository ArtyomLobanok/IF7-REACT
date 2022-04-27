import React, { useState } from "react";
import "./FormFieldWhoAreGoing.css"
import Counter from "./countsOrder/counterOrders"
import OrderData from "./dataOrder/dataOrder"
import Select from "./childrenSelects/childrenSelect";
import uniqid from 'uniqid';
import {useSelector} from "react-redux";

const ModalMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    return (
        {
            isOpen,
            handleClick
        }
    )
}

const FormFieldThird = () => {
    const selectArray = useSelector(state => state.formReducer.children)
    const {data } = OrderData()
    const {isOpen, handleClick} = ModalMenu()
    return (
        <>
            <div className="wrapper">
                <div className='fieldView' onClick={
                    handleClick}>
                    {
                        `${data.adults.count} Adults
                        —
                        ${data.children.count} Children
                        —
                        ${data.rooms.count} Room`
                    }
                </div>
                {
                    isOpen && (
                        <div className="fieldModalForm">
                            <div>
                                {
                                    Object.keys(data).map(key => <Counter key={uniqid('counter-')} {...data[key]} />)
                                }
                            </div>
                            <div className="fieldToggleQuestion">
                                {
                                    data.children.count > 0 &&
                                    <span className="fieldToggleQuestion">
                                        What is the age of the child you’re<br/> travelling with?
                                    </span>
                                }
                            </div>
                            <div className='selectors'>
                                {
                                    selectArray.map((item, index) => (<Select index={index} value={item} key={uniqid('select-')}/>))
                                }
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default FormFieldThird;