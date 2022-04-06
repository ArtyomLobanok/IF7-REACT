import React from "react";
import HeaderMenu from "../../components/HeaderMenu/HeaderMenu"
import {useNavigate} from "react-router-dom";

const AnalyticTracker = (props) => {
    const navigate = useNavigate();
    const handleClickItem = (e) => {

        navigate(`../${e.target.id}`);
        console.log(12);
    }
    return (
        {
            handleClickItem
        }
    )
}


const HotelPage = ({array}) => {
    const {handleClickItem} = AnalyticTracker()
    return (
    <>
        <HeaderMenu/>
        <div>
            {array.map((item) => (
                <div id={item.id} onClick={handleClickItem}>
                    <img/>
                    <p/>
                </div>
            ))}
        </div>
    </>
    )
}

export default HotelPage;