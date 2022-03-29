import React, {useState} from "react";
import "./Footer.css"

const Footer = () => {

    const defaultValueAdults = Number(1);
    const defaultValueChildren = Number(0);
    const defaultValueRoom = Number(0);

    const minValueAdults = defaultValueAdults;
    const minValueChildren = defaultValueChildren;
    const minValueRoom = defaultValueRoom;

    const maxValueAdults = Number(30);
    const maxValueChildren = Number(10);
    const maxValueRoom = Number(30);


    const [counterAdults, setCounterAdults] = useState(defaultValueAdults);
    const [counterChildren, setCounterChildren] = useState(defaultValueChildren);
    const [counterRoom, setCounterRoom] = useState(defaultValueRoom);

//Adults
    function decrementAdults() {
        if (counterAdults === minValueAdults) {
            return counterAdults
        }
        setCounterAdults(prevCount => prevCount - 1)
    }

    function incrementAdults() {
        if (counterAdults === maxValueAdults) {
            return counterAdults
        }
        setCounterAdults(prevCount => prevCount + 1)
    }

//Children
    function decrementChildren() {
        if (counterChildren === minValueChildren) {
            return counterChildren
        }
        setCounterChildren(prevCount => prevCount - 1)
    }

    function incrementChildren() {
        if (counterChildren === maxValueChildren) {
            return counterChildren
        }
        setCounterChildren(prevCount => prevCount + 1)
    }

//Rooms
    function decrementRoom() {
        if (counterRoom === minValueRoom) {
            return counterRoom
        }
        setCounterRoom(prevCount => prevCount - 1)
    }

    function incrementRoom() {
        if (counterRoom === maxValueRoom) {
            return counterRoom
        }
        setCounterRoom(prevCount => prevCount + 1)
    }

    return (
        <>
            <div className="containerAll">
                <div className='container1'>
                    <div className='box'>
                        <button onClick={decrementAdults}>Minus</button>
                        <p>Взрослые: {counterAdults}</p>
                        <button onClick={incrementAdults}>Plus</button>
                    </div>
                    <div className='box'>
                        <button onClick={decrementChildren}>Minus</button>
                        <p>Дети: {counterChildren}</p>
                        <button onClick={incrementChildren}>Plus</button>
                    </div>
                    <div className='box'>
                        <button onClick={decrementRoom}>Minus</button>
                        <p>Комнаты: {counterRoom}</p>
                        <button onClick={incrementRoom}>Plus</button>
                    </div>
                </div>
                <div className="container2">
                    <div>counterA: {counterAdults}</div>
                    <div>counterB: {counterChildren}</div>
                    <div>counterC: {counterRoom}</div>
                </div>
            </div>
        </>
    )
        ;
};
export default Footer;