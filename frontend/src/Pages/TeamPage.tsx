import React, { useEffect, useState } from "react";
import "./TeamPage.css";
import { useParams } from "react-router-dom";
import newRequest from "../config/newRequest";

interface team {
  _id: string;
  name: string;
  creator: string;
  members: [object];
  updatedAt: string;
  createdAt: string;
}

interface memberData {
  _id: string;
  email: string;
  fullName: string;
}
const TeamPage: React.FC = () => {
  const { id } = useParams();
  const [team, setTeam] = useState<team>({
    _id: "",
    name: "",
    creator: "",
    members: [{}],
    updatedAt: "",
    createdAt: "",
  });
  const [showForm, setShowForm] = useState<boolean>(false);
  // const [error, setError] = useState<string | null>(null);
  // const [success, setSuccess] = useState<boolean>(false);
  const [formData, setFormData] = useState({
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
    // setError(null);
    // setSuccess(false);
    try {
      await newRequest.post("/teams", { ...formData });
      setShowForm(false);
      setFormData({
        teamName: "",
        memberEmail: "",
      });
      // setSuccess(true);
    } catch (error) {
      console.log(error);
    }
  };

  const handleAddTeamMember = () => {
    undefined;
  };
  useEffect(() => {
    const getTeam = async (id: string | undefined) => {
      try {
        const { data } = await newRequest(`/teams/${id}`);
        setTeam(data);
      } catch (error) {
        console.error(error);
      }
    };
    getTeam(id);
  }, [id]);

  return (
    <div className="container flex">
      <div className="left">
        <h2 className="page-title team-title">{team.name}</h2>
        <button className="create-btn" onClick={handleAddTeamMember}>
          Add Team member
        </button>
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
        <div className="">
          <h3 className="page-title">
            {team.members.length > 1 ? "Members" : "Member"}
          </h3>
          <span>{team.members.length}</span>
          <div className="">
            <ul>
              {(team.members as memberData[]).map((member: memberData) => {
                return (
                  <li key={member._id} id={member._id} className="member-list">
                    {member.fullName}
                    <p>Software engineer</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className="right">Activity</div>
    </div>
  );
};

export default TeamPage;
