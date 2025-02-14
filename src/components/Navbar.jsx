// Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom"; // Import NavLink
const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Brand */}
        <div className="text-white font-bold text-xl">Soi5 Lounge</div>

        {/* Navigation Links */}
        <div className="flex space-x-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold"
                : "text-white hover:text-blue-200"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold"
                : "text-white hover:text-blue-200"
            }
          >
            Profile
          </NavLink>
          <NavLink
            to="/post"
            className={({ isActive }) =>
              isActive
                ? "text-white font-bold"
                : "text-white hover:text-blue-200"
            }
          >
            Posts
          </NavLink>
        </div>

        {/* User Info and Dropdown */}
        <div className="relative">
          <button
            onClick={toggleDropdown}
            className="text-white hover:text-blue-200 flex items-center"
          >
            User 1 {/* Display the user's name */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
              <a
                href="#" // Or use a route for logout
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
