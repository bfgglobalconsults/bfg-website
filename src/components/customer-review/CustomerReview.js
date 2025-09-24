"use client";
import React, { useState, useEffect } from "react";
import ReviewFormModal from "./ReviewFormModal";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { ChevronDown, MessageSquare, FileText } from "lucide-react";

function Avatar({ name }) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
  return (
    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fabebb] text-2xl text-black">
      {initials}
    </div>
  );
}

export default function CustomerReview({ unit = "" }) {
  const [showModal, setShowModal] = useState(false);
  const [testimonials, setTestimonials] = useState([]);
  const router = useRouter();

  // Fetch testimonials from backend
  const fetchTestimonials = async () => {
    const res = await fetch("/api/reviews");
    const data = await res.json();
    setTestimonials(data);
  };

  useEffect(() => {
    fetchTestimonials();
  }, []);

  // Add dummy testimonials for testing if backend is unavailable
  useEffect(() => {
    if (testimonials.length === 0) {
      setTestimonials([
        {
          name: "Arch Felix Elisha",
          review: " BFG Global Consult has been a trusted partner to Sensang Constructions LLC, Nigeria, delivering expert consulting services that drive growth & excellence. Their exceptional support has been instrumental in our success. ",
          role: "CEO",
          department: "Sensang Constructions LLC, Nigeria",
          rating: 5,
        },
        {
          name: "Adelanke Olasehinde Alade",
          review: "BFG Global Consult has been an invaluable partner to GIG Travels, UK, providing expert guidance & tailored solutions. Their exceptional service has empowered our success. Highly recommended. ",
          role: "Managing Partner/CEO",
          department: "GIG Travels, UK",
          rating: 4,
        },
        {
          name: "Prince Arinze Alozie",
          review: "BFG Global Consult embodies excellence, innovation, and commitment. Their expertise & passion deliver tailored solutions that exceed expectations. We highly recommend them for top-notch consulting services. A trusted partner in achieving success.",
          role: "Managing Director",
          department: "12Twenty Limited, Nigeria",
          rating: 5,
        },
      ]);
    }
  }, [testimonials.length]);

  // Render star rating
  function StarRating({ rating = 0 }) {
    return (
      <div className="flex justify-center mb-2">
        {[1, 2, 3, 4, 5].map((star) => (
          <svg
            key={star}
            className={`h-5 w-5 ${star <= rating ? "text-yellow-400" : "text-gray-300"}`}
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <polygon points="10,1 12.59,7.36 19.51,7.64 14,12.26 15.82,19.02 10,15.27 4.18,19.02 6,12.26 0.49,7.64 7.41,7.36" />
          </svg>
        ))}
      </div>
    );
  }

  // Carousel state
  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle next/prev slide
  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  // Auto-slide effect
  useEffect(() => {
    if (testimonials.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev === testimonials.length - 1 ? 0 : prev + 1
      );
    }, 4000); // 4 seconds
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-2">Client Testimonials</h2>
        <p className="text-center text-gray-500 mb-12">
          Discover how our consulting expertise has transformed businesses across industries
        </p>
        {/* Carousel */}
        <div className="relative mb-8">
          <div className="w-full">
            {/* Mobile: show only one card, swipeable & auto-slide */}
            <div className="block sm:block lg:hidden">
              {testimonials.length > 0 && (
                <div className="flex justify-center">
                  <div className="bg-white border-2 border-[#E26015] rounded-xl p-8  flex flex-col items-center text-center transition-all duration-300 w-full max-w-xs mx-auto">
                    {testimonials[currentIndex] && (
                      <>
                        <Avatar name={testimonials[currentIndex].name} />
                        <StarRating rating={testimonials[currentIndex].rating} />
                        <p className="text-gray-700 italic mb-4">“ {testimonials[currentIndex].review} “</p>
                        <div>
                          <div className="font-bold text-gray-900">{testimonials[currentIndex].name}</div>
                          <div className="text-gray-400 text-sm">{testimonials[currentIndex].role}</div>
                          <div className="text-gray-400 text-sm">{testimonials[currentIndex].department}</div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
            {/* Desktop: show 3 cards per screen, auto-slide */}
            <div className="hidden lg:block">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {testimonials.length > 0 &&
                  [...Array(Math.min(3, testimonials.length))].map((_, i) => {
                    // Calculate the index for each card in the carousel window
                    const idx = (currentIndex + i) % testimonials.length;
                    const review = testimonials[idx];
                    return (
                      <div
                        key={idx}
                        className="bg-white border-2 border-[#E26015] rounded-xl p-8  flex flex-col items-center text-center transition-all duration-300"
                      >
                        <Avatar name={review.name} />
                        <StarRating rating={review.rating} />
                        <p className="text-gray-700 italic mb-4">“ {review.review} “</p>
                        <div>
                          <div className="font-bold text-gray-900">{review.name}</div>
                          <div className="text-gray-400 text-sm">{review.role}</div>
                          <div className="text-gray-400 text-sm">{review.department}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          </div>
          {/* Carousel controls */}
          {testimonials.length > 3 && (
            <>
              <button
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
                onClick={handlePrev}
                aria-label="Previous"
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white border rounded-full p-2 shadow hover:bg-gray-100"
                onClick={handleNext}
                aria-label="Next"
              >
                <svg className="h-6 w-6 text-gray-600" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </>
          )}
        </div>
        {/* Carousel dots */}
        <div className="flex justify-center space-x-2 mb-8">
          {testimonials?.map((_, idx) => (
            <span
              key={idx}
              className={`h-2 ${idx === currentIndex ? "w-6 bg-gray-900" : "w-2 bg-gray-300"} rounded-full inline-block transition-all`}
            ></span>
          ))}
        </div>
        <div className="flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button
                className="flex items-center gap-3 bg-gradient-to-r from-orange-500 to-orange-700 hover:from-orange-600 hover:to-orange-800 text-white font-bold py-3 px-8 rounded-xl shadow-lg text-lg transition-all duration-200 group"
              >
                <span className="text-3xl leading-none">+</span>
                Leave a Review
                <ChevronDown className="ml-2 w-5 h-5 group-hover:rotate-180 transition-transform" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[220px] rounded-xl shadow-xl border-0 p-2 bg-white">
              <DropdownMenuItem
                onClick={() => setShowModal(true)}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base hover:bg-orange-50 hover:text-orange-700 cursor-pointer transition-all"
              >
                <MessageSquare className="w-5 h-5 text-orange-600" />
                Leave an Instant Review
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => router.push("/feedback")}
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-base hover:bg-orange-50 hover:text-orange-700 cursor-pointer transition-all"
              >
                <FileText className="w-5 h-5 text-orange-600" />
                Share feedback on your project.
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <ReviewFormModal
          isOpen={showModal}
          onClose={() => setShowModal(false)}
          unit={unit}
          onSubmit={fetchTestimonials}
        />
      </div>
    </section>
  );
}

