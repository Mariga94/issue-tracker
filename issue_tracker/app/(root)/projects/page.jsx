"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import CreateProject from "@/components/CreateProject";
import NoProject from "@/components/NoProject";
const projectsData = [
  {
    id: "1",
    favorite: false,
    name: "project 1",
    creator: "john doe",
    created: "2nd October 2023",
    modified: "2nd October 2023",
  },
  {
    id: "2",
    favorite: true,
    name: "project 2",
    creator: "jane doe",
    created: "3rd October 2023",
    modified: "3rd October 2023",
  },
];

const Projects = () => {
  const router = useRouter();
  const [projects, setProjects] = useState([...projectsData]);
  const handleNavigate = (projectId) => {
    router.push(`projects/${projectId}/issues`);
  };
  const [displayForm, setDisplayForm] = useState(false);
  const handleDisplayProjectForm = () => {
    setDisplayForm((prev) => !prev);
  };
  return (
    <section className="min-h-screen flex flex-col gap-8">
      <div className="flex flex-row justify-between items-center">
        <h2 className="text-lg font-semibold leading-6">Projects</h2>
        {projects && (
          <button className="btn btn-primary" onClick={handleDisplayProjectForm}>
            Create project
          </button>
        )}
      </div>
      {displayForm && (
        <CreateProject
          handleDisplayProjectForm={handleDisplayProjectForm}
          displayForm={displayForm}
        />
      )}
      <div>
        {!projects.length ? (
          <NoProject handleDisplayProjectForm={handleDisplayProjectForm} />
        ) : (
          <div className="overflow-x-auto">
            <table className="min-w-full text-xs">
              <thead className="border-b border-gray-700 border-opacity-70 bg-[#F9FAFB] rounded-t-[3rem]">
                <tr className="text-left">
                  <th className="p-3 text-sm">Name</th>
                  <th className="p-3 text-sm">Creator</th>
                  <th className="p-3 text-sm">Created</th>
                  <th className="p-3 text-sm">Modified</th>
                  <th className="p-3 text-sm"></th>
                </tr>
              </thead>
              <tbody>
                {projects.map((project) => {
                  return (
                    <tr
                      className="border-b border-opacity-20 border-gray-700 cursor-pointer hover:bg-gray-100"
                      key={project.id}
                      onClick={() => handleNavigate(project.id)}
                    >
                      <td className="p-3">
                        <p className="text-sm font-semibold">{project.name}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{project.creator}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{project.created}</p>
                      </td>
                      <td className="p-3">
                        <p className="text-sm">{project.modified}</p>
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

export default Projects;
