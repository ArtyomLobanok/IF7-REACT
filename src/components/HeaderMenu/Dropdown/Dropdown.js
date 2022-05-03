import {useState} from "react";
const Dropdown = () => {
    const [isDropdown, setDropdown] = useState(false);
    const handleClickDropdown = () => {
        setDropdown(!isDropdown)
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