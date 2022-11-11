import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const BookReservations = () =>{

    const hotel = useSelector(state  => state.fetchHotel)
    const user = useSelector(state  => state.user)

    const [date , setDate] = useState();
    const [city , setCity] = useState();

    const navigate = useNavigate();

    const onSubmit = async(e) => {
        e.preventDefault();        
        
        try {
                await fetch(`/api/v1/users/${user.id}/hotels/${hotel.id}/reservations`, {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({
                    date:date,
                    city:city,
                    hotel_name:hotel.attributes.name,
                    price:hotel.attributes.price,
                  })
                })
                                      
                navigate('/reservationlist');
               
              } catch (error) {
                console.error(error.message)
              } 
    }

    
    
   

    return(
        <div>
            <img src={hotel.attributes.image} />
            <p>{hotel.attributes.name}</p>
            <p>{hotel.attributes.price}</p>
            <p>{hotel.attributes.bedroom}</p>
            <form onSubmit={onSubmit}>
                <input type='date' placeholder="enter the date" name="date" onChange={(e) => setDate(e.target.value)}/>
                <input type='text' placeholder="enter the city" name="city" onChange={(e) => setCity(e.target.value)}/>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}

export default BookReservations;