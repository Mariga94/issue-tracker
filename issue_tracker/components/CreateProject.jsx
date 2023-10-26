import React from "react";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
const CreateProject = ({ handleDisplayProjectForm, displayForm }) => {
  return (
    <div
      aria-modal="true"
      role="dialog"
      className={`flex justify-center lg:m-20 sm:items-center sm:mt-20 relative ${
        displayForm ? "" : ""
      }`}
    >
      <form class="bg-white shadow-md rounded px-8 sm:px-4 pt-6 pb-8 mb-4 relative z-50 lg:w-[50%]">
        <h2 className="text-xl font-semibold">Add New Project</h2>

        <div className="mb-4">
          <label htmlFor="projectname" className="block text-sm text-gray mb-2">
            Project Name
          </label>
          <input
            type="text"
            className="shadow appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus-visible:ring"
            id="projectname"
          />
        </div>
        <div className="flex flex-row justify-end gap-4">
          <button className="btn" onClick={handleDisplayProjectForm}>
            Cancel
          </button>
          <button className="btn btn-primary">Create Project</button>
        </div>
      </form>
      {displayForm && (
        <div
          className="fixed inset-0 z-40 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={handleDisplayProjectForm}
        ></div>
      )}
    </div>
  );
};

export default CreateProject;
