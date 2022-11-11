import { createAsyncThunk } from "@reduxjs/toolkit";

const GET_HOTEL_DETAILS = "GET_HOTEL_DETAILS"

const getHotelDetails = createAsyncThunk (
    GET_HOTEL_DETAILS,
    async (params) => {   
              
        const response = await fetch(`/api/v1/users/${params.user_id}/hotels/${params.hotel_id}`);          
        const result = await response.json()         
        return result.data        
    }
)

export default getHotelDetails