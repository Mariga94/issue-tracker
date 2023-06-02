import React, { useState } from "react";
import "./Project.css";
import { FiSearch } from "react-icons/fi";

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [projects, setProjects] = useState([
    {
      id: 1,
      title: "Project",
      lead: "Leader1",
      createdAt: "10th May 2020",
      modified: "N/A",
    },
    {
      id: 2,
      title: "Project 2",
      lead: "Leader2",
      createdAt: "21st June 2021",
      modified: "N/A",
    },
    {
      id: 3,
      title: "Project 3",
      lead: "Leader3",
      createdAt: "21st June 2021",
      modified: "N/A",
    },
    {
      id: 4,
      title: "Project 4",
      lead: "Leader4",
      createdAt: "21st June 2021",
      modified: "N/A",
    },
  ]);
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredProjects = value
      ? projects.filter((project) =>
          project.title.toLowerCase().includes(value)
        )
      : projects;
    setFilteredProjects(filteredProjects);
  };

  console.log(searchTerm)
  console.log(filteredProjects)

  return (
    <div className="container">
      <div className="projects">
        <h2 className="page-title">Projects</h2>
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
              <th>Title</th>
              <th>Project Lead</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length ? filteredProjects.map((project) => {
              return (
                <tr key={project.id}>
                  <td>{project.title}</td>
                  <td>{project.lead}</td>
                  <td>{project.createdAt}</td>
                </tr>
              );
            }): <tr>Search input exists</tr>}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
