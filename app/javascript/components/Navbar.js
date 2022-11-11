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

  return (
    <nav id="sidebarMenu" class="col-md-3 col-lg-2 d-md-block sidebar collapse">
      <div class="position-sticky pt-3 sidebar-sticky">
        <ul class="nav flex-column">
          {attributes ? (
            <div>
              <li className="nav-item">Welcome {attributes.username}</li>
              <li className="nav-item">
                <Link to="/" onClick={handleSignOut}>
                  Logout
                </Link>
              </li>
            </div>
          ) : (
            <div>
              <li className="nav-item">
                <Link to="/createuser">Create New Account</Link>
              </li>
              <li className="nav-item">
                <Link to="/userlogin">Login</Link>
              </li>
            </div>
          )}
          <li class="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/hotellist">Hotels</Link>
          </li>
          <li class="nav-item">
            <Link to="/reservationlist">Reservations</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
