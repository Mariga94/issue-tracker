import { NavLink } from "react-router-dom";
import "./Navbar.css";
import { FiBell, FiSettings } from "react-icons/fi";
import { useState } from "react";

const Navbar = () => {
  const [showNotifications] = useState("false");
  const storedData = localStorage.getItem("userData");
  const userData = storedData ? JSON.parse(storedData) : null;

  const toggleNotifications = () => {
    return !showNotifications;
  };

  
 
  return (
    <div className="navbar">
      <div className="navbar__left">
        <NavLink to="/">
          <h3 className="logo">ISSUE TRACKER</h3>
        </NavLink>
      </div>
      <div className="navbar__right">
        <ul className="navbar__nav">
          <li className="navbar__nav-list-item">
            <div onClick={() => toggleNotifications}>
              <FiBell className="navbar-icon" size={20} />
            </div>
          </li>
          <li className="navbar__nav-list-item">
            <NavLink to="/settings">
              <FiSettings className="navbar-icon" size={20} />
            </NavLink>
          </li>
          <li className="navbar__nav-list-item">
            <div className="avatar">
              
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
