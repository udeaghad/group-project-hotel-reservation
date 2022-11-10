import React, { useEffect} from 'react';
import { useSelector,useDispatch } from 'react-redux';
import getAllHotelsInfo from '../Redux/HotelAction';
import { useNavigate } from "react-router-dom";
import fetchHotelInfo from '../Redux/FetchDetailsAction';



function HotelList() {

    const user = useSelector(state => state.user)
    const dispatch = useDispatch();
    
    useEffect(()=>{    
      dispatch(getAllHotelsInfo(user.id));  
    },[])
    
    

    const getHotels = useSelector(state => state.hotels)
    

    const navigate = useNavigate();
    
    const handleClick = async (hotel_id) => {   
      try {            
              const response = await fetch(`/api/v1/users/${user.id}/hotels/${hotel_id}`);
              const result = await response.json()              
              dispatch(fetchHotelInfo(result.data))
              navigate('/components/BookReservations')    
      }catch{
      }      
    }
      
    return( 
                <div>         
                <h2>Hotel List</h2>
                <ul>
                    {getHotels.map(hotel=>
                        <li key={hotel.id}>                        
                            <img src={hotel.attributes.image} style={{width:'100px'}}/>
                            <h3>{hotel.attributes.name}</h3>
                            <p>{hotel.attributes.kitchen}</p>
                            <p>{hotel.attributes.livingroom}</p>
                            <p>{hotel.attributes.price}</p>
                            <p>{hotel.attributes.sleeps}</p>
                            <button type="button" onClick={()=>handleClick(hotel.id)}>Booking</button>            
                        </li>
                    )}
                </ul>
                </div>    
        );
  }

  export default HotelList;