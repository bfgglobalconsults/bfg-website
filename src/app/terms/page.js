import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/business-strategy-banner.jpg";
import Slides from "@/components/Slides";

const page = () => {
  return (
    <>
      <div className="py-5 lg:py-[100px]">
        <div className="p-12">
          <div>
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Agreement
            </span>
            <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
              <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
                Terms of Service
              </h3>
              <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
                Our Terms of Service are designed to protect both you & BFG.
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
              Our goal is to provide high-quality services to our clients while
              maintaining a professional and ethical business relationship.
              Thank you for considering our management consulting firm as a
              potential partner. Please read the following terms of service
              carefully as they apply to our service conditions:
            </p>
            <div className="my-4">
              <Slides />
            </div>
            <div className="my-2 px-2 lg:px-10 bg-[#FCFDFD] border border-[#EEF3F6]">
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">Services:</p>
                <p className="text-[#656565] my-2">
                  The BFG provides expert advice, support and guidance to
                  improve your business operations, strategies, and overall
                  performance. We will work closely with you to identify and
                  solve your business needs, and develop customized growth
                  solutions that meet your company’s idiosyncratic needs.
                </p>
              </div>
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  Confidentiality:
                </p>
                <p className="text-[#656565] my-2">
                  We understand that confidentiality is crucial to the success
                  of our clients. Therefore, we pledge to maintain the
                  confidentiality of all information that you share with us,
                  including trade secrets, financial information, and other
                  sensitive data. We will not disclose any of your confidential
                  information without your prior written consent, except as
                  required by law.
                </p>
              </div>
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  Intellectual Property:
                </p>
                <p className="text-[#656565] my-2">
                  Our Company retains all rights, title, and interest in any
                  intellectual property developed or produced by us during the
                  project in connection with our services. You agree not to use
                  any of our intellectual property for any purpose other than
                  the purpose of the engagement, without our prior written
                  consent.
                </p>
              </div>
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">Payment:</p>
                <p className="text-[#656565] my-2">
                  Our Company charges for services based on agreed-upon rates
                  and terms with each client and will be based on the scope of
                  services and the complexity of the project. The Payment terms
                  will be outlined in the project agreement or contract. Payment
                  is due upon receipt of our invoice. Failure to pay invoices
                  may result in the suspension or termination of our services.
                </p>
              </div>
              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  {" "}
                  Limitation of Liability:
                </p>
                <p className="text-[#656565] my-2">
                  Our Companys liability is limited to the fees paid by you for
                  the services rendered. We shall not be liable for any
                  indirect, consequential, or special damages arising out of or
                  in connection with our services.
                </p>
              </div>

              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  Termination:
                </p>
                <p className="text-[#656565] my-2">
                  Either party may terminate the project at any time with
                  written notice to the other party. Upon termination, any
                  unpaid fees shall become immediately due and payable
                </p>
              </div>

              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  Governing Law:
                </p>
                <p className="text-[#656565] my-2">
                  This agreement shall be governed by and construed in
                  accordance with the laws of the state in which our management
                  consulting firm is located.
                </p>
              </div>

              <div className="my-6">
                <p className="font-bold text-xl text-black my-2">
                  Modification:
                </p>
                <p className="text-[#656565] my-2">
                  We reserve the right to modify these terms of service at any
                  time without prior notice. Any changes will be effective upon
                  posting on our website.
                </p>
              </div>

              <div className="my-6">
                <p className="text-[#656565] my-2">
                  By using our services, you opt to agree to our terms of
                  service.
                </p>
                <p className="text-[#656565] text-justify my-2">
                  If you have any questions or concerns about these terms,
                  please contact us for further information. Thank you again for
                  contacting The BFG Global Consults for your business needs.
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
