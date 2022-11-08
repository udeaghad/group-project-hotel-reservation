import { configureStore, combineReducers } from '@reduxjs/toolkit';
import getAllHotelsReducer from './GetAllHotelsReducer';
import getHotelDetailsReducer from './GetHotelDetailsReducer';

const rootReducer = combineReducers({
  getAllHotels: getAllHotelsReducer,
  getHotelDetails: getHotelDetailsReducer
})

const store = configureStore({ 
  reducer: rootReducer
})

export default store;