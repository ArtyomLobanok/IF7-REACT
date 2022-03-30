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
                        data.adults.count > 1 && <span>Lorem</span>//map select
                    }<Selects/>
                </div>
            </>
    );
};

export default Footer;