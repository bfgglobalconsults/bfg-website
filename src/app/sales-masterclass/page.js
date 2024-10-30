"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import Banner from "../../../public/assets/sales-newbanner.jpg";
import SecondBanner from "../../../public/assets/second-banner.png";
import SalesTestimonial from "@/components/sales-components/SalesTestimonial";
import SalesVideoHighlight from "@/components/sales-components/SalesVideoHighlight";
import Speaker1 from "../../../public/assets/speaker1.png";
import Speaker2 from "../../../public/assets/speaker2.png";
import Speakers from "../../../public/assets/masterclass-flyer.png";
import Thinkingman from "../../../public/assets/thinking-man.png";
import SalesChart from "../../../public/assets/sales-chart.png";
import SalesEventCounter from "@/components/sales-components/SalesEventCounter";
import Salesman from "../../../public/assets/salesman.png";
import EmbeddedForms from "@/components/sales-components/EmbeddedForms";
import SalesMaster from "../../../public/assets/master-image.png";
import PriceImage from "../../../public/assets/price-image.png";
import Arrows from "../../../public/assets/arrow-red-3.webp";
import Countdown from "@/components/Countdown";

const Page = () => {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }
  return (
    <>
      <div>
        <div>
          <div className="w-full">
            <div className="w-full relative">
              <div className="w-full h-[500px]">
                <Image
                  src={Banner}
                  alt="banner"
                  quality={100}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black opacity-50"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="w-[100%] lg:w-[50%]">
                  <h3 className="my-2 text-white text-3xl">
                    Get high-quality, Ready-to-Buy Customers every day Following
                    these secrets!
                  </h3>
                  <p className="text-lg text-white my-2 p-2">
                    Discover the Sales Secrets that will have your customers
                    eager to hand over their money! Your competitors are already
                    using these strategies and don&apos;t want you to find out!
                  </p>

                  <button
                    onClick={open}
                    className="bg-[#E26015] text-white hover:bg-black py-3 px-6 rounded-xl"
                  >
                    <span className="text-white font-semibold">
                      Yes, I’m Ready To Register Now!
                    </span>
                  </button>
                </div>
              </div>
            </div>
            {/* modal pop up */}
            <Transition appear show={isOpen}>
              <Dialog as="div" className="relative z-10" onClose={close}>
                <Transition.Child
                  enter="ease-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm" />
                </Transition.Child>

                <div className="fixed inset-0 z-10 overflow-y-auto">
                  <div className="flex min-h-full items-center justify-center p-4 text-center">
                    <Transition.Child
                      enter="ease-out duration-300"
                      enterFrom="opacity-0 scale-95"
                      enterTo="opacity-100 scale-100"
                      leave="ease-in duration-200"
                      leaveFrom="opacity-100 scale-100"
                      leaveTo="opacity-0 scale-95"
                    >
                      <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900 my-4"
                        >
                          Secure Your masterclass Spot
                        </Dialog.Title>
                        <div>
                          <EmbeddedForms close={close} />
                        </div>
                      </Dialog.Panel>
                    </Transition.Child>
                  </div>
                </div>
              </Dialog>
            </Transition>
            {/* modal pop up end */}
            <div className="mx-[30px] lg:mx-[100px] my-[50px]">
              <div className="lg:flex gap-2 w-full">
                <div className="w-full lg:w-[50%]">
                  <p className="text-lg lg:text-xl w-[100%] lg:w-[80%] leading-7 text-justify">
                    The truth is that some of your competitors are{" "}
                    <span className="text-[#E26015]">LOW KEY</span> already
                    using these powerful sales strategies to stay ahead of the
                    game. But don’t panic. If you think that increasing sales
                    this
                    <span className="text-[#E26015]"> EMBER</span> season will
                    help you end the year as a winner with more money in your
                    account while you prepare for next year’s success, we are
                    here to help you catch up with the sales game.
                  </p>
                  <button
                    onClick={open}
                    className="bg-[#E26015] hover:bg-black text-lg text-white my-2 py-2 px-4 rounded-lg"
                  >
                    Click the Link To Register Now!
                  </button>
                </div>
                <div className="w-full lg:w-[50%] my-4 lg:my-0">
                  <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                    <Image
                      src={Thinkingman}
                      alt="first-image"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* banner */}
            <div className="w-full relative">
              <div className="h-[300px]">
                <Image
                  src={SecondBanner}
                  quality={100}
                  alt="second banner"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 flex items-center justify-center text-center">
                <div className="w-[100%] lg:w-[50%]">
                  <p className="text-xl lg:text-2xl text-white font-semibold my-2 p-2">
                    <span className="inline-block align-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M4.58341 17.3211C3.55316 16.2274 3 15 3 13.0103C3 9.51086 5.45651 6.37366 9.03059 4.82318L9.92328 6.20079C6.58804 8.00539 5.93618 10.346 5.67564 11.822C6.21263 11.5443 6.91558 11.4466 7.60471 11.5105C9.40908 11.6778 10.8312 13.159 10.8312 15C10.8312 16.933 9.26416 18.5 7.33116 18.5C6.2581 18.5 5.23196 18.0095 4.58341 17.3211ZM14.5834 17.3211C13.5532 16.2274 13 15 13 13.0103C13 9.51086 15.4565 6.37366 19.0306 4.82318L19.9233 6.20079C16.588 8.00539 15.9362 10.346 15.6756 11.822C16.2126 11.5443 16.9156 11.4466 17.6047 11.5105C19.4091 11.6778 20.8312 13.159 20.8312 15C20.8312 16.933 19.2642 18.5 17.3312 18.5C16.2581 18.5 15.232 18.0095 14.5834 17.3211Z"></path>
                      </svg>
                    </span>
                    Thank you for taking the time to explore what we have
                    planned for you. As a special gift, we’re offering a
                    powerful sales plan that has boosted our revenue and that of
                    clients worldwide by 300x, generating hundreds of millions
                    in returns
                    <span className="inline-block align-middle">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="48"
                        height="48"
                        fill="rgba(255,255,255,1)"
                      >
                        <path d="M19.4167 6.67891C20.4469 7.77257 21.0001 9 21.0001 10.9897C21.0001 14.4891 18.5436 17.6263 14.9695 19.1768L14.0768 17.7992C17.4121 15.9946 18.0639 13.6539 18.3245 12.178C17.7875 12.4557 17.0845 12.5533 16.3954 12.4895C14.591 12.3222 13.1689 10.8409 13.1689 9C13.1689 7.067 14.7359 5.5 16.6689 5.5C17.742 5.5 18.7681 5.99045 19.4167 6.67891ZM9.41669 6.67891C10.4469 7.77257 11.0001 9 11.0001 10.9897C11.0001 14.4891 8.54359 17.6263 4.96951 19.1768L4.07682 17.7992C7.41206 15.9946 8.06392 13.6539 8.32447 12.178C7.78747 12.4557 7.08452 12.5533 6.39539 12.4895C4.59102 12.3222 3.16895 10.8409 3.16895 9C3.16895 7.067 4.73595 5.5 6.66895 5.5C7.742 5.5 8.76814 5.99045 9.41669 6.67891Z"></path>
                      </svg>
                    </span>
                  </p>
                </div>
              </div>
            </div>

            {/* second layer */}
            <div className="mx-[30px] lg:mx-[100px] my-[50px]">
              <div className="lg:flex gap-2 w-full">
                <div className="w-[100%] lg:w-[50%]">
                  <p className="text-lg w-[100%] lg:w-[80%] leading-loose text-justify">
                    It’s simple, effective, and profitable: it’s yours to learn
                    and apply to transform your business. But before you gain
                    access to this proven sales plan, you need to understand
                    that following the principles laid out for you will need
                    expert guidance that you can only get from investing money,
                    time, and energy in our MASTERCLASS
                  </p>
                  <p className="text-lg w-[100%] lg:w-[80%] leading-loose my-3 text-justify">
                    {" "}
                    If you attended the{" "}
                    <span className="font-bold">FREE Webinar</span>, you can
                    enjoy a <span className="font-bold">25% discount</span> on
                    the{" "}
                    <span className="font-semibold text-[#E26015]">
                      MASTERCLASS
                    </span>
                    , which costs{" "}
                    <span className="font-bold">25,000 Naira</span>. You will
                    also receive your gift upon registration! We hope you saved
                    the discount code sent to you during the Webinar, as you
                    will need it to access the discount.
                  </p>
                </div>
                <div className="w-[100%] lg:w-[50%]">
                  <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                    <Image
                      src={SalesChart}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* third layer */}
            <div className="mx-[30px] lg:mx-[100px] my-[50px]">
              <div className="lg:flex gap-3">
                <div className="w-[100%] lg:w-[50%]">
                  <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                    <Image
                      src={Salesman}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className="w-[100%] lg:w-[50%]">
                  <p className="text-lg w-[100%] lg:w-[80%] my-3 lg:my-0 leading-relaxed text-justify">
                    Now, back to the MASTERCLASS. This strategic sales training
                    covers creating a scalable sales roadmap, building
                    sustainable frameworks for consistent performance, enhancing
                    customer service workflows with case studies, optimizing CRM
                    for email marketing, and implementing persuasive copywriting
                    strategies to drive engagement and conversions.   At{" "}
                    <span className="text-[#E26015] font-semibold">
                      BFG Global Consulting{" "}
                    </span>
                    , we are committed to working with business owners,
                    marketing teams, sales leaders/representatives,
                    entrepreneurs, startups, and freelancers to provide the
                    necessary support in overcoming these challenges
                  </p>
                </div>
              </div>
            </div>
            {/* fourth layer */}
            <div>
              <h3 className="text-center text-2xl font-semibold w-[100%] lg:w-[50%]  lg:mx-auto">
                We will show you the{" "}
                <span className="text-[#E26015]">SECRET STRATEGIES</span> your
                competitors use to sell more so you can stop stressing and start
                seeing progress immediately.
              </h3>
              <div className="bg-[#127DC01A] py-3 my-4">
                <div className="mx-[30px] lg:mx-[100px]">
                  <h4 className="text-xl">
                    These secret selling strategies are tailored for you if:
                  </h4>

                  <div className="p-2 rounded-md border border-[#E26015] border-dashed my-4">
                    <div className="flex gap-4 lg:gap-2 items-center my-6">
                      <span className="w-6 h-6 px-2 lg:px-0 text-center text-white bg-[#127DC0] rounded-lg">
                        1
                      </span>
                      <span className="text-lg">
                        You aspire to master the art of sealing big deals and
                        developing strong customer relationships.
                      </span>
                    </div>
                    <div className="flex gap-2 items-center my-6">
                      <span className="w-6 h-6 px-2 lg:px-0 text-center text-white bg-[#127DC0] rounded-lg">
                        2
                      </span>
                      <span className="text-lg">
                        You are tired of always trying to keep up with your
                        competitors.
                      </span>
                    </div>
                    <div className="flex gap-2 items-center my-6">
                      <span className="w-6 h-6 px-2 lg:px-0 text-center text-white bg-[#127DC0] rounded-lg">
                        3
                      </span>
                      <span className="text-lg">
                        You are eager to unveil the proven methods and
                        structures used by your competitors to dominate the
                        market.{" "}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              {/* section */}
              <div className="mx-[30px] my-[30px] lg:mx-[100px] lg:my-[100px]">
                <p className="text-lg text-[#333] text-justify">
                  Low sales can be caused by various factors such as unclear
                  sales strategies, weak offers, and poor customer segmentation.
                  Inadequate training, strong competition, and failure to adapt
                  to changing trends can also impact sales. Without proper
                  metrics and customer feedback, its hard to identify and fix
                  these issues. Neglecting customer needs can damage your
                  companys reputation and success. If your company lacks a
                  customer-focused approach, employee training, and proper data
                  analysis, progress will be limited. These challenges can lead
                  to revenue decline, damaged brand reputation, and missed
                  growth opportunities
                </p>
                <p className="my-4 text-xl text-justify">
                  To address these issues, thorough market research, customer
                  study, and investment in employee training are crucial.
                </p>
                <p className="my-4 text-xl text-justify">
                  According to Kippa, many Nigerian businesses have the capital
                  but lack the necessary skills and processes.
                </p>
              </div>
              {/* fifth layer */}
              <div>
                <div className="flex justify-center">
                  <h3 className="inline-block w-[100%] lg:w-[50%] mx-[30px] lg:mx-auto border-2 border-[#E26015] rounded-lg py-2 px-4 text-center text-xl">
                    We are offering you a golden opportunity to change that!
                  </h3>
                </div>
                <div className="mx-[30px] lg:mx-[200px] my-[30px] lg:my-[100px]">
                  <div className="lg:flex gap-4">
                    <div className="w-[100%] lg:w-[50%]">
                      <p className="text-xl lg:text-2xl font-semibold text-justify">
                        BFG Global Consults is committed to helping micro,
                        small, and medium enterprises through relevant training
                        initiatives to increase competitive advantage and drive
                        economic growth.
                      </p>
                    </div>
                    <div className="w-[100%] lg:w-[50%] my-2 lg:my-0">
                      <p className="text-[#999] text-lg">
                        We focus on helping MSMEs contribute to the Nigerian
                        economy by empowering them with adequate training,
                        thereby supporting the creation of jobs at relatively
                        low capital cost, especially in the growing service
                        sector, and providing a vehicle for future industrial
                        expansion
                      </p>
                    </div>
                  </div>
                </div>
                {/* <SalesTestimonial /> */}
                <h3 className="text-3xl font-semibold italic text-center">
                  Watch our Previous Webinar
                </h3>
                <SalesVideoHighlight />
                <section className="p-3 bg-[#127DC01A]">
                  <h3 className="mx-[30px] lg:mx-[250px] my-[100px] text-center text-2xl">
                   Our MASTERCLASS will only cost you 25,000 Naira and comes with the added advantage of a free Sales Plan!
                  </h3>
                  <div className="mx-[30px] lg:mx-[100px]">
                    <div className="lg:flex gap-8 w-full">
                      <div className="w-[100%] lg:w-[50%]">
                        <div className="w-[350px] h-[350px] lg:w-[400px] lg:h-[400px]">
                          <Image
                            src={SalesMaster}
                            alt="sales-master"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div className="w-[100%] lg:w-[50%]">
                        <p className="text-xl text-center text-[#333] my-2 lg:my-0">
                          We&apos;ve noticed many companies charging no less
                          than NGN 450,000 for similar classes, with an ongoing
                          broadcast priced at the same amount and no discounts
                          offered.
                        </p>
                        <p className="text-2xl text-center my-6">
                          Our MASTERCLASS will only cost you 25,000 Naira and
                          comes with the added advantage of a free trial class!
                        </p>
                        <div className="w-[250px] h-[250px] mt-6 flex justify-center">
                          <Image
                            src={PriceImage}
                            alt="price-image"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="mx-[30px] lg:mx-[100px]">
                    <p className="my-4 text-xl text-justify">
                      At BFG Global Consults, we believe in providing great
                      value at a lower cost without compromising quality. We
                      understand the current economic challenges and the vital
                      role of MSMEs in driving economic stability. We are
                      committed to empowering businesses to thrive, create jobs,
                      and contribute to economic growth
                    </p>
                    <p className="my-4 text-xl text-justify">
                      Money is not everything; value is. We aim to build lasting
                      relationships that withstand challenges and create a
                      better future for the next generation.
                    </p>
                    <p className="my-4 text-xl text-justify">
                      Our masterclass is priced at only NGN 25,000 and includes
                      extensive support and business tools to ensure you
                      succeed. 
                      {/* <span className="font-semibold">
                        &quot; Sales Strategy for Navigating Competitive
                        Markets, &quot;
                      </span>{" "}
                      to introduce you to what our masterclass offers. */}
                    </p>
                  </div>
                </section>
                {/* free webinar */}
                <section className="mx-[30px] my-[30px] lg:mx-[100px] lg:my-[100px]">
                  <div>
                    <div>{/* enter arrow image */}</div>
                    <div className="flex justify-center mx-auto w-[170px] h-[100px]">
                      <Image
                        src={Arrows}
                        alt="arrow"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-center text-2xl font-semibold">
                      Masterclass
                    </h3>
                    <p className="my-4 text-lg text-center">
                      In this masterclass, you&apos;ll:
                    </p>
                  </div>
                  <div className="d-block w-[80%] lg:w-[60%] mx-auto">
                    <div className="flex gap-4 lg:gap-2 items-center my-6">
                      <span className="w-6 h-6 px-2 lg:px-0 text-center text-white bg-[#127DC0] rounded-lg">
                        1
                      </span>
                      <span className="text-lg">
                        Develop a strategic sales roadmap
                      </span>
                    </div>
                    <div className="flex gap-2 items-center my-6">
                      <span className="w-6 h-6 px-2 lg:px-0 text-center text-white bg-[#127DC0] rounded-lg">
                        2
                      </span>
                      <span className="text-lg">
                        Build effective customer service structures.
                      </span>
                    </div>
                    <div className="flex gap-2 items-center my-6">
                      <span className="w-6 h-6 px-2 lg:px-0 text-center text-white bg-[#127DC0] rounded-lg">
                        3
                      </span>
                      <span className="text-lg">
                        Optimize CRM systems for personalized email marketing.
                      </span>
                    </div>
                    <div className="flex gap-2 items-center my-6">
                      <span className="w-6 h-6 px-2 lg:px-0 text-center text-white bg-[#127DC0] rounded-lg">
                        4
                      </span>
                      <span className="text-lg">
                        Automate customer retention strategies.
                      </span>
                    </div>
                  </div>
                </section>
                {/* webinar insights */}
                <section className="mx-[30px] my-[30px] lg:mx-[100px] lg:my-[100px]">
                  <p className="text-xl my-6">
                    Gain deep insights into top sales techniques that drive
                    outstanding results.{" "}
                    <span className="text-[#E26015]">Learn how</span> to
                    outperform your competition, dominate your market, and
                    elevate your sales performance with practical tips and
                    actionable advice. Don&apos;t let your competition outpace
                    you.
                  </p>
                  <p className="text-xl my-6">
                    This is your opportunity to catch up, stay competitive, and
                    upgrade your sales operations.
                  </p>
                  <p className="text-xl my-6">
                    <span className="text-[#E26015]">
                      Reveal the Top Secret to Boosting Your Sales!
                    </span>{" "}
                    Be informed, that your top competitors don&apos;t want you
                    to know this, but the key to enhancing your sales is now
                    within reach.
                  </p>
                  {/* <p className="text-xl my-6">
                    Join our <span className="text-[#E26015]">FREE</span>{" "}
                    exclusive webinar to discover actionable strategies that
                    guarantee revenue boost and performance
                  </p> */}
                  <p className="text-xl my-6">
                    We with our Masterclass, 
                    we&apos;ll secure your long-term success by helping you to
                    identify what&apos;s been holding you back and equip you
                    with practical techniques to overcome it quickly in this
                    transformative, no-cost webinar.{" "}
                  </p>
                  <div className="flex justify-center">
                    <button
                      onClick={open}
                      className="bg-[#E26015] hover:bg-black rounded-lg p-3 text-white text-lg"
                    >
                      Click the Link To Register Now!
                    </button>
                  </div>
                </section>
                {/* venue  */}
                <div className="mx-[30px] lg:mx-[100px]">
                  <h2 className="text-2xl font-semibold text-center">
                    Join Our <span className="text-[#E26015]">Masterclass</span>
                  </h2>
                  <div className="my-6 border border-[#E26015] p-4 rounded-lg d-block w-[90%] lg:w-[60%] mx-auto">
                    <p className="text-lg font-semibold my-6">
                      Sales Strategy for Navigating Competitive Markets!
                    </p>
                    <p className="text-lg font-semibold my-6">
                      Date: November 8-9, 2024
                    </p>
                    <p className="text-lg font-semibold my-6">
                      Time: 10:00 AM - 3:00 PM
                    </p>
                    <p className="text-lg font-semibold my-6">
                      Location: Online
                    </p>
                    <p className="text-lg font-semibold my-6">
                      Our expert-led session will equip you with strategies to:
                    </p>
                    <ul className="text-lg list-disc list-inside pl-[revert]">
                      <li>Enhance your sales</li>
                      <li>Improve customer service</li>
                      <li>Optimize your CRM for sustainable business growth</li>
                    </ul>
                  </div>
                </div>
                {/* venue end */}
                {/* speakers */}
                {/* <section className="mx-[30px] my-[30px] lg:mx-[100px] lg:my-[100px]">
                  <h3 className="text-2xl font-semibold text-center my-6">
                    Meet Your <span className="text-[#E26015]">Speakers</span>
                  </h3>
                  <div className="lg:flex gap-[50px] justify-center">
                    <div className="w-[350px] h-[350px] my-8 lg:my-0 lg:w-[400px] lg:[400px]">
                      <Image
                        src={Speaker2}
                        alt="Speaker 2"
                        className="object-cover"
                        width={300}
                        height={150}
                      />
                    </div>
                    <div className="w-[350px] h-[350px] my-8 lg:my-0 lg:w-[400px] lg:[400px]">
                      <Image
                        src={Speaker1}
                        alt="Speaker 1"
                        className="object-cover"
                        width={300}
                        height={150}
                      />
                    </div>
                  </div>
                  <p className="text-lg text-center my-8">
                    Act Now! Limited spots are available. Don&apos;t miss this
                    opportunity to boost sales, enhance customer loyalty, and
                    optimize your sales strategies. Register today to secure
                    your place:
                  </p>
                  <div className="flex justify-center my-6">
                    <button
                      onClick={open}
                      className="bg-[#E26015] hover:bg-black rounded-lg p-3 text-white text-lg"
                    >
                      Click the Link To Register Now!
                    </button>
                  </div>
                </section> */}
                {/* speakers end */}
                <Countdown />
                {/* bottom banner section */}
                <section className="mx-[30px] my-[30px] lg:mx-[100px] lg:my-[100px]">
                 
    

                  <div className="w-[350px] lg:w-[100%]">
                    <Image
                      src={Speakers}
                      alt="speakers-banner"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </section>
                {/* bottom banner section end */}

                {/* account details */}
                <div className="flex justify-center shadow-md"></div>
                {/* account details end */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
