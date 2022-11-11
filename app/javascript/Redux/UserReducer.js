const user = (state = {}, action) => {
  switch (action.type) {
    case 'CREATE_USER':
      
      return action.payload;
    default:
      return state;
  }
}

export default user;