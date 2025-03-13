import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/training-development.jpg";
import Accordion from "@/components/Accordion";
import TopBanner from "../../../../public/assets/training-development-banner.jpg";
import Happy from "../../../../public/assets/happiness_adama.png"
import TrainingImage from "../../../../public/assets/training-image.png";
import EmployeePerformance from "../../../../public/assets/employee-perfomance.jpg";
import Retention from "../../../../public/assets/retention.png";
import GreaterFlexibility from "../../../../public/assets/greater-flexibility.png";
import DecisionMaking from "../../../../public/assets/decision-making.png";
import TopTalent from "../../../../public/assets/top-talent.png";
import Operations from "../../../../public/assets/operations.png";
import Avatar from "../../../../public/assets/new-avatar.png";
import TrainingPortfolio from "../../../../public/assets/Training-Portfolio.jpg";
import ServiceImage1 from "../../../../public/assets/service-image1.png";
import ServiceImage2 from "../../../../public/assets/service-image2.png";
import AnimatedItems from "@/components/information-technology/AnimatedItems";
import Link from "next/link";

const page = () => {
  const trainingSlides = [
    {
      title: "Customized Training for Employee Development",
      content:
        "Offering customised training solutions that are tailored to meet the specific needs of your organisation & employees.",
    },
    {
      title: "Training Delivery & Facilitation",
      content:
        "Facilitating training sessions, workshops, & seminars for employees at all levels of your organisation.",
    },
    {
      title: "Training Evaluation & Monitoring",
      content:
        "Measuring the effectiveness of training programs & providing follow-up support to ensure that employees can apply new skills & knowledge on the job.",
    },
    {
      title: "Coaching & mentoring",
      content:
        "Providing one-on-one coaching & mentoring to help employees develop their skills & advance in their careers.",
    },
  ];
  return (
    <>
      <div className="mt-[0px] lg:mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Training
        </span>
        <div className="flex flex-col lg:flex-row w-full gap-4 justify-between my-4">
          <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Training & Development
          </h3>
          <p className="w-[100%] lg:w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            Empowering your workforce, Enhancing your business
          </p>
        </div>
      </div>
      <div className="px-12">
        <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={TopBanner}
            alt="top-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
      </div>
      <div className="py-[1px] lg:py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              The BFG Training & Development Solution sits within our talent
              management consulting practices. This service is provided to
              unlock potential, develop leaders, & create high-performing teams.
              We help organisations improve their performance by providing
              employees with the knowledge, skills, & abilities they need to
              succeed in their roles. We provide a wide range of training
              options, including classroom instruction, online learning, & on
              the job training. It also includes assessments, evaluations, &
              feedback to measure the effectiveness of the training for your
              organisation.{" "}
            </p>
          </div>
</div>
          <div className="w-full bg-[#041926] rounded-lg flex flex-col lg:flex-row gap-4 my-8">
            <div className="w-[100%] lg:w-[50%] bg-[#041926] p-10 rounded-lg">
              <div className="my-4">
                <span className="p-3 rounded-3xl bg-white border-2 font-semibold">
                  Focus Area
                </span>
              </div>
              <h3 className="text-white text-3xl font-semibold">
                Focus areas of our Training & Development Consulting Services
              </h3>
              <p className="text-white my-2">
                Unlock your teams potential with our structured approach to
                training & development, delivering tailored learning solutions
                that drive performance, productivity, & lasting impact from
                start to success.{" "}
              </p>
              <div className="w-full">
                <Image
                  src={TrainingImage}
                  alt="training-image"
                  className="w-full"
                />
              </div>
            </div>
            <div className="w-[100%] bg-[#041926] p-4  lg:w-[50%] flex flex-col gap-10">
              <AnimatedItems slides={trainingSlides} />
            </div>
          </div>

          <hr />
 <div className="p-[40px]">
          <div className="my-8">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Benefits
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Service Benefits
              </h3>
              <p className="text-[#999] text-xl my-2">
                Realize the full potential of your organization with our expert
                services, delivering actionable insights, improved efficiency, &
                sustained results that drive lasting impact & success.{" "}
              </p>
            </div>
            {/* <div className="w-full flex flex-col lg:flex-row gap-10">
              <div className="w-[100%] lg:w-[30%] h-[280px]">
                <Image
                  src={ServiceImage1}
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[0%] h-[0%] lg:w-[70%] lg:h-[280px]">
                <Image
                  src={ServiceImage2}
                  alt="service-image2"
                  className="w-full h-full"
                />
              </div>
            </div> */}
            <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={EmployeePerformance}
                    alt="employee"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Employee Performance
                  </h4>
                  <p className="text-[#999]">
                    By providing employees with the knowledge, skills, &
                    abilities they need to succeed in their roles, this solution
                    helps organisations improve employee performance &
                    productivity.{" "}
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Retention}
                    alt="retention"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Better Retention of Employees
                  </h4>
                  <p className="text-[#999]">
                    Investing in employee training & development helps
                    organisations retain their best employees, & reduces the
                    costs associated with turnover.{" "}
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={GreaterFlexibility}
                    alt="flexibility"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Adaptability & Flexibility
                  </h4>
                  <p className="text-[#999]">
                    By providing your employees with training & development that
                    keeps them up-to-date with new technologies & changing
                    industry trends, your organisation will be more adaptable &
                    flexible in response to changing business conditions.{" "}
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={DecisionMaking}
                    alt="decision"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Improved Decision-Making
                  </h4>
                  <p className="text-[#999]">
                    Access to accurate, up-to-date information & expert analysis
                    helps our clients make more informed & effective decisions
                    for their businesses.{" "}
                  </p>{" "}
                </div>
              </div>
              {/* fifth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={TopTalent}
                    alt="talent"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Enhanced Ability to Attract top Talent
                  </h4>
                  <p className="text-[#999]">
                    Organisations that invest in this service are more likely to
                    attract top talent, as potential employees view such
                    investment as a sign of a committed & forward-thinking
                    organisation.{" "}
                  </p>{" "}
                </div>
              </div>
              {/* sixth item */}
              <div className="w-[100%] lg:w-[30%] flex flex-col  items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
                <div className="">
                  <Image
                    src={Operations}
                    alt="operations"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="w-[100%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Greater Scalability{" "}
                  </h4>
                  <p className="text-[#999]">
                    Developing scalable systems & processes, also helps leaders
                    & managers of organisations prepare for & manage growth in
                    their business.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>
          {/* portfolio */}
          <div className="py-[100px]">
            <div className="flex flex-col items-center lg:flex-row gap-8">
              <div className="w-[100%] lg:w-[40%]">
                <Image
                  src={TrainingPortfolio}
                  alt="training"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="w-[100%] lg:w-[60%]">
                <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                  Portfolio
                </span>
                <h3 className="text-[#333] text-3xl my-8 font-semibold">
                  Building Capacity for Future-Ready Talent{" "}
                </h3>
                <p className="text-[#999] text-xl my-2">
                  BFG Global Consult empowers organizations with comprehensive
                  training and development initiatives, fostering a pipeline of
                  skilled talent ready to tackle tomorrow&apos; challenges.
                </p>
                <a
                  href="/bfg-services.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  <button className="bg-[#041926] py-2 px-6 rounded-xl hover:bg-[#E26015] flex gap-2 items-center">
                    <span className="text-white text-md font-semibold">
                      View Our Portfolio
                    </span>
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* service team */}
          <div className="my-14">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              Service Team
            </span>
            <div>
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                Meet Our Training & Development Team{" "}
              </h3>
              <p className="text-[#999] text-xl my-2">
                Discover the experts behind our solutions. Our dedicated team
                brings a wealth of experience and a passion for driving success,
                ensuring we meet our clients’ unique challenges with precision
                and insight.
              </p>
            </div>
            {/* team pictures */}
            <div className="w-full flex my-4">
              <div className="w-full flex flex-wrap gap-8  relative rounded-md p-4">
                <div className="w-[250px] h-[250px] my-8 bg-[#B0D4EA]">
                  <Image
                    src={Happy}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white p-2 shadow-md rounded-tr-xl">
                    <h3 className="font-semibold text-lg">
                      Happiness C. Adama
                    </h3>
                    <p className="text-[#E45F11] font-semibold">
                      Senior Training and Development Analyst
                    </p>
                  </div>
                </div>
                <div className="w-[250px] h-[250px] my-8 bg-[#B0D4EA]">
                  <Image
                    src={Avatar}
                    alt="md"
                    className="w-full h-full object-cover"
                  />
                  <div className="bg-white p-2 shadow-md rounded-tr-xl">
                    <h3 className="font-semibold text-lg">Juliet Dunkwu</h3>
                    <p className="text-[#E45F11] font-semibold">
                      Training and Development Analyst
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] lg:w-[60%] flex justify-center pt-14 my-14 mx-auto">
            <div>
              <p className="text-center text-2xl">
                Connect, collaborate, and innovate from anywhere as you
                transform your workforce with our Training and Development
                Solutions.
              </p>
              <div className="flex justify-center">
                <Link href="/contact">
                  <button className="bg-[#E26015] hover:bg-black my-4 text-white text-md lg:text-lg py-2 px-4 rounded-lg">
                    Contact our Service Team
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
