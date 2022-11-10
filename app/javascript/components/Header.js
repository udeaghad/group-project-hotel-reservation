import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import createUser from '../Redux/UserAction';


function Header() {

  const user = useSelector((state) => state.user)
  
  const {attributes} = user

  const dispatch = useDispatch()

  const handleSignOut = () => {    
    dispatch(createUser({}))
  }

  return (
    <div className="header-container">
      <h1>Hotel Reservation</h1>
      <div>
        <ul className="header-list">
          <li className="header-link"><Link to="/">Home</Link></li>
          <li className="header-link"><Link to="/hotellist">Hotel List</Link></li>
          <li className="header-link"><Link to="/reservationlist">Reservation List</Link></li>          
          <li className="header-link"><Link to="/about">About</Link></li>          
          {attributes ? 
          <div>
          <li className="header-link">Welcome {attributes.username}</li>
          <li className="header-link"><Link to="/" onClick={handleSignOut} >Logout</Link></li>
          </div> 
          :
          <div>
          <li className="header-link"><Link to="/createuser">Create New Account</Link></li>
          <li className="header-link"><Link to="/userlogin">Login</Link></li>
          </div>
          }
          
        </ul>
      </div>
    </div>
  );
}

export default Header;