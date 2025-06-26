import React, { useState } from "react";

export default function ReviewFormModal({ isOpen, onClose, unit, onSubmit }) {
  const [form, setForm] = useState({
    department: unit || "",
    name: "",
    role: "",
    organization: "",
    review: "",
    logo: null,
    rating: "",
  });
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    // Prepare form data for file upload
    const formData = new FormData();
    Object.entries(form).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    // Send to backend (replace with your API endpoint)
    const res = await fetch("/api/reviews", {
      method: "POST",
      body: formData,
    });

    if (res.ok) {
      onSubmit();
      onClose();
    } else {
      alert("Submission failed. Please try again.");
    }
    setSubmitting(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl p-8 w-full max-w-lg shadow-lg relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-4 right-4 text-2xl" onClick={onClose}>&times;</button>
        <h2 className="text-2xl font-bold mb-1">Submit Your Review</h2>
        <p className="text-gray-500 mb-6">We value your feedback!</p>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-1 font-medium">Service Unit/Department *</label>
            <select
              name="department"
              value={form.department}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select a department</option>
              <option value="Information Technology">Technology and Software Development</option>
              <option value="Strategy">Strategy and Operations Transformation</option>
              <option value="Research">Research and Analytics</option>
              <option value="Training">Training and Development</option>
            </select>
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
            <label className="block mb-1 font-medium">Role *</label>
            <input
              name="role"
              value={form.role}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="e.g. CEO"
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
              placeholder="e.g. Tech Solutions Inc."
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Your Review*</label>
            <textarea
              name="review"
              value={form.review}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
              placeholder="Share your experience with our services..."
              rows={3}
            />
          </div>
          <div>
            <label className="block mb-1 font-medium">Rating *</label>
            <select
              name="rating"
              value={form.rating}
              onChange={handleChange}
              required
              className="w-full border rounded-lg px-3 py-2"
            >
              <option value="">Select a rating</option>
              <option value="1">1 - Poor</option>
              <option value="2">2 - Fair</option>
              <option value="3">3 - Good</option>
              <option value="4">4 - Very Good</option>
              <option value="5">5 - Excellent</option>
            </select>
          </div>
          <div>
            <label className="block mb-1 font-medium">Company Logo (Optional)</label>
            <input
              type="file"
              name="logo"
              accept="image/*"
              onChange={handleChange}
              className="w-full border rounded-lg px-3 py-2"
            />
          </div>
          <button
            type="submit"
            disabled={submitting}
            className="w-full bg-black text-white py-3 rounded-lg font-semibold"
          >
            {submitting ? "Submitting..." : "Submit Review"}
          </button>
        </form>
      </div>
    </div>
  );
} 