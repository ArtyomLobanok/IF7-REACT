import {useState} from "react";

const OrderData = () => {
    const [countOfAdults, setCountOfAdults] = useState(1);
    const [countOfChildren, setCountOfChildren] = useState(0);
    const [countOfRooms, setCountOfRooms] = useState(1);
    const data = [
        {
            minValue: 1,
            maxValue: 30,
            label: 'Adults',
            count: countOfAdults,
            onChange: setCountOfAdults
        },
        {
            minValue: 0,
            maxValue: 10,
            label: 'Children',
            count: countOfChildren,
            onChange: setCountOfChildren
        },
        {
            minValue: 1,
            maxValue: 30,
            label: 'Rooms',
            count: countOfRooms,
            onChange: setCountOfRooms
        }
    ]
    return (
        {
            data,
            countOfAdults,
            countOfChildren,
            countOfRooms,
        }
    )
}

export default OrderData;