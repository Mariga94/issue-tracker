import React from "react";
import ProfilePhoto from "@/components/ProfilePhoto";
const page = () => {
  return (
    <div className="flex flex-col gap-4">
      <h2 className="font-semibold text-md">Personal Information</h2>
      <form className="flex flex-col gap-2">
        <div className="flex flex-row gap-2 items-center">
          <div>
            <ProfilePhoto width={96} height={96} />
          </div>
          <button className="btn">Change avatar</button>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <label
              htmlFor=""
              id="firstname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First name
            </label>
            <input
              type="text"
              id="firstname"
              name="firstname"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="">Username</label>
          <input
            type="text"
            className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <button type="submit" className="btn btn-primary justify-left w-20">
          Save
        </button>
      </form>
    </div>
  );
};

export default page;
