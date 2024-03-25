import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/training-development.jpg";
import Accordion from "@/components/Accordion";
import TopBanner from "../../../../public/assets/training-development-banner.jpg";
import EmployeePerformance from "../../../../public/assets/employee-perfomance.jpg";
import Adaptability from "../../../../public/assets/curriculum-development.jpg";
import LeadershipTraining from "../../../../public/assets/training-delivery.jpg";
import EmployeeRetention from "../../../../public/assets/leadership-training.jpg";
import Talent from "../../../../public/assets/talent.jpg";
import Scalability from "../../../../public/assets/greater-scalability.png";
import HeadGrowth from "../../../../public/assets/moses-sunday.jpg";

const page = () => {
  return (
    <>
      {/* start section */}
      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={TopBanner}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Transparent overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
            Training and Development
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Empowering your workforce, Enhancing your business
          </p>
        </div>
      </div>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <div className="w-full">
            <p className="text-lg text-[#656565] my-3">
              The BFG Training and Development Solution sits within our talent
              management consulting practices. This service is provided to
              unlock potential, develop leaders, and create high-performing
              teams. We help organisations improve their performance by
              providing employees with the knowledge, skills, and abilities they
              need to succeed in their roles. We provide a wide range of
              training options, including classroom instruction, online
              learning, and onthe- job training. It also includes assessments,
              evaluations, and feedback to measure the effectiveness of the
              training for your organisation.
            </p>
          </div>

          <div>
            <div className="bg-[#f8f5f5] p-8">
              <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
                Focus areas of our Training and Development Services{" "}
              </h3>
              <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-8">
                <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-lg border-b-2 border-[#016EF8]">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="48"
                      height="48"
                      fill="rgba(1,110,248,1)"
                    >
                      <path d="M2 13H8V21H2V13ZM9 3H15V21H9V3ZM16 8H22V21H16V8Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Curriculum development</h4>
                  <p className="text-[#656565]">
                    {" "}
                    Designing and developing training programs and materials
                    that align with our client organisations goals and
                    objectives.
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
                      <path d="M17 8H20L23 12.0557V18H20.9646C20.7219 19.6961 19.2632 21 17.5 21C15.7368 21 14.2781 19.6961 14.0354 18H8.96456C8.72194 19.6961 7.26324 21 5.5 21C3.73676 21 2.27806 19.6961 2.03544 18H1V6C1 5.44772 1.44772 5 2 5H16C16.5523 5 17 5.44772 17 6V8ZM17 10V13H21V12.715L18.9917 10H17Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Delivery</h4>
                  <p className="text-[#656565]">
                    Facilitating training sessions, workshops, and seminars for
                    employees at all levels of your organisation.
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
                      <path d="M5.63611 12.7071L7.46454 14.5355L8.87875 13.1213L7.05033 11.2929L8.46454 9.87869L10.293 11.7071L11.7072 10.2929L9.87875 8.46448L11.293 7.05026L13.1214 8.87869L14.5356 7.46448L12.7072 5.63605L15.5356 2.80762C15.9261 2.4171 16.5593 2.4171 16.9498 2.80762L21.1925 7.05026C21.583 7.44079 21.583 8.07395 21.1925 8.46448L8.46454 21.1924C8.07401 21.5829 7.44085 21.5829 7.05033 21.1924L2.80768 16.9498C2.41716 16.5592 2.41716 15.9261 2.80768 15.5355L5.63611 12.7071ZM14.1214 18.3635L18.364 14.1208L20.9997 16.7565V20.9999H16.7578L14.1214 18.3635ZM5.63597 9.87806L2.80754 7.04963C2.41702 6.65911 2.41702 6.02594 2.80754 5.63542L5.63597 2.80699C6.02649 2.41647 6.65966 2.41647 7.05018 2.80699L9.87861 5.63542L5.63597 9.87806Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Evaluation and follow-up</h4>
                  <p className="text-[#656565]">
                    Measuring the effectiveness of training programs and
                    providing follow-up support to ensure that employees can
                    apply new skills and knowledge on the job.
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
                      <path d="M8 4C8 2.34315 9.34315 1 11 1C12.6569 1 14 2.34315 14 4C14 4.35064 13.9398 4.68722 13.8293 5H18C18.5523 5 19 5.44772 19 6V10.1707C19.3128 10.0602 19.6494 10 20 10C21.6569 10 23 11.3431 23 13C23 14.6569 21.6569 16 20 16C19.6494 16 19.3128 15.9398 19 15.8293V20C19 20.5523 18.5523 21 18 21H4C3.44772 21 3 20.5523 3 20V6C3 5.44772 3.44772 5 4 5H8.17071C8.06015 4.68722 8 4.35064 8 4Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">Customised training</h4>
                  <p className="text-[#656565]">
                    Offering customised training solutions that are tailored to
                    meet the specific needs of your organisation and employees.
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
                      <path d="M8.58579 17H3V15H21V17H15.4142L18.6569 20.2426L17.2426 21.6569L13 17.4142V20H11V17.4142L6.75736 21.6569L5.34315 20.2426L8.58579 17ZM5 3H19C19.5523 3 20 3.44772 20 4V14H4V4C4 3.44772 4.44772 3 5 3Z"></path>
                    </svg>
                  </span>
                  <h4 className="text-2xl my-2">
                    E-Learning and Virtual training
                  </h4>
                  <p className="text-[#656565]">
                    Offering online training programs and virtual instructor-led
                    training to employees who are located in different regions
                    or working remotely.
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
                      <path d="M21 9V20.9925C21 21.5511 20.5552 22 20.0066 22H3.9934C3.44495 22 3 21.556 3 21.0082V2.9918C3 2.45531 3.44694 2 3.99826 2H14V8C14 8.55228 14.4477 9 15 9H21ZM21 7H16V2.00318L21 7ZM8 7V9H11V7H8ZM8 11V13H16V11H8ZM8 15V17H16V15H8Z"></path>
                    </svg>{" "}
                  </span>
                  <h4 className="text-2xl my-2">Coaching and mentoring</h4>
                  <p className="text-[#656565]">
                    Providing one-on-one coaching and mentoring to help
                    employees develop their skills and advance in their careers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-[#016EF8] text-4xl text-center my-4">
              Service Benefits
            </h3>
            <div>
              <div>
                <div className="w-full flex flex-wrap md:justify-center lg:justify-normal gap-6">
                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={EmployeePerformance}
                          alt="banner"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Improved employee performance
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          By providing employees with the knowledge, skills, and
                          abilities they need to succeed in their roles, this
                          solution helps organisations improve employee
                          performance and productivity.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={EmployeeRetention}
                          alt="production-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Better retention of employees{" "}
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Investing in employee training and development helps
                          organisations retain their best employees, and reduces
                          the costs associated with turnover.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Adaptability}
                          alt="marketing-stats"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Greater adaptability and flexibility
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          By providing your employees with training and
                          development that keeps them up-to-date with new
                          technologies and changing industry trends, your
                          organisation will be more adaptable and flexible in
                          response to changing business conditions.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={LeadershipTraining}
                          alt="measure-business"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Improved decision-making
                        </h3>
                        <p className="text-center text-[#656565]">
                          {" "}
                          Access to accurate, up-to-date information and expert
                          analysis helps our clients make more informed and
                          effective decisions for their businesses.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Talent}
                          alt="employee-satisfy"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Enhanced ability to attract top talent{" "}
                        </h3>{" "}
                        <p className="text-center text-[#656565]">
                          {" "}
                          Organisations that invest in this service are more
                          likely to attract top talent, as potential employees
                          view such investment as a sign of a committed and
                          forward-thinking organisation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="w-[100%] md:w-[60%] lg:w-[30%] p-3 bg-white shadow-xl rounded-md">
                    <div className="p-4">
                      <div className="relative">
                        <Image
                          src={Scalability}
                          alt="employee-satisfy"
                          className="w-full h-[200px] object-fit"
                        />
                      </div>
                      <div className="py-4">
                        <h3 className="text-2xl font-semibold text-center my-2 text-[#016EF8]">
                          Greater scalability{" "}
                        </h3>{" "}
                        <p className="text-center text-[#656565]">
                          {" "}
                          Developing scalable systems and processes, also helps
                          leaders and managers of organisations prepare for and
                          manage growth in their business.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="py-8">
            <h3 class="text-[#016EF8] text-4xl my-4 text-center">
              Connect With Us: Unlock Potential
            </h3>
            <p class="text-xl font-semibold my-2 text-center">
              Cultivate Growth, Ignite Excellence.
            </p>
            <p class="text-xl font-semibold my-2 text-center">
              Explore Our Expertise
            </p>
            <p className="text-2xl text-[#016EF8] text-center my-2 font-semibold">
              Get in touch
            </p>

            <div className="w-full flex gap-4 flex-wrap justify-center">
              {/* <div className="w-[30%] border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                <Image
                src={ManagingDirector}
                alt="managing-director"
                className="w-full h-full object-fit rounded-full"
                />
                </div>
                <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Festus Bello</h3>
                <p className="text-xl text-gray-500">Managing Director / CEO</p>
                <div className="flex gap-2 justify-center my-2"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(107,114,128,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></span><span className="text-gray-500">festus.bello@bfgconsults.com</span></div>
                </div>
              </div> */}

              <div className="border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                  <Image
                    src={HeadGrowth}
                    alt="head-growth"
                    className="w-full h-full object-fit rounded-full"
                  />
                </div>
                <div className="text-center">
                  <h3 className="text-xl font-semibold my-2">Sunday Moses</h3>
                  <p className="text-xl text-gray-500">
                    Head of Growth and Development
                  </p>
                  <div className="flex gap-2 justify-center my-2">
                    {" "}
                    <a
                      href="mailto:sunday.moses@bfgconsults.com"
                      title="sunday.moses@bfgconsults.com"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path>
                        </svg>
                      </span>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/sunday-moses-10b49314a/"
                      target="_blank"
                    >
                      <span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          width="24"
                          height="24"
                          fill="rgba(107,114,128,1)"
                        >
                          <path d="M18.3362 18.339H15.6707V14.1622C15.6707 13.1662 15.6505 11.8845 14.2817 11.8845C12.892 11.8845 12.6797 12.9683 12.6797 14.0887V18.339H10.0142V9.75H12.5747V10.9207H12.6092C12.967 10.2457 13.837 9.53325 15.1367 9.53325C17.8375 9.53325 18.337 11.3108 18.337 13.6245V18.339H18.3362ZM7.00373 8.57475C6.14573 8.57475 5.45648 7.88025 5.45648 7.026C5.45648 6.1725 6.14648 5.47875 7.00373 5.47875C7.85873 5.47875 8.55173 6.1725 8.55173 7.026C8.55173 7.88025 7.85798 8.57475 7.00373 8.57475ZM8.34023 18.339H5.66723V9.75H8.34023V18.339ZM19.6697 3H4.32923C3.59498 3 3.00098 3.5805 3.00098 4.29675V19.7033C3.00098 20.4202 3.59498 21 4.32923 21H19.6675C20.401 21 21.001 20.4202 21.001 19.7033V4.29675C21.001 3.5805 20.401 3 19.6675 3H19.6697Z"></path>
                        </svg>{" "}
                      </span>{" "}
                    </a>
                  </div>
                </div>
              </div>

              {/* <div className="w-[30%] border-2 rounded-md border-gray-400 p-4">
                <div className="w-[150px] h-[150px] mx-auto">
                <Image
                src={ResearchHead}
                alt="research-head"
                className="w-full h-full object-fit rounded-full"
                />
                </div>
                <div className="text-center">
                <h3 className="text-xl font-semibold my-2">Kenneth Idanwekhai</h3>
                <p className="text-xl text-gray-500">Associate, Research, Data and Analytics</p>
                <div className="flex gap-2 justify-center my-2"><span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(107,114,128,1)"><path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM12.0606 11.6829L5.64722 6.2377L4.35278 7.7623L12.0731 14.3171L19.6544 7.75616L18.3456 6.24384L12.0606 11.6829Z"></path></svg></span><span className="text-gray-500">sunday.moses@bfgconsults.com</span></div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      {/* end section */}

      {/* <div className="py-[30px]">
        <div className="p-[40px]">
        <h3 className="my-4 flex justify-center text-lg font-bold">
            <span className="bg-[#f89d68] p-2 text-white rounded-xl">
            Training and Development
            </span>
          </h3>
          
          <div className="w-full flex flex-col lg:flex-row items-center gap-2">
  <div className="w-full lg:w-[50%]">
              <h3 className="text-xl text-[#E45F11] font-bold">
                Empowering your workforce,
              </h3>
              <h4 className="text-xl text-[#E45F11] font-bold">
                Enhancing your business
              </h4>
              <p className="text-lg text-[#656565] my-3">
                The BFG Training and Development Solution sits within our talent
                management consulting practices. This service is provided to
                unlock potential, develop leaders, and create high-performing
                teams. We help organisations improve their performance by
                providing employees with the knowledge, skills, and abilities
                they need to succeed in their roles. We provide a wide range of
                training options, including classroom instruction, online
                learning, and onthe- job training. It also includes assessments,
                evaluations, and feedback to measure the effectiveness of the
                training for your organisation.
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
            <h3 className="my-3 text-[#E45F11] text-center font-bold text-lg">
              While our training and development solution cuts across hard
              (technical) and soft (nontechnical) skill development, the
              solution includes a wide range of services such as:
            </h3>
            <div className="">
              <div className="relative w-[80%] h-[100%] bg-white border-b-2 border-[#E45F11] shadow-lg p-8 mx-auto ">
                <div className="text-black">
                  <ul className="list-disc">
                    <li className="my-2">
                      <span className="font-bold">Needs analysis:</span>{" "}
                      Assessing the specific training needs of the organization
                      and its employees.
                    </li>
                    <li className="my-2">
                      <span className="font-bold">Curriculum development:</span>{" "}
                      Designing and developing training programs and materials
                      that align with our client organisations goals and
                      objectives.
                    </li>

                    <li className="my-2">
                      <span className="font-bold">Delivery:</span> Facilitating
                      training sessions, workshops, and seminars for employees
                      at all levels of your organisation.
                    </li>

                    <li className="my-2">
                      <span className="font-bold">
                        Evaluation and follow-up:
                      </span>{" "}
                      Measuring the effectiveness of training programs and
                      providing follow-up support to ensure that employees can
                      apply new skills and knowledge on the job.
                    </li>

                    <li className="my-2">
                      <span className="font-bold">Customised training:</span>{" "}
                      Offering customised training solutions that are tailored
                      to meet the specific needs of your organisation and
                      employees.
                    </li>

                    <li className="my-2">
                      <span className="font-bold">
                        E-Learning and Virtual training:
                      </span>{" "}
                      Offering online training programs and virtual
                      instructor-led training to employees who are located in
                      different regions or working remotely.
                    </li>

                    <li className="my-2">
                      <span className="font-bold">Coaching and mentoring:</span>{" "}
                      Providing one-on-one coaching and mentoring to help
                      employees develop their skills and advance in their
                      careers.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="container mx-auto py-8">
            <h1 className="text-xl font-bold mb-4">Service Benefits</h1>
            <Accordion title="Improved employee performance">
              <p>
                By providing employees with the knowledge, skills, and abilities
                they need to succeed in their roles, this solution helps
                organisations improve employee performance and
                productivity.Increased employee satisfaction and engagement:
                When employees feel that they are receiving the training and
                development they need to do their jobs effectively, they are
                more likely to be satisfied with their jobs and more engaged in
                their work.
              </p>
            </Accordion>
            <Accordion title="Better retention of employees">
              <p>
                Investing in employee training and development helps
                organisations retain their best employees, and reduces the costs
                associated with turnover.
              </p>
            </Accordion>
            <Accordion title="Greater adaptability and flexibility">
              <p>
                By providing your employees with training and development that
                keeps them up-to-date with new technologies and changing
                industry trends, your organisation will be more adaptable and
                flexible in response to changing business conditions.
              </p>
            </Accordion>
            <Accordion title="Improved decision-making">
              <p>
                Access to accurate, up-to-date information and expert analysis
                helps our clients make more informed and effective decisions for
                their businesses.
              </p>
            </Accordion>
            <Accordion title="Enhanced ability to attract top talent">
              <p>
                Organisations that invest in this service are more likely to
                attract top talent, as potential employees view such investment
                as a sign of a committed and forward-thinking organisation.
              </p>
            </Accordion>
            <Accordion title="Greater scalability">
              <p>
                Developing scalable systems and processes, also helps leaders
                and managers of organisations prepare for and manage growth in
                their business.
              </p>
            </Accordion>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default page;
