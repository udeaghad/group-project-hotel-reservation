import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import createUser from "../Redux/UserAction";

const NavBar = () => {
  const user = useSelector((state) => state.user);

  const { attributes } = user;

  const dispatch = useDispatch();

  const handleSignOut = () => {
    dispatch(createUser({}));
  };

  // const showSidebar = document.querySelector('.sidebar').attr('class', 'show-sidebar');
  // let hamburger = document.querySelector('.hamburger');

  // onclick humburger, show sidebar
  // hamburger.addEventListener('click', showSidebar);
  return (
    <>
      <div id="sidebar" class="sidebar">
        {attributes ? (
          <div className="d-sm-flex">
            <a>Welcome {attributes.username}</a>
            <Link to="/" onClick={handleSignOut}>
              Logout
            </Link>
          </div>
        ) : (
          <div className="d-sm-flex">
            <Link to="/createuser">Create New Account</Link>
            <Link to="/userlogin">Login</Link>
          </div>
        )}
        <div className="d-sm-flex">
          <Link to="/">Home</Link>
          <Link to="/hotellist">Hotels</Link>
          <Link to="/reservationlist">Reservations</Link>
        </div>
      </div>
    </>
  );
};

export default NavBar;
