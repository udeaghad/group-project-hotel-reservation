import React from "react";
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav
      id="sidebarMenu"
      class="col-md-3 col-lg-2 d-md-block sidebar collapse"
    >
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/hotellist">Hotels</Link>
          </li>
          <li class="nav-item">
            <Link to="/reservationlist">Reservations</Link>
          </li>
          <li class="nav-item">
            <Link to="/sahar/sahar">Sahar</Link>
          </li>
          <li class="nav-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
