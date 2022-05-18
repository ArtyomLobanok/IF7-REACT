import {useState} from "react";
import useAuth from "../../../hooks/use-auth";
const Dropdown = () => {
    const {isAuth} = useAuth();
    const [isDropdown, setDropdown] = useState(false);
    const handleClickDropdown = () => {
        if (isAuth) {
        setDropdown(!isDropdown)
    }
    }
    const handleClickAway = () => {
        setDropdown(false)
    }
    return (
        {
            handleClickAway,
            isDropdown,
            handleClickDropdown,
        }
    )
}
export default Dropdown;