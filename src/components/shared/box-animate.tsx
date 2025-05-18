"use client";

import { JSX, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

interface BoxAnimateProps {
  children: JSX.Element | JSX.Element[] | string;
  width?: "fit-content" | "100%";
  duration?: number;
  delay?: number;
  type?: "slide" | "fade";
  className?: string;
  from?: "left" | "bottom" | "right";
}

export const BoxAnimate = ({
  children,
  width = "fit-content",
  duration,
  delay = 0.25,
  type = "slide",
  className,
  from = "bottom",
}: BoxAnimateProps) => {
  const mainControls = useAnimation();
  const slideControls = useAnimation();

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      slideControls.start("visible");
      mainControls.start("visible");
    } else {
      slideControls.start("hidden");
      mainControls.start("hidden");
    }
  }, [isInView, mainControls, slideControls]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: {
            opacity: 0,
            y: type == "slide" && from == "bottom" ? 75 : 0,
            x: from == "left" ? -75 : from == "right" ? +75 : 0,
          },
          visible: { opacity: 1, y: 0, x: 0 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: duration ? duration : 0.5, delay: delay }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};
