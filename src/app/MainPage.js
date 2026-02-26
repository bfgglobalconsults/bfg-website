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
  // Check for /admins (your custom admin) but NOT /admin (Payload admin)
  const isCustomAdminPage = pathname.startsWith("/admins");
  const isPayloadAdmin = pathname.startsWith("/admin") && !pathname.startsWith("/admins");
  const isLogin = pathname === "/login";
  const isLandingPage = pathname === "/landing";

  if (isLogin) {
    return <Login />
  }

  // Let Payload admin render without any wrapper
  if (isPayloadAdmin) {
    return <>{children}</>;
  }

  // Your custom admin dashboard uses AdminLayout
  if (isCustomAdminPage) {
    return <AdminLayout>{children}</AdminLayout>;
  }

  if (isLandingPage) {
    return <>{children}</>;
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
