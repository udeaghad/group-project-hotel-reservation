import { combineReducers, configureStore } from "@reduxjs/toolkit"
import getDetailsReducer from "./hotelDetailsReducer"
import getAllHotelsReducer from "./HomePageReducer"

const rootReducer = combineReducers({
    hotelDetails: getDetailsReducer,
    allHotels: getAllHotelsReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;