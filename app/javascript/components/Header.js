import React from 'react';
import { Link } from 'react-router-dom';


function Header() {
  return (
    <div className="header-container">
      <h1>Hotel Reservation</h1>
      <div>
        <ul className="header-list">
          <li className="header-link"><Link to="/">Home</Link></li>
          <li className="header-link"><Link to="/hotellist">Hotel List</Link></li>
          <li className="header-link"><Link to="/reservationlist">Reservation List</Link></li>
          <li className="header-link"><Link to="/about">About</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Header;