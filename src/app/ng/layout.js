import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "@/components/loader/page";
import { AuthProvider } from "@/context/authContext";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NgLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <Toaster position="top-right" />
        <Header />
        <main>{children}</main>
        <Footer />
      </AuthProvider>
    </Suspense>
  );
}
