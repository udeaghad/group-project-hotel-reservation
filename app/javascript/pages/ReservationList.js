import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import getHotelDetails from '../Redux/DetailsAction'

function ReservationList() {

  const user = useSelector(state => state.user)
  const user_id = user.id
    const [reservations, setReservations] = useState([])

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
const dispatch = useDispatch()
  
const routeDetails = (e) => {
    
    let pathDetails = `/Reserve/ReservedDetails`;
    navigate(pathDetails);
     dispatch(getHotelDetails({user_id:user_id, hotel_id: e.target.id}))
  }

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


    return(
       <div>
                <h1>Reservation List</h1>                
                {reservations.map(reserve => 
                    <ul>
                        <li key={reserve.id}>
                            <div>
                              <span>City: </span><span>{reserve.attributes.city}</span>
                            </div>
                            <div>
                              <span>Date: </span><span>{reserve.attributes.date}</span>
                            </div>
                            <div>
                              <span>Price: </span><span>{reserve.attributes.price}</span>
                            </div>
                            <div>
                              <span>name: </span><span>{reserve.attributes.hotel_name}</span>
                            </div>
                            <div>
                              <button id={reserve.attributes.hotel_id} type='button' onClick={(e) => routeDetails(e)}>Details</button>
                              <button className={reserve.id}  type='button' onClick={() => handleDelete(reserve.id, reserve.attributes.hotel_id )}>Delete</button>
                            </div>                            
                        </li>
                    </ul>                    
                    )}
                    
            </div>  
            )
    
    
}
  

export default ReservationList;