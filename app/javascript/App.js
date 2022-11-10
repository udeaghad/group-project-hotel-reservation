import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import HotelList from './pages/HotelList';
import ReservationList from './pages/ReservationList';
import ReservedDetails from './pages/Reserve/ReservedDetails';
import CreateUser from './components/CreateLogin';
import UserLogin from './components/UserLogin';
import BookReservations from './components/BookReservations';

  
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/hotellist' element={<HotelList />} />  
        <Route path='/reservationlist' element={<ReservationList />} />          
        <Route path='/Reserve/ReservedDetails' element={<ReservedDetails />} /> 
        <Route path='/components/BookReservations' element={<BookReservations />} />    
        <Route path='/about' element={<About />} /> 
        <Route path='/createuser' element={<CreateUser />} />       
        <Route path='/userlogin' element={<UserLogin />} />
      </Routes>
    </Router>
  );
}
  
export default App;