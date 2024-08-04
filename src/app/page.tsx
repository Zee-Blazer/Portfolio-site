"use client";


import Intro from "./Components/intro.component";
import Blog from "./Components/blog.component";
import Project from "./Components/project.component";

// Framer Motion
import { motion, useInView, useAnimation } from "framer-motion";

export default function Home() {

  return (
    <main className="">
      <Intro />
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 72 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 0.5, delay: 0.25 }}
      >
        <Blog />
      </motion.div>
      <Project />
    </main>
  );
}
