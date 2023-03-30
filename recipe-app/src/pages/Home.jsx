import React from "react";
import Trending from "../components/Trending";
import Veggie from "../components/Veggie";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Trending />
      <Veggie />
    </motion.div>
  );
};

export default Home;
