"use client";
import { useEffect, useState } from "react";

export default function CalendlyModal({ isOpen, onClose, calendlyUrl }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    location: "",
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const url = new URL(
      calendlyUrl ||
        "https://calendly.com/bfgglobalhosting/discovery-call-session",
    );
    url.searchParams.append("name", formData.name);
    url.searchParams.append("email", formData.email);
    url.searchParams.append("a1", formData.phone);
    url.searchParams.append("a2", formData.location);

    window.open(url.toString(), "_blank", "noopener,noreferrer");

    setTimeout(() => {
      onClose();
      setFormData({ name: "", email: "", phone: "", location: "" });
    }, 500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black bg-opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative bg-white rounded-2xl shadow-2xl max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 z-10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
            fill="currentColor"
          >
            <path d="M12 10.5858L16.9497 5.63604L18.364 7.05025L13.4142 12L18.364 16.9497L16.9497 18.364L12 13.4142L7.05025 18.364L5.63604 16.9497L10.5858 12L5.63604 7.05025L7.05025 5.63604L12 10.5858Z"></path>
          </svg>
        </button>
        <div className="p-8">
          <div className="mb-6">
            <h2 className="text-3xl font-bold text-[#333] mb-2">
              Book a Quick Call
            </h2>
            <p className="text-gray-600">
              Fill in your details below and we'll help you schedule a
              convenient time for your consultation.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-2">
                Full Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-2">
                Email Address <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-2">
                Phone Number <span className="text-red-500">*</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="+234 800 000 0000"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-2">
                Location <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleChange}
                placeholder="Lagos, Nigeria"
                className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                required
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-4 bg-[#E26015] text-white font-semibold rounded-lg hover:bg-[#c54f0f] transition-colors"
            >
              Continue to Schedule
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            By continuing, you agree to share your information with BFG Global
            Consults for scheduling purposes.
          </p>
        </div>
      </div>
    </div>
  );
}
