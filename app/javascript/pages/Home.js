import React from "react";
import getAllHotels from "../Redux/HomePageAction";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import NavBar from "../components/Navbar";

const Home = () => {
  const hotels = useSelector((state) => state.allHotels);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllHotels());
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="">
      <div className="bg-main"></div>

      <div className="row main-wrapper">
        <NavBar></NavBar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-column justify-content-center align-items-center">
          <h2>Home Page</h2>
          <div class="card-group">
            {hotels.map((hotel) => (
              <div class="col-md-3">
                <div class="card mx-2 my-2">
                  <div class="card-body d-flex flex-column justify-content-center ">
                    <p style={{ fontWeight: "bolder" }}>
                      {hotel.attributes.name}
                    </p>
                    <img
                      src={hotel.attributes.image}
                      alt={hotel.attributes.name}
                      height="200"
                    />
                    <p>{hotel.attributes.bedroom}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
