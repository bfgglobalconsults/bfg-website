import Slides from "@/components/Slides";
import Image from "next/image";
import BlogImage from "../../../../../public/assets/blog-image.jpeg";
import GTBCode from "../../../../../public/assets/gtb.png";
import MrBiggs from "../../../../../public/assets/biggs.png";
import Landscape from "../../../../../public/assets/digital-route.png";
import DigitalSteps from "../../../../../public/assets/digital-steps.png";
import Banner from "../../../../../public/assets/news-banners.png";
import SecondNews from "../../../../../public/assets/second-news.png";
import React from "react";
import Link from "next/link";
const page = () => {
  return (
    <>
      <div className="lg:mt-[150px] p-5 md:p-10">
        <div className="inline-block bg-white border-2 border-[#E26015] p-2 rounded-3xl">
          <Link href="/insight/blogs">
            <div className="flex items-center gap-2">
              <span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="32"
                  height="32"
                  fill="currentColor"
                >
                  <path d="M7.82843 10.9999H20V12.9999H7.82843L13.1924 18.3638L11.7782 19.778L4 11.9999L11.7782 4.22168L13.1924 5.63589L7.82843 10.9999Z"></path>
                </svg>
              </span>
              <span className="font-semibold">Back</span>
            </div>
          </Link>
        </div>
        <div className="w-full my-4">
          <h3 className="w-[100%]  text-[#333] font-bold text-3xl md:text-3xl lg:text-5xl">
          The Digital Divide: A Tale of Two Nigerian Giants – GTBank&apos;s Ascent vs. Mr. Biggs&apos; Decline
          </h3>
        </div>
        <div className="relative w-full h-[200px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={BlogImage}
            alt="about-banner"
            className="w-full h-full object-cover rounded-3xl"
          />
        </div>
        <div className="my-4">
          <Slides />
        </div>
        <div className="p-1 lg:p-12">
          {/* <h3 className="text-2xl text-black font-semibold my-3">
            Laying the Foundation: Vision & Strategy
          </h3> */}
          <div className="w-full flex gap-3">
            <div className="w-[100%] lg:w-[80%] bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-5 lg:p-10">
             
              <p className="text-lg text-black">
              Rewind to a decade ago. In the bustling landscape of Nigeria, two household names reigned supreme in their respective domains: GTBank and Mr. Biggs. GTBank stood as a titan in financial services, synonymous with trust and accessibility for millions managing their money. Meanwhile, Mr. Biggs was a beloved culinary icon, a go-to spot for quick, delicious meals that resonated across all demographics. Their brands were ubiquitous, their presence undeniable.
              </p>
              <br />

              <p className="text-lg">
                
                <span className="font-semibold text-black">
                Fast forward to 2025.
                </span>
                GTBank continues its remarkable trajectory, not just surviving but thriving. It has seamlessly integrated cutting-edge technology into its core operations, transforming banking from a chore into a convenient, accessible experience for every Nigerian. Its digital innovations have redefined customer engagement and operational efficiency. Yet, what of Mr. Biggs? The narrative has shifted dramatically. Once a national favorite, it now struggles for relevance, a distant memory for many in a rapidly evolving market.
              </p>
              <br />
              <h2 className="text-lg font-semibold text-black my-6">
              What fundamentally happened?
              </h2>
              <p className="text-lg">
              This isn&apos;t merely a nostalgic look at two prominent companies. It&apos;s a vivid, real-life illustration of the <span className="font-semibold text-black">critical imperative of digital transformation</span> for every Nigerian business, regardless of size or sector. The contrasting fortunes of GTBank and Mr. Biggs serve as a stark warning: the digital tide is rising, and any enterprise failing to adapt its strategies and operations <span className="font-semibold text-black">before 2026</span> risks being irrevocably left behind in the wake of technological advancement. The digital divide is widening, and navigating it successfully is no longer an option, but a necessity for survival and sustained growth.
                
              </p>
                          <br />
                          <Image src={GTBCode} alt="gtb-code" className="w-full h-auto rounded-3xl" />
                          <h2 className="text-lg font-semibold my-6">
                          GTBank&apos;s Masterstroke: Digital at Its Core, Customer at Its Heart              </h2>

              <p className="text-lg">
              GTBank didn&apos;t merely dabble in digital transformation; it executed a strategic deep dive, embedding digital capabilities at the very core of its operations and philosophy. Their vision was crystal clear: digital wasn&apos;t just another service channel; it was the fundamental blueprint for the entire customer experience. This radical commitment positioned them for unprecedented growth and enduring relevance.
              </p>

                          <br />
                          <p className="text-lg">Their success can be attributed to several key initiatives:</p>
                          <br />
                <ul className="pl-6 space-y-4 list-disc">
                  <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    Effortless Mobile-First Banking
                    </span>{" "}
                    – GTBank meticulously engineered its digital platforms to prioritize user simplicity and accessibility. They developed intuitive mobile applications and streamlined web interfaces, ensuring that managing finances was straightforward even for individuals with minimal tech proficiency. From checking balances and paying bills to initiating transfers, virtually every banking transaction became seamlessly accessible from the convenience of a smartphone, eliminating traditional banking complexities and stress.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    Empowering Customer Autonomy and Accessibility
                    </span>
                    – GTBank went beyond merely digitizing services; they empowered their customers with unparalleled control and flexibility. They pioneered innovative solutions like the widely adopted *737# USSD code, allowing users to perform critical transactions and account inquiries even without internet access. Crucially, GTBank fostered a culture of continuous improvement, actively listening to customer feedback across social media and other channels. This iterative approach to digital refinement ensured their services consistently met evolving user needs, solidifying customer satisfaction and maintaining their competitive edge.
                  </p>
                </li>
                
                          </ul>
                          <Image src={MrBiggs} alt="gtb-code" className="w-full h-auto rounded-3xl" />

              <h2 className="text-lg font-semibold text-black my-6">
              The Mr. Biggs Blunder: Stuck in the Playbook of Yesteryear
              </h2>
              <p className="text-lg">
              While GTBank was swiftly embracing innovation and charting new digital territories, Mr. Biggs remained largely static. They failed to evolve with consumer expectations in an increasingly fast-paced, online-driven world.
              </p>
                          <br />
                          <ul className="pl-6 space-y-4 list-disc">
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    Trapped in Time
                    </span>{" "}
                    – As the world became more technologically advanced, Mr. Biggs conspicuously lagged. They missed crucial opportunities to offer convenient online food ordering, implement digital loyalty programs, or integrate seamless mobile payment options. It was as if their business model was frozen in a bygone era, unable to adapt to modern consumer behaviors.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    A Deaf Ear to the Evolving Customer
                    </span>
                    – Nigerians were rapidly adopting smartphones and developing a strong preference for quick, personalized, and effortless digital interactions. Yet, Mr. Biggs largely overlooked these fundamental shifts. Their failure to adapt their service delivery to match evolving customer demands ultimately led to a disconnect with their core audience.
                  </p>
                              </li>
                              <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    The Inaccessibility Gap
                    </span>
                    – Imagine craving your favorite meal but being unable to order it with a few taps on your phone, or missing out on exclusive digital deals. This was the reality for Mr. Biggs&apos; customers. Their lack of meaningful online engagement meant they gradually lost relevance, and over time, customers simply drifted away to more digitally astute competitors.
                  </p>
                </li>
                
                          </ul>
                          <Image src={DigitalSteps} alt="digital-steps" className="w-full h-auto rounded-3xl" />

                          <h2 className="text-lg font-semibold text-black my-6">
                          The Unavoidable Truth: 3 Lessons for Every Nigerian Business
                          </h2>
              <p className="text-lg">
              The diverging paths of GTBank and Mr. Biggs are far more than just corporate anecdotes; they are an urgent blueprint outlining what to do (and crucially, what not to do) for any business aiming for sustainable growth in today&apos;s digital landscape.
              </p>
              <br />
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    Going Digital Isn&apos;t Optional; It&apos;s Existential
                    </span>{" "}
                    – Simply having a basic website or an Instagram page is no longer enough. Digital transformation demands a holistic re-evaluation of your entire business model. Every touchpoint—from how you communicate with customers, to their purchasing journey, and how you resolve their issues—must be optimized for a seamless online experience. If your business isn&apos;t digitally accessible and intuitively user-friendly, it faces the very real risk of obsolescence.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    Customer Experience Demands Speed and Simplicity—Especially on Mobile
                    </span>
                    – Today&apos;s consumers expect instant gratification and effortless interactions. The smartphone has become the primary tool for commerce and communication. If your business&apos;s digital presence isn&apos;t fully optimized for mobile—if it&apos;s slow, clunky, or confusing—customers will swiftly abandon it for competitors who offer a smoother, faster experience. Mobile-first is not just a trend; it&apos;s the standard for customer satisfaction.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                    Data-Driven Agility: Know Your Customers, Act Fast
                    </span>{" "}
                    – Harnessing the power of data to truly understand your customers is paramount. What are their preferences? When do they engage? How do they prefer to interact? Collecting and analyzing this information provides invaluable insights. The key then is to use these insights to implement changes rapidly. This iterative, data-driven approach allows smart businesses to continuously adapt, innovate, and stay ahead of the curve.
                  </p>
                </li>
                
                          </ol>
                          <br />
                          <Image src={Landscape} alt="gtb-code" className="w-full h-auto rounded-3xl" />

                          
                           <h2 className="text-lg font-semibold text-black my-6">
                           Final Lesson: It&apos;s Not About Unlimited Capital; It&apos;s About Unwavering Courage                          </h2>
                          <br />
                          <p className="text-lg">
                              You don&apos;t need a billion naira to embark on your digital transformation journey. What you absolutely need is the courage to innovate, the willingness to discontinue outdated practices, and the readiness to embrace fundamental change.
                          </p>
                          <br />
                          <p className="text-lg">
                          Look at the contrasting fortunes of these two giants. Learn from their experiences. Then, use those lessons to build a stronger, more resilient future for your own enterprise. Nigerian businesses have a clear choice: Be the next GTBank… or risk fading away like Mr. Biggs. The time to act is now.                          </p>
                          <br/>
                          <p className="text-lg">
                              Don&apos;t let your business get left behind. Ready to bridge your digital divide and become the next success story?
                          </p>
                          <br />
                          <Link href="/contact" className="inline-block hover:opacity-80 transition-opacity">
                              <p className="text-lg text-[#E26015] font-semibold underline">Contact Us Today to Discuss Your Digital Transformation Strategy</p>
                          </Link>
                          
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">June 6, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Innovation</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 3 Min</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Author</p>
                  <p className="text-[#999]">
                    BFG Consults
                    <br /> Blog
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* latest news */}

        {/* <div className="my-4 p-12">
          <span className="p-3 rounded-3xl bg-white border-2 border-[#E26015] font-semibold">
            Related News
          </span>
          <h3 className="text-3xl lg:text-4xl font-bold text-[#333] my-4">
            Related News
          </h3>
          <div className="w-full flex flex-col lg:flex-row gap-3">
            <div className="p-4 border border-[#F7F7F8] rounded-lg w-[100%] lg:w-[50%] shadow-lg">
              <div className="p-4 relative">
                <Image src={FirstNews} alt="first-news" className="w-full" />
                <div className="absolute bottom-10 left-10">
                  <div className="flex gap-1 p-2 bg-white rounded-3xl">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(76,76,77,1)"
                      >
                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                      </svg>
                    </span>
                    <span className="text-[#4C4C4D]">July 15, 2024</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-[#333] font-semibold my-2">
                  A Blueprint for Business Brilliance
                </h3>
                <p className="text-[#999] text-lg">
                  Explore the intricacies of strategic planning & discover how
                  it can transform your business landscape.{" "}
                </p>
                <button className="flex gap-2 items-center py-2 px-4 rounded-3xl border border-[#E26015] my-4">
                  <span className="text-[#333]">Read More</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(1,1,1,1)"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
            <div className="p-4 border border-[#F7F7F8] rounded-lg w-[100%] lg:w-[50%] shadow-lg">
              <div className="p-4 relative">
                <Image src={SecondNews} alt="first-news" className="w-full" />
                <div className="absolute bottom-10 left-10">
                  <div className="flex gap-1 p-2 bg-white rounded-3xl">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        width="24"
                        height="24"
                        fill="rgba(76,76,77,1)"
                      >
                        <path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path>
                      </svg>
                    </span>
                    <span className="text-[#4C4C4D]">July 28, 2024</span>
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-xl text-[#333] font-semibold my-2">
                  BFG Consults bags UK Award for Research
                </h3>
                <p className="text-[#999] text-lg">
                  Dive into the world of operational efficiency & learn
                  strategies to boost productivity effortlessly.
                </p>
                <button className="flex gap-2 items-center py-2 px-4 rounded-3xl border border-[#E26015] my-4">
                  <span className="text-[#333]">Read More</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      width="24"
                      height="24"
                      fill="rgba(1,1,1,1)"
                    >
                      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
              </div> */}
      </div>
    </>
  );
};

export default page;
