import React from "react";
import "./message.css";
import { formatDateString } from "../../utils/formatDate";
import { json } from "react-router-dom";

interface Message {
  content: string;
  sender: {
    _id: string;
    fullName: string;
  };
  createdAt: string;
}

interface userData {
  _id: string;
  email: string;
}

const Message: React.FC<{ message: Message }> = ({ message }) => {
  const userDataString: string | null = localStorage.getItem("userData");
  const userData: userData | null =  userDataString ?JSON.parse(userDataString): null;
  const isCurrentUser: boolean = userData?._id === message.sender._id;
 
  return (
    <div
      className={`message ${isCurrentUser ? "current-user" : "other-user"}`}
    >
      <p>{message.content}</p>
      <small>Sender: {message.sender.fullName}</small>
      <small>Created At: {formatDateString(message.createdAt).date}</small>
    </div>
  );
};

export default Message;
