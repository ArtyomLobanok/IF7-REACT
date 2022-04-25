import {useState} from "react";
import { useDispatch } from "react-redux";
import {adultsCounter, childrenCounter, roomsCounter} from "../../../../redux/actions";

const OrderData = () => {

    const [countOfAdults, setCountOfAdults] = useState(1);
    const [countOfChildren, setCountOfChildren] = useState([]);
    const [countOfRooms, setCountOfRooms] = useState(1);
    const [countOfSelect, setCountOfSelect] = useState([]);

    // const dataOrder = useSelector(state => state.formReducer)

    const dispatch = useDispatch();
    const dispatchCounters = () => {
        dispatch(adultsCounter(data.adults.count))
        dispatch(childrenCounter(data.children.count))
        dispatch(roomsCounter(data.rooms.count))
    }

    const data = {
        adults: {
            minValue: 1,
            maxValue: 30,
            label: 'Adults',
            count: countOfAdults,
            onIncrement: (event) => {
                dispatchCounters()
                event.preventDefault();
                data.adults.count !== data.adults.maxValue && setCountOfAdults(prevCount => prevCount + 1)
            },
            onDecrement: (event) => {
                dispatchCounters()
                event.preventDefault();
                data.adults.count !== data.adults.minValue && setCountOfAdults(prevCount => prevCount - 1)
            },
        },
        children: {
            minValue: 0,
            maxValue: 10,
            label: 'Children',
            count: countOfChildren.length,
            onIncrement: (event) => {
                event.preventDefault();
                dispatchCounters()
                data.children.count < data.children.maxValue && setCountOfChildren(prevState => [...prevState, 1])
                const addComponent = () => {
                    setCountOfSelect([...countOfSelect, "Select Component"])
                }
                data.children.count < data.children.maxValue && addComponent()
            },
            onDecrement: (event) => {
                event.preventDefault();
                dispatchCounters()
                data.children.count > data.children.minValue && setCountOfChildren(prevState => prevState.slice(1))
                const RemoveSelect = () => {
                    event.preventDefault();
                    setCountOfSelect(prevState => prevState.slice(1))
                }
                RemoveSelect()
            },
        },
        rooms: {
            minValue: 1,
            maxValue: 30,
            label: 'Rooms',
            count: countOfRooms,
            onIncrement: (event) => {
                event.preventDefault();
                dispatchCounters()
                data.rooms.count !== data.rooms.maxValue && setCountOfRooms(prevCount => prevCount + 1)
            },
            onDecrement: (event) => {
                event.preventDefault();
                dispatchCounters()
                data.rooms.count !== data.rooms.minValue && setCountOfRooms(prevCount => prevCount - 1)
            },
        },
    }
    return (
        {
            data,
            countOfAdults,
            countOfChildren,
            countOfRooms,
            countOfSelect,
        }
    )
}

export default OrderData;