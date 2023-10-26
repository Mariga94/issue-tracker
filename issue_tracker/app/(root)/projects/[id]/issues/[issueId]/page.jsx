"use client";
import React, { useState, Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import Example from "@/components/SelectMenus";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const page = () => {
  const [issue, setIssue] = useState({
    id: "1",
    project: "Project 1",
    summary: "This is a summary",
    status: "In Progess",
    issueType: "Task",
    description: "This is a long description",
    reporter: "John Doe",
    priority: "Medium",
    team: "",
    createdAt: "24th October 2023",
    updatedAt: "24th October 2023",
    dueDate: "1st November 2023",
    assignedTo: "Peter James",
  });
  const [markdown, setMarkdown] = useState("");
  const handleMarkdownChange = (value) => {
    setMarkdown(value);
  };
  const [showDetails, setShowDetails] = useState(false);
  const handleShowDetails = () => {
    setShowDetails(!showDetails);
  };
  console.log(showDetails);
  return (
    <div className="flex lg:flex-row flex-col ">
      <div className="flex flex-col flex-1 gap-4">
        <div className="flex flex-row gap-4">
          <select className=" status block w-50 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:outline-none focus:border-blue-300 transition duration-150 ease-in-out">
            <option value="option1" className="">
              To Do
            </option>
            <option value="option2" className="">
              In Progres
            </option>
            <option value="option3" className="">
              In Review
            </option>
            <option value="option3" className="">
              Done
            </option>
          </select>
          <select className="block w-50 px-4 py-2 border rounded-md shadow-sm focus:ring focus:ring-opacity-50 focus:ring-blue-300 focus:outline-none focus:border-blue-300 transition duration-150 ease-in-out">
            <option value="High" className="bg-red-200">
              High
            </option>
            <option value="Urgent" className="">
              Urgent
            </option>
            <option value="Low" className="">
              Low
            </option>
          </select>
        </div>
        <div className="flex flex-col">
          <input
            type="text"
            className="py-2 pl-4 border border-gray-300 focus:border-blue-500 outline-none rounded"
            value={issue.summary}
          />
        </div>
        <div>
          <ReactQuill
            theme="snow"
            value={markdown}
            onChange={handleMarkdownChange}
            placeholder="Type your Markdown here..."
          />
        </div>
        <div className="border border-gray-300">
          <div
            className="bg-gray-100 bg-opacity-50 p-3 cursor-pointer"
            onClick={handleShowDetails}
          >
            Details
          </div>
          <div className={`p-3 ${showDetails ? "flex" : "hidden"} flex-col`}>
            <div>
              <h4 className="font-semibold">Assignee</h4>
              <div>{issue.assignedTo}</div>
            </div>
            <div>
              <h4 className="font-semibold">Reporter</h4>
              <div>{issue.reporter}</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col flex-1 p-4">
        <h3>Activity</h3>
        <div>
          <p>Show:</p>
          <select>
            <option value="comments">Comments</option>
            <option value="history">History</option>
          </select>
        </div>
        <div className="content">
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-bubble">
              It was said that you would, destroy the Sith, not join them.
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-bubble">
              It was you who would bring balance to the Force
            </div>
          </div>
          <div className="chat chat-start">
            <div className="chat-image avatar">
              <div className="w-10 rounded-full">
                <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
              </div>
            </div>
            <div className="chat-bubble">Not leave it in Darkness</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
