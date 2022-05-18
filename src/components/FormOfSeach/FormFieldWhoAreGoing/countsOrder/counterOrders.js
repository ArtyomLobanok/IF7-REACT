import React from "react";
import {
    ButtonCounter, ButtonCounterActive,
    ModalFormCounterWrapper,
    ModalMenuShowCounter
} from "../../../Styled-components/HeaderForm";
import {Flex} from "../../../Styled-components/Global";
import {BtnCounterDecrementText, BtnCounterIncrementText} from "../../../../configs/stringsData";


const Counter = ({label, count, onIncrement, onDecrement, minValue, maxValue}) => {
    return (
        <>
            <ModalFormCounterWrapper>
                <div>{label}</div>
                <Flex align="center" justify="end">
                    {count !== minValue ? (
                        <ButtonCounterActive onClick={onDecrement}>
                            {BtnCounterDecrementText}
                        </ButtonCounterActive>
                    ) : (
                        <ButtonCounter onClick={onDecrement}>
                            {BtnCounterDecrementText}
                        </ButtonCounter>
                    )}
                    <div>
                        <ModalMenuShowCounter disabled value={`${count}`}/>
                    </div>
                    {count !== maxValue ? (
                        <ButtonCounterActive onClick={onIncrement}>
                            {BtnCounterIncrementText}
                        </ButtonCounterActive>
                    ) : (
                        <ButtonCounter onClick={onIncrement}>
                            {BtnCounterIncrementText}
                        </ButtonCounter>
                    )}
                </Flex>
            </ModalFormCounterWrapper>
        </>
    )
}

export default Counter;