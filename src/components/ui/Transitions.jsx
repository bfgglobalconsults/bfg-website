"use client";

import { cn } from "@/utils/cn";
import { motion } from "motion/react";
import { useRef } from "react";
export const SlideIn = ({
  className,
  initial,
  whileInView,
  transition,
  viewport,
  ...rest
}) => {
  const init = initial ? initial : { opacity: 0, y: "100%" };
  const inView = whileInView ? whileInView : { opacity: 1, y: 0 };
  const trans = transition ? transition : { duration: 0.5, delay: 0.3 };

  return (
    <motion.span
      initial={init}
      whileInView={inView}
      transition={trans}
      viewport={viewport ? viewport : { once: true }}
      className={cn("inline-block overflow-hidden", className)}
      {...rest}
    />
  );
};

export const Transition = ({
  initial,
  whileInView,
  transition,
  ...rest
}) => {
  const init = initial ? initial : { opacity: 0 };
  const inView = whileInView ? whileInView : { opacity: 1 };
  const trans = transition ? transition : { duration: 0.8, delay: 0.4 };

  return (
    <motion.div
      initial={init}
      whileInView={inView}
      transition={trans}
      {...rest}
    />
  );
};
