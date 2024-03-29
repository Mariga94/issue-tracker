import React, { useEffect, useState } from "react";
import "./Teams.css";
import BioCard from "../components/BioCard/BioCard";
import { FaUserCircle } from "react-icons/fa";
import newRequest from "../config/newRequest";

interface Team {
  _id: string;
  name: string;
  members: [string];
  creator: string;
}

interface formInterface {
  teamName: string;
  memberEmail: string;
}
const Teams: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);
  const [showForm, setShowForm] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState<formInterface>({
    teamName: "",
    memberEmail: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      await newRequest.post("/teams", { ...formData });
      setShowForm(false);
      setFormData({
        teamName: "",
        memberEmail: "",
      });
      setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let errorTimeout: ReturnType<typeof setTimeout>;
    let successTimeout: ReturnType<typeof setTimeout>;

    if (error) {
      errorTimeout = setTimeout(() => {
        setError("");
      }, 10000);
    }

    if (success) {
      successTimeout = setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }

    return () => {
      clearTimeout(errorTimeout);
      clearTimeout(successTimeout);
    };
  }, [error, success]);

  useEffect(() => {
    const getAllTeams = async () => {
      setError(null);
      try {
        const { data } = await newRequest.get("/teams");
        setTeams(data);
        setError(null);
      } catch (error) {
        console.error(error);
        setError("Something went wrong");
      }
    };
    getAllTeams();
  }, []);

  return (
    <div className="container">
      <h2 className="page-title">People and teams</h2>
      <div className="message-container">
        {error && <p className="error-message message">{error}</p>}
        {success && (
          <p className="success-message message w-500">
            Teams created successfully
          </p>
        )}
      </div>
      <div className="people-container">
        <h3 className="page-title">People</h3>
        {showForm && (
          <div className="form-overlay">
            <form className="add-people-form" onSubmit={handleSubmit}>
              <h3 className="page-title">Add People</h3>
              <div className="issue-form__field">
                <label htmlFor="teamName" className="issue-form__label">
                  Team Name
                </label>
                <input
                  type="text"
                  className="issue-form__text"
                  id="teamName"
                  name="teamName"
                  value={formData.teamName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="issue-form__field">
                <label htmlFor="add-people" className="issue-form__label">
                  Email
                </label>
                <input
                  type="text"
                  className="issue-form__text"
                  id="add-people"
                  name="memberEmail"
                  value={formData.memberEmail.toLowerCase()}
                  onChange={handleChange}
                  required
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
        </div>
      </div>
      <div className="people-container">
        <h3 className="page-title">Teams</h3>

        <div className="people">
          {teams.map((team) => {
            return <BioCard name={team.name} id={team._id} role="" />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Teams;
