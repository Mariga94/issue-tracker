"use client";
import React from "react";

import { Inter } from "next/font/google";
import "../globals.css";
import isAuthenticated from "@/utils/Auth";
import { redirect } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  if (!isAuthenticated) {
    return (
      <html lang="en">
        <body className={`${inter.className}`}>{children}</body>
      </html>
    );
  }
  return redirect("/");
}
