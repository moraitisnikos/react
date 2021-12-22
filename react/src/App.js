import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mainpage from './components/Mainpage/Mainpage';
import Appointment from './components/Appointment/Appointment';
import Statistics from './components/Statistics/Statistics';
import Contact from './components/Contact/Contact';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import React from 'react'

function App() {
  return (
    <div>
    <Navbar/>
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage />} />
        <Route path="/Mainpage" element={<Mainpage />} />
        <Route path="/Appointment" element={<Appointment />}  />
        <Route path="/Statistics" element={<Statistics />}  />
        <Route path="/Contact" element={<Contact />}  />
      </Routes>
  </Router>
  </div>
  );
}

export default App;
