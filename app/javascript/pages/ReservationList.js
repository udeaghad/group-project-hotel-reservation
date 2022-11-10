import React, { useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import {useDispatch } from 'react-redux';
import {useSelector} from 'react-redux'
import getHotelDetails from '../Redux/DetailsAction'


const url = '/api/v1/users/1/reservations/'
// const url1 = '/api/v1/users/1/hotels/1/reservations'

function ReservationList() {

  const user = useSelector(state => state.user)
  const user_id = user.id
    const [reservations, setReservations] = useState([])

    useEffect(() => {        
        const fetchData = async () => {
          try {
            const response = await fetch(`/api/v1/users/${user.id}/reservations/`);
            const json = await response.json(); 

            let newReservation = [];
            
            console.log("Data "+json.data.length);
            console.log("included "+json.included.length);

            // for(let i =0 ; i < json.data.length ; i++){   
              
            //   const hotelId = json.data[i].attributes.hotel_id;

            //   const hotelName = json.included.filter(item => hotelId == item.id )
            //   const hotelPrice = json.included.filter(item => hotelId == item.id )

            //   newReservation.push({
            //     id:json.data[i].id,
            //     hotel_id:json.data[i].attributes.hotel_id,
            //     date:json.data[i].attributes.date,
            //     city:json.data[i].attributes.city,
                
            //     name: hotelName,
            //     price: hotelPrice

            //     })
            // }
            setReservations(newReservation); 
            
            console.log(newReservation);

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
    const deleteReservation = await fetch(`api/v1/users/${user.id}/hotels/${hotel_id}/reservations/${reserve_id}`, {
      method: 'DELETE'
    }) 
    console.log(deleteReservation)
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
                              <span>City: </span><span>{reserve.city}</span>
                            </div>
                            <div>
                              <span>Date: </span><span>{reserve.date}</span>
                            </div>
                            <div>
                              <span>Price: </span><span>{reserve.price}</span>
                            </div>
                            <div>
                              <span>name: </span><span>{reserve.name}</span>
                            </div>
                            <div>
                              <button id={reserve.id} type='button' onClick={(e) => routeDetails(e)}>Details</button>
                              <button className={reserve.id}  type='button' onClick={() => handleDelete(reserve.id, reserve.hotel_id )}>Delete</button>
                            </div>                            
                        </li>
                    </ul>                    
                    )}
                    
            </div>  
            )
    
    
}
  

export default ReservationList;