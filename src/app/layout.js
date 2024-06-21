import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Messenger from "@/components/Messenger";
import { montserrat, mont_alt } from "./fonts";

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
        <Header />
        <div>
        {children}
        </div>
        <Messenger />
        <Footer />
        </body>
    </html>
  );
}
