import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const menuItems = [
  { path: '/', icon: '🏠', label: 'Dashboard' },
  { path: '/student-profile', icon: '👤', label: 'Student Profile' },
  { path: '/my-courses', icon: '📚', label: 'My Courses' },
  { path: '/applications', icon: '📝', label: 'Applications' },
  { path: '/accommodation', icon: '🏠', label: 'Accommodation' },
  { path: '/enquiry', icon: '❓', label: 'Enquiry' },
];

function Sidebar() {
  const location = useLocation();
  const { logout } = useAuth();

  return (
    <div className="w-64 bg-blue-800 text-white h-full">
      <div className="p-4">
        <Link to="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="Vizvigyan Logo" className="w-8 h-8" />
          <span className="text-xl font-bold">Vizvigyan</span>
        </Link>
      </div>
      <nav className="mt-8">
        {menuItems.map((item) => (
          <Link
            key={item.path}
            to={item.path}
            className={`flex items-center space-x-2 p-4 hover:bg-blue-700 ${
              location.pathname === item.path ? 'bg-blue-700' : ''
            }`}
          >
            <span>{item.icon}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>
      <div className="mt-auto p-4">
        <button
          onClick={logout}
          className="flex items-center space-x-2 text-red-300 hover:text-red-100"
        >
          <span>🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

