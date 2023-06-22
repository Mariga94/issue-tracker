import React, { useEffect, useReducer, useState } from "react";
import "./SingleProject.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate, useParams } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import newRequest from "../config/newRequest";
import { formatDateString } from "../utils/formatDate";

interface ProjectData {
  _id: string;
  name: string;
  user: object;
  createdAt: string;
  updatedAt: string;
  team: string[];
  projects: string[];
}

interface User {
  _id: string;
  fullName: string;
  email: string;
  projects: [string];
  issues: [string];
  teams: [object];
  createdAt: string;
  updatedAt: string;
}

interface IssueData {
  project: string;
  summary: string;
  status: string;
  issueType: string;
  description: string;
  team: string;
  reporter: string;
  priority: string;
  dueDate: string;
  assignedTo: string;
}

interface Issues {
  _id: string;
  project: string;
  summary: string;
  status: string;
  issueType: string;
  description: string;
  reporter: string;
  priority: string;
  dueDate: string;
  team: string;
  assignedTo: string;
  createdAt: Date;
  updatedAt: Date;
}

interface Team{
  _id: string
}

interface teamArr {
  _id: string;
  members: [string];
  name: string;
  creator: string;
  createdAt: string;
  updatedAt: string;
}
const SingleProject: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const userData = localStorage.getItem("userData");
  const currentUser: User | null = userData ? JSON.parse(userData) : null;
  const [teamsArr, setTeamsArr] = useState<teamArr[]>([]);
  const [teamMembers, setTeamMembers] = useState<User[]>([]);
  const [project, setProject] = useState<ProjectData>({
    _id: "",
    name: "",
    user: {},
    createdAt: "",
    updatedAt: "",
    team: [],
    projects: [],
  });
  const [issues, setIssues] = useState<Issues[]>([]);
  const [issueFormData, setIssueFormData] = useState<IssueData>({
    project: "",
    summary: "",
    status: "",
    issueType: "",
    description: "",
    reporter: "",
    priority: "",
    team: "",
    dueDate: "",
    assignedTo: "",
  });
  const [selectedTeam, setSelectedTeam] = useState("");
  const [filteredIssues, setFilteredIssues] = useState<Issues[]>(issues);

  // console.log(filteredIssues, issues);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredIssues = value
      ? issues.filter((issue) => issue.summary.toLowerCase().includes(value))
      : issues;
    setFilteredIssues(filteredIssues);
  };

  const handleDropdownChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target;

    setIssueFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const dateValue =
      name === "dueDate" ? new Date(value).toISOString().split("T")[0] : value;
    setIssueFormData((prev) => ({
      ...prev,
      [name]: dateValue,
    }));
  };

  const handleQuillChange = (value: string) => {
    setIssueFormData((prev) => ({
      ...prev,
      description: value,
    }));
  };

  const handleCreateIssueClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleIssueClick = (issueId: string) => {
    navigate(`/issues/${issueId}`);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      await newRequest.post(`/projects/${id}/issues`, { ...issueFormData });
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleTeamChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const selectedTeamId = e.target.value;
    const { name, value } = e.target;

    setIssueFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });

    setSelectedTeam(selectedTeamId);

    const selectedTeamObj = teamsArr.find(
      (team: teamArr) => team._id === selectedTeamId
    );
    setTeamMembers(selectedTeamObj ? selectedTeamObj.members : []);
  };

  useEffect(() => {
    const getProject = async (id: string | undefined) => {
      try {
        const { data } = await newRequest.get(`/project/${id}`);
        setProject(data);
      } catch (error) {
        console.error(error);
      }
    };
    getProject(id);
  }, [id]);

  useEffect(() => {
    const getIssues = async (id: string | undefined) => {
      try {
        const { data } = await newRequest.get(`/projects/${id}/issues`);
        setIssues(data);
      } catch (error) {
        console.error(error);
      }
    };
    getIssues(id);
  }, [id]);

  useEffect(() => {
    const { _id } = currentUser || {};

    const getUserInfo = async (id: string) => {
      try {
        const { data } = await newRequest.get(`/users/${id}`);
        setTeamsArr(data.teams);
      } catch (error) {
        console.error(error);
      }
    };

    if (_id) {
      getUserInfo(_id);
    }
  }, [currentUser]);

    
  return (
    <div className="container">
      <div className="project">
        <div className="breadcrumbs">
          <span>Projects / </span>
          <span>{project.name}</span>
        </div>

        <div className="con">
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Search projects"
              value={searchTerm}
              onChange={handleSearch}
            />
            <FiSearch className="search-icon" />
          </div>
          <button className="create-btn" onClick={handleCreateIssueClick}>
            Create Issue
          </button>
        </div>
        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <div className={`issue-form__title-container`}>
                <h2 className="issue-form__title">Create New Issue</h2>
              </div>
              <form onSubmit={handleSubmit} className="issue-form__form">
                <div className="issue-form__field">
                  <label htmlFor="project-select" className="issue-form__label">
                    Project
                  </label>
                  <select
                    className="issue-form__select"
                    id="project-select"
                    name="project"
                    required
                    value={issueFormData.project}
                    onChange={handleDropdownChange}
                  >
                    <option value="">Select Project</option>
                    <option value={project._id}>{project.name}</option>
                  </select>
                </div>
                <div className="issue-form__field">
                  <label
                    htmlFor="issue-type-select"
                    className="issue-form__label"
                  >
                    Issue Type:
                  </label>
                  <select
                    className="issue-form__select"
                    id="issue-type-select"
                    value={issueFormData.issueType}
                    name="issueType"
                    required
                    onChange={handleDropdownChange}
                  >
                    <option value="">Select Issue Type</option>
                    <option value="Task">Task</option>
                    <option value="Bug">Bug</option>
                    <option value="To Do">To Do</option>
                    <option value="Improvement">Improvement</option>
                    <option value="New feature">New Feature</option>
                  </select>
                </div>
                <div className="issue-form__field">
                  <label htmlFor="status-select" className="issue-form__label">
                    Status
                  </label>
                  <select
                    className="issue-form__select status"
                    id="status-select"
                    name="status"
                    required
                    value={issueFormData.status}
                    onChange={handleDropdownChange}
                  >
                    <option value="">Status</option>
                    <option value="Open">Open</option>
                    <option value="In progress">In Progress</option>
                    <option value="In Review"></option>
                    <option value="Completed">Completed</option>
                    <option value="Done">Done</option>
                  </select>
                </div>
                <div className="issue-form__field">
                  <label htmlFor="summary-input" className="issue-form__label">
                    Summary
                  </label>
                  <input
                    className="issue-form__text"
                    type="text"
                    id="summary-input"
                    name="summary"
                    required
                    value={issueFormData.summary}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="issue-form__field quill">
                  <label
                    htmlFor="description-input"
                    className="issue-form__label"
                  >
                    Description
                  </label>
                  <ReactQuill
                    theme="snow"
                    className="react-quill"
                    value={issueFormData.description}
                    onChange={handleQuillChange}
                  />
                </div>
                <div className="issue-form__field">
                  <label htmlFor="reporter-input" className="issue-form__label">
                    Reporter
                  </label>
                  <input
                    type="text"
                    className="issue-form__text"
                    id="reporter-input"
                    name="reporter"
                    required
                    value={issueFormData.reporter}
                    onChange={handleOnChange}
                  />
                </div>
                <div className="issue-form__field">
                  <label
                    htmlFor="priority-select"
                    className="issue-form__label"
                  >
                    Priority
                  </label>
                  <select
                    className="issue-form__select"
                    id="priority-select"
                    name="priority"
                    required
                    value={issueFormData.priority}
                    onChange={handleDropdownChange}
                  >
                    <option value="">Select Priority</option>
                    <option value="Highest">Highest</option>
                    <option value="High">High</option>
                    <option value="Lowest">Lowest</option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                  </select>
                </div>
                <div className="issue-form__field">
                  <label htmlFor="due-date-input" className="issue-form__label">
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="due-date-input"
                    required
                    className="issue-form__select date-field"
                    value={issueFormData.dueDate}
                    name="dueDate"
                    onChange={handleOnChange}
                  />
                </div>

                <div className="issue-form__field">
                  <label htmlFor="team-select" className="issue-form__label">
                    Teams:
                  </label>
                  <select
                    className="issue-form__select"
                    id="assignee-select"
                    required
                    name="team"
                    value={selectedTeam}
                    onChange={handleTeamChange}
                  >
                    <option value="">Select Team</option>
                    {teamsArr.map((team) => (
                      <option key={team._id} value={team._id}>
                        {team.name}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="issue-form__field">
                  <label
                    htmlFor="assignee-select"
                    className="issue-form__label"
                  >
                    Assignee:
                  </label>
                  <select
                    className="issue-form__select"
                    id="assignee-select"
                    required
                    name="assignedTo"
                    value={issueFormData.assignedTo}
                    onChange={handleDropdownChange}
                  >
                    <option value="">Select Assignee</option>
                    {teamMembers.map((member) => (
                      <option key={member._id} value={member._id}>
                        {member.fullName}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="issue-from__button-container">
                  <button
                    className="issue-form__button close-button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="issue-form__button submit-button"
                  >
                    Create Issue
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
      <div>
        {issues.length === 0 ? (
          <p>No Issues</p>
        ) : (
          <table className="table issue-table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Summary</th>
                <th>Assignee</th>
               
                <th>Priority</th>
                <th>Status</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {issues.map((issue: Issues) => (
                <tr key={issue._id} onClick={() => handleIssueClick(issue._id)}>
                  <td>{issue.issueType}</td>
                  <td>{issue.summary}</td>
                  <td>{issue.assignedTo.fullName}</td>
                  {/* <td>{issue.reporter}</td> */}
                  <td>{issue.priority}</td>
                  <td>{issue.status}</td>
                  <td>{formatDateString(issue.createdAt).date}</td>
                  <td>{formatDateString(issue.updatedAt).date}</td>
                  <td>{formatDateString(issue.dueDate).date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default SingleProject;
