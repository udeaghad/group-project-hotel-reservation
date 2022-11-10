import { combineReducers, configureStore } from "@reduxjs/toolkit"
import getDetailsReducer from "./hotelDetailsReducer"
import getAllHotelsReducer from "./HomePageReducer"
import getAllHotelsInfoReducer from "./HotelReducer"
import fetchHotelDetails from "./FetchDetailsReducer"

import user from "./UserReducer"

const rootReducer = combineReducers({
    hotelDetails: getDetailsReducer,
    allHotels: getAllHotelsReducer,
    hotels: getAllHotelsInfoReducer,
    user: user,
    fetchHotel: fetchHotelDetails,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;