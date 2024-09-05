import React from "react";
import { Navbar } from "./Navbar";
import Intro from "./Intro";
import transition from "../../transition";
import { AnimatePresence } from "framer-motion";

const Home = () => {
  return (
    <div>
      <Navbar />
      <AnimatePresence>
        <Intro />
      </AnimatePresence>
    </div>
  );
};
export default transition(Home);
