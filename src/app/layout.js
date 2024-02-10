import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--inter"});

export const metadata = {
  title: "BFG Global Consulting, LLC",
  description: "Business Management and Consulting Firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  );
}
