import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "./Navbar";

const BookReservations = () => {
  const hotel = useSelector((state) => state.fetchHotel);
  const user = useSelector((state) => state.user);

  const [date, setDate] = useState();
  const [city, setCity] = useState();

  const navigate = useNavigate();

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(
        `/api/v1/users/${user.id}/hotels/${hotel.id}/reservations`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ date: date, city: city }),
        }
      );
      const result = await response.json();

      navigate("/reservationlist");
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="">
      <div className="bg-main"></div>

      <div className="row main-wrapper">
        <NavBar></NavBar>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>Book Reservation</h2>
          <div className="card-group">
            <div className="col-md-12">
              <div
                className="card mx-2 my-2"
                style={{ backgroundColor: "#ffffffe0" }}
              >
                <div className="card-body">
                  {hotel.attributes && (
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={hotel.attributes.image}
                          alt={hotel.attributes.name}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="col-6">
                        <p className="title">{hotel.attributes.name}</p>
                        <p>{hotel.attributes.price}</p>
                        <p>{hotel.attributes.bedroom}</p>
                       
                        <Form onSubmit={onSubmit}>
                          <Form.Group controlId="formBasicEmail">
                            <Form.Label>Booking date</Form.Label>
                            <Form.Control
                              type="date"
                              placeholder="enter the date"
                              name="date"
                              onChange={(e) => setDate(e.target.value)}
                            />
                          </Form.Group>
                          <Form.Group controlId="formBasicPassword">
                            <Form.Label>City</Form.Label>
                            <Form.Control
                              type="text"
                              placeholder="enter the city"
                              name="city"
                              onChange={(e) => setCity(e.target.value)}
                            />
                          </Form.Group>
                          <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default BookReservations;
