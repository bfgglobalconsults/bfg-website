"use client";
import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyToken, resetPassword } from "@/services/authService";
import Link from "next/link";

export default function ResetPasswordPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [verifying, setVerifying] = useState(true);
  const [tokenValid, setTokenValid] = useState(false);
  const [message, setMessage] = useState({ type: "", text: "" });
  const [showPasswords, setShowPasswords] = useState({
    new: false,
    confirm: false,
  });

  useEffect(() => {
    const checkToken = async () => {
      if (!token) {
        setMessage({ type: "error", text: "Invalid reset link." });
        setVerifying(false);
        return;
      }

      try {
        await verifyToken({ token });
        setTokenValid(true);
      } catch (error) {
        setMessage({
          type: "error",
          text: error.message || "Invalid or expired reset link.",
        });
      } finally {
        setVerifying(false);
      }
    };

    checkToken();
  }, [token]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (message.text) setMessage({ type: "", text: "" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: "", text: "" });

    if (!formData.newPassword || !formData.confirmPassword) {
      setMessage({ type: "error", text: "All fields are required." });
      return;
    }

    if (formData.newPassword.length < 8) {
      setMessage({
        type: "error",
        text: "Password must be at least 8 characters long.",
      });
      return;
    }

    if (formData.newPassword !== formData.confirmPassword) {
      setMessage({ type: "error", text: "Passwords do not match." });
      return;
    }

    setLoading(true);

    try {
      const response = await resetPassword(formData.newPassword, token);
      setMessage({
        type: "success",
        text: response.message || "Password reset successfully! Redirecting to login...",
      });

      setTimeout(() => {
        router.push("/admin");
      }, 2000);
    } catch (error) {
      setMessage({
        type: "error",
        text: error.message || "Failed to reset password. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const togglePasswordVisibility = (field) => {
    setShowPasswords({
      ...showPasswords,
      [field]: !showPasswords[field],
    });
  };

  if (verifying) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-xl text-gray-600">Verifying reset link...</div>
      </div>
    );
  }

  if (!tokenValid) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
        <div className="max-w-md w-full text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <svg
                className="mx-auto h-16 w-16 text-red-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-[#333] mb-4">Invalid Reset Link</h1>
            <p className="text-gray-600 mb-6">{message.text}</p>
            <Link
              href="/forgot-password"
              className="inline-block px-6 py-3 bg-[#E26015] text-white font-semibold rounded-lg hover:bg-[#c54f0f] transition-colors"
            >
              Request New Reset Link
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-16 px-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl lg:text-4xl font-bold text-[#333] mb-4">
            Reset Password
          </h1>
          <p className="text-gray-600">
            Enter your new password below.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-[#333] mb-2">
                New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPasswords.new ? "text" : "password"}
                  name="newPassword"
                  value={formData.newPassword}
                  onChange={handleChange}
                  placeholder="Enter your new password"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("new")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPasswords.new ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters long
              </p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#333] mb-2">
                Confirm New Password <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <input
                  type={showPasswords.confirm ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your new password"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                  required
                />
                <button
                  type="button"
                  onClick={() => togglePasswordVisibility("confirm")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
                >
                  {showPasswords.confirm ? "👁️" : "👁️‍🗨️"}
                </button>
              </div>
            </div>

            {message.text && (
              <div
                className={`px-4 py-3 rounded-lg ${
                  message.type === "success"
                    ? "bg-green-50 border border-green-200 text-green-700"
                    : "bg-red-50 border border-red-200 text-red-700"
                }`}
              >
                {message.text}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-4 bg-[#E26015] text-white font-semibold rounded-lg hover:bg-[#c54f0f] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Resetting Password..." : "Reset Password"}
            </button>
          </form>

          <div className="mt-6 text-center">
            <Link href="/admin" className="text-[#E26015] hover:underline">
              Back to Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
