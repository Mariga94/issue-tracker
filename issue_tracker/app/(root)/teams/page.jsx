"use client";
import React, { useState, Fragment, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import CreateTeam from "@/components/CreateTeam";

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);
  const handleDisplayForm = () => {
    setDisplayForm(!displayForm);
    setDisplayForm(!displayForm);
  };
  return (
    <div>
      <div className="flex flex-row items-center justify-between">
        <h2 className="font-semibold text-lg leading-6">Teams</h2>
        <button className="btn btn-primary" onClick={handleDisplayForm}>
          Create Team
        </button>
      </div>
      <div className="">
        {teams.length ? (
          <div className="overflow-x-auto">
            <table className="table">
              {/* head */}
              <thead>
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <th>Name</th>
                  <th>Members</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center space-x-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img
                            src="/tailwind-css-component-profile-2@56w.png"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">Hart Hagerty</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    Zemlak, Daniel and Leannon
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      Desktop Support Technician
                    </span>
                  </td>

                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              </tbody>
              {/* foot */}
              <tfoot>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Members</th>
                  <th></th>
                </tr>
              </tfoot>
            </table>
          </div>
        ) : (
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
              No Teams
            </h3>
            <p className="text-[#6B7280] text-sm leading-5 mt-1">
              Get started by creating a new Team
            </p>
            <button
              className="btn flex flex-row gap-1 mt-6"
              onClick={handleDisplayForm}
            >
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
              Create Team
            </button>
          </div>
        )}
      </div>
      {displayForm && (
        <CreateTeam
          displayForm={displayForm}
          handleDisplayForm={handleDisplayForm}
        />
      )}
    </div>
  );
};
export default Teams;
