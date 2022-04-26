import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    childrenCounter,
    decrementAdults, decrementRooms,
    incrementAdults, incrementRooms,
} from "../../../../redux/actions";

const OrderData = () => {
    const [countOfChildren, setCountOfChildren] = useState([]);
    const [countOfSelect, setCountOfSelect] = useState([]);

    const form = useSelector(state => state.formReducer)

    const dispatch = useDispatch();

    const data = {
        adults: {
            minValue: 1,
            maxValue: 30,
            label: 'Adults',
            count: form.adults,
            onIncrement: (event) => {
                event.preventDefault();
                data.adults.count !== data.adults.maxValue && dispatch(incrementAdults())
            },
            onDecrement: (event) => {
                event.preventDefault();
                data.adults.count !== data.adults.minValue && dispatch(decrementAdults())
            },
        },
        children: {
            minValue: 0,
            maxValue: 10,
            label: 'Children',
            count: countOfChildren.length,
            onIncrement: (event) => {
                event.preventDefault();
                data.children.count < data.children.maxValue && setCountOfChildren(prevState => [...prevState, 1])
                const addComponent = () => {
                    setCountOfSelect([...countOfSelect, "Select Component"])
                }
                data.children.count < data.children.maxValue && addComponent()
                dispatch(childrenCounter(data.children.count));
            },
            onDecrement: (event) => {
                event.preventDefault();

                data.children.count > data.children.minValue && setCountOfChildren(prevState => prevState.slice(1))
                const RemoveSelect = () => {
                    event.preventDefault();
                    setCountOfSelect(prevState => prevState.slice(1))
                }
                RemoveSelect()
                dispatch(childrenCounter(data.children.count));
            },
        },
        rooms: {
            minValue: 1,
            maxValue: 30,
            label: 'Rooms',
            count: form.rooms,
            onIncrement: (event) => {
                event.preventDefault();
                data.rooms.count !== data.rooms.maxValue && dispatch(incrementRooms());
            },
            onDecrement: (event) => {
                event.preventDefault();
                data.rooms.count !== data.rooms.minValue && dispatch(decrementRooms());
            },
        },
    }
    return (
        {
            data,
            countOfChildren,
            countOfSelect,
        }
    )
}

export default OrderData;