import {useEffect, useState} from "react";

const useFetch = () => {
    const url = "https://fe-student-api.herokuapp.com/api/hotels/popular";
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [array, setArray] = useState([]);
    useEffect(() => {
        const getData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const result = await response.json();

                setArray(result);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        getData();
    }, [url])

    return {
        error,
        loading,
        array,
    };
};

export default useFetch;