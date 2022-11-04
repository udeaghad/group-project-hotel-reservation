import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';
import styles from './Reserve.module.css';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ReservationRooms = ({ 
  date,
  rooms,
  city,
  setRooms}) => {
  const [room, setRoom] = useState(rooms[0]);
  const [reserved, setReserved] = useState(false);
  const user = useSelector((state) => state.user);

  const reserveRoom = (e) => {
    e.preventDefault();

    axios.post(`/api/v1/reservation/${user.user.id}/${room.id}/${city}/${date}`)
    .then(() => setReserved(true));
  };

  if (reserved) {
    return <Navigate replace to="/reservations" />;
  }


  return (
    <div
      className={`${styles.cnt} container-fluid vh-100 d-flex flex-column align-items-center`}
    >
       <button
        type="button"
        className={`${styles.zindex} ${styles.backBtn} btn text-white fs-1 align-self-start ms-3`}
        onClick={() => setRooms([])}
      >
        <i className="fa-regular fa-circle-left" />
      </button>

      <h2 className={`${styles.zindex} fs-1 text-white`}>Reserve a Room</h2>
      <p className={`${styles.zindex} fs-5 text-white`}>
      Reserve your dream room in our Hotel!🙂
      </p>
      <hr className={styles.hr} />
      <p className={`${styles.zindex} mb-5 fs-5 text-white`}>
        Choose one of our beautiful rooms!
      </p>
      <form
        onSubmit={reserveRoom}
        className={`${styles.zindex} d-flex justify-content-around mb-5 align-items-baseline`}
      >
        <select
          className={`${styles.input} form-select`}
          onChange={(e) => setRoom(rooms[e.target.value])}
        >
          {rooms.map((room, index) => (
            <option defaultValue key={room.id} value={index}>
              {car.model}
            </option>
          ))}
        </select>
        <button type="submit" className={`${styles.btn} btn px-4 ms-4`}>
          Reserve
        </button>
      </form>

      <div className={`${styles.zindex} ${styles.roomCard} d-flex`}>
        <img src={room.picture} alt="car" className={styles.roomImg} />
        <div className={styles.roomInfo}>
          <h3 className="fs-2 fs-sm-3 mb-2">
            <span>Model: </span>
            {room.model}
          </h3>
          <h4 className="fs-5">
            <span>Driver&apos;s name: </span>
            {car.driver_name}
          </h4>
        </div>
      </div>
    </div>
  );
};

ReservationRooms.propTypes = {
  rooms: PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.object])).isRequired,
  date: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default ReservationRooms;