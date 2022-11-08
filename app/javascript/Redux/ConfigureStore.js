import { combineReducers, configureStore } from "@reduxjs/toolkit"
import getDetailsReducer from "./hotelDetailsReducer"

const rootReducer = combineReducers({
    hotelDetails: getDetailsReducer
})

const store = configureStore({
    reducer: rootReducer
})

export default store;