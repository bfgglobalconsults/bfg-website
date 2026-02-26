import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import "./slider.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Messenger from "@/components/Messenger";
import FixedHeader from "@/components/FixedHeader";
import HeaderWrapper from "@/components/HeadWrapper";
import ClientBanner from "@/components/ClientBanner";
import ContactBanner from "@/components/ContactBanner";
import Script from "next/script";
import MainPage from "./MainPage";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import Loading from "@/components/loader/page";
import { ReduxProvider } from "@/redux/provider";
import MetaPixelTracker from "@/components/PixelTracker";
import { AuthProvider } from "@/context/authContext";
import { connectToMongoDB } from "./lib/db";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--montserrat",
});
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
// const poppins = Poppins({ subsets: ["latin"], variable: "--poppins"});

export const metadata = {
  title: "BFG Consults - Software Development, Market Research, Strategy, & Training Services",
  description: "Management Consulting and Software Development Firm",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${montserrat.variable} ${inter.variable}`} lang="en" suppressHydrationWarning>
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-GNHJW9W4PK"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-GNHJW9W4PK');
          `}
        </Script>
      </head>
      <body className={inter.className} suppressHydrationWarning>
        <MetaPixelTracker />
        {children}
      </body>
    </html>
  );
}
