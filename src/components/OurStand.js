import Image from 'next/image'
import React from 'react'
import ServiceImage1 from "../../public/assets/service-image1.png";
import ServiceImage2 from "../../public/assets/service-image2.png";

const OurStand = () => {
  return (
      <>
          <div>
            <div className="my-8">
            <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
              What we Stand For
            </span>
            <div className="w-[50%]">
              <h3 className="text-[#333] text-3xl my-8 font-semibold">
                What We Stand For
              </h3>
              <p className="text-[#999] text-xl my-2">
               Transforming businesses & communities through innovation, excellence, & empowerment. Discover how our values-driven approach delivers success, from vision to reality.
              </p>
            </div>
            <div className="w-full flex gap-10">
              <div className="w-[30%] h-[280px]">
                <Image
                  src={ServiceImage1}
                  alt="service-image1"
                  className="w-full h-full"
                />
              </div>
              <div className="w-[70%] h-[280px]">
                <Image
                  src={ServiceImage2}
                  alt="service-image2"
                  className="w-full h-full"
                />
              </div>
            </div>
            <div className="w-full flex flex-wrap gap-10 my-6">
              <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(208,229,242,1)"><path d="M5 3V19H21V21H3V3H5ZM19.9393 5.93934L22.0607 8.06066L16 14.1213L13 11.121L9.06066 15.0607L6.93934 12.9393L13 6.87868L16 9.879L19.9393 5.93934Z"></path></svg>
                  </div>
                </div>
                <div className="w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Growth
                  </h4>
                  <p className="text-[#999]">
                   As much as we practice the principle of success, we ensure that transformational growth & development take dominance in every of our engagements.
                  </p>
                </div>
              </div>
              {/* second item */}
              <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="36" height="36" fill="rgba(208,229,242,1)"><path d="M16 2L21 7V21.0082C21 21.556 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5447 3 21.0082V2.9918C3 2.44405 3.44495 2 3.9934 2H16ZM12 11.5C13.3807 11.5 14.5 10.3807 14.5 9C14.5 7.61929 13.3807 6.5 12 6.5C10.6193 6.5 9.5 7.61929 9.5 9C9.5 10.3807 10.6193 11.5 12 11.5ZM7.52746 17H16.4725C16.2238 14.75 14.3163 13 12 13C9.68372 13 7.77619 14.75 7.52746 17Z"></path></svg>
                  </div>
                </div>
                <div className="w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Value Driven
                  </h4>
                  <p className="text-[#999]">
                   We safe you from the risk of uncertainity in quality service, & offer you the value of a monarch that you deserve. We go the extra mile to consistenly ensure you get the best.
                  </p>
                </div>
              </div>
              {/* third item */}
              <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(217,217,217,1)"
                    >
                      <path d="M2.5 7C2.5 9.20914 4.29086 11 6.5 11C8.70914 11 10.5 9.20914 10.5 7C10.5 4.79086 8.70914 3 6.5 3C4.29086 3 2.5 4.79086 2.5 7ZM2 21V16.5C2 14.0147 4.01472 12 6.5 12C8.98528 12 11 14.0147 11 16.5V21H2ZM17.5 11C15.2909 11 13.5 9.20914 13.5 7C13.5 4.79086 15.2909 3 17.5 3C19.7091 3 21.5 4.79086 21.5 7C21.5 9.20914 19.7091 11 17.5 11ZM13 21V16.5C13 14.0147 15.0147 12 17.5 12C19.9853 12 22 14.0147 22 16.5V21H13Z"></path>
                    </svg>{" "}
                  </div>
                </div>
                <div className="w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
                    Innovation
                  </h4>
                  <p className="text-[#999]">
                   We deploy design-led, data-driven, & technology model approach in all we do. We go beyond the ordinary to give you the extra-ordinary.
                  </p>
                </div>
              </div>
              {/* fourth item */}
              <div className="w-[45%] flex items-center gap-7 p-10 border rounded-2xl shadow-lg">
                <div className="w-[20%]">
                  <div className="p-8 bg-[#127DC0] rounded-2xl inline-block text-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="36"
                      height="36"
                      fill="rgba(217,217,217,1)"
                    >
                      <path d="M17 15.2454V22.1169C17 22.393 16.7761 22.617 16.5 22.617C16.4094 22.617 16.3205 22.5923 16.2428 22.5457L12 20L7.75725 22.5457C7.52046 22.6877 7.21333 22.6109 7.07125 22.3742C7.02463 22.2964 7 22.2075 7 22.1169V15.2454C5.17107 13.7793 4 11.5264 4 9C4 4.58172 7.58172 1 12 1C16.4183 1 20 4.58172 20 9C20 11.5264 18.8289 13.7793 17 15.2454ZM12 15C15.3137 15 18 12.3137 18 9C18 5.68629 15.3137 3 12 3C8.68629 3 6 5.68629 6 9C6 12.3137 8.68629 15 12 15ZM12 13C9.79086 13 8 11.2091 8 9C8 6.79086 9.79086 5 12 5C14.2091 5 16 6.79086 16 9C16 11.2091 14.2091 13 12 13Z"></path>
                    </svg>{" "}
                  </div>
                </div>
                <div className="w-[80%]">
                  <h4 className="text-xl text-[#333] font-semibold">
Client Success                  </h4>
                  <p className="text-[#999]">
                    This is the core. We are committed to ensuring our clients derive not just satisfaction from our services but also success in their dealings with us.
                  </p>{" "}
                </div>
              </div>
            </div>
          </div>  
      </div>
      </>
  )
}

export default OurStand