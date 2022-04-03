import React from "react";
import "./FormFieldWhoAreGoing.css"
import Counter from "./countsOrder/counterOrders"
import OrderData from "./dataOrder/dataOrder"
import Select from "./childrenSelects/childrenSelect";

const FormFieldThird = () => {
    const {data, countOfSelect} = OrderData()
    return (
        <>
            <div className="containerAll">
                <div className='container1'>
                    {
                        Object.keys(data).map(key => `${data[key].label} ${data[key].count}`)
                    }
                </div>
                <div className="container2">
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