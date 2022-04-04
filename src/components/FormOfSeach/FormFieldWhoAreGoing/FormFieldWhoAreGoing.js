import React from "react";
import "./FormFieldWhoAreGoing.css"
import Counter from "./countsOrder/counterOrders"
import OrderData from "./dataOrder/dataOrder"
import Select from "./childrenSelects/childrenSelect";

const FormFieldThird = () => {
    const {data, countOfSelect} = OrderData()
    return (
        <>
            <div className="wrapper">
                <div className='fieldView'>
                    {
                        `${data.adults.count} Adults
                        —
                        ${data.children.count} Children
                        —
                        ${data.rooms.count} Room`
                    }
                </div>

            <div className="fieldModalForm">
                {
                    Object.keys(data).map(key => <Counter {...data[key]} />)
                }
                {
                    data.children.count > 0 && <span>What is the age of the child you’re<br/> travelling with?</span>
                }
                {
                    countOfSelect.map((item, i) => (<Select/>))
                }
            </div>
            </div>
        </>
    );
};

export default FormFieldThird;