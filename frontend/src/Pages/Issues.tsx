import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import "./Issues.css";
import { useNavigate } from "react-router-dom";
interface Issue {
  id: number;
  type: string;
  summary: string;
  assignee: string;
  reporter: string;
  priority: string;
  status: string;
  resolution: string;
  createdAt: string;
  updatedAt: string;
  dueDate: string;
}

const Issues: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [issues, setIssues] = useState<Issue[]>([
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
  ]);
  const [filteredIssues, setFilteredIssues] = useState(issues);
  const navigate = useNavigate();

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

  const handleIssueClick = (issueId: number) => {
    navigate(`/issues/${issueId}`);
  };
  
  return (
    <div className="container">
      <div className="issues">
        <h2 className="page-title">Issues</h2>
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
      </div>
    </div>
  );
};

export default Issues;
