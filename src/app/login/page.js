"use client";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { login, setCredentials } from "@/redux/auth/authSlice";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/BFG-5.png";
import { useRouter } from "next/navigation";
import { useLoginMutation } from "@/redux/auth/authService";
import toast from "react-hot-toast";
import Spinner from "@/components/Spinner";

const Login = () => {
  const { push } = useRouter();
  const [login, { isLoading, error, success, isError }] = useLoginMutation({
    credentials: "include",
  });
  const dispatch = useDispatch();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = emailRef?.current?.value;
    const password = passwordRef?.current?.value;

    try {
      const response = await login({ email, password }).unwrap();

      if (response?.data?.accessToken) {
        dispatch(setCredentials({ response }));
        console.log("Login successful:", response);
        toast.success("Successfully logged in");
        push("/admin");
      } else {
        console.error("Login failed:", response?.message);
              toast.error(`${error.message}`);

      }
    } catch (error) {
      // Handle login error
      console.log("Login failed:", error);
    }
  };

  return (
    <>
      <div className="bg-[#E26015]">
        <div className="h-screen flex justify-center items-center py-[40px]">
          <div className="w-[100%] lg:w-[50%] bg-white border rounded-lg border-red-500">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-[50px]">
              <div className="w-[100px] h-[90px] mx-auto">
                <Image
                  alt="BFG"
                  src={Logo}
                  className="w-full h-full object-fit"
                />
              </div>
              <h2 className="mt-10 text-center text-2xl/9 font-semibold tracking-tight text-gray-900">
                Welcome to BFG Global Consults
              </h2>
            </div>

            <div className="bg-[#127DC014] rounded-md p-[20px] mt-10 mb-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form className="space-y-6">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Username or email
                  </label>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="rgba(226,96,21,1)"
                      >
                        <path d="M4 22C4 17.5817 7.58172 14 12 14C16.4183 14 20 17.5817 20 22H18C18 18.6863 15.3137 16 12 16C8.68629 16 6 18.6863 6 22H4ZM12 13C8.685 13 6 10.315 6 7C6 3.685 8.685 1 12 1C15.315 1 18 3.685 18 7C18 10.315 15.315 13 12 13ZM12 11C14.21 11 16 9.21 16 7C16 4.79 14.21 3 12 3C9.79 3 8 4.79 8 7C8 9.21 9.79 11 12 11Z"></path>
                      </svg>
                    </div>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Username or email"
                      required
                      autoComplete="email"
                      className="block w-full rounded-md border-0 py-1.5 ps-10 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm/6"
                      ref={emailRef}
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="block text-sm/6 font-medium text-gray-900"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative mt-2">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="18"
                        height="18"
                        fill="rgba(226,96,21,1)"
                      >
                        <path d="M19 10H20C20.5523 10 21 10.4477 21 11V21C21 21.5523 20.5523 22 20 22H4C3.44772 22 3 21.5523 3 21V11C3 10.4477 3.44772 10 4 10H5V9C5 5.13401 8.13401 2 12 2C15.866 2 19 5.13401 19 9V10ZM5 12V20H19V12H5ZM11 14H13V18H11V14ZM17 10V9C17 6.23858 14.7614 4 12 4C9.23858 4 7 6.23858 7 9V10H17Z"></path>
                      </svg>
                    </div>
                    <input
                      id="password"
                      name="password"
                      type="password"
                      required
                      placeholder="Password"
                      autoComplete="current-password"
                      className="block w-full rounded-md border-0 py-1.5 ps-10 p-2.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset  sm:text-sm/6"
                      ref={passwordRef}
                    />
                  </div>
                </div>
                <div className="flex items-start mb-5">
                  <div className="flex items-center h-5">
                    <input
                      id="terms"
                      type="checkbox"
                      value=""
                      className="w-4 h-4 accent-[#E26015] border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                      required

                    />
                  </div>
                  <label
                    htmlFor="terms"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Remember me
                  </label>
                </div>

                <div>
                  <button
                    type="button"
                    disabled={isLoading}
                    onClick={(e) => handleSubmit(e)}
                    className="flex w-full justify-center rounded-md border bg-[#E26015] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-black hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E26015]"
                  >
                    {isLoading ?  (
                     <Spinner />
                    ):("Log in")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
