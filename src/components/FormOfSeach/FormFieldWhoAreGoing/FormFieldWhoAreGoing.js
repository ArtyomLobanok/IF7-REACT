import React, {useState} from "react";
import Counter from "./countsOrder/counterOrders"
import OrderData from "./dataOrder/dataOrder"
import Select from "./childrenSelects/childrenSelect";
import uniqid from 'uniqid';
import {useSelector} from "react-redux";
import {ClickAwayListener} from "@mui/material";
import {ModalForm, SelectWrapper, DataFormWrapper, ModalFormQuestion} from "../../Styled-components/HeaderForm";

const useModalMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => {
        setIsOpen(!isOpen)
    }
    const handleClickAway = () => {
        setIsOpen(false)
    }
    return (
        {
            isOpen,
            handleClick,
            handleClickAway
        }
    )
}

const FormFieldThird = () => {
    const selectArray = useSelector(state => state.formReducer.children)
    const {data} = OrderData()
    const {isOpen, handleClick, handleClickAway} = useModalMenu()
    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>
                <DataFormWrapper>
                    <SelectWrapper onClick={handleClick}>
                        {
                            `${data.adults.count} Adults
                        —
                        ${data.children.count} Children
                        —
                        ${data.rooms.count} Room`
                        }
                    </SelectWrapper>

                    {
                        isOpen && (
                            <ModalForm>
                                <div>
                                    {
                                        Object.keys(data).map(key => <Counter key={uniqid('counter-')} {...data[key]} />)
                                    }
                                </div>
                                <ModalFormQuestion>
                                    {
                                        data.children.count > 0 &&
                                        <span>
                                            What is the age of the child you’re<br/> travelling with?
                                        </span>
                                    }
                                </ModalFormQuestion>
                                <div>
                                    {
                                        selectArray.map((item, index) => (
                                            <Select index={index} value={item} key={uniqid('select-')}/>))
                                    }
                                </div>
                            </ModalForm>
                        )
                    }

                </DataFormWrapper>
            </ClickAwayListener>
        </>
    );
};

export default FormFieldThird;