import Image from 'next/image'
import React from 'react'
import NonGovtImg from "../../../../../public/assets/non-profit-vendor-scaled.jpg";

const page = () => {
  return (
    <div>
    
      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={NonGovtImg}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Transparent overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
                Government and Non-for-Profit{" "}
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
Empowering communities, driving positive change together.          </p>
        </div>
      </div>
      <p className="text-[#656565] px-[40px] py-[30px]">In the realm of government and non-for-profit organizations, BFG Global Consulting is dedicated to driving positive change, fostering innovation, and maximizing impact. With a deep understanding of public policy, regulatory frameworks, and community needs, we partner with government agencies, NGOs, and philanthropic organizations to address complex challenges and advance societal goals. From strategic planning and program evaluation to capacity building and stakeholder engagement, our tailored solutions empower clients to enhance transparency, accountability, and effectiveness in their operations. By leveraging data-driven insights and best practices, we help our partners optimize resources, amplify social impact, and build resilient communities for the future. At BFG Global Consulting, we are committed to shaping a brighter tomorrow through purpose-driven collaboration and sustainable solutions</p>
    <div>
        <div className="bg-[#f8f5f5] p-8">
          <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
            Our Products{" "}
          </h3>
          <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-8">
            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M2 11H22V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V11ZM17 3H21C21.5523 3 22 3.44772 22 4V9H2V4C2 3.44772 2.44772 3 3 3H7V1H9V3H15V1H17V3Z"></path></svg>
              </span>
              <h4 className="text-2xl my-2">Strategic Planning and Advisory Services</h4>
              <p className="text-[#656565]">
                Customized strategic planning services to help government agencies and non-for-profit organizations define their vision, mission, and goals, as well as develop actionable strategic plans to achieve them. This may include environmental scans, SWOT analyses, stakeholder consultations, and strategic plan development.
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
              Program Evaluation and Impact Assessment
              </h4>
              <p className="text-[#656565]">
                Program evaluation services to assess the effectiveness, efficiency, and impact of government programs and non-for-profit initiatives. This may involve conducting evaluations, collecting and analyzing data, measuring outcomes, and providing recommendations for improvement.
              </p>
            </div>
            <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M12 19H14V6.00003L20.3939 8.74028C20.7616 8.89786 21 9.2594 21 9.65943V19H23V21H1V19H3V5.6499C3 5.25472 3.23273 4.89659 3.59386 4.73609L11.2969 1.31251C11.5493 1.20035 11.8448 1.314 11.9569 1.56634C11.9853 1.63027 12 1.69945 12 1.76941V19Z"></path></svg>
              </span>
              <h4 className="text-2xl my-2">Capacity Building and Training Programs</h4>
              <p className="text-[#656565]">
                Capacity building workshops, training sessions, and professional development programs designed to enhance the skills, knowledge, and capabilities of government and non-for-profit staff and leaders. Topics may include leadership development, project management, fundraising strategies, and advocacy techniques.
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
               Fundraising and Development Support
              </h4>
              <p className="text-[#656565]">
              Fundraising and development support services to help non-for-profit organizations identify funding opportunities, develop fundraising strategies, and cultivate relationships with donors and funders. This may include grant writing, donor prospecting, and fundraising campaign management.
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
                Community Engagement and Outreach Programs
              </h4>
              <p className="text-[#656565]">
                 Community engagement and outreach programs to help government agencies and non-for-profit organizations connect with and engage their constituents. This may involve community forums, town hall meetings, social media campaigns, and other outreach activities to solicit input, gather feedback, and build community support.
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
              <h4 className="text-2xl my-2">Policy Compliance and Risk Management</h4>
              <p className="text-[#656565]">
                Policy compliance and risk management services to help government agencies and non-for-profit organizations navigate regulatory requirements, mitigate risks, and ensure compliance with legal and ethical standards. This may include conducting risk assessments, developing compliance programs, and providing training on relevant regulations and policies.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default page