import './Promotion.css'
import {Link} from "react-router-dom";
import {useState} from "react";

const ClosePromotion = () => {
    const [isClose, setIsClose] = useState(true)
    const handleClickClose = () => {
        setIsClose(!isClose)
    }
    return {
        isClose,
        handleClickClose,
    }
}

const Promotion = () => {
    const {isClose, handleClickClose} = ClosePromotion()
    return (
        isClose && (
            <section className="section section__promotion">
                <div className="container">
                    <div className="promotion">
                        <div className="promotionBtnWrapper">
                            <button onClick={handleClickClose} className="promotionClose"/>
                        </div>
                        <div className="promotionWrapper">
                            <div className="promotionIcon">
                                <svg>
                                    <use href="#Group"></use>
                                </svg>
                            </div>
                            <div className="promotionContent">
                                <p>Sign up and get 20% off your first booking</p>
                                <Link className='Link' to={`register`}>
                                    <button>
                                        Sign up
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    )
}
export default Promotion;