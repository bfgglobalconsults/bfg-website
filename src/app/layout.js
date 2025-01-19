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

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--montserrat",
});
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
// const poppins = Poppins({ subsets: ["latin"], variable: "--poppins"});

export const metadata = {
  title: "BFG Global Consulting, LLC",
  description: "Management Consulting and Software Development Firm",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${montserrat.variable} ${inter.variable}`} lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-GNHJW9W4PK"
        ></Script>
        <Script id="google-analytics">
          {`
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

          gtag('config', 'G-GNHJW9W4PK');
`}
        </Script>
      </head>

      <body className={inter.className}>
        <Suspense fallback={<Loading />}>
          <Toaster position="top-right" />

          <MainPage>{children}</MainPage>
        </Suspense>
      </body>
    </html>
  );
}
