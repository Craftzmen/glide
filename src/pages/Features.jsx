import React from "react";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <motion.div
      initial={{ y: "200px", transition: { delay: 0.3 } }}
      animate={{ y: "0px" }}
      className="text-center mt-20 font-bold text-xl dark:text-gray-300"
    >
      <h1>Features Page</h1>
    </motion.div>
  );
};

export default Features;
