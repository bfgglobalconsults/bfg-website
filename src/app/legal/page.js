import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/business-strategy-banner.jpg"
import Slides from "@/components/Slides";

const page = () => {
  return (
    <>
       <div className="py-5 lg:py-[100px]">
        <div className="p-12">
          <div>
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Policy
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Legal Policy
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
                The legal policy outlined is designed to protect our Company & its clients from legal risks & disputes.
              </p>
            </div>
              <div className="">
                                <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
                                  <Image
                                    src={TopBanner}
                                    alt="top-banner"
                                    className="w-full h-full object-cover rounded-3xl"
                                  />
                                </div>
            </div>
            
            <div className="my-4">
              <Slides />
            </div>
           

            <div className="my-2 px-2 lg:px-10 bg-[#FCFDFD] border border-[#EEF3F6]">
              <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Non-Disclosure Agreement (NDA):{" "}
              </p>
              <p className="text-[#656565] my-2">
                As a Company, we recognize the importance of protecting our
                clients sensitive information. We require all employees and
                contractors to sign a Non-Disclosure Agreement (NDA) before they
                can access any confidential information. The NDA prohibits the
                disclosure of any confidential information to any third party,
                except with the express written consent of the client or as
                required by law.
              </p>
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">Use of Information:</p>
              <p className="text-[#656565] my-2">
                We use the information we collect for various purposes,
                including to provide our services to you, to communicate with
                you, to improve our website and services, to comply with legal
                obligations, and to evaluate job applications.{" "}
              </p>
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Data Protection and Privacy:{" "}
              </p>
              <p className="text-[#656565] my-2">
                We shall comply with all applicable data protection and privacy
                laws of the country. We shall implement appropriate technical
                and organizational measures to ensure the security of personal
                data processed by our Company. The policy shall include the
                procedures for collecting, processing, and storing data, as well
                as measures to protect the data from unauthorized access or
                breaches.
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Conflict of Interest Policy{" "}
              </p>
              <p className="text-[#656565] my-2">
                We shall maintain a conflict of interest policy that outlines
                the procedures for identifying and disclosing conflicts of
                interest that may arise during consulting engagements. The
                policy shall include the steps taken to manage conflicts of
                interest to avoid any negative impact on clients.
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Intellectual Property Policy:{" "}
              </p>
              <p className="text-[#656565] my-2">
                Our Company shall ensure that any intellectual property (IP)
                developed during consulting engagements is protected. The policy
                shall specify the ownership of any IP developed during the
                engagement and how it will be protected.
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Contractual Agreements:{" "}
              </p>
              <p className="text-[#656565] my-2">
                We provide and require all clients to sign our standard
                consulting agreement that outlines the scope of work, timelines,
                fees, and other relevant terms and conditions. The agreement
                shall serve as the legal foundation of our engagement with the
                client and can protect both parties in case of any disputes.
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Professional Liability Insurance:
              </p>
              <p className="text-[#656565] my-2">
                The BFG shall obtain professional liability insurance, also
                known as errors and omissions insurance, to protect the business
                from potential lawsuits that may arise from mistakes or
                omissions made during consulting engagements.
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Compliance with the countrys Laws and Regulations{" "}
              </p>
              <p className="text-[#656565] my-2">
                Our Company shall comply with all applicable laws and
                regulations in the country, including tax laws, labor laws, and
                business registration requirements. The BFG shall also ensure
                that all employees, contractors, and third-party service
                providers are aware of and comply with these laws and
                regulations.{" "}
              </p>{" "}
              </div>
              </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
