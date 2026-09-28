"use client";

import React, { useState, Fragment } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import toast from "react-hot-toast";

const ProgramModal = ({ isOpen, onClose, program }) => {
  const isTechAchievers = program.includes("Tech Achievers");

  const [formData, setFormData] = useState({
    title: `${program} ${isTechAchievers ? "Application" : "Inquiry"}`,
    name: "",
    email: "",
    phone: "",
    ...(isTechAchievers
      ? {
          state: "",
          status: "",
          institution: "",
          fieldOfStudy: "",
          cohort: "",
          canCommit: "",
          techInterests: "",
          techSkills: "",
          projectExperience: "",
          whyJoin: "",
          goals: "",
          africanImpact: "",
          confirmAccurate: false,
          confirmContact: false,
        }
      : {
          company: "",
          message: "",
        }),
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/xjkywang", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          setFormData({
            title: `${program} ${isTechAchievers ? "Application" : "Inquiry"}`,
            name: "",
            email: "",
            phone: "",
            ...(isTechAchievers
              ? {
                  state: "",
                  status: "",
                  institution: "",
                  fieldOfStudy: "",
                  cohort: "",
                  canCommit: "",
                  techInterests: "",
                  techSkills: "",
                  projectExperience: "",
                  whyJoin: "",
                  goals: "",
                  africanImpact: "",
                  confirmAccurate: false,
                  confirmContact: false,
                }
              : {
                  company: "",
                  message: "",
                }),
          });
        }, 2000);
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    }
    // Send to Mailchimp via /api/product
    try {
      const [firstName, ...lastNameArr] = formData.name.split(" ");
      const lastName = lastNameArr.join(" ");
      await fetch("/api/programs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(
          isTechAchievers
            ? {
                email: formData.email,
                firstName: firstName || formData.name,
                lastName: lastName || "",
                phone: formData.phone,
                state: formData.state,
                status: formData.status,
                institution: formData.institution,
                cohort: formData.cohort,
                title: formData.title,
              }
            : {
                email: formData.email,
                firstName: firstName || formData.name,
                lastName: lastName || "",
                phone: formData.phone,
                company: formData.company,
                title: formData.title,
                message: formData.message,
              },
        ),
      });
      // Optionally show a toast
      // toast.success("Added to waitlist!");
    } catch (err) {
      console.error("Mailchimp error:", err);
      toast.error("Mailchimp subscription failed");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel
                className={`w-full ${isTechAchievers ? "max-w-2xl" : "max-w-md"} transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all`}
              >
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Apply for {program}
                </Dialog.Title>

                {submitStatus === "success" && (
                  <div className="mt-2 p-2 bg-green-100 text-green-700 rounded">
                    Application submitted successfully!
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="mt-2 p-2 bg-red-100 text-red-700 rounded">
                    Error submitting application. Please try again.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="mt-4">
                  <input type="hidden" name="title" value={formData.title} />

                  {isTechAchievers ? (
                    // Tech Achievers Form
                    <div className="space-y-5 max-h-[60vh] overflow-y-auto pr-2">
                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          1. About you
                        </h4>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Full name <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Email address{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="email"
                              name="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Phone number (WhatsApp preferred){" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="tel"
                              name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              required
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              State of residence{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <input
                              type="text"
                              name="state"
                              value={formData.state}
                              onChange={handleChange}
                              required
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Which best describes you?{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="status"
                              value={formData.status}
                              onChange={handleChange}
                              required
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            >
                              <option value="">Select...</option>
                              <option value="Current student">
                                Current student
                              </option>
                              <option value="Recent graduate">
                                Recent graduate
                              </option>
                              <option value="NYSC member">NYSC member</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Name of your institution or place of primary
                              assignment
                            </label>
                            <input
                              type="text"
                              name="institution"
                              value={formData.institution}
                              onChange={handleChange}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Field of study or discipline
                            </label>
                            <input
                              type="text"
                              name="fieldOfStudy"
                              value={formData.fieldOfStudy}
                              onChange={handleChange}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          2. Your cohort
                        </h4>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Which cohort are you applying for?{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="cohort"
                              value={formData.cohort}
                              onChange={handleChange}
                              required
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            >
                              <option value="">Select...</option>
                              <option value="January–March">
                                January–March
                              </option>
                              <option value="May–July">May–July</option>
                              <option value="September–November">
                                September–November
                              </option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Can you commit to participating throughout the
                              three month cohort?{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <select
                              name="canCommit"
                              value={formData.canCommit}
                              onChange={handleChange}
                              required
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            >
                              <option value="">Select...</option>
                              <option value="Yes">Yes</option>
                              <option value="No">No</option>
                              <option value="I would like to discuss my availability">
                                I would like to discuss my availability
                              </option>
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="border-b pb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">
                          3. Your interests and experience
                        </h4>

                        <div className="space-y-4">
                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Which technology areas are you most interested in
                              learning? <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              Select up to three and briefly name them.
                            </p>
                            <textarea
                              name="techInterests"
                              value={formData.techInterests}
                              onChange={handleChange}
                              required
                              rows={2}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              What technology skills or experience do you
                              already have?
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              Beginners are welcome to describe what they have
                              explored so far.
                            </p>
                            <textarea
                              name="techSkills"
                              value={formData.techSkills}
                              onChange={handleChange}
                              rows={3}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Tell us about a project, challenge, or activity
                              you have worked on. What was your contribution?
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              Up to 150 words.
                            </p>
                            <textarea
                              name="projectExperience"
                              value={formData.projectExperience}
                              onChange={handleChange}
                              rows={3}
                              maxLength={1000}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              Why do you want to join the Tech Achievers
                              Accelerator Program?{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              Up to 200 words.
                            </p>
                            <textarea
                              name="whyJoin"
                              value={formData.whyJoin}
                              onChange={handleChange}
                              required
                              rows={4}
                              maxLength={1300}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              What do you hope to achieve by the end of the
                              three months?{" "}
                              <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              Up to 150 words.
                            </p>
                            <textarea
                              name="goals"
                              value={formData.goals}
                              onChange={handleChange}
                              required
                              rows={3}
                              maxLength={1000}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>

                          <div>
                            <label className="block text-sm font-medium text-gray-700">
                              How would you use what you learn to address a
                              challenge or opportunity in Nigeria or elsewhere
                              in Africa? <span className="text-red-500">*</span>
                            </label>
                            <p className="text-xs text-gray-500 mt-1">
                              Up to 200 words.
                            </p>
                            <textarea
                              name="africanImpact"
                              value={formData.africanImpact}
                              onChange={handleChange}
                              required
                              rows={4}
                              maxLength={1300}
                              className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                            />
                          </div>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">
                          4. Confirmation
                        </h4>

                        <div className="space-y-3">
                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              name="confirmAccurate"
                              checked={formData.confirmAccurate}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  confirmAccurate: e.target.checked,
                                })
                              }
                              required
                              className="mt-1 h-4 w-4 text-[#E26015] focus:ring-[#E26015] border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                              I confirm that the information in this application
                              is accurate.{" "}
                              <span className="text-red-500">*</span>
                            </label>
                          </div>

                          <div className="flex items-start">
                            <input
                              type="checkbox"
                              name="confirmContact"
                              checked={formData.confirmContact}
                              onChange={(e) =>
                                setFormData({
                                  ...formData,
                                  confirmContact: e.target.checked,
                                })
                              }
                              required
                              className="mt-1 h-4 w-4 text-[#E26015] focus:ring-[#E26015] border-gray-300 rounded"
                            />
                            <label className="ml-2 text-sm text-gray-700">
                              I agree to be contacted about my application and
                              understand that my information will be used to
                              review it. <span className="text-red-500">*</span>
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    // Other Programs Simple Form
                    <div className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Full Name
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Email
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          required
                          className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Company/Organization
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-medium text-gray-700">
                          Message (Optional)
                        </label>
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="mt-1 px-3 py-2 block w-full rounded-md border border-gray-300 shadow-sm focus:border-[#E26015] focus:ring-[#E26015] sm:text-sm"
                        />
                      </div>
                    </div>
                  )}

                  <div className="mt-6 flex justify-end space-x-3">
                    <button
                      type="button"
                      onClick={onClose}
                      disabled={isSubmitting}
                      className="inline-flex justify-center rounded-md border border-transparent bg-gray-100 px-4 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-500 focus-visible:ring-offset-2"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex justify-center rounded-md border border-transparent bg-[#E26015] px-4 py-2 text-sm font-medium text-white hover:bg-[#041926] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E26015] focus-visible:ring-offset-2 disabled:opacity-50"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </button>
                  </div>
                </form>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default ProgramModal;
