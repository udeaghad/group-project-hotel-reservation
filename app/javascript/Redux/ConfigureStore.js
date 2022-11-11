import { combineReducers, configureStore } from "@reduxjs/toolkit"
import getDetailsReducer from "./hotelDetailsReducer"
import HomePageReducer from "./HomePageReducer"
import getAllHotelsInfoReducer from "./HotelReducer"
import fetchHotelDetails from "./FetchDetailsReducer"
import user from "./UserReducer"

const rootReducer = combineReducers({
    hotelDetails: getDetailsReducer,
    allHotels:HomePageReducer,
    hotels: getAllHotelsInfoReducer,
    user: user,
    fetchHotel: fetchHotelDetails,
})

const store = configureStore({
    reducer: rootReducer
})

export default store;