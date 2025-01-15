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
        <div className="py-[40px] px-[10px] lg:px-[40px]">
          <div className="flex flex-wrap gap-[20px] lg:gap-[40px]">
             
            

             <div className="flex w-[100%] lg:w-[100px] justify-center lg:justify-normal">
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

            <div className="text-white">
              <h3 className="font-semibold">Company</h3>
              <p className="my-2 p-2">
                <Link href="/industry">Who we are</Link>
              </p>
              <p className="my-2 p-2">Board of Advisors</p>
              <p className="my-2 p-2">
                <Link href="/team">Growth Team</Link>
              </p>
              <p className="my-2 p-2">
                <Link href="/industry/projects">Project Executed</Link>
              </p>
            </div>

            <div className="text-white">
              <h3 className="font-semibold">Solutions</h3>
              <p className="my-2 p-2">
                <Link href="/solutions/research-analytics">
                  Research & Analytics
                </Link>
              </p>
              <p className="my-2 p-2">
                <Link href="/solutions/business-strategy">
                  Business Strategy & Operations
                </Link>
              </p>
              <p className="my-2 p-2">
                <Link href="/solutions/training-development">
                  Training & Development
                </Link>
              </p>
              <p className="my-2 p-2">
                <Link href="/solutions/information-technology">
                  Technology & Software Development 
                </Link>
              </p>
            </div>

            {/* <div className="text-white">
                  <h3 className="font-semibold">Resources</h3>
                  <p className="my-2">News</p>
                  <p className="my-2">Blog</p>
                  <p className="my-2">Research</p>
                  <p className="my-2">Events</p>
                  <p className="my-2">CSR</p>

                </div> */}

            <div className="text-white">
              <h3 className="font-semibold">Programs</h3>
              <p className="my-2 p-2">The Dialetics</p>
              <p className="my-2 p-2">SME Klinic</p>
              <p className="my-2 p-2">Women in Tech</p>
            </div>

            <div className="text-white">
              <h3 className="font-semibold">Policy</h3>
              <Link href="/privacy">
                <p className="my-2 p-2">Privacy Policy</p>
              </Link>
              <Link href="/terms">
                <p className="my-2 p-2">Terms of Service</p>
              </Link>
              <p className="my-2 p-2">Copyright Policy</p>
              <Link href="/legal">
                <p className="my-2 p-2">Legal Policy</p>
              </Link>
            </div>
            
                <div>
              
                 <h3 className="font-semibold text-white my-2">Follow Us</h3>
                
              
              <div className="my-4">
                <div className="flex-col gap-3">
                  <div>
                <Link href="https://facebook.com/BFGConsults" target="_blank">
                  <button className="text-white my-2">
                    Facebook
                  </button>
                    </Link>
                    </div>
              <div>
                <Link
                  href="https://www.instagram.com/bfgconsults/"
                  target="_blank"
                >
                  <button className="text-white my-2">
                  Instagram
                  </button>
                    </Link>
                    </div>
              <div>
                <Link
                  href="https://www.linkedin.com/company/bfgconsults/"
                  target="_blank"
                >
                  <button className="text-white my-2">
                   LinkedIn
                  </button>
                    </Link>
                    </div>
              </div>
            </div>
            </div>
           
            
        
          </div>
        <hr className="my-4"/>
          <div className="flex justify-center">
                  <span className="text-white  dark:text-gray-400">© {year} <a href="https://bfgconsults.com/" class="hover:underline">BFG Global Consults™</a>. All Rights Reserved.</span>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
