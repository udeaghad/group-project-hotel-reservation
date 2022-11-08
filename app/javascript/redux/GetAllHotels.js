import { createAsyncThunk } from "@reduxjs/toolkit"

const GET_ALL_HOTELS = "GET_ALL_HOTELS"

const getAllHotels = createAsyncThunk(GET_ALL_HOTELS, 
  async () => {
  const request =new Request("/api/v1/users/1/hotels")
  const response = await fetch(request)
  const result = await response.json()
  return result.data
})

export { getAllHotels }