import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';

// --- LAYOUT & CORE COMPONENTS ---
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Chatbot from './components/Chatbot/Chatbot';
import ProtectedRoute from './components/auth/ProtectedRoute';

// --- PUBLIC PAGES ---
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import About from './pages/About/About';
import Contact from './pages/Contact/Contact';

// --- CITIZEN PORTAL PAGES ---
import CitizenDashboard from './pages/Citizen/Dashboard/CitizenDashboard';
import ReportIssue from './pages/Citizen/ReportIssue/ReportIssue';
import Profile from './pages/Citizen/Profile/Profile';
import Rewards from './pages/Citizen/Rewards/Rewards';
import Notifications from './pages/Citizen/Notifications/Notifications';

// --- WORKER PORTAL PAGES ---
import WorkerDashboard from './pages/Worker/Dashboard/WorkerDashboard';
import Directions from './pages/Worker/Directions/Directions';
import NewComplaint from './pages/Worker/NewComplaint/NewComplaint';
import Resolutions from './pages/Worker/Resolutions/Resolutions';
import WorkerProfile from './pages/Worker/Profile/WorkerProfile'; // EDIT: Import WorkerProfile

// --- OFFICER PORTAL PAGES ---
import OfficerDashboard from './pages/Officer/Dashboard/OfficerDashboard';
import WorkerManagement from './pages/Officer/WorkerManagement/WorkerManagement';
import UpdateBin from './pages/Officer/UpdateBin/UpdateBin';
import OfficerProfile from './pages/Officer/Profile/OfficerProfile'; // EDIT: Import OfficerProfile

function App() {
  const { user } = useAuth();

  return (
    <>
      <Navbar />
      <main>
        <Routes>
          {/* ================= PUBLIC ROUTES ================= */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />

          {/* ================= PROTECTED CITIZEN ROUTES ================= */}
          <Route element={<ProtectedRoute allowedRoles={['Citizen']} />}>
            <Route path="/citizen/dashboard" element={<CitizenDashboard />} />
            <Route path="/citizen/report" element={<ReportIssue />} />
            <Route path="/citizen/profile" element={<Profile />} />
            <Route path="/citizen/rewards" element={<Rewards />} />
            <Route path="/citizen/notifications" element={<Notifications />} />
          </Route>

          {/* ================= PROTECTED WORKER ROUTES ================= */}
          <Route element={<ProtectedRoute allowedRoles={['Worker']} />}>
            <Route path="/worker/dashboard" element={<WorkerDashboard />} />
            <Route path="/worker/directions" element={<Directions />} />
            <Route path="/worker/new-complaint" element={<NewComplaint />} />
            <Route path="/worker/resolutions" element={<Resolutions />} />
            <Route path="/worker/profile" element={<WorkerProfile />} /> {/* EDIT: Add route for Worker profile */}
          </Route>

          {/* ================= PROTECTED OFFICER ROUTES ================= */}
          <Route element={<ProtectedRoute allowedRoles={['Officer']} />}>
            <Route path="/officer/dashboard" element={<OfficerDashboard />} />
            <Route path="/officer/manage-workers" element={<WorkerManagement />} />
            <Route path="/officer/update-bin" element={<UpdateBin />} />
            <Route path="/officer/profile" element={<OfficerProfile />} /> {/* EDIT: Add route for Officer profile */}
          </Route>
        </Routes>
      </main>
      {/* The Chatbot is now always visible */}
      <Chatbot />
      <Footer />
    </>
  );
}

export default App;
