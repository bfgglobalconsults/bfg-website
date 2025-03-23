import Link from 'next/link';
import React from 'react'
import { useForm, ValidationError } from "@formspree/react";


const ProgramForms = () => {
      const [state, handleSubmit] = useForm("xjkywang");
    

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
      <form onSubmit={handleSubmit}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="grid-first-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="grid-first-name"
                name="first-name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="grid-last-name"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="grid-last-name"
                name="last-name"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="grid-email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="grid-email"
                name="email"
               
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="grid-phone"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="grid-phone"
                name="phone"
                
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Phone Number"
                required
              />
                  </div>
                  
          </div>

          <div className="mt-4">
            <button
             type="submit"
                  disabled={state.submitting}
              className="inline-flex justify-center rounded-md border border-transparent bg-[#E45F11] px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
             Proceed
            </button>
          </div>
        </form>
      </>
  )
}

export default ProgramForms