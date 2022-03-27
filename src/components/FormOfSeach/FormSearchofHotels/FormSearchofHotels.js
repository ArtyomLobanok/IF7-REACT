import React, {useState} from "react";
import useFeatch from "../../../hooks/useFetch";
import {url} from "../../../api/endPoints";
import HotelCard from "../../HotelCard/HotelCard";

const useForm = () => {
    const [values, setValues] = useState({
        nameOfSearch: '',
    });

    const handleChange = (e) => {
        const {name: inputName} = e.target;
        console.log(e.target.value);

        setValues({
            ...values,
            [inputName]: e.target.value,
        });
    }

    return {
        values,
        handleChange,
    }
}

function TestForm() {
    const {values, handleChange} = useForm();

    const {array} = useFeatch(values.nameOfSearch && url.searchUrl(values.nameOfSearch));
    console.log(values.nameOfSearch)

    return (
        <>
            <form>
                <h2>test form</h2>
                <label>
                    Enter your value
                    <input
                        name='nameOfSearch'
                        value={values.name}
                        onChange={handleChange}
                        placeholder='Your destination or hotel name'
                    />
                </label>
            </form>
            <div className='overviews__slider'>
                {array.map(hotelCard => (
                    <HotelCard key={hotelCard.id} card={hotelCard}/>
                ))}
            </div>
        </>
    )
}


export default TestForm;