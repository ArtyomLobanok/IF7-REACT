import React from "react";
import Counter from "./countsOrder/counterOrders"
import "./Footer.css"
import Selects from "./childrenSelects/childrenSelect";
import OrderData from "./dataOrder/dataOrder"


const Footer = () => {
const {data} = OrderData()
    return (
            <>
            <div className="containerAll">
                <div className='container1'>
                    {
                        data.map(item => `${item.label}: ${item.count}`)
                    }
                </div>
                <div className="container2">
                    {
                        data.map(item => <Counter {...item} />)
                    }
                </div>
            </div>
                <div className="selects">
            <Selects/>
                </div>
            </>
    );
};

export default Footer;