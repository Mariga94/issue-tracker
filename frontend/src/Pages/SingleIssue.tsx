import React, { useEffect, useState } from "react";
import "./SingleIssue.css";
import { useParams } from "react-router-dom";
import newRequest from "../config/newRequest";
import { formatDateString } from "../utils/formatDate";
import Message from "../components/Message/message";
import moment from "moment";

interface Issue {
  _id: string;
  assignedTo: {
    email: string;
    fullName: string;
    _id: string;
  };
  createdAt: string;
  description: string;
  dueDate: string;
  issueType: string;
  priority: string;
  project: string;
  status: string;
  summary: string;
  creator: {
    _id: string;
    fullName: string;
  };
  team: {
    _id: string;
    name: string;
    creator: string;
    members: [object];
    createdAt: string;
  }[];
  updatedAt: string;
  user: {
    _id: string;
    fullName: string;
    email: string;
  };
}

interface MessageData {
  _id: string;
  content: string;
  sender: {
    _id: string;
    fullName: string;
  };
  createdAt: string;
}

// interface User {
//   _id: string;
//   fullName: string;
//   email: string;
//   projects: [string];
//   issues: [string];
//   teams: [object];
//   createdAt: string;
//   updatedAt: string;
// }

const SingleIssue: React.FC = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState<Issue>({
    _id: "",
    assignedTo: {
      email: "",
      fullName: "",
      _id: "",
    },
    creator: {
      fullName: "",
      _id: "",
    },
    createdAt: "",
    description: "",
    dueDate: "",
    issueType: "",
    priority: "",
    project: "",
    status: "",
    summary: "",
    team: [
      {
        _id: "",
        name: "",
        creator: "",
        members: [{}],
        createdAt: "",
      },
    ],
    updatedAt: "",
    user: {
      _id: "",
      fullName: "",
      email: "",
    },
  });

  const [messages, setMessages] = useState<MessageData[]>([]);
  const [message, setMessage] = useState({
    content: "",
  });

  const handleInputChange = (event: React.FormEvent<HTMLTextAreaElement>) => {
    const { name, value } = event.target as HTMLTextAreaElement;
    setMessage((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const handleSendMessage = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const issueId = issue._id;
    const teamId = issue.team[0]._id;
    try {
      const data = await newRequest.post("/messages", {
        issueId,
        teamId,
        ...message,
      });
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  const calcDueDate = (d: string) => {
    const dueDate = moment(d);
    const currentDate = moment();

    const duration = moment.duration(dueDate.diff(currentDate));
    const daysRemaining = duration.asDays();

    return Math.ceil(daysRemaining);
  };

  const daysRemaining = calcDueDate(issue.dueDate);
  // const handleStatusChange = (issueId: string) => {
  //   return;
  // };

  useEffect(() => {
    const fetchIssue = async (id: string | undefined) => {
      try {
        const { data } = await newRequest.get(`/issues/${id}`);
        setIssue(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchIssue(id);
  }, [id]);
  useEffect(() => {
    const fetchMessages = async (issueId: string | undefined) => {
      try {
        const { data } = await newRequest.get(`/messages/${issueId}`);
        setMessages(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchMessages(id);
  }, [id]);

  console.log(messages);
  return (
    <div className="container">
      <div className="issue__page">
        <div className="issue__page-left flex-item">
          <div className="topbar-container">
            <small>Created by: {issue.creator.fullName}</small>
            <small>Assignee: {issue.assignedTo.fullName}</small>
            <small>Status: {issue.status}</small>
            <small>Submit for Review:</small>
          </div>
          <h2 className="page-title">{issue.summary}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: issue.description }}
            className="content-description"
          />
          <div className=""></div>
        </div>
        <div className="issue__page-right flex-item">
          <div className="topbar-container first">
            <div className="timeline">
              <p>Created</p>
              <span>{formatDateString(issue.createdAt).date}</span>
            </div>
            <div className="timeline">
              <p>Updated</p>
              <span>{formatDateString(issue.updatedAt).date}</span>
            </div>
            <div className="timeline">
              <p>Due Date</p>
              <span>{formatDateString(issue.dueDate).date}</span>
            </div>
            <div className="timeline">
              <p>Days Remaining</p>
              <span>{daysRemaining}</span>
            </div>
          </div>
          <div className="comment-section">
            {messages.map((message) => (
              <Message key={message._id} message={message} />
            ))}
            <form onSubmit={handleSendMessage} className="message-input-box">
              <textarea
                className="message-input"
                placeholder="Type your message...."
                name="content"
                value={message.content}
                onChange={handleInputChange}
              />
              <button className="send-button">Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleIssue;
