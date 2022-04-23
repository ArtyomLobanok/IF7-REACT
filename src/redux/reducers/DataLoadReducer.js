import {HOTEL_DATA_LOAD} from "../types";

const initialState = {
    hotelData: []
}

const hotelsLoadReducer = (state = initialState, action) => {
    console.log('hotel load Reducer >>', action)

    switch (action.type) {

        case HOTEL_DATA_LOAD:
            const hotelArray = action.data.map(response => {
                return {
                    id: response.id,
                    name: response.name,
                    imageUrl: response.imageUrl,
                    country: response.country,
                    city: response.city,
                }
            })
            return {
                ...state,
                hotelData: hotelArray
            }
        default:
            return state;
    }
}

export default hotelsLoadReducer;
