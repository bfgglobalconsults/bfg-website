"use client";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect, useState } from "react";

const AnimatedItems = () => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

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
    {
      title: "Cloud Services & Migration",
      content:
        "We assist organisations in migrating their IT infrastructure & applications to the cloud, ensuring scalability, security & cost-efficiency.",
    },
  ];

  // Handle animation start/stop on hover
  useEffect(() => {
    if (isHovered) {
      controls.stop(); // Stop the animation on hover
    } else {
      controls.start({
        y: ["0%", "-100%"], // Move cards up
        transition: {
          duration: cards.length * 20, // Adjust speed (2 seconds per card)
          repeat: Infinity, // Loop indefinitely
          ease: "linear", // Smooth animation
        },
      });
    }
  }, [isHovered, controls, cards.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <motion.div
        animate={controls}
        className="flex flex-col gap-6"
        style={{ height: `${cards.length * 100}%` }} // Ensure all cards stack vertically
      >
        {cards.map((card, i) => (
          <motion.div
            key={i}
            className="shadow-lg bg-white rounded-xl p-5 flex flex-col justify-center"
            onHoverStart={() => setIsHovered(true)} // Pause animation on hover
            onHoverEnd={() => setIsHovered(false)} // Resume animation on hover end
            style={{
              transitionDelay: `${i * 2.5}s`, // Independent sliding effect for each card
            }}
          >
            <h4 className="font-semibold text-xl text-[#333333]">{card.title}</h4>
            <p className="text-[#999] my-2">{card.content}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedItems;
