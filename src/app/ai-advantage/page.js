"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Logo from "@/app/bfg-logo.png";
import { Button, Dialog, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

import Banner from "../../../public/assets/ai-banner.png";
import Avatar from "../../../public/assets/avatar.png";
import MidBanner from "../../../public/assets/mid-banner.png";
import ContentBanner from "../../../public/assets/content-banner.png";
import BottomBanner from "../../../public/assets/bottom-banner.png";
import CustomerBanner from "../../../public/assets/customer-banner.png";
import ProfitBanner from "../../../public/assets/profit-chart.png";

import NumberOne from "../../../public/assets/number1.png";
import NumberTwo from "../../../public/assets/number2.png";
import NumberThree from "../../../public/assets/number3.png";

import Work1 from "../../../public/assets/work1.png";
import Work2 from "../../../public/assets/work2.png";
import Work3 from "../../../public/assets/work3.png";

const Funnel = () => {
  const [active, setActive] = useState(false);

  let [isOpen, setIsOpen] = useState(true)

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setActive(true);
      } else {
        setActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div>
        <div className="mx-10">
          <div className="w-full flex flex-row gap-10">
            <div className="w-[50%] py-30">
              <div className="mt-10">
                <p className="py-2 px-4 border border-[#F1AF88] rounded-3xl inline-block">
                  Introducing Data 2 Deals
                </p>
              </div>
              <div>
                <h3 className="text-6xl text-[#333333] font-mont font-extrabold">
                  Unlock the Power of Data-Driven Deal Making
                </h3>
                <p className="text-[#999999] text-lg">
                  Streamline your construction data management and uncover new
                  business opportunities with Data2Deals
                </p>
              </div>
              <div className="my-10">
                <button onClick={open} className="py-2 px-6 bg-[#127DC0] hover:bg-black text-white rounded-2xl">
                  Get Started
                </button>
              </div>

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
                          <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                            Data2Deals Get Started
                          </Dialog.Title>
                          <div className="mt-2">
                            {/* <p className="text-sm text-gray-500">
                              Your payment has been successfully submitted. We’ve sent you an email with all of the details of your order.
                            </p> */}
                            <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label htmlFor="full_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full name</label>
            <input type="text" id="full_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required />
        </div>
        <div>
            <label htmlFor="company_type" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Type</label>
            <input type="text" id="company_type" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
            <label htmlFor="company_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name</label>
            <input type="text" id="company_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
            <input type="tel" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
            <label htmlFor="location" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Location</label>
            <input type="text" id="location" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Abuja, Nigeria" required />
        </div>
        <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email Address</label>
            <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
    </div>
                          </div>

                          <div className="mt-4">
                            <button
                              type="button"
                              className="inline-flex justify-center rounded-md border border-transparent bg-[#E45F11] px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                              onClick={close}
                            >
                              Submit
                            </button>
                          </div>
                        </Dialog.Panel>
                      </Transition.Child>
                    </div>
                  </div>
                </Dialog>
              </Transition>
            </div>
            <div className="w-[40%]">
              <div className="w-full">
                <Image
                  src={Banner}
                  alt="banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          <div className="mx-5">
            <div className="w-full h-[350px]">
              <Image
                src={MidBanner}
                alt="mid-banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div>
            <div className="w-full text-center py-20">
              <h3 className="text-xl text-[#E26015] font-mont font-bold my-2">
                Why Use Data2Deals
              </h3>
              <h2 className="text-4xl font-mont font-bold my-2">
                Easy, Simple, Affordable
              </h2>
              <p className="text-lg text-[#596780] font-mont my-2">
                Our platform, Data2Deals, empowers businesses to effectively manage
                <br /> improve productivity, sales and Optimize sales
              </p>
            </div>
          </div>
          <div>
            <div className="w-full flex flex-row gap-20">
              <div className="w-[40%]">
                <div className="flex gap-3">
                  <div className="mt-3">
                    <Image
                      src={NumberOne}
                      alt="number-one"
                      className="w-[100px] h-[30px] object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[24px] text-black font-mont my-2 font-bold">
                      Advance Your Sales Team
                    </h4>
                    <p className="text-[#596780]">
                      We equip your team with the latest AI tools and techniques to gain valuable insights, personalize marketing efforts and optimize lead generation. This allows them to target the right audience with the right message, increase their chances of closing deals.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-3">
                    <Image
                      src={NumberTwo}
                      alt="number-one"
                      className="w-[50px] h-[30px] object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[24px] text-black font-mont my-2 font-bold">
                      Boost Sales Performance
                    </h4>
                    <p className="text-[#596780]">
                      Our AI-driven strategies help improve conversion rates, shorten sales cycles, and maximize profitability.
                    </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="mt-3">
                    <Image
                      src={NumberThree}
                      alt="number-one"
                      className="w-[70px] h-[30px] object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-[24px] text-black font-mont my-2 font-bold">
                      Stay Competitive
                    </h4>
                    <p className="text-[#596780]">
                      We equip your team with the skills and knowledge to leverage AI and stay ahead the curve in the increasingly competitive Real Market.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-[50%]">
                <div className="w-full h-[400px]">
                  <Image
                    src={ContentBanner}
                    alt="content-banner"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[800px] mt-20 relative">
          <Image
            src={BottomBanner}
            alt="bottom-banner"
            className="w-full h-full object-cover"
          />
          <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className="w-full text-center py-20">
              <h3 className="text-xl text-white font-mont font-bold my-2">
                How it Works
              </h3>
              <h2 className="text-4xl text-white font-mont font-bold my-2">
                Few Easy Steps To Get Started
              </h2>
              <p className="text-lg text-white font-mont my-2">
                In just few easy step, you are all set to elevate your business
              </p>
            </div>
          </div>
          <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className="flex flex-row gap-10">
              <div>
                <Image src={Work1} alt="work1" className="w-full h-full" />
                <div></div>
              </div>
              <div>
                <Image src={Work2} alt="work2" className="w-full h-full" />
                <div></div>
              </div>
              <div>
                <Image src={Work3} alt="work3" className="w-full h-full" />
                <div></div>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-[800px] relative">
          <Image
            src={CustomerBanner}
            alt="customer-banner"
            className="w-full h-full object-cover"
          />

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex justify-center items-center">
            <div className="w-full text-center py-20">
              <h3 className="text-xl  font-mont font-bold my-2">
                Customer Reviews
              </h3>
              <h2 className="text-4xl  font-mont font-bold my-2">
                Real Stories from Real Users{" "}
              </h2>
              <p className="text-lg font-mont my-2">
                Discover How Data2Deals Transformed Their Financial Management
                and Revolutionized Business Efficiency{" "}
              </p>
              <div>
                <section className="bg-white dark:bg-gray-900">
                  <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                    <figure className="max-w-screen-md mx-auto">
                      <svg
                        className="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                          fill="currentColor"
                        />
                      </svg>
                      <blockquote>
                        <p className="text-2xl  text-gray-900 dark:text-white">
                         Our business recently enrolled key team members in an AI training program, and the impact has been transformative. The comprehensive curriculum covered everything from foundational principles to advanced machine learning techniques, tailored to real-world business applications.
                        </p>
                      </blockquote>
                      <figcaption className="flex items-center justify-center mt-6 space-x-3">
                        <Image
                          src={Avatar}
                          alt="profile picture"
                          width={100}
                          height={100}
                          className="rounded-full"
                        />{" "}
                        <div className="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                          <div className="pr-3 font-medium text-gray-900 dark:text-white">
                            Igboanugo Stanley
                          </div>
                          <div className="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                            CEO at ST Travels and Consulting
                          </div>
                        </div>
                      </figcaption>
                    </figure>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
        {/* last banner */}
        <div className="relative bg-[#041926] pt-20">
          <div className="w-full flex flex-row gap-10">
            <div className="w-[50%]">
              <div className="w-full mx-10">
                <h3 className="text-lg text-[#127DC0] font-mont font-bold my-2">
                  Profit
                </h3>
                <h2 className="text-4xl text-white font-mont font-bold my-2">
                  Improve your Business Income, Sales, Competition
                </h2>
                <p className="text-lg text-white font-mont my-2">
                  Transform Your Real Estate Strategy with Data-Driven Insights:
                  Start Your Journey with Data2Deals Now!
                </p>
                <div className="my-10">
                  <button onClick={open} className="py-2 px-6 bg-[#127DC0] hover:bg-black text-white rounded-2xl">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="w-[50%]">
              <Image
                src={ProfitBanner}
                alt="profit-banner"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funnel;
