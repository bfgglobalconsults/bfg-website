"use client";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Logo from "@/app/bfg-logo.png";

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <Link href="/">
            <div className="w-32 h-32">
              <Image
                src={Logo}
                alt="BFG Consults Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </Link>
        </div>

        {/* 404 Animation */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-gray-200 leading-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-[#E26015] w-24 h-24 rounded-full animate-pulse opacity-20"></div>
          </div>
        </div>

        {/* Message */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Page Not Found
        </h2>
        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Oops! The page you're looking for seems to have wandered off. Let's get you back on track.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.back()}
            className="px-8 py-3 bg-white text-gray-700 border-2 border-gray-300 rounded-lg font-semibold hover:bg-gray-50 hover:border-[#E26015] hover:text-[#E26015] transition-all duration-200 w-full sm:w-auto"
          >
            Go Back
          </button>
          <Link href="/">
            <button className="px-8 py-3 bg-[#E26015] text-white rounded-lg font-semibold hover:bg-black transition-all duration-200 w-full sm:w-auto">
              Go to Homepage
            </button>
          </Link>
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500 mb-4">Quick Links:</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link href="/about" className="text-[#E26015] hover:underline">
              About Us
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/solutions" className="text-[#E26015] hover:underline">
              Solutions
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/industry" className="text-[#E26015] hover:underline">
              Industries
            </Link>
            <span className="text-gray-300">|</span>
            <Link href="/contact" className="text-[#E26015] hover:underline">
              Contact
            </Link>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-[#E26015] rounded-full opacity-10 animate-bounce"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#E26015] rounded-full opacity-10 animate-pulse"></div>
      </div>
    </div>
  );
}
