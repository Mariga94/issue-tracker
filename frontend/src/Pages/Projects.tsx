import React, { ReactElement, useEffect, useState } from "react";
import "./Projects.css";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import newRequest from "../config/newRequest";
import { formatDateString } from "../utils/formatDate";

interface userData {
  _id: string;
  fullName: string;
  createdAt: string;
  updatedAt: string;
  email: string;
  issues: string[];
  projects: string[];
}
interface ProjectData {
  _id: string;
  name: string;
  user: userData;
  createdAt: Date;
  updatedAt: Date;
  team: string[];
  projects: string[];
}

interface ProjectName {
  name: string;
}

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showForm, setShowForm] = useState<boolean>(false);
  const [isLoading, setisLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<boolean>(false);
  const [projectFormData, setProjectFormData] = useState<ProjectName>({
    name: "",
  });
  const navigateToProject = useNavigate();
  const [projects, setProjects] = useState<ProjectData[]>([]);
  console.log(projects)
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    const filteredProjects = value
      ? projects.filter((project: any) =>
          project.title.toLowerCase().includes(value)
        )
      : projects;
    setFilteredProjects(filteredProjects);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setProjectFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(false);
    try {
      await newRequest.post("/project", { ...projectFormData });
      setSuccess(true);
      setShowForm(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleCreateProjectClick = () => {
    setShowForm((prev) => !prev);
  };

  const handleNavigateToSingleProject = (id: string) => {
    navigateToProject(`/projects/${id}`);
  };

  useEffect(() => {
    let errorTimeout: ReturnType<typeof setTimeout>;
    let successTimeout: ReturnType<typeof setTimeout>;

    if (error) {
      errorTimeout = setTimeout(() => {
        setError("");
      }, 10000);
    }

    if (success) {
      successTimeout = setTimeout(() => {
        setSuccess(false);
      }, 1000);
    }

    return () => {
      clearTimeout(errorTimeout);
      clearTimeout(successTimeout);
    };
  }, [error, success]);

  useEffect(() => {
    const getProjects = async () => {
      setisLoading(true);
      try {
        const { data } = await newRequest.get("/project");
        const newData = await Promise.all(
          data.map(async (obj: any) => {
            if (!obj.user) {
              return obj;
            }
            const { data } = await newRequest.get(`/users/${obj.user}`);
            return {
              ...obj,
              user: data,
            };
          })
        );
        setProjects(newData);
        setisLoading(false);
      } catch (error: unknown) {
        setError((error as any)?.response?.data);
        setisLoading(false);
      }
    };
    getProjects();
  }, []);
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
            <form className="add-people-form" onSubmit={handleSubmit}>
              <div className="issue-form__field">
                <label htmlFor="project-name " className="issue-form__label">
                  Project Name
                </label>
                <input
                  type="text"
                  id=""
                  name="name"
                  onChange={handleOnChange}
                  className="issue-form__text"
                />
              </div>
              <div className="issue-from__button-container">
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
        )}
        <div className="message-container">
          {error && <p className="error-message message">{error}</p>}
          {success && (
            <p className="success-message message w-500">
              Project created successfully
            </p>
          )}
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
            {projects.map((project) => {
              return (
                <tr
                  key={project._id}
                  onClick={() => handleNavigateToSingleProject(project._id)}
                >
                  <td>{project.name}</td>
                  <td>{project.user.fullName}</td>
                  <td>{formatDateString(project.createdAt).date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
