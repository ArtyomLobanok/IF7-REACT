import React from "react";
import Counter from "./countsOrder/counterOrders"
import "./Footer.css"

import OrderData from "./dataOrder/dataOrder"
import Select from "./childrenSelects/childrenSelect";



const Footer = () => {
const {data,countOfSelect} = OrderData()
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
                </div>
            </div>
                <div className="selects">
                    {
                        data.children.count > 0 && <span>What is the age of the child you’re<br/> travelling with?</span>
                    }
                    <div>
                        {countOfSelect.map((item, i) => ( <Select/> ))}
                    </div>
                </div>

            </>
    );
};

export default Footer;