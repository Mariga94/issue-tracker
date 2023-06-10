import React, { useState } from "react";
import "./SingleIssue.css";
const SingleIssue: React.FC = () => {
  const [issue, setIssue] = useState({
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
  });

  const handleStatusChange = (issueId: number, newValue: string) => {
    return;
  };

  return (
    <div className="container">
      <div className="issue__page">
        <div className="issue__page-left flex-item">
          <div className="topbar-container">
            <select
              className="status-select"
              value={issue.status}
              onChange={(e) => handleStatusChange(issue.id, e.target.value)}
            >
              <option value="Open">Open</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="In Review">In Review</option>
            </select>
            <select
              className="assignee-select"
              value={issue.assignee}
              onChange={(e) => handleStatusChange(issue.id, e.target.value)}
            >
              <option value="Jane Smith">Jane Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Peter Clavor">Peter Clavor</option>
              <option value="unassigned">Unassigned</option>
            </select>

            <select
              className="assignee-select"
              value={issue.priority}
              onChange={(e) => handleStatusChange(issue.id, e.target.value)}
            >
              <option value="Jane Smith">Jane Smith</option>
              <option value="John Doe">John Doe</option>
              <option value="Peter Clavor">Peter Clavor</option>
              <option value="unassigned">Unassigned</option>
            </select>
          </div>
          <h3>{issue.summary}</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla,
            soluta minus aliquam voluptatibus praesentium facere reiciendis id,
            laboriosam, sit sed earum eaque ipsa dicta esse aliquid labore iure.
            Voluptate, voluptas.
          </p>
        </div>
        <div className="issue__page-right flex-item">
          <div className="topbar-container first">
            <div className="timeline">
              <p>Created</p>
              <span>{issue.createdAt}</span>
            </div>
            <div className="timeline">
              <p>Due Date</p>
              <span>{issue.dueDate}</span>
            </div>
          </div>
          <div className="comment-section">
            This is the comment section
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleIssue;
