"use client";
import Accordion from "@/components/Accordion";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import Link from "next/link";
import ContactBanner from "../../../public/assets/contact-image.png";
import { useRouter } from "next/router";
import Image from "next/image";

const Page = () => {
  const [state, handleSubmit] = useForm("xwkgrkre");

  if (state.succeeded) {
    return (
      <div className="p-8 flex justify-center mx-8 my-8 rounded-md bg-[#1c416d]">
        <div>
          <p className="text-black text-2xl font-bold">
            Thanks for Contacting Us!
          </p>
          <Link href="/">
            <div className="flex gap-4 justify-center my-4">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="36"
                  height="36"
                  fill="rgba(255,255,255,1)"
                >
                  <path d="M12 13V20L4 12L12 4V11H20V13H12Z"></path>
                </svg>
              </span>
              <span className="text-white text-xl font-semibold">Go Home</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="mt-[150px] p-12">
        <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
          Contact Us
        </span>
        <div className="flex w-full gap-4 items-center justify-between my-4">
          <h3 className="w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
            Contact Us
          </h3>
          <p className="w-[50%] text-[#999] my-2 text-lg lg:text-xl">
            We love to hear from you! Whether you have a question about our
            services, want to discuss a potential collaboration, or just want to
            say hello, our team is ready to connect with you.
          </p>
        </div>

        <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={ContactBanner}
            alt="contact-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>

        <div className="flex gap-10 my-6">
          <div className="flex items-center gap-3 p-10 shadow-lg bg-[#FCFDFD] border border-[#EEF3F6] rounded-xl">
            <div>
              <span className="text-[#999] text-md my-2">
                You can email us here
              </span>
              <p className="text-[#333] text-lg font-semibold">
                info@bfgconsults.com
              </p>
            </div>
            <div className="p-2 bg-[#E26015] rounded-full border-4 border-[linear-gradient(180deg, rgba(255, 102, 51, 0) 73.52%, #FF6633 100%)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>
          {/* second item */}
          <div className="flex items-center gap-3 p-10 shadow-lg bg-[#FCFDFD] border border-[#EEF3F6] rounded-xl">
            <div>
              <span className="text-[#999] text-md my-2">
                Give us a call on
              </span>
              <p className="text-[#333] text-lg font-semibold">
                Nigeria: (+234) 818 416 5533,
              </p>
              <p className="text-[#333] text-lg font-semibold">
                UK: (+44) 7551 107100
              </p>
            </div>
            <div className="p-2 bg-[#E26015] rounded-full border-4 border-[linear-gradient(180deg, rgba(255, 102, 51, 0) 73.52%, #FF6633 100%)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>
          {/* third item */}
          <div className="flex items-center gap-3 p-10 shadow-lg bg-[#FCFDFD] border border-[#EEF3F6] rounded-xl">
            <div>
              <span className="text-[#999] text-md my-2">Office Hours</span>
              <p className="text-[#333] text-lg font-semibold">
                9:00 am - 6:00 pm
              </p>
            </div>
            <div className="p-2 bg-[#E26015] rounded-full border-4 border-[linear-gradient(180deg, rgba(255, 102, 51, 0) 73.52%, #FF6633 100%)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(255,255,255,1)"
              >
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </div>
          </div>{" "}
        </div>
{/* new contact banner */}
        <div className="w-full flex border border-[#EEF3F6] rounded-3xl my-10">
          <div className="w-[40%] bg-[#FFFFFF] rounded-l-3xl">
            <div className="p-4">
              <div>
                <h4 className="text-3xl text-[#222]">Connect with Us Today!</h4>
                <p className="text-[#999] my-3">At Apex, we value your inquiries, feedback, & collaborations. Whether you are interested in our digital services, have questions about our projects</p>
              </div>
              <div className="my-5 bg-[#FCFDFD] border border-[#EEF3F6] rounded-2xl p-4">
                <h5 className="my-2 text-lg font-semibold">Our Commitment to You</h5>
                <div className="p-2">
                  <div className="bg-white rounded-3xl flex items-center gap-3 my-4">
                    <span className="p-1 rounded-full bg-[#E26015]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                    </span>
                    <span>
                      <p className="text-[#4C4C4D] text-md">Swift responses, dedicated support</p>
                    </span>
                  </div>
                  <div className="bg-white rounded-3xl flex items-center gap-3 my-4">
                    <span className="p-1 rounded-full bg-[#E26015]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                    </span>
                    <span>
                      <p className="text-[#4C4C4D] text-md">Efficient & always here for you</p>
                    </span>
                  </div>
                  <div className="bg-white rounded-3xl flex items-center gap-3 my-4">
                    <span className="p-1 rounded-full bg-[#E26015]">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M9.9997 15.1709L19.1921 5.97852L20.6063 7.39273L9.9997 17.9993L3.63574 11.6354L5.04996 10.2212L9.9997 15.1709Z"></path></svg>
                    </span>
                    <span>
                      <p className="text-[#4C4C4D] text-md">We listen, understand, & act promptly</p>
                    </span>
                  </div>
                </div>
                
              </div>
            </div>
          </div>
          <div className="w-[60%] bg-[#EEF3F6] rounded-r-3xl p-10">
            <form onSubmit={handleSubmit} className="w-full">
  <div className="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
        First Name
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" name="first-name" type="text" placeholder="Enter your Firstname" required />
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
        Last Name
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" name="last-name" type="text" placeholder="Enter Your Lastname" required/>
    </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
    <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
        Email
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" name="email" type="email" placeholder="Enter Email" required/>
      
    </div>
    <div className="w-full md:w-1/2 px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-phone">
        Phone Number
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-phone" name="phone" type="text" placeholder="Enter Phone Number" required/>
    </div>
  </div>
  <div className="flex flex-wrap -mx-3 mb-6">
    <div className="w-full px-3">
      <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-subject">
        Subject
      </label>
      <input className="appearance-none block w-full bg-white text-gray-700 border border-[#EEF3F6] shadow-sm rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-subject" name="subject" type="text" placeholder="Enter Subject" required />
    </div>
              </div>
              <div className="flex flex-wrap -mx-3 mb-6">
                <div className="w-full px-3">
                 <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="message">
        Message
      </label>
                <textarea
                  placeholder="Enter Your Message"
                  id="message"
                  name="message"
                  rows="6"
                    className="w-full rounded-md px-4 text-sm pt-3 shadow-sm outline-gray-500"
                    required
                ></textarea>
              </div>
              </div>
              <div className="flex justify-center">
                <button type="submit"
                  disabled={state.submitting} className="py-2 px-4 text-white flex items-center gap-2 bg-[#E26015] hover:bg-[#333] rounded-3xl">
                  <span className="font-semibold">Send Your Message</span>
                  <span><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="rgba(255,255,255,1)"><path d="M1.94619 9.31543C1.42365 9.14125 1.41953 8.86022 1.95694 8.68108L21.0431 2.31901C21.5716 2.14285 21.8747 2.43866 21.7266 2.95694L16.2734 22.0432C16.1224 22.5716 15.8178 22.59 15.5945 22.0876L12 14L18 6.00005L10 12L1.94619 9.31543Z"></path></svg></span>
                </button>
              </div>
  
</form>

          </div>
        </div>

        {/* accordion */}
        <div>
          <div className="w-full flex gap-3">
            <div className="w-[40%]">
              <h3 className="text-4xl font-semibold text-[#1A1A1A]">Common Queries, Clear Answers</h3>
              <p className="text-[#999]">We believe in transparency & aim to provide you with all the information you need to make informed decisions about our services.</p>
              
              <div className="bg-[#EEF3F6]  rounded-3xl p-10 my-8">
                <div>
                  <div className="flex justify-center">
                    <span className="">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(226,96,21,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11 15V17H13V15H11ZM13 13.3551C14.4457 12.9248 15.5 11.5855 15.5 10C15.5 8.067 13.933 6.5 12 6.5C10.302 6.5 8.88637 7.70919 8.56731 9.31346L10.5288 9.70577C10.6656 9.01823 11.2723 8.5 12 8.5C12.8284 8.5 13.5 9.17157 13.5 10C13.5 10.8284 12.8284 11.5 12 11.5C11.4477 11.5 11 11.9477 11 12.5V14H13V13.3551Z"></path></svg>       </span>             </div>
                  <h4 className="text-xl text-center font-semibold">Still have questions ?</h4>
                  <p className="text-[#999]">If the question is not available on our FAQ section, Feel free to contact us personally.</p>
                  <div className="flex justify-center my-3">
                  <button className="border border-[#E26015] font-semibold p-2 rounded-2xl">Ask a Question</button>
                </div>
                  </div>
              </div>
            </div>
            <div className="w-[60%]">
              <div>
                <div></div>
                <div>
                  <span></span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* contact banner */}
        {/* <div className="max-w-6xl mt-[50px] mx-auto bg-[#1c416d] rounded-lg">
          <div className="grid md:grid-cols-2 items-center gap-16 sm:p-10 p-4">
            <div>
              <h1 className="text-4xl font-extrabold text-white">
                Get in Touch
              </h1>
              <p className="text-sm text-gray-400 mt-3">
                Have some big idea or brand to develop and need help? Then reach
                out wed love to hear about your project and provide help.
              </p>
              <ul className="mt-12 space-y-8">
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 479.058 479.058"
                  >
                    <path
                      d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                      data-original="#000000"
                    />
                  </svg>
                  <a href="" className="text-white text-sm ml-3">
                    <strong>info@bfgconsults.com</strong>
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 482.6 482.6"
                  >
                    <path
                      d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <p className="text-white text-sm ml-3">
                    <strong>Nigeria: (+234) 818 416 5533</strong>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 482.6 482.6"
                  >
                    <path
                      d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <p className="text-white text-sm ml-3">
                    <strong>UK: (+44) 7551 107100</strong>
                  </p>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 368.16 368.16"
                  >
                    <path
                      d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <a href="" className="text-white text-sm ml-3">
                    <strong>
                      The BFG Place, Suite D02, Kenuj02 Mall, Plot 1248, Kaura
                      District, Abuja, Nigeria
                    </strong>
                  </a>
                </li>
                <li className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    viewBox="0 0 368.16 368.16"
                  >
                    <path
                      d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z"
                      data-original="#000000"
                    ></path>
                    <path
                      d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z"
                      data-original="#000000"
                    ></path>
                  </svg>
                  <a href="" className="text-white text-sm ml-3">
                    <strong>
                      20, Regency Place, Canterbury, Kent, United Kingdom
                    </strong>
                  </a>
                </li>
              </ul>
              <ul className="flex mt-12 space-x-4">
                <li className="bg-[#487dc2] hover:bg-[#223c5e] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a href="https://facebook.com/BFGConsults" target="_blank">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M6.812 13.937H9.33v9.312c0 .414.335.75.75.75l4.007.001a.75.75 0 0 0 .75-.75v-9.312h2.387a.75.75 0 0 0 .744-.657l.498-4a.75.75 0 0 0-.744-.843h-2.885c.113-2.471-.435-3.202 1.172-3.202 1.088-.13 2.804.421 2.804-.75V.909a.75.75 0 0 0-.648-.743A26.926 26.926 0 0 0 15.071 0c-7.01 0-5.567 7.772-5.74 8.437H6.812a.75.75 0 0 0-.75.75v4c0 .414.336.75.75.75zm.75-3.999h2.518a.75.75 0 0 0 .75-.75V6.037c0-2.883 1.545-4.536 4.24-4.536.878 0 1.686.043 2.242.087v2.149c-.402.205-3.976-.884-3.976 2.697v2.755c0 .414.336.75.75.75h2.786l-.312 2.5h-2.474a.75.75 0 0 0-.75.75V22.5h-2.505v-9.312a.75.75 0 0 0-.75-.75H7.562z"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#487dc2] hover:bg-[#223c5e] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a
                    href="https://www.linkedin.com/company/bfgconsults/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="#fff"
                      viewBox="0 0 511 512"
                    >
                      <path
                        d="M111.898 160.664H15.5c-8.285 0-15 6.719-15 15V497c0 8.285 6.715 15 15 15h96.398c8.286 0 15-6.715 15-15V175.664c0-8.281-6.714-15-15-15zM96.898 482H30.5V190.664h66.398zM63.703 0C28.852 0 .5 28.352.5 63.195c0 34.852 28.352 63.2 63.203 63.2 34.848 0 63.195-28.352 63.195-63.2C126.898 28.352 98.551 0 63.703 0zm0 96.395c-18.308 0-33.203-14.891-33.203-33.2C30.5 44.891 45.395 30 63.703 30c18.305 0 33.195 14.89 33.195 33.195 0 18.309-14.89 33.2-33.195 33.2zm289.207 62.148c-22.8 0-45.273 5.496-65.398 15.777-.684-7.652-7.11-13.656-14.942-13.656h-96.406c-8.281 0-15 6.719-15 15V497c0 8.285 6.719 15 15 15h96.406c8.285 0 15-6.715 15-15V320.266c0-22.735 18.5-41.23 41.235-41.23 22.734 0 41.226 18.495 41.226 41.23V497c0 8.285 6.719 15 15 15h96.403c8.285 0 15-6.715 15-15V302.066c0-79.14-64.383-143.523-143.524-143.523zM466.434 482h-66.399V320.266c0-39.278-31.953-71.23-71.226-71.23-39.282 0-71.239 31.952-71.239 71.23V482h-66.402V190.664h66.402v11.082c0 5.77 3.309 11.027 8.512 13.524a15.01 15.01 0 0 0 15.875-1.82c20.313-16.294 44.852-24.907 70.953-24.907 62.598 0 113.524 50.926 113.524 113.523zm0 0"
                        data-original="#000000"
                      />
                    </svg>
                  </a>
                </li>
                <li className="bg-[#487dc2] hover:bg-[#223c5e] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <a
                    href="https://www.instagram.com/bfgconsults/"
                    target="_blank"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      fill="#fff"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
            <div className="bg-gray-300 p-6 rounded-lg">
              <form onSubmit={handleSubmit} className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full rounded-md py-3 px-4 text-sm outline-[#487dc2]"
                />
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="w-full rounded-md py-3 px-4 text-sm outline-[#487dc2]"
                />
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full rounded-md py-3 px-4 text-sm outline-[#487dc2]"
                />
                <textarea
                  placeholder="Message"
                  id="message"
                  name="message"
                  rows="6"
                  className="w-full rounded-md px-4 text-sm pt-3 outline-[#487dc2]"
                ></textarea>
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                />
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="text-white bg-[#487dc2] hover:bg-[#314e75] font-semibold rounded-md text-sm px-4 py-3 flex items-center justify-center w-full"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16px"
                    height="16px"
                    fill="#fff"
                    class="mr-2"
                    viewBox="0 0 548.244 548.244"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z"
                      clip-rule="evenodd"
                      data-original="#000000"
                    />
                  </svg>
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div> */}


        <div className="container mx-auto py-12">
          <h1 className="text-2xl text-[#016EF8] mb-4">
            Frequently Asked Questions (FAQs)
          </h1>
          <Accordion title="What services does your firm offer?">
            <p>
              Our consulting firm specializes in a wide range of services
              tailored to meet the diverse needs of our clients. These services
              include but are not limited to strategic business planning,
              business development, market research, training & development,
              financial analysis, project management, Technology Solutions and
              organizational development.
            </p>
          </Accordion>
          <Accordion title="How experienced are your consultants?">
            <p>
              Our team consists of highly experienced professionals with
              extensive backgrounds in various industries. Each consultant
              brings a wealth of expertise and a proven track record of success
              to every project they undertake.
            </p>
          </Accordion>
          <Accordion title="How do you ensure confidentiality and security?">
            <p>
              Confidentiality and security are paramount to us. We adhere to
              strict protocols and industry best practices to safeguard all
              client information. Our consultants are bound by confidentiality
              agreements, and we utilize secure systems and technologies to
              protect data at all times.
            </p>
          </Accordion>
          <Accordion title="Measure experience with customers">
            <p>
              Collect real-time data about customer satisfaction with your
              product. This service can improve client connections across any
              channel by providing clearer, more accurate responses to questions
              in any language.
            </p>
          </Accordion>
        </div>
      </div>
    </>
  );
};

export default Page;
