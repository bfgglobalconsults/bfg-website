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
             
            

             <div className="flex w-[100%] lg:w-[100px] justify-center lg:justify-normal items-center">
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
                  Information Technology
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
              
                 <h3 className="font-semibold text-white my-2">Contact Us</h3>
                 <div className="">
                <Link href="/contact">
                  <button className="py-2 px-6 border-white border-2 text-white font-bold hover:border-black hover:text-black">
                      Get in Touch With Us!
                  </button>
                </Link>
              </div>
              
              <div className="my-4">
              <h3 className="font-semibold text-white my-2">Connect on Socials</h3>
              <div className="flex gap-3">
                <Link href="https://facebook.com/BFGConsults" target="_blank">
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M12.001 2C6.47813 2 2.00098 6.47715 2.00098 12C2.00098 16.9913 5.65783 21.1283 10.4385 21.8785V14.8906H7.89941V12H10.4385V9.79688C10.4385 7.29063 11.9314 5.90625 14.2156 5.90625C15.3097 5.90625 16.4541 6.10156 16.4541 6.10156V8.5625H15.1931C13.9509 8.5625 13.5635 9.33334 13.5635 10.1242V12H16.3369L15.8936 14.8906H13.5635V21.8785C18.3441 21.1283 22.001 16.9913 22.001 12C22.001 6.47715 17.5238 2 12.001 2Z"></path>
                    </svg>
                  </button>
                </Link>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M18.2048 2.25H21.5128L14.2858 10.51L22.7878 21.75H16.1308L10.9168 14.933L4.95084 21.75H1.64084L9.37084 12.915L1.21484 2.25H8.04084L12.7538 8.481L18.2048 2.25ZM17.0438 19.77H18.8768L7.04484 4.126H5.07784L17.0438 19.77Z"></path>
                  </svg>
                </button>
                <Link
                  href="https://www.instagram.com/bfgconsults/"
                  target="_blank"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M13.0281 2.00073C14.1535 2.00259 14.7238 2.00855 15.2166 2.02322L15.4107 2.02956C15.6349 2.03753 15.8561 2.04753 16.1228 2.06003C17.1869 2.1092 17.9128 2.27753 18.5503 2.52503C19.2094 2.7792 19.7661 3.12253 20.3219 3.67837C20.8769 4.2342 21.2203 4.79253 21.4753 5.45003C21.7219 6.0867 21.8903 6.81337 21.9403 7.87753C21.9522 8.1442 21.9618 8.3654 21.9697 8.58964L21.976 8.78373C21.9906 9.27647 21.9973 9.84686 21.9994 10.9723L22.0002 11.7179C22.0003 11.809 22.0003 11.903 22.0003 12L22.0002 12.2821L21.9996 13.0278C21.9977 14.1532 21.9918 14.7236 21.9771 15.2163L21.9707 15.4104C21.9628 15.6347 21.9528 15.8559 21.9403 16.1225C21.8911 17.1867 21.7219 17.9125 21.4753 18.55C21.2211 19.2092 20.8769 19.7659 20.3219 20.3217C19.7661 20.8767 19.2069 21.22 18.5503 21.475C17.9128 21.7217 17.1869 21.89 16.1228 21.94C15.8561 21.9519 15.6349 21.9616 15.4107 21.9694L15.2166 21.9757C14.7238 21.9904 14.1535 21.997 13.0281 21.9992L12.2824 22C12.1913 22 12.0973 22 12.0003 22L11.7182 22L10.9725 21.9993C9.8471 21.9975 9.27672 21.9915 8.78397 21.9768L8.58989 21.9705C8.36564 21.9625 8.14444 21.9525 7.87778 21.94C6.81361 21.8909 6.08861 21.7217 5.45028 21.475C4.79194 21.2209 4.23444 20.8767 3.67861 20.3217C3.12278 19.7659 2.78028 19.2067 2.52528 18.55C2.27778 17.9125 2.11028 17.1867 2.06028 16.1225C2.0484 15.8559 2.03871 15.6347 2.03086 15.4104L2.02457 15.2163C2.00994 14.7236 2.00327 14.1532 2.00111 13.0278L2.00098 10.9723C2.00284 9.84686 2.00879 9.27647 2.02346 8.78373L2.02981 8.58964C2.03778 8.3654 2.04778 8.1442 2.06028 7.87753C2.10944 6.81253 2.27778 6.08753 2.52528 5.45003C2.77944 4.7917 3.12278 4.2342 3.67861 3.67837C4.23444 3.12253 4.79278 2.78003 5.45028 2.52503C6.08778 2.27753 6.81278 2.11003 7.87778 2.06003C8.14444 2.04816 8.36564 2.03847 8.58989 2.03062L8.78397 2.02433C9.27672 2.00969 9.8471 2.00302 10.9725 2.00086L13.0281 2.00073ZM12.0003 7.00003C9.23738 7.00003 7.00028 9.23956 7.00028 12C7.00028 14.7629 9.23981 17 12.0003 17C14.7632 17 17.0003 14.7605 17.0003 12C17.0003 9.23713 14.7607 7.00003 12.0003 7.00003ZM12.0003 9.00003C13.6572 9.00003 15.0003 10.3427 15.0003 12C15.0003 13.6569 13.6576 15 12.0003 15C10.3434 15 9.00028 13.6574 9.00028 12C9.00028 10.3431 10.3429 9.00003 12.0003 9.00003ZM17.2503 5.50003C16.561 5.50003 16.0003 6.05994 16.0003 6.74918C16.0003 7.43843 16.5602 7.9992 17.2503 7.9992C17.9395 7.9992 18.5003 7.4393 18.5003 6.74918C18.5003 6.05994 17.9386 5.49917 17.2503 5.50003Z"></path>
                    </svg>
                  </button>
                </Link>
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(255,255,255,1)"
                  >
                    <path d="M12.2439 4C12.778 4.00294 14.1143 4.01586 15.5341 4.07273L16.0375 4.09468C17.467 4.16236 18.8953 4.27798 19.6037 4.4755C20.5486 4.74095 21.2913 5.5155 21.5423 6.49732C21.942 8.05641 21.992 11.0994 21.9982 11.8358L21.9991 11.9884L21.9991 11.9991C21.9991 11.9991 21.9991 12.0028 21.9991 12.0099L21.9982 12.1625C21.992 12.8989 21.942 15.9419 21.5423 17.501C21.2878 18.4864 20.5451 19.261 19.6037 19.5228C18.8953 19.7203 17.467 19.8359 16.0375 19.9036L15.5341 19.9255C14.1143 19.9824 12.778 19.9953 12.2439 19.9983L12.0095 19.9991L11.9991 19.9991C11.9991 19.9991 11.9956 19.9991 11.9887 19.9991L11.7545 19.9983C10.6241 19.9921 5.89772 19.941 4.39451 19.5228C3.4496 19.2573 2.70692 18.4828 2.45587 17.501C2.0562 15.9419 2.00624 12.8989 2 12.1625V11.8358C2.00624 11.0994 2.0562 8.05641 2.45587 6.49732C2.7104 5.51186 3.45308 4.73732 4.39451 4.4755C5.89772 4.05723 10.6241 4.00622 11.7545 4H12.2439ZM9.99911 8.49914V15.4991L15.9991 11.9991L9.99911 8.49914Z"></path>
                  </svg>
                </button>
                <Link
                  href="https://www.linkedin.com/company/bfgconsults/"
                  target="_blank"
                >
                  <button>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(255,255,255,1)"
                    >
                      <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
            </div>
           
            
        
          </div>
        <hr className="my-2"/>
          <div className="flex justify-center">
                  <span className="text-white  dark:text-gray-400">© {year} <a href="https://bfgconsults.com/" class="hover:underline">BFG Global Consults™</a>. All Rights Reserved.</span>

          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
