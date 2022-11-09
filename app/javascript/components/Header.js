import React from 'react';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'



function Header() {

  const user = useSelector((state) => state.user)
  const {attributes} = user

  return (
    <div className="header-container">
      <h1>Hotel Reservation</h1>
      <div>
        <ul className="header-list">
          <li className="header-link"><Link to="/">Home</Link></li>
          <li className="header-link"><Link to="/hotellist">Hotel List</Link></li>
          <li className="header-link"><Link to="/reservationlist">Reservation List</Link></li>
          <li className="header-link"><Link to="/sahar/sahar">Sahar</Link></li>
          <li className="header-link"><Link to="/about">About</Link></li>
          <li className="header-link"><Link to="/createuser">Create User</Link></li>
          {attributes && <li className="header-link">Welcome {attributes.username}</li>}
          
        </ul>
      </div>
    </div>
  );
}

export default Header;