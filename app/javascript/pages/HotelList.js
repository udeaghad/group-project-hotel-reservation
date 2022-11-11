import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "../components/Navbar";

const url = "/api/v1/users/1/hotels";

function HotelList() {
  const [hotels, setHotels] = useState([]);

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

  function book(id) {
    const addReserveURL = `/api/v1/users/1/hotels/${id}/reservations`;

    fetch(addReserveURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        city: "Irbid",
        date: "2022-10-26",
      }),
    }).then((res) => {
      console.log("Request complete! response:", res);
    });
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
            {hotels.map((hotel) => (
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
                  <button type="button" onClick={() => book(hotel.id)} className="btn btn-primary">
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
