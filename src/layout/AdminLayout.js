"use client";
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RequireAuth from "@/app/lib/RequireAuth";

const AdminLayout = ({ children }) => {
  return (
    <RequireAuth>
   <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <div className="w-[400px] min-h-screen overflow-y-auto border bg-black">
        <Sidebar />
      </div>
      <div className="w-full flex flex-col flex-1">
        <Header /> 
        <div className="flex-1 p-4 min-h-0 overflow-y-auto bg-gray-400">{children}</div>
      </div>
      </div>
      </RequireAuth>
  );
};

export default AdminLayout;
