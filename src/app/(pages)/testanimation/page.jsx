"use client";
import { motion } from "framer-motion";
import React from "react";

const TestPage = () => {
  const variants = {
    variant1: {
      x: 400,
      y: 300,
      opacity: 0.5,
    },
    variant2: {
      x: 400,
      y: 300,
      opacity: 0.5,
    },
  };
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        className="w-96 h-96 bg-red-400 rounded"
        initial={{ x: -100 }}
        animate={{ x: 400, y: 300, opacity: 0.5 }}
      ></motion.div>
    </div>
  );
};

export default TestPage;
