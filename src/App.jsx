import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Login from "./Pages/Login";
import LandingPage from "./Pages/LandingPage";
import Events from "./Pages/Events";
import MemberManagement from "./Pages/MemberManagement";
import TeamMem from "./Pages/TeamMem";
import Navbar from "./Components/Navbar";
import EventPage from "./Pages/EventPage";
import AdminDashboard from "./Pages/AdminDashboard";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/events" element={<Events />} />
        <Route path="/team" element={<TeamMem />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/admin/members" element={<MemberManagement />} />
        <Route path="/admin/events" element={<EventPage />} />
      </Routes>
    </Router>
  );
}

export default App;
