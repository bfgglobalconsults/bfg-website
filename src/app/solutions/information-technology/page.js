import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/information-technology.jpg";
import Accordion from "@/components/Accordion";

const page = () => {
  return (
    <>
      <div className="py-[30px]">
        <div className="p-[40px]">
        <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#f89d68] p-2 text-white rounded-xl">
              Information Technology
            </span>
          </h3>
          
          <div className="w-full flex flex-col lg:flex-row items-center gap-2">
  <div className="w-full lg:w-[50%]">
            
              <h3 className="text-[#E45F11] font-bold text-xl">
                Innovative solutions, secure technology, and unparalleled
                support for your business
              </h3>
              <p className="w-full text-lg text-[#656565] my-3">
                BFG Technology solutions is a specialised service deployed to
                help organisations optimize their use of technology to achieve
                their business objectives. Through this service, we provide a
                wide range of IT solutions, including, business web presence,
                cloud computing, software development, and cybersecurity. The
                service is delivered by our innovation and technology team, who
                are experts in their field and have the technical skills and
                knowledge to provide effective solutions. The goal of this
                service to clients is to improve their organisations efficiency,
                information security, and competitiveness by leveraging the
                latest technology.
              </p>
            </div>
            <div className="w-full lg:w-[50%] h-[400px] my-3 lg:my-0">

                <Image
                  src={Banner}
                  alt="business-banner"
                  className="w-full h-full object-fit"
                />
              </div>
          </div>

          <div>
          <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#f89d68] p-2 text-white rounded-xl">
            Top of our service unit on Information Technology
            </span>
          </h3>
           
            <div className="">
              <div className="relative w-[100%] lg:w-[80%] h-[100%] bg-white border-b-2 border-[#E45F11] shadow-lg p-8 mx-auto ">
                <div className="text-black">
                  <ul className="list-disc">
                    <li className="my-2">
                      <span className="font-bold">
                        Software Designing and Development:
                      </span>{" "}
                      We manage the design and development of customised IT
                      solutions that are tailored to the specific needs of an
                      organisation and or business.
                    </li>
                    <li className="my-2">
                      <span className="font-bold">Disaster Recovery:</span> This
                      scope of service includes the development and
                      implementation of plans and procedures that organisations
                      can use to quickly and effectively recover from IT-related
                      disruptions, such as natural disasters, power outages or
                      cyber-attacks. This can include tasks such as creating
                      backups of important data, configuring redundant systems,
                      and testing recovery procedures
                    </li>

                    <li className="my-2">
                      <span className="font-bold">Technical Support:</span> This
                      scope of service involves assisting employees and other
                      users of an organisations IT systems. This can include
                      troubleshooting and resolving technical issues, as well as
                      providing advice and guidance on the use of specific
                      software or hardware.
                    </li>

                    <li className="my-2">
                      <span className="font-bold">Cloud Services:</span> This
                      scope of service includes the management of cloud-based
                      services such as data storage, software as a service
                      (SaaS), and platform as a service (PaaS) to organisations.
                      These services can be used to store, manage and share
                      data, host and run applications, or provide other
                      IT-related functionality.
                    </li>

                    <li className="my-2">
                      <span className="font-bold">Cybersecurity:</span> This
                      scope of service includes the implementation of security
                      measures to protect an organisations IT systems and data
                      from unauthorized access and breaches. This can include
                      tasks such as configuring firewalls, implementing
                      intrusion detection systems, and performing security
                      audits.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto py-8">
            <h1 className="text-lg font-bold mb-4">Service Benefits</h1>
            <Accordion title="Improved efficiency and productivity">
              <p>
                {" "}
                By providing organisations with the necessary technology
                solutions, IT services help improve efficiency and productivity
                by automating tasks, streamlining processes, and providing
                employees with the tools they need to do their jobs more
                effectively.
              </p>
            </Accordion>
            <Accordion title="Enhanced data security">
              <p>
                {" "}
                IT services help organisations protect their IT systems and data
                from unauthorized access and breaches by implementing security
                measures such as firewalls, intrusion detection systems, and
                regular security audits.
              </p>
            </Accordion>
            <Accordion title="Better data management">
              <p>
                It helps organisations manage and protect their data more
                effectively by providing solutions such as data storage, backup,
                and recovery.
              </p>
            </Accordion>
            <Accordion title="Increased flexibility and scalability">
              <p>
                {" "}
                Organisations adapt to changing business conditions and grow
                their operations by providing scalable and flexible solutions
                that can be easily modified and expanded as needed.
              </p>
            </Accordion>
            <Accordion title="Access to expertise and resources">
              <p>
                {" "}
                Our IT solutions provide organisations with access to experts
                and resources that they might not otherwise have, such as
                specialised software, and cybersecurity professionals. This can
                help organisations stay current with the latest technologies and
                best practices, which can be critical for staying competitive in
                todays fast- paced business environment
              </p>
            </Accordion>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
