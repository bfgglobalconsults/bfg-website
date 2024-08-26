"use client";

import { usePathname } from "next/navigation";
import Header from "@/components/Header";
import FixedHeader from "@/components/FixedHeader";

const HeaderWrapper = () => {
    
  const pathname = usePathname();
    const isIndexPage = pathname === "/";
    
     console.log(`Current Path: ${pathname}`); // Debugging log
  console.log(`Rendering: ${isIndexPage ? "Header" : "FixedHeader"}`); //

  return isIndexPage ? <Header /> : <FixedHeader />;
};

export default HeaderWrapper;
