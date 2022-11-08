const allHotels = []

const HomepageReducer = (state = allHotels, action) => {
    switch(action.type) {
        case 'GET_HOTEL_INFO/fulfilled':
        return action.payload
        default:
        return state
    }
    }

export default HomepageReducer;