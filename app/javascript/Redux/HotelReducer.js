const hotels = [];

const getAllHotelsInfoReducer = (state = hotels, action) => {
    switch(action.type){
        case 'GET_ALL_HOTEL_INFO/fulfilled':
            return action.payload;
        default:
            return state

    }
}

export default getAllHotelsInfoReducer