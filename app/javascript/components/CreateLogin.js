import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import createUser from '../Redux/UserAction';
import { useNavigate } from 'react-router-dom';


const CreateUser = () => {
  const [user, setUser] = useState()

  const dispatch = useDispatch()

const navigate = useNavigate()
const handleSubmit = async(e) => { 
  e.preventDefault()
 
  try {
    const response = await fetch('/api/v1/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({username: user})
    })
    const result = await response.json()
    console.log(result.data)
    dispatch(createUser(result.data))
  } catch (error) {
    console.error(error.message)
  } 
  
  navigate('/hotellist')
}


  return (
    <div>
      <h1>Create User</h1>
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
}

export default CreateUser;