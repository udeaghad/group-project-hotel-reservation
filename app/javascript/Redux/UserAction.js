const CREATE_USER = 'CREATE_USER';

const createUser = (payload) => ({
  type: CREATE_USER,
  payload,
});

export default createUser;