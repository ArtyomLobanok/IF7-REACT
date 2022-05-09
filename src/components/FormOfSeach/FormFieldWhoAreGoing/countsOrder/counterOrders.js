import React from "react";
import {
    ButtonCounter, ButtonCounterActive,
    ModalFormCounterWrapper,
    ModalMenuShowCounter
} from "../../../Styled-components/HeaderForm";
import {Flex} from "../../../Styled-components/Global";


const Counter = ({label, count, onIncrement, onDecrement, minValue, maxValue}) => {
    return (
        <>
            <ModalFormCounterWrapper>
                <div>{label}</div>
                <Flex align="center" justify="end">
                    {count !== minValue ? (
                        <ButtonCounterActive onClick={onDecrement}>
                            -
                        </ButtonCounterActive>
                    ) : (
                        <ButtonCounter onClick={onDecrement}>
                            -
                        </ButtonCounter>
                    )}
                    <div>
                        <ModalMenuShowCounter disabled value={`${count}`}/>
                    </div>
                    {count !== maxValue ? (
                        <ButtonCounterActive onClick={onIncrement}>
                            +
                        </ButtonCounterActive>
                    ) : (
                        <ButtonCounter onClick={onIncrement}>
                            +
                        </ButtonCounter>
                    )}
                </Flex>
            </ModalFormCounterWrapper>
        </>
    )
}

export default Counter;