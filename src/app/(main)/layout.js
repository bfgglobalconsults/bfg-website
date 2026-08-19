import { Suspense } from "react";
import { Toaster } from "react-hot-toast";
import Loading from "@/components/loader/page";
import { AuthProvider } from "@/context/authContext";
import MainPage from "../MainPage";
import { Inter, Montserrat, Pacifico, Dancing_Script } from "next/font/google";

import Script from "next/script";
import MetaPixelTracker from "@/components/PixelTracker";
import "../globals.css";
import "../slider.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  variable: "--montserrat",
});

const pacifico = Pacifico({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-pacifico', // Defines the CSS variable name
});

const dancing_script = Dancing_Script({
  subsets: ['latin'],
  weight: '400',
  variable: '--font-dancing-script',
});

const inter = Inter({ subsets: ["latin"], variable: "--inter" });

export const metadata = {
  title: "BFG Consults - Market Research, Software Development, Strategy, & Training Services",
  description: "Management Consulting and Software Development Firm",
};

export default function MainLayout({ children }) {
  return (
    <html className={`${montserrat.variable} ${inter.variable} ${pacifico.variable} ${dancing_script.variable}`} lang="en" suppressHydrationWarning>
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
        <Suspense fallback={<Loading />}>
          <AuthProvider>
            <Toaster position="top-right" />
            <MainPage>{children}</MainPage>
          </AuthProvider>
        </Suspense>
      </body>
    </html>
  );
}
