import React from "react";
import Counter from "./countsOrder/counterOrders"
import "./Footer.css"
import { Select } from "./childrenSelects/childrenSelect";
import OrderData from "./dataOrder/dataOrder"



const Footer = () => {
const {data} = OrderData()
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
                    <Select/>
                </div>
            </>
    );
};

export default Footer;