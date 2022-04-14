import {useState} from "react";
const Dropdown = () => {
    const [isDropdown, setDropdown] = useState(false);
    const handleClickDropdown = () => {
        setDropdown(!isDropdown)
    }
    return (
        {
            isDropdown,
            handleClickDropdown,
        }
    )
}
export default Dropdown;