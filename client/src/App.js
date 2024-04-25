import React, { useState } from 'react';
import { BrowserRouter, } from 'react-router-dom'; 
import { Routes, Route} from 'react-router-dom'
import './App.css';
import Dashboard from './Components/Doctors/Dashboard';
import Login from './Components/Doctors/Login';
import Register from './Components/Doctors/Register';
import About from './Components/Doctors/About';
import Appointment from './Components/Doctors/Appointment';
import Scannerlogin from './Components/Scanner/Scannerlogin';
import Scannerregister from './Components/Scanner/Scannerregister';
import Home from './Components/Scanner/Home';
import Sappointment from './Components/Scanner/Appointment';

function App() {
  const authenticated = JSON.parse(localStorage.getItem('userdata'));

  return (
    <>
      <BrowserRouter>
        <Routes> 
          {authenticated == null ? (
            <>
              <Route path="/" element={<Login />} />
              <Route path="/register" element={<Register />} />
              {/* <Route path="/slogin" element={<Scannerlogin />} /> */}
              <Route path="/sregister" element={<Scannerregister />} />
            </>
          ) : authenticated.type == 0 ? (
            <>
              <Route path="/" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/appointment" element={<Appointment />} />
            </>
          ) : (
            <>
              <Route path="/" element={<Home />} />
            
              <Route path="/scan" element={<Sappointment />} />
            </>
          )}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
