import {useParams} from "react-router-dom";
import {useEffect, useState,} from "react";
import {urlHotels} from "../../configs/urlConfig"

const HotelPageFetch = () => {
    const {id} = useParams()
    const dataFetch = `${urlHotels}${id}`;
    const [data, setData] = useState({
        country: undefined,
        imageUrl: undefined,
        city: undefined
    })
    useEffect(() => {
            window.scrollTo(0, 0)
            fetch(dataFetch)
                .then(res => res.json())
                .then(data => setData(data))
        },
        [dataFetch])
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