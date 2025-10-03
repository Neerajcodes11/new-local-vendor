
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { UserRole } from '../types';

const Header: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-orange-600">
          Nashik<span className="text-gray-800">Local</span>
        </Link>
        <nav className="flex items-center space-x-4">
          {user ? (
            <>
              {user.role === UserRole.CUSTOMER && (
                <Link to="/favorites" className="text-gray-600 hover:text-orange-600">
                  Favorites
                </Link>
              )}
              {user.role === UserRole.VENDOR && (
                <Link to="/dashboard" className="text-gray-600 hover:text-orange-600">
                  Dashboard
                </Link>
              )}
              <span className="text-gray-700">Hi, {user.name.split(' ')[0]}</span>
              <button
                onClick={handleLogout}
                className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition"
            >
              Login / Register
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
