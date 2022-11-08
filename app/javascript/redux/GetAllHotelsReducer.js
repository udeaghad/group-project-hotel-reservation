const allHotels = []

const getAllHotelsReducer = (state = allHotels, action) => {
  switch (action.type) {
    case 'GET_ALL_HOTELS/fulfilled':
      return action.payload
    default:
      return state
  }
}

export default getAllHotelsReducer;