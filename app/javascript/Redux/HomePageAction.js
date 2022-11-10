import { createAsyncThunk } from "@reduxjs/toolkit";

const GET_HOTEL_INFO= "GET_HOTEL_INFO"

const getAllHotels = createAsyncThunk(
    GET_HOTEL_INFO,
    async () => {
        // const request = new Request(`/api/v1/users/1/hotels/${id}`)
        const response = await fetch(`/api/v1/hotels`);
        const result = await response.json()
        
        return result.data
    }
)

export default getAllHotels