import { createAsyncThunk } from "@reduxjs/toolkit"

const GET_HOTEL_DETAILS = "GET_HOTEL_DETAILS"

const getHotelDetails = createAsyncThunk(
  GET_HOTEL_DETAILS,  
  async (id) => {
  const request =new Request(`/api/v1/users/1/hotels/${id}`)
  const response = await fetch(request)
  const result = await response.json()
  return result
})

export { getHotelDetails }