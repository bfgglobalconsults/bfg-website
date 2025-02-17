import Image from "next/image";
import Link from "next/link";
import React from "react";
import WhiteLogo from "../app/bfg-whitelogo.png";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <div className="w-full bg-gradient-to-b from-[#127DC0] to-[#083B5A] ">
        <div className="py-[50px] px-[30px] lg:px-[40px]">
          <div className="w-full flex flex-col lg:flex-row gap-[30px]">
            <div className="w-[100%] lg:w-[17%]">
              <div className="flex w-[100%] lg:w-[100px] justify-normal">
                <Link href="/">
                  <div className="w-[100px] h-[90px]">
                    <Image
                      src={WhiteLogo}
                      alt="logo"
                      className="w-full h-full object-fit"
                    />
                  </div>
                </Link>
              </div>
              <div className="">
                <div>
                <Link href="/contact">
                <p className="text-white text-sm mt-4 hover:text-[#E26015]">
                 Discuss Your Project
                  </p>
                </Link>
                <Link href="/about">
                <p className="text-white text-sm my-2 hover:text-[#E26015]">
                Learn about BFG Consults
                  </p>
                </Link>
                <Link href="/careers">
                <p className="text-white text-sm my-2 hover:text-[#E26015]">
                Explore Careers
                  </p>
                </Link>
                 <Link href="/team">
                <p className="text-white text-sm my-2 hover:text-[#E26015]">
                View our Agile Leaders
                  </p>
                </Link>
                </div>
              </div>
              <div>
                 <p className="text-white text-sm mt-10 ">
                Let’s Connect | Follow Us
                  </p>
              <div className="flex gap-4 my-4">
                <div>
                  <Link
                    href="https://www.linkedin.com/company/bfgconsults/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#fff"
                        fill-rule="evenodd"
                        d="M5 1.25a2.75 2.75 0 1 0 0 5.5a2.75 2.75 0 0 0 0-5.5M3.75 4a1.25 1.25 0 1 1 2.5 0a1.25 1.25 0 0 1-2.5 0m-1.5 4A.75.75 0 0 1 3 7.25h4a.75.75 0 0 1 .75.75v13a.75.75 0 0 1-.75.75H3a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V8.75zM9.25 8a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 .75.75v.434l.435-.187a7.8 7.8 0 0 1 2.358-.595C20.318 7.4 22.75 9.58 22.75 12.38V21a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75v-7a1.25 1.25 0 0 0-2.5 0v7a.75.75 0 0 1-.75.75h-4a.75.75 0 0 1-.75-.75zm1.5.75v11.5h2.5V14a2.75 2.75 0 1 1 5.5 0v6.25h2.5v-7.87c0-1.904-1.661-3.408-3.57-3.234a6.3 6.3 0 0 0-1.904.48l-1.48.635a.75.75 0 0 1-1.046-.69V8.75z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.instagram.com/bfgconsults/"
                    target="_blank"
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
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                      >
                        <path d="M16 3c2.76 0 5 2.24 5 5v8c0 2.76 -2.24 5 -5 5h-8c-2.76 0 -5 -2.24 -5 -5v-8c0 -2.76 2.24 -5 5 -5h4Z" />
                        <path d="M12 8c2.21 0 4 1.79 4 4c0 2.21 -1.79 4 -4 4c-2.21 0 -4 -1.79 -4 -4c0 -2.21 1.79 -4 4 -4" />
                      </g>
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link href="https://facebook.com/BFGConsults" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="none"
                        stroke="#fff"
                        stroke-linejoin="round"
                        stroke-width="3.8"
                        d="M36 12.6h-6.013c-1.086 0-1.967.88-1.967 1.967v6.9H36l-1.169 7.597h-6.81V43h-8.776V29.064H12v-7.597h7.151l.094-7.21l-.013-1.31A7.87 7.87 0 0 1 27.099 5H36z"
                      />
                    </svg>
                  </Link>
                </div>
                <div>
                  <Link
                    href="https://www.youtube.com/@BFGConsults"
                    target="_blank"
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
                </div>
                <div>
                  <Link href="https://x.com/BFGConsults" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 14 14"
                    >
                      <g fill="none">
                        <g clip-path="url(#primeTwitter0)">
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
              </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-[10px] w-[100%] lg:w-[80%]">
              <div className="text-white w-[40%] lg:w-[23%] my-4">
                <h3 className="font-semibold">About Us</h3>
                <p
                  className="my-2 text-sm hover:text-[#E26015]"
                >
                  <Link href="/industry">Who We Are</Link>
                </p>
                <p className="my-2 text-sm hover:text-[#E26015]">Our Clients</p>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/team">Our Team</Link>
                </p>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/industry/projects">Project Executed</Link>
                </p>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/award-recognition">Awards & Recognition</Link>
                </p>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/governance-culture">Governance & Culture</Link>
                </p>
              </div>

              <div className="text-white w-[50%] lg:w-[23%] my-4">
                <h3 className="font-semibold">Solutions</h3>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/solutions/research-analytics">
                    Research & Analytics
                  </Link>
                </p>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/solutions/business-strategy">
                    Strategy & Operations Transformation
                  </Link>
                </p>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/solutions/training-development">
                    Training & Development
                  </Link>
                </p>
                <p className="my-2 text-sm hover:text-[#E26015]">
                  <Link href="/solutions/information-technology">
                    Technology & Software Development
                  </Link>
                </p>
              </div>

              <div className="text-white w-[40%] lg:w-[23%] my-4">
                <h3 className="font-semibold">Industry</h3>
                <p className="my-2 text-sm hover:text-[#E26015]">Consumer & Retail Market</p>
                <p className="my-2 text-sm hover:text-[#E26015]">Hospitality & Tourism</p>
                <p className="my-2 text-sm hover:text-[#E26015]">Financial Services</p>
                <p className="my-2 text-sm hover:text-[#E26015]">Real Estate</p>
                <p className="my-2 text-sm hover:text-[#E26015]">Information Technology</p>
                <p className="my-2 text-sm hover:text-[#E26015]">Government & Non- for - Profit</p>
              </div>

              <div className="text-white w-[50%] lg:w-[23%] my-4">
                <h3 className="font-semibold">Programs</h3>
                <Link href="/program/sme-webinar"><p className="my-2 text-sm hover:text-[#E26015]">SME Webinar Series</p></Link>
                 <Link href="/program/ai-advantage"><p className="my-2 text-sm hover:text-[#E26015]">The AI Advantage</p></Link>

                <Link href="/program/dialectics"><p className="my-2 text-sm hover:text-[#E26015]">The Dialetics</p></Link>
                 <Link href="/program/leadership-summit"><p className="my-2 text-sm hover:text-[#E26015]">
                  Emerging Marketplace Leadership Summit
                </p>
                  </Link>
                <p className="my-2 text-sm hover:text-[#E26015]">Women in Tech</p>

                <Link href="/program/sme-klinic"><p className="my-2 text-sm hover:text-[#E26015]">SME Klinic</p></Link>
                <p className="my-2 text-sm hover:text-[#E26015]">Tech Achievers Graduate Scheme</p>
              </div>

              <div className="text-white w-[40%] lg:w-[23%] my-4">
                <h3 className="font-semibold">Resources</h3>
                <Link href="/insight/news"><p className="my-2 text-sm hover:text-[#E26015]">News</p></Link>
                <p className="my-2 text-sm hover:text-[#E26015]">Blogs</p>
                <Link href="/insight/case-study"><p className="my-2 text-sm hover:text-[#E26015]">Case Studies</p></Link>
                <p className="my-2 text-sm hover:text-[#E26015]">Careers</p>
              </div>

              <div className="text-white w-[50%] lg:w-[23%] my-4">
                <h3 className="font-semibold">SaaS Products</h3>
                <p className="my-2 text-sm hover:text-[#E26015]">Appetiza</p>
                <p className="my-2 text-sm hover:text-[#E26015]">Careerfun</p>
              </div>

              <div className="text-white w-[50%] lg:w-[23%] my-4">
                <h3 className="font-semibold">Policies</h3>
                <Link href="/privacy">
                  <p className="my-2 text-sm hover:text-[#E26015]">Privacy Policy</p>
                </Link>
                <Link href="/terms">
                  <p className="my-2 text-sm">Terms of Service</p>
                </Link>
                <p className="my-2 text-sm">Copyright Policy</p>
                <Link href="/legal">
                  <p className="my-2 text-sm">Legal Policy</p>
                </Link>
              </div>
            </div>
          </div>
          <hr className="my-8" />
          <div>
             <p className="text-white text-sm my-4">
               The BFG Global Consulting LLC (also trading as BFG Consults) is incorporated under the Corporate Affairs Commission in Nigeria (RC - 1779419) and the Companies House for England and Wales (Registered Number -14906851) as a Private Limited Liability Company. We offer custom solutions in software development, market research, strategy development, and workforce training to clients globally. Our business model is built on innovation, combining Consulting-as-a-Service (CaaS) and Software-as-a-Service (SaaS) offerings to individuals and businesses in navigating complex challenges, optimizing performance, and achieving sustainable growth across various industries.
                  </p>
          </div>
          <div className="">
            <span className="text-white text-sm  dark:text-gray-400">
              © 2018 - {year}{" "}
              <a href="https://bfgconsults.com/" class="hover:underline">
                BFG Global Consults™
              </a>
              . All Rights Reserved.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
