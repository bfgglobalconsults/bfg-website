"use client"
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const AnimatedItems = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const cards = [
    {
      title: "Software Designing & Development",
      content:
        "We manage the design & development of customised IT solutions that are tailored to the specific needs of an organisation & or business.",
    },
    {
      title: "IT Risk Assessment & Disaster Recovery",
      content:
        "This scope of service includes the development & implementation of plans & procedures that organisations can use to quickly & effectively recover from IT-related disruptions, such as natural disasters, power outages or cyber-attacks.",
    },
    {
      title: "Technical Support",
      content:
        "This scope of service involves assisting employees & other users of an organisations IT systems. This can include troubleshooting & resolving technical issues, as well as providing advice & guidance on the use of specific software or hardware.",
    },
  ];

  // Create a single transform for all cards
  const translateY = useTransform(scrollYProgress, [0, 1], ["0%", "-300%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0, 0]);

  return (
    <div ref={ref} className="relative w-full h-[300vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        <div className="relative w-[90%] max-w-[500px]">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              className="absolute w-full shadow-lg bg-white rounded-xl p-7"
              style={{
                translateY,
                opacity,
              }}
            >
              <h4 className="font-semibold text-xl text-[#333333]">{card.title}</h4>
              <p className="my-2 text-[#999]">{card.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnimatedItems;
