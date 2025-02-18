import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/business-strategy-banner.jpg";
import Link from "next/link";
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
            Privacy Policy
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
             This discloses all of the ways we gathers, use, disclose, and manage our  client&apos;s data. 
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

            <p className="my-4 text-[#656565]">
              BFG Global Consulting Inc., is committed to protecting the privacy
              and confidentiality of our clients and website visitors
              information. This Privacy Policy describes how we protect the
              information you provide to us through our website, emails, phone
              calls, or in-person interactions. we respect your privacy and is
              committed to protecting it through our compliance with this
              Privacy Policy.
            </p>
            <p className="text-[#656565]">
              This policy also shows the types of information we may collect
              from you or that you may provide when you visit our website:
              <Link href="/">https://www.bfgconsults.com/</Link>,  Please read this policy carefully to
              understand our policies and practices regarding your information
              and how we will treat it. If you do not agree with our policies
              and practices, please contact our company for further
              clarifications.
            </p>
            <div className="my-4">
              <Slides />
            </div>

                        <div className="my-2 px-2 lg:px-10 bg-[#FCFDFD] border border-[#EEF3F6]">

            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Information We Collect:{" "}
              </p>
              <p className="text-[#656565] my-2">
                We collect personal information from our clients, website
                visitors, and job applicants, which may include your name, email
                address, phone number, company name, job title, and other
                information you provide to us. We may also collect information
                about your usage of our website, such as your IP address and the
                pages you visit.
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
                Disclosure of Information:{" "}
              </p>
              <p className="text-[#656565] my-2">
                We do not disclose your personal information to third parties
                except in rare circumstances, such as when we are required by
                law to do so, or when it is necessary to provide our services or
                respond to your requests.{" "}
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Security of Information:
              </p>
              <p className="text-[#656565] my-2">
                We take appropriate technical and organizational measures to
                protect your personal information against unauthorized or
                unlawful processing, accidental loss, destruction, or damage. We
                regularly review and update our security measures to ensure they
                remain effective to continuously protect your data.
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Cookies and Similar Technologies:{" "}
              </p>
              <p className="text-[#656565] my-2">
                We use cookies and similar technologies to collect information
                about your usage of our website and to improve your user
                experience. You can adjust your browser settings to reject
                cookies, but this may limit your use of our website.{" "}
              </p>{" "}
            </div>
            <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
                Updates to Privacy Policy:{" "}
              </p>
              <p className="text-[#656565] my-2">
                By accessing or using this Website, you agree to this Privacy
                Policy. We may update this Privacy Policy from time to time to
                reflect changes in our practices or applicable laws. We
                encourage you to review this policy periodically to stay
                informed about how we are protecting your information.
              </p>{" "}
                      </div>
                       <div className="my-6">
              <p className="font-bold text-xl text-black my-2">
Contact Us:              </p>
              <p className="text-[#656565]  my-2">
               If you have any questions or concerns about our Privacy Policy, please contact us via the contact details displayed at the foot of this webpage or the contacts on our “Contact” page, or simply fill the form on the “Contact” page. 
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
