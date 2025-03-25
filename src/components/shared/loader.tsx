"use client";

import { motion } from "framer-motion";

function LoadingCircleSpinner() {
  return (
    <div className="container">
      <motion.div
        className="spinner"
        animate={{ rotate: 360 }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <StyleSheet />
    </div>
  );
}

/**
 * ==============   Styles   ================
 */
function StyleSheet() {
  return (
    <style>
      {`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 40px;
                border-radius: 8px;
            }

            .spinner {
                width: 25px;
                height: 25px;
                border-radius: 50%;
                border: 3px solid #ffffff33;
                border-top-color: #101014;
                border-top-width: 4px;
                will-change: transform;
            }
            `}
    </style>
  );
}

export default LoadingCircleSpinner;
