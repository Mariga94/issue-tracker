"use client";
import "../globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [displayIconsOnly, setDisplayIconsOnly] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const toggleDisplayIconsOnly = () => {
    setDisplayIconsOnly(!displayIconsOnly);
  };
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar
          isOpen={isSidebarOpen}
          toggleSidebar={toggleSidebar}
          displayIconsOnly={displayIconsOnly}
        />
        <main className="flex flex-col w-full">
          <Navbar
            toggleSidebar={toggleSidebar}
            toggleDisplayIconsOnly={toggleDisplayIconsOnly}
            displayIconsOnly={displayIconsOnly}
          />
          <div className="px-8 py-10">{children}</div>
        </main>
      </body>
    </html>
  );
}

/**
 *
 * Note:
 * Root layout should always be rendered from the server side. Therefore find a way
 * to not useState
 */
