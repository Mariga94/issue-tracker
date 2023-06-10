import React, { useState } from "react";
import "./Teams.css";
import BioCard from "../components/BioCard/BioCard";
import { FaUserCircle } from "react-icons/fa";

const Teams: React.FC = () => {
  const [showForm, setShowForm] = useState<boolean>(false);

  return (
    <div className="container">
      <h2 className="page-title">People and teams</h2>
      <div className="people-container">
        <h3 className="page-title">People</h3>
        {showForm && (
          <div className="form-overlay">
            <form className="add-people-form">
              <h3 className="page-title">Add People</h3>
              <div className="issue-form__field">
                <label htmlFor="add-people" className="issue-form__label">
                  Email
                </label>
                <input
                  type="text"
                  className="issue-form__text"
                  id="add-people"
                  placeholder="johndoe@email.com"
                />
              </div>
              <div className="issue-from__button-container">
                <button
                  className="close-button"
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button className="submit-button">Add</button>
              </div>
            </form>
          </div>
        )}
        <div className="people">
          <div className="invite-people-card" onClick={() => setShowForm(true)}>
            <FaUserCircle size={50} color="#D3D3D3" />
            <p>Your teammate</p>
            <span>Add people</span>
          </div>
          <BioCard name="John Doe" role="Web developer" id="1" />
          <BioCard name="John Doe" role="Web developer" id="2" />
          <BioCard name="John Doe" role="Web developer" id="3" />
          <BioCard name="John Doe" role="Web developer" id="4" />
          <BioCard name="John Doe" role="Web developer" id="5" />
        </div>
      </div>
      <div className="people-container">
        <h3 className="page-title">Teams</h3>
        <div className="people"></div>
      </div>
    </div>
  );
};

export default Teams;
