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

  return (
    <div className="">
      <div className="bg-main"></div>

      <div className="row main-wrapper">
        <NavBar></NavBar>
        <main class="col-md-9 ms-sm-auto col-lg-10 px-md-4 d-flex flex-column justify-content-center align-items-center">
          <h2>Home Page</h2>
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
            rewind={false}
            rewindWithAnimation={false}
            rtl={false}
            shouldResetAutoplay
            showDots={false}
            sliderClass=""
            slidesToSlide={1}
            swipeable
          >
            {hotels.map((hotel) => (
              <div key={hotel.id} class="hotel-card">
                <p style={{ fontWeight: "bolder" }}>{hotel.attributes.name}</p>
                <img
                  src={hotel.attributes.image}
                  alt={hotel.attributes.name}
                  height="250"
                />
                <p>{hotel.attributes.bedroom}</p>
              </div>
            ))}
          </Carousel>
        </main>
      </div>
    </div>
  );
};

export default Home;
