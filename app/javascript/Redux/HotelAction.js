import { createAsyncThunk } from "@reduxjs/toolkit";

const GET_ALL_HOTEL_INFO= "GET_ALL_HOTEL_INFO"

const getAllHotelsInfo = createAsyncThunk(
    GET_ALL_HOTEL_INFO,
    async (user_id) => {
        // const request = new Request(`/api/v1/users/1/hotels/${id}`)
        const response = await fetch(`/api/v1/users/${user_id}/hotels`);
        const result = await response.json()
        
        return result.data
    }
)

export default getAllHotelsInfo