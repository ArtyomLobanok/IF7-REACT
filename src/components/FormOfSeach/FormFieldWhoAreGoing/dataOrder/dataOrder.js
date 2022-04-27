import {useDispatch, useSelector} from "react-redux";
import {
    decrementAdults, decrementChildren,
    decrementRooms,
    incrementAdults, incrementChildren,
    incrementRooms,
}
    from "../../../../redux/actions";

const OrderData = () => {
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
            count: form.children.length,
            onIncrement: (event) => {
                event.preventDefault();
                data.children.count < data.children.maxValue && dispatch(incrementChildren())

            },
            onDecrement: (event) => {
                event.preventDefault();
                data.children.count > data.children.minValue && dispatch(decrementChildren())
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
        }
    )
}

export default OrderData;