import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';


function ReservedDetails(){ 

  const hotelDetails = useSelector(state => state.hotelDetails)
  console.log(hotelDetails)
  // const {id, attributes } = hotelDetails
  // console.log(attributes)
  return (
    <div>
      <h1>Hotel Details</h1>
     
      {attributes &&
       <h2>{attributes.name}</h2> 
      }
      
        
      </div>
  )
}

export default ReservedDetails;