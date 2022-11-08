const hotelDetails = [];

const getDetailsReducer = (state = hotelDetails, action) => {
    switch(action.type){
        case 'GET_HOTEL_DETAILS/fulfilled':
            return action.payload;
        default:
            return state

    }
}

export default getDetailsReducer