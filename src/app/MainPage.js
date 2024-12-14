"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Login from "@/app/login/page";
import SalesHeader from "@/components/sales-components/SalesHeader";
import HeaderWrapper from "@/components/HeadWrapper";
import Messenger from "@/components/Messenger";
import ClientBanner from "@/components/ClientBanner";
import ContactBanner from "@/components/ContactBanner";
import Footer from "@/components/Footer";
import SalesFooter from "@/components/sales-components/SalesFooter";
import AdminLayout from "@/layout/AdminLayout";

const MainPage = ({ children }) => {
  const pathname = usePathname();
  const isSalesPage = pathname === "/sales-masterclass";
  const isAdminPage = pathname.startsWith("/admin");
  const isLogin = pathname === "/login";

  if (isLogin) {
    return <Login />
  }

  if (isAdminPage) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  return (
    <>
      {isSalesPage ? <SalesHeader /> :  <HeaderWrapper />}
      <div>{children}</div>
      {!isSalesPage && <Messenger />}
      {!isSalesPage && <ClientBanner />}
      {!isSalesPage && <ContactBanner />}
      {isSalesPage ? <SalesFooter /> : <Footer />}
    </>
  );
};

export default MainPage;
