"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Axios from "axios";
// import { PaystackButton } from "react-paystack";
const PaystackButton = dynamic(
  () => import("react-paystack").then((mod) => mod.PaystackButton),
  { ssr: false }
);
const EmbeddedForms = ({ close }) => {
  const router = useRouter();
  const publicKey = process.env.NEXT_PUBLIC_PAYSTACK_KEY;

  // paystack
  const initialAmount = 25000 * 100; // Base amount in kobo
  const discountRate = 0.25; // 25% discount rate
  const currency = "NGN";
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState("");
  const [couponCode, setCouponCode] = useState("");
  const [discountedAmount, setDiscountedAmount] = useState(initialAmount);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  const applyCoupon = () => {
    if (couponCode === "MASTER25") {
      setDiscountedAmount(initialAmount - initialAmount * discountRate);
      toast.success("Coupon applied! You get 25% off.");
    } else {
      setDiscountedAmount(initialAmount);
      toast.error("Invalid coupon code.");
    }
  };

  const subscribeUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

    try {
      const response = await Axios.post("/api/subscribe", {
        email_address: email,
        firstName,
        lastName,
        phone,
      });

      console.log("RESS:", response);

      if (response.status === 200) {
        console.log("Success:", response.data);
        toast.success("First Form Submitted! Please complete payment.");
        setStep(2);
        // close();
        // router.push("/sales-masterclass");
      } else {
        throw new Error(response.data.error || "An unknown error occurred.");
      }
    } catch (error) {
      console.error("Subscription error:", error);
      toast.error(
        "An error occurred during subscription: " +
          error.response.data.error.title
      );
    } finally {
      setLoading(false);
    }
  };

  // paystack pay

  const handleSuccess = (response) => {
    toast.success(`Payment successful! Reference: ${response.reference}`);
    close();
  };

  const handleClose = () => {
    toast.error("Transaction was not completed, window closed.");
  };

  const componentProps = {
    email,
    amount: discountedAmount,
    currency,
    publicKey,
    text: "Pay Now",
    onSuccess: handleSuccess,
    onClose: handleClose,
  };

  return (
    <>
      {step === 1 && (
        <form onSubmit={subscribeUser}>
          <div className="grid gap-6 mb-6 md:grid-cols-2">
            <div>
              <label
                htmlFor="mce-FNAME"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                First Name
              </label>
              <input
                type="text"
                id="mce-FNAME"
                name="FNAME"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter First Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mce-LNAME"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Last Name
              </label>
              <input
                type="text"
                id="mce-LNAME"
                name="LNAME"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Last Name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mce-EMAIL"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="mce-EMAIL"
                name="EMAIL"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="mce-PHONE"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Phone number
              </label>
              <input
                type="tel"
                id="mce-PHONE"
                name="PHONE"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Phone Number"
                required
              />
            </div>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex justify-center rounded-md border border-transparent bg-[#E45F11] px-4 py-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
            >
              {loading ? "Loading..." : "Proceed"}
            </button>
          </div>
        </form>
      )}

      {step === 2 && (
        <div>
          <div
            className="flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
            role="alert"
          >
            <svg
              class="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div>
              <div>
                <span className="font-medium"> Have a coupon? </span>
                 Enter the code below to claim your discount.
              </div>
              <div>
                <span className="font-medium">No coupon? </span> Proceed to Pay
                Now.
              </div>
            </div>
          </div>

          <div>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full my-2 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button
              onClick={applyCoupon}
              className="mt-2 bg-blue-500 text-white text-sm font-medium p-2 rounded"
            >
              Apply Coupon
            </button>
          </div>

          <PaystackButton
            {...componentProps}
            className="w-full rounded-md border border-transparent bg-[#E45F11] px-4 py-2 my-2 text-sm font-medium text-white hover:bg-black focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
          />
        </div>
      )}
    </>
  );
};

export default EmbeddedForms;
