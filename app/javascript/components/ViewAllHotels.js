import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import { getAllHotels } from "../redux/GetAllHotels";

const ViewAllHotels = () => {
  const allHotels = useSelector(state => state.getAllHotels)
  const dispatch = useDispatch()
  
  useEffect(() => {    
  dispatch(getAllHotels())
  }, [dispatch])

  console.log(allHotels)
  return (
    <div>
      <h1>View All Hotels</h1>

      {allHotels.map((hotel) => (
        <div key={hotel.id}>
          <h2>{hotel.attributes.name}</h2>
          <p>{hotel.attributes.image}</p>
          <p>${hotel.attributes.price}</p>
          <button
          id={hotel.id}
          onClick={() => {handleClick(hotel.id)}}
          >View Details</button>
        </div>
      ))}
    </div>
  );
};

export default ViewAllHotels;