"use client";

import { useRef, useEffect } from "react";

import Intro from "./Components/intro.component";
import Blog from "./Components/blog.component";
import Project from "./Components/project.component";

// Framer Motion
import { motion, useInView, useAnimation } from "framer-motion";

export default function Home() {

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mainControls = useAnimation();

  useEffect( () => {
    if(isInView){
      mainControls.start("visible");
    }
  }, [isInView] )

  return (
    <main className="" ref={ ref }>

      <div ref={ ref }>
        <motion.div 
          variants={{
            hidden: { opacity: 0, y: 72 },
            visible: { opacity: 1, y: 0 },
          }}
          initial="hidden"
          animate={ mainControls }
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          <Intro />
        </motion.div>
      </div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 72 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1.0, delay: 1.25 }}
      >
        <Blog />
      </motion.div>

      <motion.div
        variants={{
          hidden: { opacity: 0, y: 72 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={ mainControls }
        transition={{ duration: 1.8, delay: 1.85 }}
      >
        <Project />
      </motion.div>
    
    </main>
  );
}
