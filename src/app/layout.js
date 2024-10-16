import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Messenger from "@/components/Messenger";
import FixedHeader from "@/components/FixedHeader";
import HeaderWrapper from "@/components/HeadWrapper";
import ClientBanner from "@/components/ClientBanner";
import ContactBanner from "@/components/ContactBanner";
import Script from "next/script";
import MainPage from "./MainPage";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200","300","400","500","600","700"],
  variable: "--montserrat",
});
const inter = Inter({ subsets: ["latin"], variable: "--inter" });
// const poppins = Poppins({ subsets: ["latin"], variable: "--poppins"});

export const metadata = {
  title: "BFG Global Consulting, LLC",
  description: "Management Consulting and Technology Firm",
};

export default function RootLayout({ children }) {
  return (
    <html className={`${montserrat.variable} ${inter.variable}`} lang="en">
      <head>
        
        <Script
          async
          src="https://cdn.serlzo.com/public/formv2/pixel.min.js"
        ></Script>
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
        <MainPage>{children}</MainPage>
      </body>
    </html>
  );
}
