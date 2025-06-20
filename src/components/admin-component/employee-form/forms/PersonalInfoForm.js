import React, { useState, useEffect } from "react";

const PersonalInfoForm = ({ formData, onChange }) => {
  const [countries, setCountries] = useState([]);
  const [lgas, setLgas] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (
      name === "stateOfOrigin" &&
      formData.nationality?.toLowerCase() === "nigeria"
    ) {
      getStatesFromApi(value);
    }
    onChange({
      ...formData,
      [name]: value,
    });
  };

  // Fetch LGAs when state changes

  const getStatesFromApi = async (state) => {
    try {
      let response = await fetch(
        `https://nga-states-lga.onrender.com/?state=${state}`
      );
      let json = await response.json();
      setLgas(json);
    } catch (error) {
      console.error("Error fetching LGAs:", error);
      setLgas([]);
    }
  };

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((response) => response.json())
      .then((data) => {
        const sortedCountries = data
          .map((country) => country.name.common)
          .sort((a, b) => a.localeCompare(b));
        setCountries(sortedCountries);
      })
      .catch((error) => console.error("Error fetching countries:", error));
  }, []);

  return (
    <>
      <div>
        <form>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Full Name
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Fullname"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Email
              </label>
              <input
                type="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Phone Number
              </label>
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                DOB
              </label>
              <input
                type="date"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter DOB"
                name="dateOfBirth"
                value={formData.dateOfBirth}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Gender
              </label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Marital Status
              </label>
              <select
                name="maritalStatus"
                value={formData.maritalStatus}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled selected>
                  Select Status
                </option>
                <option value="married">Married</option>
                <option value="single">Single</option>
              </select>
            </div>
          </div>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Nationality
              </label>
              <select
                name="nationality"
                value={formData.nationality}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled>
                  Select Nationality
                </option>
                {countries.map((country) => (
                  <option key={country} value={country.toLowerCase()}>
                    {country}
                  </option>
                ))}
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                State of Origin
              </label>
              <select
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="stateOfOrigin"
                value={formData.stateOfOrigin}
                onChange={handleChange}
              >
                {formData.nationality &&
                formData.nationality.toLowerCase() === "nigeria" ? (
                  <>
                    {[
                      "Abia",
                      "Adamawa",
                      "AkwaIbom",
                      "Anambra",
                      "Bauchi",
                      "Bayelsa",
                      "Benue",
                      "Borno",
                      "Cross River",
                      "Delta",
                      "Ebonyi",
                      "Edo",
                      "Ekiti",
                      "Enugu",
                      "FCT",
                      "Gombe",
                      "Imo",
                      "Jigawa",
                      "Kaduna",
                      "Kano",
                      "Katsina",
                      "Kebbi",
                      "Kogi",
                      "Kwara",
                      "Lagos",
                      "Nasarawa",
                      "Niger",
                      "Ogun",
                      "Ondo",
                      "Osun",
                      "Oyo",
                      "Plateau",
                      "Rivers",
                      "Sokoto",
                      "Taraba",
                      "Yobe",
                      "Zamfara",
                    ].map((state) => (
                      <option key={state} value={state}>
                        {state}
                      </option>
                    ))}
                  </>
                ) : (
                  <option value="">Select State</option>
                )}
              </select>
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                LGA
              </label>
              <select
                name="localGovernmentArea"
                value={formData.localGovernmentArea}
                onChange={handleChange}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              >
                <option value="" disabled>
                  Select LGAs
                </option>
                {lgas.map((lga) => (
                  <option key={lga} value={lga.toLowerCase()}>
                    {lga}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="w-full flex gap-2 mb-4">
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Residential Address
              </label>
              <input
                 name="residentialAddress"
                value={formData.residentialAddress}
                onChange={handleChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Residential Address"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Next of Kin Name
              </label>
              <input
                name="nextOfKinName"
                value={formData.nextOfKinName}
                onChange={handleChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Next of Kin Name"
              />
            </div>
            <div className="w-1/3">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Emergency Contact Information
              </label>
              <input
                name="emergencyContact"
                value={formData.emergencyContact}
                onChange={handleChange}
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Enter Emergency Contact Information"
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default PersonalInfoForm;
