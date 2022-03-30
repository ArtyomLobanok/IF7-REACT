import {useState} from "react";

const OrderData = () => {
    const [countOfAdults, setCountOfAdults] = useState(1);
    const [countOfChildren, setCountOfChildren] = useState([]);//here map select
    const [countOfRooms, setCountOfRooms] = useState(1);
    const data = {
        adults: {
            minValue: 1,
            maxValue: 30,
            label: 'Adults',
            count: countOfAdults,
            onIncrement: () => setCountOfAdults(prevState => prevState + 1),
            onDecrement: () => setCountOfAdults(prevState => prevState - 1)
        },
        children: {
            minValue: 0,
            maxValue: 10,
            label: 'Children',
            count: countOfChildren.length,
            onIncrement: function () {
                if (countOfChildren.length < this.maxValue) {
                    setCountOfChildren(prevState => [...prevState, 1])
                }
            },
            onDecrement: function () {
                if (countOfChildren.length > this.minValue) {
                    setCountOfChildren(prevState => prevState.slice(-1))
                }
            }
        },
        rooms: {
            minValue: 1,
            maxValue: 30,
            label: 'Rooms',
            count: countOfRooms,
            onIncrement: () => setCountOfRooms(prevState => prevState + 1),
            onDecrement: () => setCountOfRooms(prevState => prevState - 1)
        }
    }
    return (
        {
            data,
            countOfAdults,
            countOfChildren,
            countOfRooms,
        }
    )
}

// function onDecrement() {
//     if (count === minValue) {
//         return count
//     }
//     onChange(prevCount => prevCount - 1)
// }
//
// function onIncrement() {
//     if (count === maxValue) {
//         return count
//     }
//     onChange(prevCount => prevCount + 1)
//     if (label === 'Children'){
//
//     }
// }

export default OrderData;