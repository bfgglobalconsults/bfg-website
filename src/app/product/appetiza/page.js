"use client";
import React, { useState } from "react";
import Appetizer from "../../../../public/assets/appetiza-bg.png";
import ProductImage from "../../../../public/assets/product-banner.png";
import ProductExpand from "../../../../public/assets/product-expand.jpg";
import Image from "next/image";
import toast from "react-hot-toast";

const NotifyModal = ({ isOpen, onClose, onSubmit }) => {
  const [form, setForm] = useState({
    product: "Appetiza.ai",
    name: "",
    phone: "",
    location: "",
    organization: "",
    email: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mzzgynyz", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setTimeout(() => {
          onClose();
          setSubmitStatus(null);
          setForm({
            product: "Appetiza.ai",
            name: "",
            phone: "",
            location: "",
            organization: "",
            email: "",
          });
        }, 2000);
                    toast.success('Form Submitted Successfully');
        
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
      toast.error('Form Submission Failed');

    } finally {
      setSubmitting(false);
    }
  };

  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>
          &times;
        </button>
        <h2 className="text-2xl font-bold mb-1 text-center">Get Notified</h2>
        <p className="text-gray-500 mb-6 text-center">
          Be the first to know when Appetiza.ai launches!
        </p>
        {submitStatus === "success" && (
          <div className="mt-2 p-2 bg-green-100 text-green-700 rounded">
            Form submitted successfully!
          </div>
        )}

        {submitStatus === "error" && (
          <div className="mt-2 p-2 bg-red-100 text-red-700 rounded">
            Error submitting Form. Please try again.
          </div>
        )}
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <input type="hidden" name="product" value={form.product} />
          </div>
          <div>
            <label className="block mb-1 font-medium">Full Name *</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Phone Number *</label>
            <input
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="e.g. +234..."
              type="tel"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Location *</label>
            <input
              name="location"
              value={form.location}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="City, Country"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Organization *</label>
            <input
              name="organization"
              value={form.organization}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Your company or organization"
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email *</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="you@email.com"
              type="email"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-lg font-semibold"
          >
            {submitting ? "Submitting..." : "Notify Me"}
          </button>
        </form>
      </div>
    </div>
  );
};

const ComingSoonCard = ({ onNotify }) => (
  <div className="bg-gradient-to-br from-orange-100 to-orange-50 border-2 border-orange-400 rounded-2xl p-8 flex flex-col items-center shadow-lg">
    <span className="uppercase tracking-widest text-orange-700 font-bold mb-2">
      Coming Soon
    </span>
    <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 text-center mb-4">
      Be the First to Access Appetiza.ai
    </h2>
    <p className="text-lg text-gray-700 text-center mb-6 max-w-xl">
      <span className="font-semibold">Business Planning Made Seamless</span>
      <br />A powerful new SaaS platform is coming soon...{" "}
      <span className="font-semibold text-orange-700">Appetiza.ai</span> is
      built to make business planning easy, intelligent, and fully guided.
      Whether you&apos;re launching a startup or refining your strategy,
      Appetiza.ai simplifies the process every step of the way.
    </p>
    <button
      className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-8 rounded-lg text-lg shadow transition"
      onClick={onNotify}
    >
      Notify Me
    </button>
  </div>
);

const FeatureCard = ({ icon, title, points, image, reverse }) => (
  <div
    className={`flex flex-col-reverse md:flex-row ${
      reverse ? "md:flex-row-reverse" : ""
    } items-center gap-8 my-12`}
  >
    <div className="md:w-1/2 flex flex-col gap-4">
      <span className="inline-block px-4 py-2 bg-white border-2 border-orange-500 rounded-2xl text-orange-700 font-semibold w-fit mb-2">
        {icon}
      </span>
      <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
        {title}
      </h3>
      <ul className="space-y-3">
        {points.map((pt, i) => (
          <li key={i} className="flex items-start gap-3">
            <span
              className="flex items-center justify-center rounded-full bg-orange-500 text-white font-bold"
              style={{ width: 32, height: 32, minWidth: 32, minHeight: 32 }}
            >
              {i + 1}
            </span>
            <span className="text-gray-700 text-lg">{pt}</span>
          </li>
        ))}
      </ul>
    </div>
    <div className="md:w-1/2 flex justify-center">
      <div className="w-64 h-64 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-lg">
        <Image src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  </div>
);

const SelectedProductCards = () => (
  <div className="my-16">
    <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">
      Selected Product Highlights
    </h3>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col items-center">
        <Image
          src={Appetizer}
          alt="Business Planning"
          className="w-32 h-32 object-contain mb-4"
        />
        <h4 className="font-bold text-lg mb-2">AI-Driven Business Planning</h4>
        <p className="text-gray-600 text-center">
          Automate and optimize your business plan with intelligent
          recommendations and step-by-step guidance.
        </p>
      </div>
      <div className="bg-white border border-gray-200 rounded-xl p-6 shadow flex flex-col items-center">
        <Image
          src={Appetizer}
          alt="Expansion"
          className="w-32 h-32 object-contain mb-4"
        />
        <h4 className="font-bold text-lg mb-2">Global Expansion Toolkit</h4>
        <p className="text-gray-600 text-center">
          Expand confidently with built-in tools for market research,
          compliance, and localization.
        </p>
      </div>
    </div>
  </div>
);

const Page = () => {
  const [showModal, setShowModal] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-5xl mx-auto px-4 pt-32 pb-12">
        <ComingSoonCard onNotify={() => setShowModal(true)} />
        <SelectedProductCards />
        <FeatureCard
          icon="Enterprises"
          title="Tailored for African Enterprises"
          points={[
            "Specialized solutions designed to address the unique challenges & opportunities of the African market.",
            "Leverage local market expertise to develop effective expansion & optimization plans.",
          ]}
          image={ProductImage}
        />
        <FeatureCard
          icon="Expansion"
          title="Facilitate Global Expansion"
          points={[
            "Seamlessly scale your business beyond Africa with comprehensive internationalization support.",
            "Navigate complex regulatory environments & cultural differences with expert guidance.",
          ]}
          image={ProductExpand}
          reverse
        />
      </div>
      <NotifyModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={() => setShowSuccess(true)}
      />
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
          <div className="bg-white rounded-xl p-8 shadow-lg text-center max-w-sm mx-auto">
            <h3 className="text-2xl font-bold mb-2 text-green-700">
              Thank you!
            </h3>
            <p className="text-gray-700 mb-4">
              You&apos;ll be the first to know when Appetiza.ai launches.
            </p>
            <button
              className="mt-2 px-6 py-2 bg-orange-600 text-white rounded-lg font-semibold"
              onClick={() => setShowSuccess(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Page;
