import Image from "next/image";
import React from "react";
import AccountingManager from "../../../../public/assets/accounting-manager.png";

import Avatar from "../../../../public/assets/new-avatar.png";
import Link from "next/link";

const page = () => {
  return (
    <>
      <div>
        <div className="lg:mt-[150px] p-12">
          <div className="pb-9">
            <Link href="/team">
              <div className="flex gap-2 items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="rgba(153,153,153,1)"
                  >
                    <path d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007Z"></path>
                  </svg>
                </span>
                <span className="text-[#999]">Back to How We Help Clients</span>
              </div>
            </Link>
          </div>
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Team Members
          </span>
          <div className="my-4">
            <h3 className="text-3xl font-semibold my-8">Olawale Adunbi</h3>
          </div>
          <div className="flex flex-col lg:flex-row w-[100%] gap-8 my-8">
            <div className="w-[100%] lg:w-[20%]">
              <div className="flex flex-col">
                <div className="w-[250px] h-[250px] aspect-square bg-[#B0D4EA] mb-4">
                  <Image
                    src={AccountingManager}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="bg-white w-[250px] p-4 shadow-md rounded-lg">
                  <h3 className="font-semibold text-lg">Olawale Adunbi</h3>
                  <p className="text-[#E45F11] font-semibold">
                    Accounting Manager
                  </p>
                </div>
              </div>
              <div className="my-8">
                <a href="mailto:finance@bfgconsults.com">
                  <button className="w-full flex justify-center gap-4 p-3 border border-[#E26015] hover:bg-[#E26015] hover:text-white rounded-md">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="currentColor"
                      >
                        <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM20 7.23792L12.0718 14.338L4 7.21594V19H20V7.23792ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                      </svg>
                    </span>
                    <span>Get in Touch</span>
                  </button>
                </a>
              </div>
            </div>
            <div className="w-[100%] lg:w-[80%]">
              <h4 className="text-xl font-semibold mb-6">About Olawale </h4>
              <p className="text-[#999] text-lg">
                              Olawale  is an accomplished Accounting Manager in the Finance Department, with a strong track record of overseeing financial operations and ensuring the accuracy of accounting records.  
                          </p>
                          <br />
                          <p className="text-[#999] text-lg">
With expertise in financial reporting, budgeting, and compliance, he plays a key role in maintaining the organization&apos;s financial integrity. Known for his meticulous attention to detail and analytical skills, he effectively leads the accounting team, streamlining processes, managing financial audits, and ensuring adherence to regulatory standards. His strategic approach to financial management helps support informed decision-making and drives the organization&apos;s fiscal health.                          </p>
              <br />
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
