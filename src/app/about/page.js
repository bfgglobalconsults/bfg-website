import Image from "next/image";
import React from "react";
import TopBanner from "../../../public/assets/about-us.jpg";
import Picture from "../../../public/assets/festus-bello.jpg";

const page = () => {
  return (
    <>
      <div className="relative w-full h-[400px] bg-cover bg-center flex justify-center items-center">
        <Image
          src={TopBanner}
          alt="top-banner"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-50"></div>{" "}
        {/* Transparent overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
          <h3 className="text-white font-bold text-4xl md:text-3xl lg:text-4xl">
            Our Company
          </h3>
          <p className="text-[#ffffff9a] my-2 text-lg lg:text-2xl">
            Elevate Your Understanding: Discover Our Purpose.
          </p>
        </div>
      </div>
      <div className="py-[30px]">
        <div className="p-[40px]">
          <div>
          {/* <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
          Our Company
              </h3> */}
            
            <p className="text-[#656565] text-lg text-justify">
              Founded in 2018, BFG Global Consulting is a Management consulting
              firm that specialises in research and analytics, business strategy
              and operations, training and development, and information
              technology. with offices in Nigeria capital city and the United
              Kingdom, we offer services globally as a solution partner to
              individuals, businesses, corporate organisations, and government
              agencies.{" "}
            </p>
            <p className="my-2 text-[#656565] text-lg text-justify">
              Our company takes pride in its cutting edge consulting programmes,
              which are designed to deliver transformative value for a wide
              range of businesses, including tech start-ups and emerging brands.
              We are a small group of agile leaders helping organisations
              improve. Our clients range from high-profile brands to small,
              local companies in Nigeria and the United Kingdom.
            </p>
            <p className="my-2 text-[#656565] text-lg text-justify">
              BFG Global Consulting focuses on providing operational excellence,
              improving performance, reducing risk, and achieving sustainable
              growth
            </p>
          </div>
          <div className="my-[40px] py-[20px] bg-[#e6e2e246]">
          <h3 className="text-[#016EF8] text-3xl  lg:text-4xl text-center my-4">
          What We Stand For
              </h3>
            
            <div className="flex flex-wrap gap-[50px] w-full justify-center">
              <div className="w-[100%] md:w-[50%] lg:w-[35%] shadow-lg border-b-4 border-[#016EF8] p-4">
                <span className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M5 3V19H21V21H3V3H5ZM20.2929 6.29289L21.7071 7.70711L16 13.4142L13 10.415L8.70711 14.7071L7.29289 13.2929L13 7.58579L16 10.585L20.2929 6.29289Z"></path></svg>
                  </span>
                <div className="flex">
                  
                  <p className="text-lg text-[#016EF8] font-bold">Growth</p>
                </div>
                <p className="text-[#656565]">
                  As much as we practice the principle of success, we ensure
                  that transformational growth and development take dominance in
                  every of our engagements.
                </p>
              </div>
              <div className="w-[100%] md:w-[50%] lg:w-[35%] shadow-lg border-b-4 border-[#016EF8] p-4">
              <span className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2ZM8 13L4.06201 13.001C4.51365 16.6192 7.38163 19.4869 11 19.9381V16C9.34315 16 8 14.6569 8 13ZM19.938 13.001L16 13C16 14.6569 14.6569 16 13 16L13.001 19.938C16.6189 19.4864 19.4864 16.6189 19.938 13.001ZM12 4C7.92037 4 4.55396 7.05371 4.06189 11H8C8 10.4477 8.44772 10 9 10H15C15.5523 10 16 10.4477 16 11H19.9381C19.446 7.05371 16.0796 4 12 4Z"></path></svg>                  </span>
                <div className="flex items-center gap-2">
                
                  <p className="text-lg text-[#016EF8] font-bold">Value Driven</p>
                </div>
                <p className="text-[#656565]">
                  We safe you from the risk of uncertainity in quality service,
                  and offer you the value of a monarch that you deserve. We go
                  the extra mile to consistenly ensure you get the best.
                </p>
              </div>
              <div className="w-[100%] md:w-[50%] lg:w-[35%] shadow-lg border-b-4 border-[#016EF8] p-4">
              <span className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M9.97308 18H14.0269C14.1589 16.7984 14.7721 15.8065 15.7676 14.7226C15.8797 14.6006 16.5988 13.8564 16.6841 13.7501C17.5318 12.6931 18 11.385 18 10C18 6.68629 15.3137 4 12 4C8.68629 4 6 6.68629 6 10C6 11.3843 6.46774 12.6917 7.31462 13.7484C7.40004 13.855 8.12081 14.6012 8.23154 14.7218C9.22766 15.8064 9.84103 16.7984 9.97308 18ZM14 20H10V21H14V20ZM5.75395 14.9992C4.65645 13.6297 4 11.8915 4 10C4 5.58172 7.58172 2 12 2C16.4183 2 20 5.58172 20 10C20 11.8925 19.3428 13.6315 18.2443 15.0014C17.624 15.7748 16 17 16 18.5V21C16 22.1046 15.1046 23 14 23H10C8.89543 23 8 22.1046 8 21V18.5C8 17 6.37458 15.7736 5.75395 14.9992ZM13 10.0048H15.5L11 16.0048V12.0048H8.5L13 6V10.0048Z"></path></svg>
                  </span>
                <div className="flex items-center gap-2">
                 
                  <p className="text-lg text-[#016EF8] font-bold">Innovation</p>
                </div>
                <p className="text-[#656565]">
                  We deploy design-led, data-driven, and technology model
                  approach in all we do. We go beyond the ordinary to give you
                  the extra-ordinary.
                </p>
              </div>
              <div className="w-[100%] md:w-[50%] lg:w-[35%] shadow-lg border-b-4 border-[#016EF8] p-4">
              <span className="flex">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="48" height="48" fill="rgba(1,110,248,1)"><path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM7 13H9C9 14.6569 10.3431 16 12 16C13.6569 16 15 14.6569 15 13H17C17 15.7614 14.7614 18 12 18C9.23858 18 7 15.7614 7 13ZM8 11C7.17157 11 6.5 10.3284 6.5 9.5C6.5 8.67157 7.17157 8 8 8C8.82843 8 9.5 8.67157 9.5 9.5C9.5 10.3284 8.82843 11 8 11ZM16 11C15.1716 11 14.5 10.3284 14.5 9.5C14.5 8.67157 15.1716 8 16 8C16.8284 8 17.5 8.67157 17.5 9.5C17.5 10.3284 16.8284 11 16 11Z"></path></svg>
                  </span>
                <div className="flex items-center gap-2">
                  
                  <p className="text-lg text-[#016EF8]  font-bold">Client Success</p>
                </div>
                <p className="text-[#656565]">
                  This is the core. We are committed to ensuring our clients
                  derive not just satisfaction from our services but also
                  success in their dealings with us.
                </p>
              </div>
            </div>
          </div>
          {/* manager statement start */}
{/* <h2 className="text-3xl text-[#E45F11] font-bold">BFG Global Consulting, LLC</h2> */}
          <h3 className="text-2xl font-semibold">Your Growth Partner in a Changing Business Landscape</h3>
          <div className="flex flex-wrap gap-8 w-full">
            <div className="w-[100%] lg:w-[60%]">
              <p className="w-full text-lg my-2 text-[#656565]">
                I am delighted to address you today as the Managing Partner and 
                  CEO of BFG Global Consulting Limited and introduce our firm.
                With great passion and commitment, our team at BFG Global
                Consulting is dedicated to assisting organizations from diverse
                industries in their pursuit of business growth. We aim to be
                your growth partners, guiding you towards the new opportunities of contemporary business. At BFG Global
                Consulting, we understand that the business landscape is
                constantly evolving, presenting both challenges and prospects
                for organizations worldwide. In this fast-paced environment, it
                is crucial for businesses to adapt and thrive to remain
                competitive. Thats where we come in.
              </p>
              <p className="text-lg text-[#656565]">
              Our expertise lies in deploying and managing innovative solutions
              that empower businesses and organizations to achieve growth. We
              firmly believe that success in todays marketplace requires a
              multidimensional approach, blending research, strategy, workforce
              training, and information technology. By operating at the
              intersection of these critical areas, we offer comprehensive
              consulting services that equip our clients with the tools they
              need to drive their success. As we embark on this exciting
              journey, we invite you to join us in shaping the future of
              business growth. Whether you are a small startup seeking guidance
              or a well-established organization looking for fresh insights, BFG
              Global Consulting is here to support you every step of the way.
              Our team of experts is ready to listen, understand your unique
              challenges, and tailor solutions that align with your specific
              goals. While you explore our business profile, we thank you for
              your attention, and we look forward to connecting with you soon.
              Together, let us embrace the possibilities and create a future of
              sustainable growth and success.
            </p>
            </div>
            <div className="w-[100%]  lg:w-[30%] h-[400px] bg-white shadow-xl p-3">
              <div className="w-[200px] h-[200px] mx-auto">
            <Image
                  src={Picture}
                  alt="festus-bello"
                  className="w-full h-full object-fit rounded-full"
                />
                </div>
                <p className="text-2xl text-center my-3">Festus Bello, mba.</p>
                <p className="text-[#656565] text-xl text-center my-2">Managing Director / CEO</p>
            </div>
          </div>
          <div>
            
          </div>
          {/* manager statement end */}
        </div>
      </div>
    </>
  );
};

export default page;
