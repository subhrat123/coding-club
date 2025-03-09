import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Login from './Pages/Login';
import LandingPage from './Pages/LandingPage';
import Events from './Pages/Events';
import MemberManagement from './Pages/MemberManagement';
import TeamMem from './Pages/TeamMem';
import Profile from './Pages/Profile';
import Navbar from './Components/Navbar';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/members" element={<MemberManagement />} />
        <Route path="/team" element={<TeamMem />} />
        <Route path="/profile" element={<Profile />}/>
      </Routes>  
    </Router>
  );
}

export default App;