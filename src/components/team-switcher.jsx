"use client"

import * as React from "react"
import { ChevronsUpDown, Plus } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import WhiteLogo from "../../public/assets/white-logo.png";
import Image from "next/image"


export function TeamSwitcher() {


  return (
    <SidebarMenu>
      <SidebarMenuItem>
       
          
            
                
                 <div className="w-[120px] h-[80px]">
                        <Image
                          alt="logo"
                          src={WhiteLogo}
                          className="w-full h-full object-fit"
                        />
                      </div>
            
          
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
