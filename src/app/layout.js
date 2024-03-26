import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--inter"});
// const poppins = Poppins({ subsets: ["latin"], variable: "--poppins"});

export const metadata = {
  title: "BFG Global Consulting, LLC",
  description: "Business Management and Consulting Firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Header />
        <div>
        {children}
        </div>
        <Footer />
        </body>
    </html>
  );
}
