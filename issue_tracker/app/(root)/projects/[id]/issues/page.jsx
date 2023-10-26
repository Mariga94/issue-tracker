"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import NoProject from "@/components/NoProject";

const issueData = [
  {
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
  },
  {
    id: "2",
    project: "Project 2",
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
  },
];
const page = () => {
  const router = useRouter();
  const [issues, setIssues] = useState([...issueData]);

  const handleNavigate = (issueId) => {
    router.push(`issues/${issueId}`);
  };
  return (
    <section className="flex flex-col gap-8">
      <nav aria-label="breadcrumb" className="w-full">
        <ol className="flex h-8 space-x-2">
          <li className="flex items-center">
            <a
              rel="noopener noreferrer"
              href="#"
              title="Back to homepage"
              className="hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="w-5 h-5 pr-1 dark:text-gray-400"
              >
                <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
              </svg>
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <a
              rel="noopener noreferrer"
              href="/projects"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Projects
            </a>
          </li>
          <li className="flex items-center space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 32 32"
              aria-hidden="true"
              fill="currentColor"
              className="w-2 h-2 mt-1 transform rotate-90 fill-current dark:text-gray-600"
            >
              <path d="M32 30.031h-32l16-28.061z"></path>
            </svg>
            <a
              rel="noopener noreferrer"
              href="#"
              className="flex items-center px-1 capitalize hover:underline"
            >
              Project 1
            </a>
          </li>
        </ol>
      </nav>
      <div className="">
        <h2 className="text-lg font-semibold leading-6">Issues</h2>
      </div>
      <div>
        {!issues.length ? (
          <NoProject />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="border-b border-gray-700 border-opacity-70 bg-[#F9FAFB] rounded-t-[3rem]">
                <tr className="text-left">
                  <th className="p-3 text-sm">Type</th>
                  <th className="p-3 text-sm">Summary</th>
                  <th className="p-3 text-sm">Assignee</th>
                  <th className="p-3 text-sm">Reporter</th>
                  <th className="p-3 text-sm">Priority</th>
                  <th className="p-3 text-sm">Status</th>
                  <th className="p-3 text-sm">Created</th>
                  <th className="p-3 text-sm">Updated</th>
                  <th className="p-3 text-sm">Due Date</th>
                  <th className="p-3 text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => {
                  return (
                    <tr
                      className="border-b border-opacity-20 border-gray-700 cursor-pointer hover:bg-gray-100"
                      key={issue.id}
                      onClick={() => handleNavigate(issue.id)}
                    >
                      <td className="p-3">
                        <p className="text-sm">{issue.issueType}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.summary}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.assignedTo}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.reporter}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.priority}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.status}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.createdAt}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.updatedAt}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{issue.dueDate}</p>
                      </td>
                      <td className="p-3">
                        <span className="text-sm">Edit</span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};

export default page;
