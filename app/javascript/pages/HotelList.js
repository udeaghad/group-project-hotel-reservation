import React, { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "../components/Navbar";
import { useSelector,useDispatch } from 'react-redux';
import getAllHotelsInfo from '../Redux/HotelAction';
import { useNavigate } from "react-router-dom";
import fetchHotelInfo from '../Redux/FetchDetailsAction';



const HotelList = () => {
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
    
  return (
    <div className="">
      <div className="bg-main"></div>

      <div className="row main-wrapper">
        <NavBar></NavBar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-column justify-content-center align-items-center">
          <h2>Hotel List</h2>
          <Carousel
            ssr
            partialVisbile
            deviceType={"desktop"}
            itemClass="image-item"
            responsive={{
              desktop: {
                breakpoint: {
                  max: 3000,
                  min: 1024,
                },
                items: 4,
                partialVisibilityGutter: 40,
              },
              mobile: {
                breakpoint: {
                  max: 464,
                  min: 0,
                },
                items: 1,
                partialVisibilityGutter: 30,
              },
              tablet: {
                breakpoint: {
                  max: 1024,
                  min: 464,
                },
                items: 2,
                partialVisibilityGutter: 30,
              },
            }}
          >
            {getHotels.map((hotel) => (
                <li key={hotel.id} className="hotel-card align-items-center">
                  <img
                    src={hotel.attributes.image}
                    style={{ width: "100px" }}
                  />
                  <p>{hotel.attributes.name}</p>
                  <p>{hotel.attributes.kitchen}</p>
                  <p>{hotel.attributes.livingroom}</p>
                  <p>Price: ${hotel.attributes.price}</p>
                  <p>Sleeps: {hotel.attributes.sleeps}</p>
                  <button type="button" onClick={()=>handleClick(hotel.id)} className="btn btn-primary">
                    Booking
                  </button>
                </li>
            ))}
          </Carousel>
        </main>
      </div>
    </div>
  );
}

export default HotelList;