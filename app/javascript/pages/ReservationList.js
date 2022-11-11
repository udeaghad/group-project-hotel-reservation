import React, { useEffect, useState } from "react";
import ReservedDetails from "./Reserve/ReservedDetails";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import DetailsAction from "../Redux/DetailsAction";
import NavBar from "../components/Navbar";

const url = "/api/v1/users/1/reservations/";
// const url1 = '/api/v1/users/1/hotels/1/reservations'

function ReservationList() {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setReservations(json.data);
        console.log(json.included);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const routeDetails = (e) => {
    console.log(e.target.id);
    let pathDetails = `/Reserve/ReservedDetails`;
    navigate(pathDetails);
    dispatch(DetailsAction(e.target.id));
  };

  const handleDelete = async (reserve_id, hotel_id) => {
    //  const reserve_id = e.target.className
    console.log(reserve_id, hotel_id);

    try {
      const deleteReservation = await fetch(
        `api/v1/users/1/hotels/${hotel_id}/reservations/${reserve_id}`,
        {
          method: "DELETE",
        }
      );
      console.log(deleteReservation);
      const newReservations = reservations.filter(
        (reserve) => reserve_id !== reserve.id
      );
      setReservations(newReservations);
    } catch (error) {
      console.error(error.message);
    }
  };

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
                      <span>Hotel Id: </span>
                      <p>{reserve.attributes.hotel_id}</p>
                      <button
                        id={reserve.id}
                        className={reserve.id + ' btn btn-primary'} 
                        type="button"
                        onClick={(e) => routeDetails(e)}
                      >
                        Details
                      </button>
                      <button
                        className={reserve.id + ' btn btn-danger'} 
                        type="button"
                        onClick={() =>
                          handleDelete(reserve.id, reserve.attributes.hotel_id)
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
