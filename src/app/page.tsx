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
        initial={{ opacity: 0, y: 72 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8, delay: .85 }}
      >
        <Blog />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 72 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .8, delay: .85 }}
      >
        <Project />
      </motion.div>
    
    </main>
  );
}
