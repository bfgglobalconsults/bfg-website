"use client";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";
import Axios from "axios";

const EmbeddedForms = ({close}) => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [reason, setReason] = useState("");
  const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState(null);

  const subscribeUser = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMessage(null);

  try {
    const response = await Axios.post("/api/subscribe", {
      email_address:email,
      firstName,
      lastName,
      phone,
      location,
      reason,
    });

    console.log("RESS:", response);

    if (response.status === 200) {
      console.log("Success:", response.data);
      toast.success("You've been successfully enrolled! We'll be in touch shortly.");
      close();
      router.push("/sales-webinar");

    } else {
      throw new Error(response.data.error || "An unknown error occurred.");
    }
  } catch (error) {
    console.error("Subscription error:", error);
    toast.error("An error occurred during subscription: " + error.response.data.error.title);
  } finally {
    setLoading(false);
  }
};


  return (
      <>
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
            placeholder="Enter Last Name"
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
        <div>
          <label
            htmlFor="mce-COMPANY"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Location
          </label>
          <input
            type="text"
            id="mce-COMPANY"
            name="COMPANY"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Location"
            required
          />
        </div>
        <div>
          <label
            htmlFor="mce-MMERGE7"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Reason For Attending
          </label>
          <input
            type="type"
            id="mce-MMERGE7"
            name="MMERGE7"
            value={reason}
            onChange={(e) => setReason(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Enter Reason For Attending"
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
    </>
    //    <div id="serlzo-form-iframe" className="w-full max-w-4xl mx-auto">
    //   <form action="" className="Serlzo-form" id="670e62a954a1ca938c2c135d">
    //     <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
    //       <fieldset className="flex flex-col">
    //         <input
    //           className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //           type="text"
    //           name="fullName"
    //           id="serlzo-fullName"
    //           placeholder="Enter your Full Name"
    //           required
    //         />
    //       </fieldset>
    //       <fieldset className="flex flex-col">
    //         <input
    //           className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //           type="email"
    //           name="email"
    //           id="serlzo-email"
    //           placeholder="Enter your Email Address"
    //           required
    //         />
    //       </fieldset>
    //       <fieldset className="flex flex-col">
    //         <input
    //           className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //           type="text"
    //           name="mobileNumber"
    //           id="serlzo-mobileNumber"
    //           placeholder="Enter your Mobile Number"
    //           required
    //         />
    //       </fieldset>
    //       <fieldset className="flex flex-col">
    //         <input
    //           className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //           type="text"
    //           name="location"
    //           id="serlzo-location"
    //           placeholder="Enter your Location"
    //           required
    //         />
    //       </fieldset>
    //     </div>
    //     <div className="mt-4">
    //       <fieldset className="flex flex-col">
    //         <input
    //           className="input bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
    //           type="text"
    //           name="reasonWhyYouChooseToAttend?"
    //           id="serlzo-reasonWhyYouChooseToAttend?"
    //           placeholder="Enter your Reason Why You Choose To Attend?"
    //           required
    //         />
    //       </fieldset>
    //     </div>
    //     <div className="mt-6">
    //       <fieldset>
    //         <div className="submit-btn-wrapper flex justify-end">
    //           <button
    //             type="submit"
    //             className="submit-btn bg-[#E45F11] text-white font-bold py-2 px-4 rounded-lg hover:bg-black focus:outline-none focus:ring-2  focus:ring-opacity-50"
    //           >
    //             Proceed
    //           </button>
    //         </div>
    //       </fieldset>
    //     </div>
    //   </form>
    // </div>
  );
};

export default EmbeddedForms;
