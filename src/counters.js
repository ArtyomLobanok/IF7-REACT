import { connect } from "react-redux";
import { incrementAdults, decrementAdults } from "./redux/actions";

const Counters = (props) => {
    return (
        <div
            style={{display: "flex", justifyContent: "center", padding: '20px', fontSize:"30px"}}
            className='button-controls'>
            <button onClick={props.onDecrementAdults} className='decrementAdults'
                    style={{color: "red", padding: '20px', fontSize:"30px"}}
            >-</button>
            <p
                style={{color: "red", padding: '20px', fontSize:"30px"}}>
                {props.adults}
            </p>
            <button onClick={props.onIncrementAdults}
                    className='incrementAdults'
                    style={{color: "red", padding: '20px', fontSize:"30px"}}
            >+</button>
        </div>
    )
}

function mapStateToProps(state) {
    const {formReducer} = state;
    return {
        countAdults: formReducer.adults
    }
}

function mapDispatchToProps(dispatch) {
    return {
        onIncrementAdults: () => {
            return dispatch(incrementAdults());
        },
        onDecrementAdults: () => {
            return dispatch(decrementAdults());
        },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counters);