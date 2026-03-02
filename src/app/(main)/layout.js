import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "@/components/loader/page";
import { AuthProvider } from "@/context/authContext";
import MainPage from "../MainPage";

export default function MainLayout({ children }) {
  return (
    <Suspense fallback={<Loading />}>
      <AuthProvider>
        <Toaster position="top-right" />
        <MainPage>{children}</MainPage>
      </AuthProvider>
    </Suspense>
  );
}
