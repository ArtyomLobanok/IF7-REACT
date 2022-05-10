import {useEffect, useState} from "react";
import {urlPopularHotels} from "../configs/urlConfig";

const useFetch = () => {
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [array, setArray] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch(urlPopularHotels);
                const result = await response.json();

                setArray(result);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        getData();
    }, [])

    return {
        error,
        loading,
        array,
    };
};

export default useFetch;