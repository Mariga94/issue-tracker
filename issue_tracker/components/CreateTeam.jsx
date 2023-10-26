import React from "react";

const CreateTeam = ({ displayForm, handleDisplayForm }) => {
  return (
    <div
      aria-modal="true"
      role="dialog"
      className={`flex flex-col lg:m-10 sm:items-center sm:mt-[-10rem] relative ${
        displayForm ? "" : ""
      }`}
    >
      <form className="px-8 sm:px-4 pt-6 pb-8 mb-4 relative z-50 lg:w-[50%] bg-white shadow-md rounded flex flex-col gap-4">
        <h3 className="font-semibold text-xl">Create a team</h3>
        <p>Bring everyone together with one team.</p>
        <div className="flex flex-col">
          <label
            htmlFor="teamname"
            aria-required
            required
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Team name
          </label>
          <input
            type="text"
            id="teamname"
            name="teamname"
            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            placeholder="e.g Backend Team, Redisign Project"
          />
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="invite"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Invite people to your team
          </label>
          <input
            type="email"
            id="invite"
            className="p-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex flex-row gap-2 justify-end">
          <button className="btn" onClick={handleDisplayForm}>Cancel</button>
          <button className="btn btn-primary bg-pastel-primary">Create a team</button>
        </div>
      </form>
      {displayForm && (
        <div
          className="fixed inset-0 z-30 bg-gray-500 bg-opacity-75 transition-opacity"
          onClick={handleDisplayForm}
        ></div>
      )}
    </div>
  );
};

export default CreateTeam;
