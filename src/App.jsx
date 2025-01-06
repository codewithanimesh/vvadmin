import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/Dashboard';
import StudentProfile from './components/StudentProfile';
import MyCourses from './components/MyCourses';
import Applications from './components/Applications';
import Accommodation from './components/Accomodation';
import Enquiry from './components/Enquiry';
import SignUp from './components/SignUp';
import Login from './components/Login';
import { AuthProvider, useAuth } from './contexts/AuthContext';

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  return children;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={
            <ProtectedRoute>
              <Layout />
            </ProtectedRoute>
          }>
            <Route index element={<Dashboard />} />
            <Route path="student-profile" element={<StudentProfile />} />
            <Route path="my-courses" element={<MyCourses />} />
            <Route path="applications" element={<Applications />} />
            <Route path="accommodation" element={<Accommodation />} />
            <Route path="enquiry" element={<Enquiry />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

