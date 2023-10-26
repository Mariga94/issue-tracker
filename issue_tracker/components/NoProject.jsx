import React from "react";

const NoProject = ({handleDisplayProjectForm}) => {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="text-[#9CA3AF]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 10.5v6m3-3H9m4.06-7.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
          />
        </svg>
      </div>
      <h3 className="text-sm text-[#111827] font-semibold leading-5 mt-2">
        No projects
      </h3>
      <p className="text-[#6B7280] text-sm leading-5 mt-1">
        Get started by creating a new project
      </p>
      <button className="btn-primary flex flex-row gap-1 mt-6" onClick={handleDisplayProjectForm}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 4.5v15m7.5-7.5h-15"
          />
        </svg>
        New Project
      </button>
    </div>
  );
};

export default NoProject;
