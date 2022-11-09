import React, { useEffect, useState} from 'react';
import { useSelector } from 'react-redux';


const url = '/api/v1/hotels'

function HotelList() {

    const [hotels, setHotels] = useState([])

    const user = useSelector(state => state.user)

    useEffect(() => {        
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();             
            setHotels(json.data);            
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);
    
    
    function book(id){
        const addReserveURL = `/api/v1/users/${user.id}/hotels/${id}/reservations`;

        fetch(addReserveURL, {
            method: "POST",
            headers: {'Content-Type': 'application/json'}, 
            body: JSON.stringify({
                "city":"Irbid",
                "date":"2022-10-26"
            })
          }).then(res => {
            console.log("Request complete! response:", res);
          });
      }

      
    return (
        <div>         
            <h2>Hotel List</h2>
            <ul>
                {hotels.map(hotel=>
                    <li key={hotel.id}>                        
                        <img src={hotel.attributes.image} style={{width:'100px'}}/>
                        <h3>{hotel.attributes.name}</h3>
                        <p>{hotel.attributes.kitchen}</p>
                        <p>{hotel.attributes.livingroom}</p>
                        <p>{hotel.attributes.price}</p>
                        <p>{hotel.attributes.sleeps}</p>
                        <button type="button" onClick={()=>book(hotel.id)}>Booking</button>            
                    </li>
                )}
            </ul>
        </div>);
  }


  export default HotelList;