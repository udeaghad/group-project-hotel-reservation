import React from 'react';
import { useSelector } from 'react-redux';


function ReservedDetails(){ 

  const hotelDetails = useSelector((state) => state.hotelDetails)
  
  const {attributes } = hotelDetails
  
  return (
    <div>
      <h1>Hotel Details</h1>
     
      {attributes && 
      <div>
        <img src={attributes.image} alt={attributes.name} />
       <h2>Name:{attributes.name}</h2> 
       <p>Bedroom:{attributes.bedroom}</p>
       <p>LivingRoom: {attributes.livingroom}</p>
       <p>Kitchen: {attributes.kitchen}</p> 
       <p>Sleeps: {attributes.sleeps}</p>
       <p>Price: {attributes.price}</p>
       </div>
      }
      
        
      </div>
  )
}

export default ReservedDetails;