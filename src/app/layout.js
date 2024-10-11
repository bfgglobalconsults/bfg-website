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
import Script from "next/script";


const inter = Inter({ subsets: ["latin"], variable: "--inter"});
// const poppins = Poppins({ subsets: ["latin"], variable: "--poppins"});

export const metadata = {
  title: "BFG Global Consulting, LLC",
  description: "Management Consulting and Technology Firm",
};

export default function RootLayout({ children }) {
  
  
  return (
    <html className={`${montserrat.variable} ${inter.variable}`} lang="en">
      <head>
<Script async src="https://www.googletagmanager.com/gtag/js?id=G-C7W6VZF2T3"></Script>
        <Script id="google-analytics">
          {
            `
            window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-C7W6VZF2T3');
            `
          }
  
</Script>
      </head>
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
