import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import createUser from '../Redux/UserAction';
import { useNavigate } from 'react-router-dom';

const UserLogin = () => {

  const [user, setUser] = useState()

  const dispatch = useDispatch()

const navigate = useNavigate()

const handleSubmit = async(e) => { 
  e.preventDefault()
 
  try {
    const response = await fetch(`/api/v1/users/${user}`, {
      method: 'GET'
    })
    const result = await response.json()
    

    if (result.data) {
      dispatch(createUser(result.data))
      navigate('/hotellist')
    } else {
      alert('User not found')
    }
    
  } catch (error) {
    console.error(error.message)
  } 
  
 
}
  return (
    <div>
      <h1>User Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
          onChange={e => setUser(e.target.value)}
           type="text" name="username" />
        </label>
        <button type="submit">Submit</button>

        </form>
    </div>
  );
};

export default UserLogin;