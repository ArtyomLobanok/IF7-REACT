import React, {useState, useEffect} from "react";
import {FaAngleUp} from "react-icons/fa";
import {ScrollBtn} from "../Styled-components/ScrollToTop";


const ScrollToTop = () => {
    const [showTopBtn, setShowTopBtn] = useState(false);
    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 400) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);
    return (
        <div>
            {" "}
            {showTopBtn && (
                <ScrollBtn>
                    <FaAngleUp
                        onClick={handleScrollToTop}
                    />
                </ScrollBtn>
            )}{" "}
        </div>
    );
};
export default ScrollToTop;