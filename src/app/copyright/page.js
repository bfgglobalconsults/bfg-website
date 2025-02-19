import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/policy-banner.png";
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
                Copyright Policy
              </h3>
              <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
                Our Policy are designed to protect both you & BFG.
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

            <p className="text-[#656565] text-justify my-6">
             The BFG Global Consulting Inc. values and respects intellectual property. We also recognize the importance of protecting this intellectual property. We have developed this copyright policy as a protection stand and to ensure that our employees, contractors, clients, and partners understand the terms and conditions related to the creation, use, and ownership of copyrighted works.
            </p>
            <div className="my-4">
              <Slides />
            </div>
            <div className="my-2 px-2 lg:px-10 bg-[#FCFDFD] border border-[#EEF3F6]">
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">Policy Statement:</p>
                <p className="text-[#656565] my-2">
                 Our Company owns all copyrights in the materials it produces, including but not limited to reports, presentations, proposals, written and visual materials and other materials. These materials are protected by copyright laws and international treaties. And the BFG Global Consulting Inc. retains ownership of all copyrightable works created by our employees, contractors, or third-party vendors during their engagement with the firm, including but not limited to those already earlier stated. We will hold the exclusive rights to use, reproduce, distribute, display, and modify the works as it deems appropriate.
                              </p>
                              <p className="text-[#656565] my-2">
                 Employees of our Company are prohibited from using, reproducing, modifying, distributing, or creating derivative works of the Company’s copyrighted materials without the prior written permission of the Company. Employees may use the Company’s copyrighted materials only in the course of their work for the Company and only to the extent necessary to perform their job duties.
                </p>
              </div>
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  Third-Party Materials:
                </p>
                <p className="text-[#656565] my-2">
                  Our Company respects the copyrights of third-party works and expects its employees, contractors, clients, and partners to do the same.  Employees may not use any copyrighted materials owned by third parties in the course of their work for the Company without a prior obtaining of the necessary written permissions and licenses from the copyright owners or their authorized agents.
                              </p>
                              <p className="text-[#656565] my-2">
                  In the event that an employee wishes to use copyrighted materials owned by a third party in the course of their work for the Company, the employee must obtain the prior written permission of the copyright owner. If the Company determines that the use of third-party copyrighted materials is necessary, our Company will obtain the necessary permissions and licenses from the copyright owner.
                </p>
              </div>
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  Copyright Enforcement and Infringement Action:
                </p>
                <p className="text-[#656565] my-2">
                  We take copyright protection seriously and will take appropriate legal action to enforce its rights. Any unauthorized use, reproduction, distribution, display, or modification of copyrighted works is strictly prohibited and may result in disciplinary action, termination of employment or engagement, and legal consequences.
                </p>
              </div>
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">Conclusion:</p>
                <p className="text-[#656565] my-2">
                  The BFG Global Consults Inc. holds copyright sternly and expects its employees, contractors, clients, and partners to do the same. Therefore, this policy is designed to protect the Company’s intellectual property rights and ensure that employees respect the intellectual property rights of others. 
                              </p>
                              <p className="text-[#656565] my-2">
                  By following this policy, we can ensure that we protect all parties’ copyrights. The Company encourages its employees to report any suspected copyright violations to their supervisor or to the Company’s legal department.
                </p>
              </div>
              

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
