"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Logo from "./bfg-logo.png";

export default function Main() {
  const router = useRouter();

  const handleRegionSelect = (region) => {
    if (region === "nigeria") {
      router.push("/ng");
    } else if (region === "uk") {
      router.push("/uk");
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header with Logo */}
      <header className="w-full py-6 px-8 lg:px-16 absolute top-0 left-0 z-10">
        <div className="max-w-7xl mx-auto">
          <Link href="/">
            <div className="w-[100px] h-[80px] cursor-pointer">
              <Image
                src={Logo}
                alt="BFG Consults Logo"
                className="w-full h-full object-contain"
                priority
              />
            </div>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-4 py-20 relative">
        <div className="max-w-5xl w-full text-center">
          {/* Small Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-gray-100 rounded-full px-4 py-2 mb-8"
          >
            <div className="flex -space-x-2">
              <div className="w-6 h-6 rounded-full bg-[#127DC0] border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-[#E26015] border-2 border-white"></div>
              <div className="w-6 h-6 rounded-full bg-[#041926] border-2 border-white"></div>
            </div>
            <span className="text-sm text-gray-600">500+ Satisfied Customers</span>
          </motion.div>

          {/* Hero Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#041926] mb-6 leading-tight">
              Business Growth Feels Empty Without{" "}
              <span className="text-[#127DC0]">Strategic Vision</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-3xl mx-auto">
              Strategic consulting, digital solutions, and data-driven insights empowering ambitious businesses in Nigeria and the United Kingdom.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <button
              onClick={() => handleRegionSelect("nigeria")}
              className="px-8 py-4 bg-[#127DC0] hover:bg-[#0d5f94] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🇳🇬 Nigeria Services
            </button>
            <button
              onClick={() => handleRegionSelect("uk")}
              className="px-8 py-4 bg-[#041926] hover:bg-[#E26015] text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              🇬🇧 UK Services
            </button>
          </motion.div>

          {/* Stats Cards */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="bg-[#041926] rounded-3xl p-8 shadow-2xl"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {/* Stat 1 */}
              <div className="bg-[#127DC0] rounded-2xl p-6 text-white relative overflow-hidden group hover:scale-105 transition-transform duration-300">
                <div className="absolute top-4 right-4 text-4xl opacity-20">🚀</div>
                <div className="relative z-10">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-sm opacity-90">Happy Clients Worldwide</div>
                </div>
              </div>

              {/* Stat 2 */}
              <div className="bg-white rounded-2xl p-6 text-[#041926] hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">15+</div>
                <div className="text-sm text-gray-600">Years Experience</div>
              </div>

              {/* Stat 3 */}
              <div className="bg-white rounded-2xl p-6 text-[#041926] hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">2</div>
                <div className="text-sm text-gray-600">Countries Served</div>
              </div>

              {/* Stat 4 */}
              <div className="bg-white rounded-2xl p-6 text-[#041926] hover:scale-105 transition-transform duration-300">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-sm text-gray-600">Client Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full bg-gradient-to-b from-[#127DC0] to-[#083B5A] py-8 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center gap-6">
            {/* Brief Intro */}
            <p className="text-white text-sm max-w-2xl">
              BFG Global Consults empowers businesses with strategic consulting, digital solutions, 
              and data-driven insights across Nigeria and the United Kingdom.
            </p>

            {/* Social Media Icons */}
            <div className="flex gap-6 justify-center">
              <Link
                href="https://www.linkedin.com/company/bfgconsults/"
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#fff"
                    fillRule="evenodd"
                    d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.8 7.8 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.3 6.3 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.instagram.com/bfgconsults/"
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <circle cx="17" cy="7" r="1.5" fill="#fff" />
                  <g
                    fill="none"
                    stroke="#fff"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z" />
                    <path d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4" />
                  </g>
                </svg>
              </Link>
              <Link
                href="https://facebook.com/BFGConsults"
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="none"
                    stroke="#fff"
                    strokeLinejoin="round"
                    strokeWidth="3.8"
                    d="M36 12.6h-6.013c-1.086 0-1.967.88-1.967 1.967v6.9H36l-1.169 7.597h-6.81V43h-8.776V29.064H12v-7.597h7.151l.094-7.21l-.013-1.31A7.87 7.87 0 0 1 27.099 5H36z"
                  />
                </svg>
              </Link>
              <Link
                href="https://www.youtube.com/@BFGConsults"
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path
                      fill="#fff"
                      d="M12 4c.855 0 1.732.022 2.582.058l1.004.048l.961.057l.9.061l.822.064a3.8 3.8 0 0 1 3.494 3.423l.04.425l.075.91c.07.943.122 1.971.122 2.954s-.052 2.011-.122 2.954l-.075.91l-.04.425a3.8 3.8 0 0 1-3.495 3.423l-.82.063l-.9.062l-.962.057l-1.004.048A62 62 0 0 1 12 20a62 62 0 0 1-2.582-.058l-1.004-.048l-.961-.057l-.9-.062l-.822-.063a3.8 3.8 0 0 1-3.494-3.423l-.04-.425l-.075-.91A41 41 0 0 1 2 12c0-.983.052-2.011.122-2.954l.075-.91l.04-.425A3.8 3.8 0 0 1 5.73 4.288l.821-.064l.9-.061l.962-.057l1.004-.048A62 62 0 0 1 12 4m0 2c-.825 0-1.674.022-2.5.056l-.978.047l-.939.055l-.882.06l-.808.063a1.8 1.8 0 0 0-1.666 1.623C4.11 9.113 4 10.618 4 12s.11 2.887.227 4.096c.085.872.777 1.55 1.666 1.623l.808.062l.882.06l.939.056l.978.047c.826.034 1.675.056 2.5.056s1.674-.022 2.5-.056l.978-.047l.939-.055l.882-.06l.808-.063a1.8 1.8 0 0 0 1.666-1.623C19.89 14.887 20 13.382 20 12s-.11-2.887-.227-4.096a1.8 1.8 0 0 0-1.666-1.623l-.808-.062l-.882-.06l-.939-.056l-.978-.047A61 61 0 0 0 12 6m-2 3.575a.6.6 0 0 1 .819-.559l.081.04l4.2 2.424a.6.6 0 0 1 .085.98l-.085.06l-4.2 2.425a.6.6 0 0 1-.894-.43l-.006-.09z"
                    />
                  </g>
                </svg>
              </Link>
              <Link
                href="https://x.com/BFGConsults"
                target="_blank"
                className="hover:scale-110 transition-transform"
                aria-label="X (Twitter)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 14 14"
                >
                  <g fill="none">
                    <g clipPath="url(#primeTwitter0)">
                      <path
                        fill="#fff"
                        d="M11.025.656h2.147L8.482 6.03L14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71zm-.755 11.4h1.19L3.78 1.877H2.504z"
                      />
                    </g>
                    <defs>
                      <clipPath id="primeTwitter0">
                        <path fill="#fff" d="M0 0h14v14H0z" />
                      </clipPath>
                    </defs>
                  </g>
                </svg>
              </Link>
            </div>

            {/* Copyright */}
            <p className="text-white/80 text-xs">
              © {new Date().getFullYear()} BFG Global Consults™. All Rights Reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
