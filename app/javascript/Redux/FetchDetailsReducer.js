const fetchHotelDetails = (state = {}, action) => {
    switch (action.type) {
      case 'FETCH_HOTEL_INFO':
        
        return action.payload;
      default:
        return state;
    }
  }
  
  export default fetchHotelDetails;