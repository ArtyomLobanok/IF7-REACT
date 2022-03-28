import React from "react";
import {useState} from "react";

export const useForm = () => {
    const [values, setValues] = useState({
        nameOfSearch: '',
    });

    const handleChange = (e) => {
        const {name: inputName} = e.target;


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