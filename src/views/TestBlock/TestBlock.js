import Counters from "../../counters";
import Text from './Text'
import HotelsCards from "./HotelsCards";

const TestBlock = () => {
    return (
        <div style={{padding: "120px 0", background: 'green', display:'flex', justifyContent: "center", flexDirection: "column"}}>
            <Counters/>
            <Text/>
            <HotelsCards/>
        </div>
    )
}

export default TestBlock;