"use client";
import Link from "next/link";
import Image from "next/image";

export default function UKPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto py-16 lg:py-[150px] relative">
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/ng-background.png"
            alt="UK business landscape background with modern office buildings"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative z-10"></div>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
              Market Research,{" "}
              <span className="text-[#E26015]">
                Software Development & Growth Strategy
              </span>
              <br />
              for Afro-Asian Excellence
              <br />
              <span className="text-[#333]">in the UK.</span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              From market research and software development to strategy and training, 
              we equip Afro-Asian students, start-ups, and businesses to compete, scale, and lead.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link href="/contact">
                <button className="px-6 py-3 bg-[#E26015] text-white font-semibold rounded-lg hover:bg-[#c54f0f] transition-colors">
                  Request your custom solution
                </button>
              </Link>
              
              <Link href="/insight/case-study">
                <button className="px-6 py-3 border-2 border-[#E26015] text-[#E26015] font-semibold rounded-lg hover:bg-[#E26015] hover:text-white transition-colors">
                  View Our Global Work
                </button>
              </Link>
            </div>
          </div>

          {/* Right Content - Map with Stats */}
          <div className="relative">
            <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-8 lg:p-12 shadow-xl">
              {/* Growth Rate Badge */}
              {/* <div className="absolute top-8 left-8 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#E26015] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M16 16V4H8V16H2V20C2 20.5523 2.44772 21 3 21H21C21.5523 21 22 20.5523 22 20V16H16ZM14 16H10V6H14V16Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Growth Rate</p>
                  <p className="text-lg font-bold text-[#E26015]">+247%</p>
                </div>
              </div> */}

              {/* UK Map/Banner */}
              <div className="relative w-full h-[500px] flex items-center justify-center z-5">
                <Image
                  src="/assets/uk-hero-banner.png"
                  alt="UK map with business analytics and growth statistics"
                  className="w-full h-full object-contain rounded-xl"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#E26015] text-white px-6 py-3 rounded-lg font-bold text-xl shadow-lg">
                    Nigeria
                  </div>
                </div> */}
              </div>

              {/* Client Satisfaction Badge */}
              {/* <div className="absolute bottom-8 right-8 bg-white rounded-lg shadow-lg p-3 flex items-center gap-3 z-10">
                <div className="w-10 h-10 bg-[#E26015] rounded-lg flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Client Satisfaction</p>
                  <p className="text-lg font-bold text-[#E26015]">99.8%</p>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            {/* Left - Section Header */}
            <div className="lg:col-span-2 space-y-6">
              <span className="inline-block px-4 py-2 bg-[#FFF5F0] text-[#E26015] text-sm font-semibold rounded-full">
                Our Solution
              </span>
              
              <h2 className="text-3xl lg:text-4xl font-bold text-[#333]">
                Customized Services for Exceptional Results
              </h2>
              
              <p className="text-gray-600 leading-relaxed">
                Every project we execute is shaped by our fundamental beliefs, which 
                guarantee outstanding quality, creativity, and client pleasure at every turn.
              </p>
              
              <Link href="/solutions">
                <button className="px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-[#E26015] transition-colors inline-flex items-center gap-2">
                  View All Services
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="white">
                    <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                  </svg>
                </button>
              </Link>
            </div>

            {/* Right - Service Cards Grid */}
            <div className="lg:col-span-3 grid md:grid-cols-2 gap-6">
             

              {/* Research & Analytics Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-[#E26015] rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M6 4V8H18V4H20.0066C20.5552 4 21 4.44495 21 4.9934V21.0066C21 21.5552 20.5551 22 20.0066 22H3.9934C3.44476 22 3 21.5551 3 21.0066V4.9934C3 4.44476 3.44495 4 3.9934 4H6Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-3">Research & Analytics</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  We provide startups, & SMEs with valuable insights & information that 
                  can inform business strategies, decision-making processes, & problem-solving 
                  efforts. We serve as an impartial partner for businesses in the process of 
                  gathering, analyzing & interpreting data in order to make informed decisions.
                </p>
                <Link href="/solutions/research-analytics">
                  <button className="text-[#E26015] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    See More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </Link>
              </div>

               {/* Technology & Software Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-[#E26015] rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M18.031 16.6168L22.3137 20.8995L20.8995 22.3137L16.6168 18.031C15.0769 19.263 13.124 20 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20 13.124 19.263 15.0769 18.031 16.6168Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-3">Technology & Software</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Boost your business growth with digital tools. We take you through the 
                  process of designing & developing cutting-edge technology to enhance 
                  business effectiveness, ranging from web development & artificial 
                  intelligence to machine learning & block chain technology.
                </p>
                <Link href="/solutions/information-technology">
                  <button className="text-[#E26015] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    See More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </Link>
              </div>

              {/* Strategy & Operations Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-[#E26015] rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M11 2.04938V13H21.9506C21.4489 18.0533 17.1853 22 12 22C6.47715 22 2 17.5229 2 12C2 6.81465 5.94668 2.5511 11 2.04938Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-3">Strategy & Operations Transformation</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Earn your business the ability to achieve desired goals through the 
                  development & implementation of plans & processes aimed at improving 
                  competitiveness. Through this service, we help startups & SMEs align 
                  their operations.
                </p>
                <Link href="/solutions/business-strategy">
                  <button className="text-[#E26015] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    See More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </Link>
              </div>

              {/* Training & Development Card */}
              <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow group">
                <div className="w-12 h-12 bg-[#E26015] rounded-lg flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                    <path d="M2 3.9934C2 3.44476 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44495 22 3.9934V20.0066C22 20.5552 21.5447 21 21.0082 21H2.9918C2.44405 21 2 20.5551 2 20.0066V3.9934Z"></path>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#333] mb-3">Training & Development</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  Improve job performance through employee training. Win the process of 
                  enhancing the skills, knowledge & abilities of employees to perform their 
                  jobs more effectively. Through this solution, we help startups & SMEs 
                  improve their overall performance.
                </p>
                <Link href="/solutions/training-development">
                  <button className="text-[#E26015] font-semibold text-sm inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                    See More
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="bg-[#0A2540] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="mb-12">
            <span className="inline-block px-4 py-2 bg-white text-[#E26015] rounded-full text-sm font-semibold mb-4">
              Industries We Cover
            </span>
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4">
              Serving Diverse Industries
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl">
              Discover success across tech, finance, healthcare, manufacturing, retail, 
              energy, professional services, and hospitality with BFG Global Consults 
              tailored consulting expertise.
            </p>
          </div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Industry Card 1 */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow">
                <div className="relative h-64 bg-gray-200">
                  {/* Placeholder for image */}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#333] mb-3">Technology & Software</h3>
                  <p className="text-gray-600 mb-4">
                    Boost your business growth with digital tools. We take you through 
                    the process of designing & developing cutting-edge technology.
                  </p>
                  <Link href="/ng/industry/technology">
                    <button className="flex items-center gap-2 text-[#E26015] font-semibold hover:gap-3 transition-all">
                      See More
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                        <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                      </svg>
                    </button>
                  </Link>
                </div>
              </div>

              {/* Add more industry cards here */}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-center gap-4 mt-8">
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-600">
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg>
              </button>
              <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="currentColor" className="text-gray-600">
                  <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Expertise Section */}
      <section className="bg-[#E26015] py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-white leading-tight">
                Global Expertise. Local Understanding.
              </h2>
              
              <div className="space-y-4 text-white">
                <p className="leading-relaxed">
                  Our team combines decades of international consulting experience with 
                  deep knowledge of the UK business landscape. We understand the 
                  unique challenges and opportunities for Afro-Asian businesses, and we bring 
                  proven methodologies from global best practices to deliver solutions 
                  that work in your context.
                </p>
                <p className="leading-relaxed">
                  With consultants who have worked across Fortune 500 companies, leading 
                  tech firms, and high-growth startups, we bridge the gap between 
                  world-class standards and local market realities.
                </p>
              </div>

              {/* Feature Grid */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                {/* International Standards */}
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#E26015] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="white">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM9.71002 19.6674C8.74743 17.6259 8.15732 15.3742 8.02731 13H4.06189C4.458 16.1765 6.71639 18.7747 9.71002 19.6674ZM10.0307 13C10.1811 15.4388 10.8778 17.7297 12 19.752C13.1222 17.7297 13.8189 15.4388 13.9693 13H10.0307ZM19.9381 13H15.9727C15.8427 15.3742 15.2526 17.6259 14.29 19.6674C17.2836 18.7747 19.542 16.1765 19.9381 13ZM4.06189 11H8.02731C8.15732 8.62577 8.74743 6.37407 9.71002 4.33256C6.71639 5.22533 4.458 7.8235 4.06189 11ZM10.0307 11H13.9693C13.8189 8.56122 13.1222 6.27025 12 4.24799C10.8778 6.27025 10.1811 8.56122 10.0307 11ZM14.29 4.33256C15.2526 6.37407 15.8427 8.62577 15.9727 11H19.9381C19.542 7.8235 17.2836 5.22533 14.29 4.33256Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#E26015] font-semibold">International Standards</p>
                </div>

                {/* Local Market Expertise */}
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#E26015] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="white">
                      <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#E26015] font-semibold">Local Market Expertise</p>
                </div>

                {/* Proven Track Record */}
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#E26015] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="white">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#E26015] font-semibold">Proven Track Record</p>
                </div>

                {/* Dedicated Support */}
                <div className="bg-white rounded-xl p-6 text-center">
                  <div className="w-16 h-16 bg-[#E26015] rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="28" height="28" fill="white">
                      <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                    </svg>
                  </div>
                  <p className="text-[#E26015] font-semibold">Dedicated Support</p>
                </div>
              </div>
            </div>

            {/* Right Content - Illustration */}
            <div className="flex flex-col items-center gap-8">
              <div className="bg-white rounded-full aspect-square flex items-center justify-center p-8 lg:p-12 shadow-2xl overflow-hidden">
                <Image
                  src="/assets/ng-team.png"
                  alt="BFG Global Consults UK team of expert consultants"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              
              {/* CTA Button */}
              <Link href="/team">
                <button className="px-8 py-4 bg-white text-[#E26015] font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all">
                  Meet Our UK Team
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Testimonials Section */}
      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-12">
          {/* Statistics Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {/* Projects Completed */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E26015] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z"></path>
                </svg>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#333] mb-2">899+</h3>
              <p className="text-gray-600">Projects Completed</p>
            </div>

            {/* Clients Served */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E26015] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path d="M12 11C14.7614 11 17 13.2386 17 16V22H15V16C15 14.3431 13.6569 13 12 13C10.3431 13 9 14.3431 9 16V22H7V16C7 13.2386 9.23858 11 12 11ZM5.5 14C5.77885 14 6.05009 14.0326 6.3101 14.0942C6.14202 14.594 6.03873 15.122 6.00896 15.6693L6 16L6.0007 16.0856C5.88757 16.0456 5.76821 16.0187 5.64446 16.0069L5.5 16C4.7203 16 4.07955 16.5949 4.00687 17.3555L4 17.5V22H2V17.5C2 15.567 3.567 14 5.5 14ZM18.5 14C20.433 14 22 15.567 22 17.5V22H20V17.5C20 16.7203 19.4051 16.0796 18.6445 16.0069L18.5 16C18.3248 16 18.1566 16.03 18.0003 16.0852L18 16C18 15.3343 17.8916 14.694 17.6915 14.0956C17.9499 14.0326 18.2211 14 18.5 14ZM5.5 8C6.88071 8 8 9.11929 8 10.5C8 11.8807 6.88071 13 5.5 13C4.11929 13 3 11.8807 3 10.5C3 9.11929 4.11929 8 5.5 8ZM18.5 8C19.8807 8 21 9.11929 21 10.5C21 11.8807 19.8807 13 18.5 13C17.1193 13 16 11.8807 16 10.5C16 9.11929 17.1193 8 18.5 8ZM5.5 10C5.22386 10 5 10.2239 5 10.5C5 10.7761 5.22386 11 5.5 11C5.77614 11 6 10.7761 6 10.5C6 10.2239 5.77614 10 5.5 10ZM18.5 10C18.2239 10 18 10.2239 18 10.5C18 10.7761 18.2239 11 18.5 11C18.7761 11 19 10.7761 19 10.5C19 10.2239 18.7761 10 18.5 10ZM12 2C14.2091 2 16 3.79086 16 6C16 8.20914 14.2091 10 12 10C9.79086 10 8 8.20914 8 6C8 3.79086 9.79086 2 12 2ZM12 4C10.8954 4 10 4.89543 10 6C10 7.10457 10.8954 8 12 8C13.1046 8 14 7.10457 14 6C14 4.89543 13.1046 4 12 4Z"></path>
                </svg>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#333] mb-2">99+</h3>
              <p className="text-gray-600">Clients Served</p>
            </div>

            {/* Years of Impact */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E26015] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z"></path>
                </svg>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#333] mb-2">7+</h3>
              <p className="text-gray-600">Years of Impact</p>
            </div>

            {/* Expert Consultants */}
            <div className="text-center">
              <div className="w-16 h-16 bg-[#E26015] rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32" fill="white">
                  <path d="M2 22C2 17.5817 5.58172 14 10 14C14.4183 14 18 17.5817 18 22H16C16 18.6863 13.3137 16 10 16C6.68629 16 4 18.6863 4 22H2ZM10 13C6.685 13 4 10.315 4 7C4 3.685 6.685 1 10 1C13.315 1 16 3.685 16 7C16 10.315 13.315 13 10 13ZM10 11C12.21 11 14 9.21 14 7C14 4.79 12.21 3 10 3C7.79 3 6 4.79 6 7C6 9.21 7.79 11 10 11ZM18.2837 14.7028C21.0644 15.9561 23 18.752 23 22H21C21 19.564 19.5483 17.4671 17.4628 16.5271L18.2837 14.7028ZM17.5962 3.41321C19.5944 4.23703 21 6.20361 21 8.5C21 11.3702 18.8042 13.7252 16 13.9776V11.9646C17.6967 11.7222 19 10.264 19 8.5C19 7.11935 18.2016 5.92603 17.041 5.35635L17.5962 3.41321Z"></path>
                </svg>
              </div>
              <h3 className="text-4xl lg:text-5xl font-bold text-[#333] mb-2">20+</h3>
              <p className="text-gray-600">Expert Consultants</p>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Testimonial 1 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#E26015">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "BFG Consults helped us navigate the UK market with their deep understanding 
                of both local regulations and our cultural background. Their support was 
                invaluable in scaling our startup."
              </p>
              <div>
                <p className="font-bold text-[#333]">Priya Sharma</p>
                <p className="text-sm text-gray-500">Founder, TechBridge UK</p>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#E26015">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "The market research insights from BFG gave us the confidence to expand 
                into new sectors. Their team understands the unique challenges Afro-Asian 
                businesses face in the UK."
              </p>
              <div>
                <p className="font-bold text-[#333]">David Okafor</p>
                <p className="text-sm text-gray-500">CEO, Global Ventures Ltd</p>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-white rounded-xl p-8 shadow-sm">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="20" height="20" fill="#E26015">
                    <path d="M12.0006 18.26L4.94715 22.2082L6.52248 14.2799L0.587891 8.7918L8.61493 7.84006L12.0006 0.5L15.3862 7.84006L23.4132 8.7918L17.4787 14.2799L19.054 22.2082L12.0006 18.26Z"></path>
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">
                "From strategy to implementation, BFG Consults delivered exceptional results. 
                Their training programs equipped our team with the skills needed to compete 
                in the UK market."
              </p>
              <div>
                <p className="font-bold text-[#333]">Mei Chen</p>
                <p className="text-sm text-gray-500">Director, Innovation Hub</p>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <div className="flex justify-center gap-4 mt-8">
            <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#E26015">
                <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
              </svg>
            </button>
            <button className="w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#E26015">
                <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
              </svg>
            </button>
          </div>
        </div>
      </section>

      {/* Contact/Consultation Section */}
      <section className="bg-white py-16 lg:py-24">
        <div className="container mx-auto px-4 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Content */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-[#333] mb-6 leading-tight">
                  Let's Build the Future of Your Business — Together
                </h2>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Ready to transform your business with expert guidance and innovative 
                  solutions? Our team is here to help you navigate challenges, seize 
                  opportunities, and achieve sustainable growth in the UK market.
                </p>
              </div>

              {/* Contact Info Cards */}
              <div className="space-y-4">
                {/* Call Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                      <path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Call Us</p>
                    <p className="text-gray-600">+44 (0) 20 1234 5678</p>
                  </div>
                </div>

                {/* Email Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                      <path d="M3 3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3ZM2 4H20V19H2V4ZM4.51146 5L12.0619 11.662L19.501 5H4.51146Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Email Us</p>
                    <p className="text-gray-600">uk@bfgconsults.com</p>
                  </div>
                </div>

                {/* Visit Us */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#0A2540] rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="white">
                      <path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995Z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-[#333] mb-1">Visit Us</p>
                    <p className="text-gray-600">London, United Kingdom</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-10">
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-[#333] mb-2">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Your Company"
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                  />
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-[#333] mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      placeholder="john@company.com"
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
                      placeholder="+44 20 0000 0000"
                      className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333] mb-2">
                    Service Needed <span className="text-red-500">*</span>
                  </label>
                  <select
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent appearance-none bg-white"
                    required
                  >
                    <option value="">Select a service</option>
                    <option value="technology">Technology & Software</option>
                    <option value="research">Research & Analytics</option>
                    <option value="strategy">Strategy & Operations</option>
                    <option value="training">Training & Development</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-[#333] mb-2">
                    Message
                  </label>
                  <textarea
                    rows="4"
                    placeholder="Tell us about your project or business needs..."
                    className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E26015] focus:border-transparent resize-none"
                  ></textarea>
                  <p className="text-xs text-gray-500 mt-1">0/500 characters</p>
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 bg-[#0A2540] text-white font-semibold rounded-lg hover:bg-[#E26015] transition-colors"
                >
                  Book a Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}