import React from "react";
import Image from "next/image";
import Banner from "../../../../public/assets/training-development.jpg";
import Accordion from "@/components/Accordion";

const page = () => {
  return (
    <>
      <div className="py-[30px]">
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
      </div>
    </>
  );
};

export default page;
