import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import Allrooms from './pages/Allrooms';
import { roomsDummyData } from './assets/assets';
import Roomsdetails from './pages/Roomsdetails';
import Overview from './components/Overview';
import Mybookings from './pages/Mybookings';
import HotelReg from './components/HotelReg';

const App = () => {
  const location = useLocation();
  const isOwnerPath = location.pathname.includes("owner");

  return (
    <div>
      {!isOwnerPath && <Navbar />}
      <HotelReg/>
      <div className="min-h-[70vh]">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/rooms" element={<Allrooms />} />
          <Route path="/rooms/:id" element={<Roomsdetails/>} />
          <Route path="/my-bookings" element={<Mybookings/>} />
        </Routes>
      </div>
      {!isOwnerPath && <Overview />}
    </div>
  );
};

export default App;
