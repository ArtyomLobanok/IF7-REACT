import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";

const HotelPageFetch = () => {
    const {id} = useParams()
    const url = `https://fe-student-api.herokuapp.com/api/hotels/${id}`;
    const [data, setData] = useState({
        country: undefined,
        imageUrl: undefined,
        city: undefined
    })
    useEffect(() => {
            window.scrollTo(0, 0)
            fetch(url)
                .then(res => res.json())
                .then(data => setData(data))
        },
        [url])
    const handleClickLink = (e) => {
        e.preventDefault();
        return false;
    }
    return ({
        data,
        handleClickLink
    })
}

export default HotelPageFetch;