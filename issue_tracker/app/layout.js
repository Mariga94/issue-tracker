"use client";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { useState } from "react";
// export const metadata = {
//   title: "Issue Tracker",
//   description: "Track issues with no hassle",
// };

export default function RootLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <html lang="en">
      <body className="flex">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar}/>
        <main className="flex flex-col w-full">
          <Navbar toggleSidebar={toggleSidebar} />
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
