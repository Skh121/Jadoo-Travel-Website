import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useAuth } from "../../config/AuthContext";
import { FaUser } from "react-icons/fa";

const UserDropdown = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [roles, setRoles] = useState([]);
  const navigate = useNavigate();
  const { setIsLoggedIn } = useAuth();

  useEffect(() => {
    const fetchUserData = async () => {
      const userId = localStorage.getItem("userId");
      const token = localStorage.getItem("token");

      if (userId && token) {
        try {
          const response = await axios.get(`http://localhost:8080/customer/get/${userId}`, {
            headers: {
              Authorization: `Bearer ${token}`
            }
          });
          const userData = response.data.data;
          setUsername(userData.username);
          setEmail(userData.email);
          setRoles(userData.roles.map(role => role.name));
        } catch (error) {
          console.error("Failed to fetch user data:", error);
        }
      }
    };

    fetchUserData();
  }, []);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleSignOut = () => {
    localStorage.removeItem("userId");
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="relative inline-block text-left">
      <FaUser
        id="avatarButton"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
      />

      {dropdownOpen && (
        <div className="dropdown-menu">
          <div className="dropdown-header">
            <div className="font-bold">{username}</div>
            <div className="text-gray-600">{email}</div>
          </div>
          <ul className="dropdown-list">
            {roles.includes("ADMIN") && (
              <li>
                <Link
                  to="/admin/dashboard"
                  className="dropdown-item"
                >
                  Admin Dashboard
                </Link>
              </li>
            )}
            <li>
              <Link
                to="/dashboard"
                className="dropdown-item"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/settings"
                className="dropdown-item"
              >
                Settings
              </Link>
            </li>
            <li>
              <Link
                to="/earnings"
                className="dropdown-item"
              >
                Earnings
              </Link>
            </li>
          </ul>
          <div className="dropdown-footer">
            <button
              onClick={handleSignOut}
              className="dropdown-item btn-sign-out"
            >
              Sign out
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDropdown;
