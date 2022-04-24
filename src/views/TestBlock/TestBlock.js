import Counters from "../../counters";

import HotelsCards from "./HotelsCards";

const TestBlock = () => {
    return (
        <div style={{padding: "120px 0", background: 'green', display:'flex', justifyContent: "center", flexDirection: "column"}}>
            <Counters/>
            <HotelsCards/>
        </div>
    )
}

export default TestBlock;