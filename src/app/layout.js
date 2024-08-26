import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Messenger from "@/components/Messenger";
import { montserrat, mont_alt } from "./fonts";
import FixedHeader from "@/components/FixedHeader";
import HeaderWrapper from "@/components/HeadWrapper";
import ClientBanner from "@/components/ClientBanner";
import ContactBanner from "@/components/ContactBanner";


const inter = Inter({ subsets: ["latin"], variable: "--inter"});
// const poppins = Poppins({ subsets: ["latin"], variable: "--poppins"});

export const metadata = {
  title: "BFG Global Consulting, LLC",
  description: "Business Management and Consulting Firm",
};

export default function RootLayout({ children }) {
  
  
  return (
    <html className={`${montserrat.variable} ${inter.variable}`} lang="en">
      <body>
       <HeaderWrapper /> 
        <div>
        {children}
        </div>
        <Messenger />
        <ClientBanner />
        <ContactBanner />
        <Footer />
        </body>
    </html>
  );
}
