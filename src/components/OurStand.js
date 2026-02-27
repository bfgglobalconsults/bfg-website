import Image from "next/image";
import React from "react";

const OurStand = () => {
  return (
    <>
      <div>
        <div className="my-10">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            What we Stand For
          </span>
          <div className="w-[100%]">
            <h3 className="text-[#333] text-3xl my-8 font-semibold">
              What We Stand For
            </h3>
            <p className="text-[#999] text-xl my-2">
              Transforming businesses & communities through innovation,
              excellence, & empowerment. Discover how our values-driven approach
              delivers success, from vision to reality.
            </p>
          </div>

          <div className="w-full flex flex-col lg:flex-row flex-wrap gap-10 my-6">
            {/* trial */}
            <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
              <div className="w-full h-[190px]">
                <Image
                  src="/assets/growth-image.jpg"
                  alt="growth"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[100%]">
                <h4 className="text-xl text-[#333] font-semibold">Growth</h4>
                <p className="text-[#999]">
                  As much as we practice the principle of success, we ensure
                  that transformational growth & development take dominance in
                  every engagements.
                </p>
              </div>
            </div>
            {/* trial end */}
            {/* second item */}
             <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
              <div className="w-full h-[190px]">
                <Image
                  src="/assets/value-driven.jpg"
                  alt="growth"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[100%]">
                <h4 className="text-xl text-[#333] font-semibold">
                  Value Driven
                </h4>
                <p className="text-[#999]">
                  We save you from the risk of uncertainity in quality service,
                  & offer you the value of a monarch that you deserve. We go the
                  extra mile to consistently ensure you get the best.
                </p>
              </div>
            </div>
            {/* third item */}
             <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
              <div className="w-full h-[190px]">
                <Image
                  src="/assets/innovation-image.jpg"
                  alt="innovation"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[100%]">
                <h4 className="text-xl text-[#333] font-semibold">
                  Innovation
                </h4>
                <p className="text-[#999]">
                  We deploy design-led, data-driven, & technology model approach
                  in all we do. We go beyond the ordinary to give you the
                  extra-ordinary.
                </p>
              </div>
            </div>
            {/* fourth item */}
             <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
              <div className="w-full h-[190px]">
                <Image
                  src="/assets/client-success.jpg"
                  alt="client"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[100%]">
                <h4 className="text-xl text-[#333] font-semibold">
                  Client Success{" "}
                </h4>
                <p className="text-[#999]">
                  This is the core. We are committed to ensuring our clients
                  derive not just satisfaction from our services but also
                  success in their dealings with us.
                </p>{" "}
              </div>
            </div>
            {/* fifth */}
             <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
              <div className="w-full h-[190px]">
                <Image
                  src="/assets/tailored-image.jpg"
                  alt="tailored"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[100%]">
                <h4 className="text-xl text-[#333] font-semibold">
                  Tailored Solutions{" "}
                </h4>
                <p className="text-[#999]">
                  As a solution-driven firm, we do not offer one-size-fits-all solutions. Instead, we analyze each client’s unique challenges and craft strategies that align with their goals.
                </p>{" "}
              </div>
            </div>
            {/* fifth end */}
            {/* sixth */}
             <div className="w-[100%] lg:w-[30%] flex flex-col items-center gap-7 p-4 lg:p-10  border rounded-2xl shadow-lg">
              <div className="w-full h-[190px]">
                <Image
                  src="/assets/pan.png"
                  alt="pan"
                  className="w-full h-full object-cover rounded-md"
                />
              </div>
              <div className="w-[100%]">
                <h4 className="text-xl text-[#333] font-semibold">
                  Pan-African Synergy{" "}
                </h4>
                <p className="text-[#999]">
Our solutions are developed with a grassroots approach, ensuring they address the real needs of African businesses and people for our clients, rather than just corporate profitability.
                </p>{" "}
              </div>
            </div>
            {/* sixth end */}
          </div>
        </div>
      </div>
    </>
  );
};

export default OurStand;
