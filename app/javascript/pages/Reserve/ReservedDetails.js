import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import NavBar from "../../components/Navbar";

function ReservedDetails() {
  const hotelDetails = useSelector((state) => state.hotelDetails);
  console.log(hotelDetails);
  const { id, attributes } = hotelDetails;
  // console.log(attributes)
  return (
    <div className="">
      <div className="bg-main"></div>

      <div className="row main-wrapper">
        <NavBar></NavBar>
        <main className="col-md-9 ms-sm-auto col-lg-10 px-md-4">
          <h2>Hotel Details</h2>
          <div className="card-group">
            <div className="col-md-12">
              <div className="card mx-2 my-2" style={{backgroundColor: "#ffffffe0"}}>
                <div className="card-body">
                  {attributes && (
                    <div className="row">
                      <div className="col-6">
                        <img
                          src={attributes.image}
                          alt={attributes.name}
                          style={{ width: "100%" }}
                        />
                      </div>
                      <div className="col-6">
                        <ul className="list-group">
                          <li className="list-group-item">
                            <span><b>Hotel Name: </b></span>
                            <p>{attributes.name}</p>
                          </li>
                          <li className="list-group-item">
                            <span><b>Bedroom: </b></span>
                            <p>{attributes.bedroom}</p>
                          </li>
                          <li className="list-group-item">
                            <span><b>LivingRoom: </b></span>
                            <p>{attributes.livingroom}</p>
                          </li>
                          <li className="list-group-item">
                            <span><b>Kitchen: </b></span>
                            <p>{attributes.kitchen}</p>
                          </li>
                          <li className="list-group-item">
                            <span><b>Sleeps: </b></span>
                            <p>{attributes.sleeps}</p>
                          </li>
                          <li className="list-group-item">
                            <span><b>Price: </b></span>
                            <p>{attributes.price}</p>
                          </li>
                        </ul>
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
}

export default ReservedDetails;
