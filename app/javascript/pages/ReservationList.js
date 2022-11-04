import React, { useEffect, useState} from 'react';


const url = '/api/v1/users/1/reservations'

function ReservationList() {

    const [reservations, setReservations] = useState([])

    useEffect(() => {        
        const fetchData = async () => {
          try {
            const response = await fetch(url);
            const json = await response.json();             
            setReservations(json.data);   

            console.log(json.included)         
          } catch (error) {
            console.log("error", error);
          }
        };
    
        fetchData();
    }, []);


    return(
            <div>
                <h1>Reservation List</h1>
                {reservations.map(reserve => 
                    <ul>
                        <li key={reserve.id}>
                            <span>City: </span><p>{reserve.attributes.city}</p>
                            <span>Date: </span><p>{reserve.attributes.date}</p>
                            <span>Hotel Id: </span><p>{reserve.attributes.hotel_id}</p>
                        </li>
                    </ul>                    
                    )}
            </div> 
        )
    
    
}
  

export default ReservationList;