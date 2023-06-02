import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Aside.css";
import {
  FiHome,
  FiBarChart2,
  FiInbox,
  FiUsers,
  FiBriefcase,
  FiCheckCircle,
} from "react-icons/fi";

const Aside: React.FC = () => {
  const [selectedItem, setSelectedItem] = useState("");

  const handleItemClick = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className="aside">
      <ul className="aside__list">
        <li
          className={
            selectedItem === "home"
              ? "aside__list-item selected"
              : "aside__list-item"
          }
          onClick={() => handleItemClick("home")}
        >
          <NavLink to="/home" className="aside__list-link">
            <FiHome className="aside-icons" />
            Home
          </NavLink>
        </li>
        <li
          className={
            selectedItem === "dashboard"
              ? "aside__list-item selected"
              : "aside__list-item"
          }
          onClick={() => handleItemClick("dashboard")}
        >
          <NavLink to="/dashboard" className="aside__list-link">
            <FiBarChart2 className="aside-icons" />
            Dashboard
          </NavLink>
        </li>
        <li
          className={
            selectedItem === "projects"
              ? "aside__list-item selected"
              : "aside__list-item"
          }
          onClick={() => handleItemClick("projects")}
        >
          <NavLink to="/projects" className="aside__list-link">
            <FiBriefcase className="aside-icons" />
            Projects
          </NavLink>
        </li>
        <li
          className={
            selectedItem === "issues"
              ? "aside__list-item selected"
              : "aside__list-item"
          }
          onClick={() => handleItemClick("issues")}
        >
          <NavLink to="/issues" className="aside__list-link">
            <FiCheckCircle className="aside-icons" />
            issues
          </NavLink>
        </li>
        <li
          className={
            selectedItem === "team"
              ? "aside__list-item selected"
              : "aside__list-item"
          }
          onClick={() => handleItemClick("team")}
        >
          <NavLink to="/teams" className="aside__list-link">
            <FiUsers className="aside-icons" />
            Teams
          </NavLink>
        </li>
        <li
          className={
            selectedItem === "inbox"
              ? "aside__list-item selected"
              : "aside__list-item"
          }
          onClick={() => handleItemClick("inbox")}
        >
          <NavLink to="/inbox" className="aside__list-link">
            <FiInbox className="aside-icons" />
            Inbox
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Aside;
