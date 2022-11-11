import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import NavBar from "../components/Navbar";
import { useSelector } from "react-redux";
import getHotelDetails from "../Redux/DetailsAction";


const ReservationList = () => {
  const user = useSelector((state) => state.user);
  const user_id = user.id;
  const [reservations, setReservations] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/v1/users/${user.id}/reservations/`);
        const json = await response.json();
        setReservations(json.data);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  let navigate = useNavigate();
  const dispatch = useDispatch();


  const routeDetails = (e) => {
    let pathDetails = `/Reserve/ReservedDetails`;
    navigate(pathDetails);
    dispatch(getHotelDetails({ user_id: user_id, hotel_id: e.target.id }));
  };

 
  const handleDelete = async(reserve_id, hotel_id) => {
  
   try {
     await fetch(`api/v1/users/${user.id}/hotels/${hotel_id}/reservations/${reserve_id}`, {
      method: 'DELETE'
    }) 
    
    const newReservations = reservations.filter(reserve => reserve_id !== reserve.id)
    setReservations(newReservations)
    
   } catch (error) {
    console.error(error.message)
   }
  
  }


  return (
    <div className="">
      <div className="bg-main"></div>

      <div className="row main-wrapper">
        <NavBar></NavBar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>Reservation List</h2>
          <div class="card-group">
            {reservations.map((reserve) => (
              <div class="col-md-3">
                <div class="card mx-2 my-2">
                  <div class="card-body">
                    <ul>

                      <li key={reserve.id}>
                        <span>City: </span>
                        <p>{reserve.attributes.city}</p>
                        <span>Date: </span>
                        <p>{reserve.attributes.date}</p>
                        <span>Price: </span>
                        <p>{reserve.attributes.price}</p>
                        <span>Hotel name: </span>
                        <p>{reserve.attributes.hotel_name}</p>
                        <button
                          id={reserve.attributes.hotel_id}
                          className={reserve.id + " btn btn-primary"}
                          type="button"
                          onClick={(e) => routeDetails(e)}
                        >
                          Details
                        </button>
                        <button
                          className={reserve.id + " btn btn-danger"}
                          type="button"
                          onClick={() =>
                            handleDelete(
                              reserve.id,
                              reserve.attributes.hotel_id
                            )
                          }
                        >
                          Delete
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );

}

export default ReservationList;
