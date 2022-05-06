import React from "react";
import {ButtonCounter, ModalFormCounterWrapper, ModalMenuShowCounter} from "../../../Styled-components/HeaderForm";
import {Flex} from "../../../Styled-components/Global";


const Counter = ({label, count, onIncrement, onDecrement, minValue, maxValue}) => {
    return (
        <>
            <ModalFormCounterWrapper>
                <div>{`${label}`}</div>
                <Flex align="center" justify="end">
                    <ButtonCounter active={count !== minValue} onClick={onDecrement}>
                        -
                    </ButtonCounter>
                    <div>
                        <ModalMenuShowCounter disabled value={`${count}`}/>
                    </div>
                    <ButtonCounter active={count !== maxValue} onClick={onIncrement}>
                        +
                    </ButtonCounter>
                </Flex>
            </ModalFormCounterWrapper>
        </>
    )
}

export default Counter;