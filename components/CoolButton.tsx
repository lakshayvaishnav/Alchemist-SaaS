"use client";

import React, { ReactNode, useState } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";

const CoolButton = ({ children }: { children: ReactNode }) => {
  const [isHovered, setIsHovered] = useState(false);
  const controls = useAnimation();

  const handleHoverStart = () => {
    setIsHovered(true);
    controls.start("hovered");
  };

  const handleHoverEnd = () => {
    setIsHovered(false);
    controls.start("initial");
  };

  const buttonVariants = {
    initial: {
      background: "#A3E635",
      scale: 1,
    },
    hovered: {
      background: "linear-gradient(45deg, #4a00e0, #8e2de2)",
      scale: 1.05,
    },
  };

  const textVariants = {
    initial: { scale: 1 },
    hovered: { scale: 1.1 },
  };

  const rippleVariants = {
    initial: { scale: 0, opacity: 0.5 },
    hovered: { scale: 1.5, opacity: 0 },
  };

  const particleVariants = {
    initial: { scale: 0, y: 0 },
    hovered: { scale: 1, y: -50 },
  };

  return (
    <motion.button
      className="relative px-8 py-3 rounded-full w-full text-lg text-black  hover:text-white font-bold overflow-hidden"
      variants={buttonVariants}
      initial="initial"
      animate={controls}
      onHoverStart={handleHoverStart}
      onHoverEnd={handleHoverEnd}
    >
      <motion.span className="relative z-10 w-full" variants={textVariants}>
        {children}
      </motion.span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            className="absolute inset-0 bg-white rounded-full"
            variants={rippleVariants}
            initial="initial"
            animate="hovered"
            exit="initial"
            transition={{ duration: 0.5 }}
          />
        )}
      </AnimatePresence>

      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute w-2 h-2 bg-yellow-300 rounded-full"
          style={{
            left: `${20 + index * 15}%`,
            bottom: "0%",
          }}
          variants={particleVariants}
          initial="initial"
          animate={isHovered ? "hovered" : "initial"}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
          }}
        />
      ))}
    </motion.button>
  );
};

export default CoolButton;
