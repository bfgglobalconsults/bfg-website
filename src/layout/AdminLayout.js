"use client";
import React from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import RequireAuth from "@/app/lib/RequireAuth";
import { AppSidebar } from "@/components/app-sidebar";
import { NavMain } from "@/components/nav-main";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

const AdminLayout = ({ children }) => {
  return (
    <SidebarProvider>

    <RequireAuth>
   <div className="flex flex-row bg-neutral-100 h-screen w-screen overflow-hidden">
      <div className=" min-h-screen overflow-y-auto border">
        <AppSidebar />
      </div>
      <div className="w-full flex flex-col flex-1">
        <NavMain /> 
        <div className="flex-1 p-4 min-h-0 overflow-y-auto bg-gray-100">{children}</div>
      </div>
      </div>
      </RequireAuth>
      </SidebarProvider>

  );
};

export default AdminLayout;
