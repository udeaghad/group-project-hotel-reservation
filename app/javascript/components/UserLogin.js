import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import createUser from "../Redux/UserAction";
import { useNavigate } from "react-router-dom";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import NavBar from "./Navbar";

const UserLogin = () => {
  const [user, setUser] = useState();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`/api/v1/users/${user}`, {
        method: "GET",
      });
      const result = await response.json();

      if (result.data) {
        dispatch(createUser(result.data));
        navigate("/hotellist");
      } else {
        alert("User not found");
      }
    } catch (error) {
      console.error(error.message);
    }
  };
  return (
    <div className="">
      <div className="bg-main"></div>

      <div className="row main-wrapper">
        <NavBar></NavBar>
        <main className="col-md-6 col-lg-6 offset-md-2 d-flex flex-column justify-content-center">
          <div className="card-group">
            <div className="col-md-12">
              <div
                className="card mx-2 my-2"
                style={{ backgroundColor: "#ffffffe0" }}
              >
                <div className="card-body">
                  <h2>Login</h2>
                  <div className="row">
                    <div className="col-12">
                      <Form onSubmit={handleSubmit}>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                          <Form.Label>Username</Form.Label>
                          <Form.Control
                            type="text"
                            placeholder="Enter username"
                            name="username"
                            onChange={(e) => setUser(e.target.value)}
                          />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                          Submit
                        </Button>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default UserLogin;
