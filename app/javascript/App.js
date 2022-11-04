import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/about';
import HotelList from './pages/HotelList';
import ReservationList from './pages/ReservationList';

  
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='*' element={<Home />} />
        <Route path='/hotellist' element={<HotelList />} />  
        <Route path='/reservationlist' element={<ReservationList />} />  
        <Route path='/about' element={<About />} />        
      </Routes>
    </Router>
  );
}
  
export default App;