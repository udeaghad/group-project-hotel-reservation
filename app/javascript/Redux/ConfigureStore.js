import { combineReducers, configureStore } from "@reduxjs/toolkit"
import getDetailsReducer from "./hotelDetailsReducer"
import getAllHotelsReducer from "./HomePageReducer"
import user from "./UserReducer"

const rootReducer = combineReducers({
    hotelDetails: getDetailsReducer,
    allHotels: getAllHotelsReducer,
    user: user
})

const store = configureStore({
    reducer: rootReducer
})

export default store;