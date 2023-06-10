import React, { useEffect, useReducer, useState } from "react";
import "./SingleProject.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const SingleProject: React.FC = () => {
  //   const [state, dispatch] = useReducer(reducer, initialState);
  const [state, setState] = useState({
    description: "", // Initialize description as an EditorState object
    project: "",
    issueType: "",
    status: "",
    summary: "",
    reporter: "",
    priority: "",
    dueDate: "",
    assignee: "",
  });
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const navigate = useNavigate();
  const [shouldHideBorder, setShouldHideBorder] = useState(false);
  const [project, setProject] = useState({
    id: 1,
    title: "Project",
    lead: "Leader1",
    createdAt: "10th May 2020",
    modified: "N/A",
  });
  const [issues, setIssues] = useState([
    {
      id: 1,
      type: "Bug",
      summary: "Issue summary",
      assignee: "John Doe",
      reporter: "Jane Smith",
      priority: "High",
      status: "Open",
      resolution: "",
      createdAt: "2023-05-30",
      updatedAt: "2023-05-30",
      dueDate: "2023-06-15",
    },
    {
      id: 2,
      type: "Bug",
      summary: "Issue summary",
      assignee: "John Doe",
      reporter: "Jane Smith",
      priority: "High",
      status: "Open",
      resolution: "",
      createdAt: "2023-05-30",
      updatedAt: "2023-05-30",
      dueDate: "2023-06-15",
    },
    {
      id: 3,
      type: "Bug",
      summary: "Issue summary",
      assignee: "John Doe",
      reporter: "Jane Smith",
      priority: "High",
      status: "Open",
      resolution: "",
      createdAt: "2023-05-30",
      updatedAt: "2023-05-30",
      dueDate: "2023-06-15",
    },
  ]);

  const [filteredIssues, setFilteredIssues] = useState(issues);

  const handleFieldValueChange = (field: string, value: string) => {
    setState((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredIssues = value
      ? issues.filter((issue) => issue.summary.toLowerCase().includes(value))
      : issues;
    setFilteredIssues(filteredIssues);
  };

  const handleStatusChange = (issueId: number, newValue: string) => {
    setIssues((prevIssues) =>
      prevIssues.map((issue) =>
        issue.id === issueId ? { ...issue, status: newValue } : issue
      )
    );
  };

  const handleCreateIssueClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleIssueClick = (issueId: number) => {
    navigate(`/issues/${issueId}`);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Perform form submission or data processing here
  };

  function handleScroll() {
    const formContainer = document.querySelector(".form-container");
    const titleContainer = document.getElementById("title-container");
  }

  return (
    <div className="container">
      <div className="project">
        <div className="breadcrumbs">
          <span>Projects / </span>
          <span>{project.title}</span>
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
            <div className="form-container" onScroll={handleScroll}>
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
                    value={state.project}
                    onChange={(e) =>
                      handleFieldValueChange("project", e.target.value)
                    }
                  >
                    <option value="">Project 1</option>
                    <option value="">Project 2</option>
                    <option value="">Project 3</option>
                    <option value="">Project 4</option>
                    {/* Render options dynamically from project API endpoint */}
                    {/* Example: <option value="project1">Project 1</option> */}
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
                    value={state.issueType}
                    onChange={(e) =>
                      handleFieldValueChange("issueType", e.target.value)
                    }
                  >
                    <option value="">Select Issue Type</option>
                    <option value="task">Task</option>
                    <option value="improvement">Improvement</option>
                    <option value="new-feature">New Feature</option>
                  </select>
                </div>
                <div className="issue-form__field">
                  <label htmlFor="status-select" className="issue-form__label">
                    Status
                  </label>
                  <select
                    className="issue-form__select status"
                    id="status-select"
                    value={state.status}
                    onChange={(e) =>
                      handleFieldValueChange("status", e.target.value)
                    }
                  >
                    <option value="">Status</option>
                    <option value="inprogress">In Progress</option>
                    <option value="completed">Completed</option>
                    <option value="done">Done</option>
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
                    value={state.summary}
                    onChange={(e) =>
                      handleFieldValueChange("status", e.target.value)
                    }
                  />
                </div>
                <div className="issue-form__field quill">
                  <label
                    htmlFor="description-input"
                    className="issue-form__label"
                  >
                    Description
                  </label>
                  <ReactQuill theme="snow" className="react-quill" />
                </div>
                <div className="issue-form__field">
                  <label htmlFor="reporter-input" className="issue-form__label">
                    Reporter
                  </label>
                  <input
                    type="text"
                    className="issue-form__text"
                    id="reporter-input"
                    value={state.reporter}
                    onChange={(e) =>
                      handleFieldValueChange("reporter", e.target.value)
                    }
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
                    value={state.priority}
                    onChange={(e) =>
                      handleFieldValueChange("priority", e.target.value)
                    }
                  >
                    <option value="">Select Priority</option>
                    <option value="highest">Highest</option>
                    <option value="high">High</option>
                    <option value="lowest">Lowest</option>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                  </select>
                </div>
                <div className="issue-form__field">
                  <label htmlFor="due-date-input" className="issue-form__label">
                    Due Date
                  </label>
                  <input
                    type="date"
                    id="due-date-input"
                    className="issue-form__select date-field"
                    value={state.dueDate}
                    onChange={(e) =>
                      handleFieldValueChange("dueDate", e.target.value)
                    }
                  />
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
                    value={state.assignee}
                    onChange={(e) =>
                      handleFieldValueChange("assignee", e.target.value)
                    }
                  >
                    <option value="">Select Assignee</option>
                    {/* Render options dynamically from users API endpoint */}
                    {/* Example: <option value="user1">User 1</option> */}
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
          <table className="table">
            <thead>
              <tr>
                <th>Type</th>
                <th>Summary</th>
                <th>Assignee</th>
                <th>Reporter</th>
                <th>Priority</th>
                <th>Status</th>
                <th>Resolution</th>
                <th>Created At</th>
                <th>Updated At</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredIssues.map((issue) => (
                <tr key={issue.id} onClick={() => handleIssueClick(issue.id)}>
                  <td>{issue.type}</td>
                  <td>{issue.summary}</td>
                  <td>{issue.assignee}</td>
                  <td>{issue.reporter}</td>
                  <td>{issue.priority}</td>
                  <td>
                    <select
                      className="td-select"
                      value={issue.status}
                      onChange={(e) =>
                        handleStatusChange(issue.id, e.target.value)
                      }
                    >
                      <option value="Open">Open</option>
                      <option value="In Progress">In Progress</option>
                      <option value="Completed">Completed</option>
                      <option value="In Review">In Review</option>
                    </select>
                  </td>
                  <td>{issue.resolution}</td>
                  <td>{issue.createdAt}</td>
                  <td>{issue.updatedAt}</td>
                  <td>{issue.dueDate}</td>
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
