"use client";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuLabel,
} from "@/components/ui/dropdown-menu";
import FeedbackBanner from "../../../public/assets/feedback.png";

import Image from "next/image";

const SERVICE_UNITS = [
  {
    label: "Strategy and Operations Transformation Unit",
    description:
      "This service handles the strategic planning and execution of business operations to improve overall performance.",
    key: "strategy",
    subServices: [
      "Process Improvement and Systems Engineering",
      "Business Planning and Strategy Development",
      "Operations Assessment and Optimization",
      "Organizational Design and Restructuring",
      "Performance Management",
      "Change Management",
    ],
  },
  {
    label: "Research and Data Analytics Unit",
    description:
      "This service unit handles advanced data analytics and market research.",
    key: "research",
    subServices: [
      "Academic Research/Case Study Reporting",
      "User Experience Research and Insights",
      "Business Intelligence Research",
      "Market Feasibility and Analysis",
      "Monitoring and Evaluation",
      "Product Testing",
      "Consumer Needs and Assessment",
    ],
  },
  {
    label: "Technology and Software Development Unit",
    description:
      "This service unit provides specialized technological solutions to help organizations achieve their business objectives.",
    key: "technology",
    subServices: [
      "Software Designing and Development",
      "Website or App Development",
      "IT Risk Assessment and Disaster Recovery",
      "Technical Support",
      "Cloud Services and Migration",
      "Cybersecurity",
    ],
  },
  {
    label: "Training and Development",
    description:
      "This service unit manages the talent, potential, knowledge, skills, and abilities of individuals to create high-performing individuals and teams.",
    key: "training",
    subServices: [
      "Customized Training for Employee Development",
      "Strategic Gap Analysis",
      "Onboarding Programs",
      "Training Delivery and Facilitation",
      "Workshop Designing, Evaluation, and Monitoring",
      "Coaching and Mentoring",
    ],
  },
];

const LIKERT_OPTIONS = [
  { value: "1", label: "1 – Strongly Unsatisfactory" },
  { value: "2", label: "2 – Unsatisfactory" },
  { value: "3", label: "3 – Neutral" },
  { value: "4", label: "4 – Satisfactory" },
  { value: "5", label: "5 – Strongly Satisfactory" },
];

export default function FeedbackPage() {
  const [selectedUnits, setSelectedUnits] = useState({});
  const [likert, setLikert] = useState("");
  const [ratingComment, setRatingComment] = useState("");
    const [company, setCompany] = useState("");
    const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [location, setLocation] = useState("");
  const [submitting, setSubmitting] = useState(false);

  // Multi-select logic for sub-services
  const handleSubServiceToggle = (unitKey, subService) => {
    setSelectedUnits((prev) => {
      const prevSubs = prev[unitKey] || [];
      return {
        ...prev,
        [unitKey]: prevSubs.includes(subService)
          ? prevSubs.filter((s) => s !== subService)
          : [...prevSubs, subService],
      };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    // Prepare data for local API
    const formData = new FormData();
    formData.append(
      "serviceUnits",
      JSON.stringify(
        SERVICE_UNITS.map((unit) => ({
          unit: unit.label,
          subServices: selectedUnits[unit.key] || [],
        })).filter((u) => u.subServices.length > 0)
      )
    );
    formData.append("rating", likert);
    formData.append("ratingComment", ratingComment);
    formData.append("company", company);
    formData.append("name", name);
    formData.append("role", role);
    formData.append("location", location);

    // Prepare data for Formspree (flattened for email)
    const formspreeData = new FormData();
    // Flatten serviceUnits for Formspree
    const serviceUnitsString = SERVICE_UNITS.map((unit) => {
      const subs = selectedUnits[unit.key] || [];
      if (subs.length === 0) return null;
      return `${unit.label}: ${subs.join(", ")}`;
    })
      .filter(Boolean)
      .join(" | ");
    formspreeData.append("Service Units", serviceUnitsString);
    formspreeData.append("Satisfaction Rating", likert);
    formspreeData.append("Rating Comment", ratingComment);
    formspreeData.append("Company", company);
    formspreeData.append("Name", name);
    formspreeData.append("Role", role);
    formspreeData.append("Location", location);

    try {
      // Send to local API and Formspree in parallel
      const apiPromise = fetch("/api/reviews", {
        method: "POST",
        body: formData,
      });
      const formspreePromise = fetch("https://formspree.io/f/mblyvror", {
        method: "POST",
        body: formspreeData,
        headers: { Accept: "application/json" },
      });
      const [apiRes, formspreeRes] = await Promise.all([apiPromise, formspreePromise]);
      if (apiRes.ok && formspreeRes.ok) {
        toast.success(
          "Thank you for completing the survey. Your input is important to us and will contribute to our ongoing commitment to excellence."
        );
        // Reset form
        setSelectedUnits({});
        setLikert("");
        setRatingComment("");
        setCompany("");
        setLocation("");
      } else {
        toast.error("Submission failed. Please try again.");
      }
    } catch (err) {
      toast.error("Submission failed. Please try again.");
    }
    setSubmitting(false);
  };

    return (
        <>
            <div className="lg:mt-[150px] p-12">
                    <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
                      Feedback
                    </span>
                    <div className="flex flex-col lg:flex-row w-full gap-4 items-center justify-between my-4">
                      <h3 className="w-[100%] lg:w-[50%] text-[#333] font-bold text-4xl md:text-3xl lg:text-5xl">
                        Share Your Feedback
                      </h3>
                      <p className="w-[100%] lg:w-[50%] text-[#E26015] my-2 text-lg lg:text-xl">
                      Welcome to the Client Experience Review — We Value Your Feedback
                      </p>
                    </div>
            
                    <div className="px-1 py-12">
                      <div className="relative w-full h-[200px] lg:h-[400px] bg-cover bg-center flex justify-center items-center">
                        <Image
                          src={FeedbackBanner}
                          alt="contact-banner"
                          className="w-full h-full object-cover rounded-3xl"
                        />
                      </div>
                </div>
                 <div className="py-[30px]">
                            <motion.div
                              initial={{ y: 30, opacity: 0 }}
                              whileInView={{ y: 0, opacity: 1 }}
                              transition={{ duration: 1 }}
                              viewport={{ once: true }}
                              className=""
                            >
                            <div className="w-full my-4">
                                <motion.p
                                  initial={{ y: 20, opacity: 0 }}
                                  whileInView={{ y: 0, opacity: 1 }}
                                  transition={{ duration: 0.8 }}
                                  viewport={{ once: true }}
                                  className="text-lg text-[#656565] my-3"
                                >
                                 Thank you for choosing BFG Global Consulting LLC. We kindly invite you to participate in a brief review to help us evaluate your satisfaction with the products and services provided during your engagement with us.
                                </motion.p>
                               
                            </div>
                            </motion.div>
                </div>
                <hr className="my-4" />
                <div className="my-10">
                  <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold my-4">
                    Feedback Form
                  </span>
                </div>
                <p className="text-lg text-[#656565] my-3">
                    This short online questionnaire consists of seven questions — five open-ended and two closed-ended — and will take approximately three minutes to complete. 
                   
                </p>
                <p className="text-lg text-[#656565] my-3">
                    Participation is entirely voluntary, and we sincerely appreciate your consideration either way.
                    </p>
    <div className="max-w-5xl mx-auto p-6 md:p-10 bg-white rounded-xl shadow my-16">
      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-center">FEEDBACK</h1>
     
      {/* <div className="text-gray-700 mb-8 space-y-2 text-base">
        <p>This short online questionnaire consists of seven questions — five open-ended and two closed-ended — and will take approximately three minutes to complete.</p>
        <p>Participation is entirely voluntary, and we sincerely appreciate your consideration either way.</p>
      </div> */}
      <form onSubmit={handleSubmit} className="space-y-8">
        {/* Service Units */}
        <div>
          <label className="block font-semibold mb-2 text-base">1. Which of our service units did you consult for your product or service needs?</label>
          <div className="space-y-6">
            {SERVICE_UNITS.map((unit) => (
              <div key={unit.key} className="border rounded-lg p-4 bg-gray-50">
                <div className="font-medium mb-1">{unit.label}</div>
                <div className="text-sm text-gray-500 mb-2">{unit.description}</div>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button type="button"  className="text-sm border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground mb-2 p-2 rounded-md">
                      {selectedUnits[unit.key]?.length
                        ? `${selectedUnits[unit.key].length} sub-service(s) selected`
                        : "Choose the sub-service(s) you have engaged"}
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuLabel>Select sub-services</DropdownMenuLabel>
                    {unit.subServices.map((sub) => (
                      <DropdownMenuCheckboxItem
                        key={sub}
                        checked={selectedUnits[unit.key]?.includes(sub) || false}
                        onCheckedChange={() => handleSubServiceToggle(unit.key, sub)}
                      >
                        {sub}
                      </DropdownMenuCheckboxItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
                {selectedUnits[unit.key]?.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {selectedUnits[unit.key].map((sub) => (
                      <span key={sub} className="bg-orange-100 text-[#E26015] px-2 py-1 rounded text-sm">
                        {sub}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        {/* Likert Scale */}
        <div>
          <label className="block font-semibold mb-2 text-base">2. Based on your recent experience with the service unit involved in your project, how satisfied are you with the quality of service delivery?</label>
          <div className="flex flex-wrap gap-4">
            {LIKERT_OPTIONS.map((opt) => (
              <label key={opt.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="likert"
                  value={opt.value}
                  checked={likert === opt.value}
                  onChange={() => setLikert(opt.value)}
                  className="accent-[#E26015]"
                  required
                />
                <span className="text-sm">{opt.label}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Rating Comment */}
        <div>
          <label className="block font-semibold mb-2 text-base">3. In 50 words or less, please comment as to why you gave the above rate</label>
          <textarea
            className="w-full border rounded-lg px-3 py-2 min-h-[60px]"
            value={ratingComment}
            onChange={(e) => setRatingComment(e.target.value)}
            maxLength={350}
            required
            placeholder="Your comment..."
          />
              </div>
              {/* Individual Name */}
              <div>
          <label className="block font-semibold mb-2 text-base">4. What is your name?</label>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Enter your name"
          />
              </div>
              {/* Role */}
              <div>
          <label className="block font-semibold mb-2 text-base">5. What is your role in the company?</label>
          <Input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            required
            placeholder="Enter your role (e.g. CEO, Manager, etc.)"
          />
        </div>
        {/* Company Name */}
        <div>
          <label className="block font-semibold mb-2 text-base">6. What is the name of your company?</label>
          <Input
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            required
            placeholder="Enter company name"
          />
        </div>
        {/* Country Location */}
        <div>
          <label className="block font-semibold mb-2 text-base">7. What&apos;s your company location?</label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            required
            placeholder="Enter your company location (e.g. City, Country)"
          />
        </div>
        <Button type="submit" className="w-full" disabled={submitting}>
          {submitting ? "Submitting..." : "Submit Feedback"}
        </Button>
      </form>
            </div>
            </div>
            </>
  );
}