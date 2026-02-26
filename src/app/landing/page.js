"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Logo from "../bfg-logo.png";

export default function LandingPage() {
  const router = useRouter();

  const handleRegionSelect = (region) => {
    // Set cookie to remember region selection
    document.cookie = "region_selected=true; path=/; max-age=31536000"; // 1 year
    
    if (region === "nigeria") {
      router.push("/");
    } else if (region === "uk") {
      router.push("/uk");
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#041926] via-[#083B5A] to-[#127DC0] flex flex-col relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-[#E26015] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-[#127DC0] rounded-full blur-3xl"
        />
      </div>

      {/* Header with Logo */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="w-full flex justify-center pt-12 relative z-10"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-[150px] h-[120px] bg-white rounded-2xl p-4 shadow-2xl"
        >
          <Image
            src={Logo}
            alt="BFG Logo"
            className="w-full h-full object-contain"
          />
        </motion.div>
      </motion.div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col items-center justify-center px-4 py-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-center max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            Connecting Business Growth Across Nigeria and the UK
          </h1>
          <p className="text-lg md:text-xl text-gray-200 mb-12 max-w-3xl mx-auto">
            Strategic consulting, digital solutions, and data-driven insights
            empowering ambitious businesses in Nigeria and the United Kingdom.
          </p>

          {/* Region Selection Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 max-w-2xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#041926] mb-4">
              Choose Your Location
            </h2>
            <p className="text-gray-600 mb-8">
              Select your region to view tailored services and solutions.
            </p>

            <div className="flex flex-col md:flex-row gap-6 justify-center">
              {/* Nigeria Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRegionSelect("nigeria")}
                className="flex-1 bg-[#041926] hover:bg-[#E26015] text-white font-semibold py-6 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <span className="text-4xl">🇳🇬</span>
                  <span className="text-xl">Nigeria</span>
                </div>
              </motion.button>

              {/* UK Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleRegionSelect("uk")}
                className="flex-1 bg-[#041926] hover:bg-[#E26015] text-white font-semibold py-6 px-8 rounded-2xl transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <div className="flex flex-col items-center gap-3">
                  <span className="text-4xl">🇬🇧</span>
                  <span className="text-xl">United Kingdom</span>
                </div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Footer with Social Media */}
      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full py-8 px-4"
      >
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center gap-6">
            <p className="text-white text-sm font-semibold">
              Let's Connect | Follow Us
            </p>
            <div className="flex gap-6">
              <Link
                href="https://www.linkedin.com/company/bfgconsults/"
                target="_blank"
                className="hover:scale-110 transition-transform"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
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

            <div className="text-center mt-4">
              <p className="text-white text-xs">
                © 2018 - {new Date().getFullYear()}{" "}
                <span className="font-semibold">BFG Global Consults™</span>. All
                Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </motion.footer>
    </div>
  );
}
