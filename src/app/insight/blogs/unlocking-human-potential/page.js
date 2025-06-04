import Slides from "@/components/Slides";
import Image from "next/image";
import FirstNews from "../../../../../public/assets/ai-advantage.png";
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
            Unlocking Human Potential in the Age of AI and the 5th Industrial
            Revolution
          </h3>
        </div>
        <div className="relative w-full h-[200px] lg:h-[500px] bg-cover bg-center flex justify-center items-center">
          <Image
            src={FirstNews}
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
              <h2 className="text-lg font-semibold my-6">
                The Power of the Human Mind
              </h2>
              <p className="text-lg text-black">
                The human mind is unparalleled in its sophistication. Every
                groundbreaking innovation, from cutting-edge technology that
                enhances our daily lives to the most intricate systems ever
                devised, is a testament to human creativity and ingenuity.
                Unlike any other force, the mind has the ability to envision,
                create, and transform ideas into reality, pushing the boundaries
                of what is possible.
              </p>
              <br />

              <p className="text-lg">
                {" "}
                In today&apos;s rapidly evolving world, one of the most
                remarkable demonstrations of human potential is{" "}
                <span className="font-semibold text-black">
                  Artificial Intelligence (AI)
                </span>
                . AI, along with other pillars of the{" "}
                <span className="font-semibold text-black">
                  5th Industrial Revolution
                </span>
                , is not just a product of human intellect—it is proof of its
                boundless capabilities. Yet, while AI continues to redefine
                industries, optimize processes, and enhance efficiency at an
                unprecedented scale, one truth remains unchanged:{" "}
                <span className="font-semibold text-black">
                  the human mind is irreplaceable.
                </span>
              </p>
              <br />
              <h2 className="text-lg font-semibold text-black my-6">
                The Rise of AI: A Tool, Not a Replacement
              </h2>
              <p className="text-lg">
                AI has reshaped the modern workplace, improving productivity,
                streamlining operations, and automating repetitive tasks.
                Businesses are leveraging AI to analyze vast amounts of data,
                make informed decisions, and even predict future trends.
                However, despite its rapid advancement, AI lacks the essence of{" "}
                <span className="font-semibold text-black">
                  human intelligence—critical thinking, creativity,
                  adaptability, and emotional intelligence.
                </span>
              </p>
              <br />
              <p className="text-lg">
                Machines can process information and execute tasks, but they do
                not possess{" "}
                <span className="font-semibold text-black">
                  intuition, ethical reasoning, or the ability to innovate
                  beyond existing data.
                </span>{" "}
                AI operates within defined parameters, while human intelligence
                thrives in ambiguity, crafting new solutions and imagining
                possibilities that algorithms cannot foresee.
              </p>

              <br />
              <h2 className="text-lg font-semibold text-black my-6">
                Embracing Human Brilliance in the Future of Work
              </h2>
              <p className="text-lg">
                The future of work is not about humans versus machines—it is
                about the{" "}
                <span className="font-semibold text-black">
                  synergy between human intelligence and technological
                  advancements.
                </span>{" "}
                To thrive in this new era, businesses and individuals must{" "}
                <span className="font-semibold text-black">
                  harness the power of AI while cultivating uniquely human
                  skills.
                </span>
              </p>
              <br />
              <p className="text-lg">
                Here&apos;s how we can bridge the gap between AI and human
                intelligence:
              </p>
              <br />
              <ol className="list-decimal pl-6 space-y-4">
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                      Fostering Creativity & Critical Thinking
                    </span>{" "}
                    – Encouraging out-of-the-box thinking and problem-solving
                    skills will ensure that humans remain at the forefront of
                    innovation. AI can generate insights, but it takes human
                    ingenuity to interpret and apply them in meaningful ways.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                      Developing Emotional Intelligence{" "}
                    </span>
                    – Machines lack empathy and the ability to navigate complex
                    social interactions. Leadership, teamwork, and customer
                    engagement will always require a human touch.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                      Lifelong Learning & Adaptability
                    </span>{" "}
                    – As AI evolves, so should we. Embracing continuous learning
                    and upskilling will empower individuals to work alongside AI
                    rather than be replaced by it.
                  </p>
                </li>
                <li>
                  <p className="text-lg">
                    <span className="text-black font-semibold text-lg">
                      Ethical Decision-Making
                    </span>{" "}
                    – AI is only as ethical as the data and rules we provide.
                    Human oversight is crucial in ensuring fairness,
                    accountability, and responsible AI deployment.
                  </p>
                </li>
                          </ol>
                          <br/>
                           <h2 className="text-lg font-semibold text-black my-6">
                Conclusion: A Future Built on Collaboration
                          </h2>
                          <br />
                          <p className="text-lg">
                              As we step into the future of work, one thing is clear: <span className="text-black font-semibold text-lg">AI is a tool, not a replacement for human intelligence.</span> The key to success in the 5th Industrial Revolution lies in the perfect balance between <span className="text-black font-semibold text-lg">human creativity and machine efficiency.</span> Organizations that prioritize both technological advancements and human-centric skills will lead the way in innovation and sustainable progress.
                          </p>
                          <br />
                          <p className="text-lg">
                              The future is not just about AI—it&apos;s about the unparalleled power of the <span className="text-black font-semibold text-lg">human mind working alongside AI </span>to achieve what was once thought impossible.
                          </p>
                          <br/>
                          <p className="text-lg">
                              <span className="text-black font-semibold text-lg">#ArtificialIntelligence #FutureOfWork #ProductivityTips #5thIndustrialRevolution</span>
                          </p>
                          
            </div>
            <div className="hidden lg:block lg:w-[20%]">
              <div className="bg-[#FCFCFD] border-2 border-[#F7F7F8] rounded-3xl p-3">
                <h3 className="font-semibold my-2 text-lg">Details</h3>
                <div className="flex justify-between">
                  <p className="text-[#999]">Date</p>
                  <p className="text-[#999]">Jan 21, 2025</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Category</p>
                  <p className="text-[#999]">Innovation</p>
                </div>
                <div className="flex justify-between">
                  <p className="text-[#999]">Reading</p>
                  <p className="text-[#999]"> 1 Min</p>
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
