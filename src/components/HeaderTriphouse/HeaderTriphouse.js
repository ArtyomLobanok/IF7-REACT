import React from "react";
import '../HeaderTriphouse/HeaderTriphouse.css'
import TripHouseLogo from "../Assets/TripHouseLogo/TripHouseLogo";
const HeaderTrip = () => {
    return (
        <div className="HeaderTrip">
            <div className='HeaderWrapper'>
                <TripHouseLogo/>
            </div>
        </div>
    );
}

export default HeaderTrip;