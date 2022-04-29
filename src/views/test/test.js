import React from "react";
import {useState} from "react";


const Test = () => {
    const [values, setValues] = useState({
            search: '',
            searchActive: false,
        }
    )

    const activateField = (e) => {
        console.log();
        setValues({
            ...values,
            [`${e.target.name}Active`]: true
        })
    }

    const disableField = (e) => {
        setValues({
            ...values,
            [`${e.target.name}Active`]: false
        })
    }

    const disableFocus = (e) => {
        if (e.target.value === "") {
            disableField(e);
        }
    }

    const handleChange = (e) => {
        if (e.target.value === "") {
            disableField(e);
        } else {
            activateField(e);
        }
        setValues(
            {
                ...values,
                [e.target.name]: e.target.value,
            }
        );
    }

    return (
        <section className="test">
            <div>
                <form>
                    <div className="field-group">
                        <label className={values.searchActive ? "active" : ""}>
                            Name
                        </label>
                        <input
                            autoComplete="off"
                            className="normal"
                            type="text"
                            value={values.name}
                            onFocus={activateField}
                            onBlur={disableFocus}
                            onChange={handleChange}
                            name="search"
                        />
                    </div>
                </form>
            </div>
        </section>
    );
}
export default Test;