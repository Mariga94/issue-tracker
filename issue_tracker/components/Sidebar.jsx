"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Transition } from "@headlessui/react";
import Link from "next/link";
const Sidebar = ({ isOpen, toggleSidebar, displayIconsOnly }) => {
  const [sidebarItemSelected, setSidebarItemSelected] = useState("");
  const handleSidebarItemSelected = (name) => {
    setSidebarItemSelected(name);
    // const pathname = usePathname()
  };
  return (
    <div>
      <aside
        className={`flex flex-col bg-white border-r border-[var(--border-color)] text-[var(--text-color)] px-6 gap-5 h-screen lg:w-[18rem]
      fixed lg:static inset-y-0 left-0 lg:z-0 z-50 lg:transform-none shadow-[box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.05)]
      w-[50%]
      transition-transform ease-in-out duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-[-100%]"
      }
      ${displayIconsOnly ? "lg:w-auto" : "lg:w-[18rem]"}
      `}
      >
        <div className="h-16 py-4 flex">
          <Link href="/" className="flex flex-row gap-3 p-2">
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
                d="M3.75 9.776c.112-.017.227-.026.344-.026h15.812c.117 0 .232.009.344.026m-16.5 0a2.25 2.25 0 00-1.883 2.542l.857 6a2.25 2.25 0 002.227 1.932H19.05a2.25 2.25 0 002.227-1.932l.857-6a2.25 2.25 0 00-1.883-2.542m-16.5 0V6A2.25 2.25 0 016 3.75h3.879a1.5 1.5 0 011.06.44l2.122 2.12a1.5 1.5 0 001.06.44H18A2.25 2.25 0 0120.25 9v.776"
              />
            </svg>

            {displayIconsOnly ? (
              ""
            ) : (
              <span className="font-bold">Issue Tracker</span>
            )}
          </Link>
        </div>
        <ul className="h-full flex flex-col gap-4 ">
          <li
            className={`sidebarLi ${
              sidebarItemSelected === "dashboard" ? "selected" : ""
            }`}
            onClick={() => handleSidebarItemSelected("dashboard")}
          >
            <Link
              href="/dashboard"
              className="flex flex-row items-center gap-3 font-semibold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              {displayIconsOnly ? "" : <p>Dashboard</p>}
            </Link>
          </li>
          <li
            className={`sidebarLi ${
              sidebarItemSelected === "projects" ? "selected" : ""
            }`}
            onClick={() => handleSidebarItemSelected("projects")}
          >
            <Link
              href="/projects"
              className="flex flex-row items-center gap-3 font-semibold"
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
                  d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"
                />
              </svg>
              {displayIconsOnly ? "" : <p>Projects</p>}
            </Link>
          </li>
          <li
            className={`sidebarLi ${
              sidebarItemSelected === "teams" ? "selected" : ""
            }`}
            onClick={() => handleSidebarItemSelected("teams")}
          >
            <Link
              href="/teams"
              className="flex flex-row items-center gap-3 font-semibold"
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
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>
              {displayIconsOnly ? "" : <p>Teams</p>}
            </Link>
          </li>
        </ul>
      </aside>
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black bg-opacity-50"
          onClick={toggleSidebar}
        >
          <button
            onClick={toggleSidebar}
            className="absolute top-3 left-2/4 text-[#efeff0] hover:text-[#fff] focus:outline-none p-4"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
