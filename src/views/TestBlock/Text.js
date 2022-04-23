
import {useDispatch, useSelector} from "react-redux";
import {inputText} from "../../redux/actions";


const Text = (props) => {

    const randomText = useSelector(state => {
        const { inputReducer } = state;
        return inputReducer.text;
    });

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(inputText(e.target.value))
    }

    return (
        <>
            <input type="text" onChange={handleChange}
                   style={{width: "250px", padding: '20px', margin: "0 auto", fontSize: "30px"}}
            />
            <p style={{padding: '20px', margin: "0 auto", fontSize: "30px", color: "#000"}}
            >_{randomText}_</p>
            <div>

            </div>
        </>
    )
}
export default Text;
