import React, { useState } from "react";
import "./Projects.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface ProjectData {
  id: string;
  title: string;
  lead: string;
  createdAt: string;
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [projectFormData, setProjectFormData] = useState<ProjectData>();
  const navigateToProject = useNavigate();
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

  const handleCreateProjectClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleProjectFormData = () => {
    return undefined;
  };

  const handleNavigateToSingleProject = (id: number) => {
    navigateToProject(`/projects/${id}`);
  };

  return (
    <div className="container">
      <div className="projects">
        <h2 className="page-title">Projects</h2>
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
          <button className="create-btn" onClick={handleCreateProjectClick}>
            Create Project
          </button>
        </div>
        {showForm && (
          <div className="form-overlay">
            <div className="form-container">
              <form className="project__form">
                <div className="project__form-group">
                  <label htmlFor="project-name " className="project__form-name">
                    Project Name
                  </label>
                  <input
                    type="text"
                    name="project-name"
                    className="project__form-input"
                  />
                </div>
                <div className="button__container">
                  <button
                    className="close-button"
                    onClick={() => setShowForm(false)}
                  >
                    Cancel
                  </button>
                  <button className="submit-button" onClick={() => undefined}>
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Project Lead</th>
              <th>Created</th>
            </tr>
          </thead>
          <tbody>
            {filteredProjects.length ? (
              filteredProjects.map((project) => {
                return (
                  <tr
                    key={project.id}
                    onClick={() => handleNavigateToSingleProject(project.id)}
                  >
                    <td>{project.title}</td>
                    <td>{project.lead}</td>
                    <td>{project.createdAt}</td>
                  </tr>
                );
              })
            ) : (
              <tr>Search input exists</tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
