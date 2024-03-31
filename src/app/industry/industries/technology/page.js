import Image from "next/image";
import React from "react";
import FinTechImg from "../../../../../public/assets/financial-technology.jpg";

const page = () => {
  return (
    <div>
      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={FinTechImg}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Transparent overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
            Financial Technology{" "}
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Innovating finance, shaping tomorrows solutions.{" "}
          </p>
        </div>
      </div>
      <p className="text-[#656565] px-[40px] py-[30px]">
        In the intersection of technology and finance, BFG Global Consulting
        pioneers innovative solutions that redefine the future of financial
        services. Leveraging cutting-edge technologies and deep industry
        expertise, we empower financial institutions, fintech startups, and
        technology firms to navigate digital transformation, enhance operational
        efficiency, and drive sustainable growth. From blockchain and AI to
        cybersecurity and digital banking, our comprehensive suite of services
        covers the full spectrum of technological advancements reshaping the
        finance landscape. By blending strategic insights with technical acumen,
        we help our clients harness the power of technology to streamline
        processes, deliver superior customer experiences, and stay ahead in an
        increasingly competitive market. At BFG Global Consulting, we are
        committed to shaping the next era of finance through innovation,
        collaboration, and strategic foresight.
      </p>
      <div>
        <div className="bg-[#f8f5f5] p-8">
          <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
            Areas where we make a difference in the Financial Technology Sector{" "}
          </h3>
          <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-8">
            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M3.78307 2.82598L12 1L20.2169 2.82598C20.6745 2.92766 21 3.33347 21 3.80217V13.7889C21 15.795 19.9974 17.6684 18.3282 18.7812L12 23L5.6718 18.7812C4.00261 17.6684 3 15.795 3 13.7889V3.80217C3 3.33347 3.32553 2.92766 3.78307 2.82598ZM12 13.5L14.9389 15.0451L14.3776 11.7725L16.7553 9.45492L13.4695 8.97746L12 6L10.5305 8.97746L7.24472 9.45492L9.62236 11.7725L9.06107 15.0451L12 13.5Z"></path></svg>
              </span>
              <h4 className="text-2xl my-2">Cybersecurity Solutions</h4>
              <p className="text-[#656565]">
                Cybersecurity solutions to protect financial institutions and
                their customers from cyber threats, including data encryption,
                threat detection, and security monitoring services to safeguard
                sensitive information and prevent data breaches.{" "}
              </p>
            </div>
            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="rgba(1,110,248,1)"
                >
                  <path d="M11 2.04935V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5228 2 12C2 6.81462 5.94668 2.55107 11 2.04935ZM13 0.542847C18.5535 1.02121 22.9788 5.4465 23.4571 11H13V0.542847Z"></path>
                </svg>
              </span>
              <h4 className="text-2xl my-2">
                {" "}
                Data Analytics and Business Intelligence{" "}
              </h4>
              <p className="text-[#656565]">
                Data analytics and business intelligence solutions for financial
                institutions, offering insights into customer behavior, market
                trends, and operational performance to support data-driven
                decision-making and strategic planning.{" "}
              </p>
            </div>
            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M15.4142 4.99998H21.0082C21.556 4.99998 22 5.44461 22 6.00085V19.9991C22 20.5519 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5553 2 19.9991V6.00085C2 5.44808 2.45531 4.99998 2.9918 4.99998H8.58579L6.05025 2.46445L7.46447 1.05023L11.4142 4.99998H12.5858L16.5355 1.05023L17.9497 2.46445L15.4142 4.99998Z"></path></svg>
              </span>
              <h4 className="text-2xl my-2">Digital Banking Solutions</h4>
              <p className="text-[#656565]">
                Innovative digital banking solutions for financial institutions,
                including online banking platforms, mobile banking apps, and
                digital payment systems to enhance customer experiences and
                streamline banking operations.{" "}
              </p>
            </div>

            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="rgba(1,110,248,1)"
                >
                  <path d="M16.8 19L14 22.5L11.2 19H6C5.44772 19 5 18.5523 5 18V7.10256C5 6.55028 5.44772 6.10256 6 6.10256H22C22.5523 6.10256 23 6.55028 23 7.10256V18C23 18.5523 22.5523 19 22 19H16.8ZM2 2H19V4H3V15H1V3C1 2.44772 1.44772 2 2 2Z"></path>
                </svg>{" "}
              </span>
              <h4 className="text-2xl my-2">
                Blockchain and Cryptocurrency Services{" "}
              </h4>
              <p className="text-[#656565]">
                Consulting services for blockchain technology adoption and
                cryptocurrency integration, including blockchain development,
                smart contract implementation, and cryptocurrency exchange
                platform development.{" "}
              </p>
            </div>

            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="rgba(1,110,248,1)"
                >
                  <path d="M20.0834 10.4999L21.2855 11.2212C21.5223 11.3633 21.599 11.6704 21.457 11.9072C21.4147 11.9776 21.3559 12.0365 21.2855 12.0787L12.0001 17.6499L2.71463 12.0787C2.47784 11.9366 2.40106 11.6295 2.54313 11.3927C2.58536 11.3223 2.64425 11.2634 2.71463 11.2212L3.91672 10.4999L12.0001 15.3499L20.0834 10.4999ZM20.0834 15.1999L21.2855 15.9212C21.5223 16.0633 21.599 16.3704 21.457 16.6072C21.4147 16.6776 21.3559 16.7365 21.2855 16.7787L12.5145 22.0412C12.1979 22.2313 11.8022 22.2313 11.4856 22.0412L2.71463 16.7787C2.47784 16.6366 2.40106 16.3295 2.54313 16.0927C2.58536 16.0223 2.64425 15.9634 2.71463 15.9212L3.91672 15.1999L12.0001 20.0499L20.0834 15.1999ZM12.5145 1.30864L21.2855 6.5712C21.5223 6.71327 21.599 7.0204 21.457 7.25719C21.4147 7.32757 21.3559 7.38647 21.2855 7.42869L12.0001 12.9999L2.71463 7.42869C2.47784 7.28662 2.40106 6.97949 2.54313 6.7427C2.58536 6.67232 2.64425 6.61343 2.71463 6.5712L11.4856 1.30864C11.8022 1.11864 12.1979 1.11864 12.5145 1.30864Z"></path>
                </svg>
              </span>
              <h4 className="text-2xl my-2">
                Regulatory Technology (Regtech) Solutions
              </h4>
              <p className="text-[#656565]">
                Regulatory technology solutions to help financial institutions
                comply with regulatory requirements, including
                know-your-customer (KYC) verification, anti-money laundering
                (AML) compliance, and regulatory reporting automation.{" "}
              </p>
            </div>

            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="48"
                  height="48"
                  fill="rgba(1,110,248,1)"
                >
                  <path d="M7 5V2C7 1.44772 7.44772 1 8 1H16C16.5523 1 17 1.44772 17 2V5H21C21.5523 5 22 5.44772 22 6V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V6C2 5.44772 2.44772 5 3 5H7ZM4 15V19H20V15H4ZM11 11V13H13V11H11ZM9 3V5H15V3H9Z"></path>
                </svg>
              </span>
              <h4 className="text-2xl my-2">Insurtech Solutions </h4>
              <p className="text-[#656565]">
                Insurance technology solutions for insurance companies, offering
                digital insurance platforms, claims processing automation, and
                risk assessment tools to improve operational efficiency and
                enhance customer experiences.{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
