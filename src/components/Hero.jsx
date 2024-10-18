import React, { useRef } from "react";
import prof from "../assets/prof.png";
import { motion, useScroll, useTransform } from "framer-motion";
import { use } from "framer-motion/client";
const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.05,
      },
    },
  };
  const items = {
    hidden: { y: 120 },
    visible: {
      y: 0,
      transition: {
        duration: 0.5,
        type: "linear",

        ease: [0, 0.71, 0.2, 1.01],
      },
    },
  };
  const title = "Abderrahim Ibrahim".split("");
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <section
      ref={ref}
      className="relative w-full mx-auto  md:h-[900px] flex flex-col  overflow-hidden md:gap-0 lg:flex-row items-center  justify-between mt-24 "
    >
      <motion.div
        style={{
          y: y,
        }}
        initial={{ opacity: 0, y: 300 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2, ease: [0, 0.71, 0.2, 1.01] }}
        className=" h-full flex flex-col justify-center items-center md:justify-end lg:px-2 md:items-end"
      >
        <img
          src={prof}
          className="w-[450px] h-[800px] rounded-full object-cover mix-blend-screen"
          alt=""
        />
      </motion.div>
    
      <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className="text-4xl flex md:hidden  text-center font-baca overflow-hidden h-16 md:h-48 "
        >
          {title.map((letter, index) =>
            letter === " " ? (
              <span key={index}>&nbsp;</span>
            ) : (
              <motion.span
                key={index}
                variants={items}
                className="inline-block"
              >
                {letter}
              </motion.span>
            )
          )}
        </motion.h1>
 
      <div className="h-full flex flex-col justify-end items-end">
        <motion.p
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: [0, 0.71, 0.2, 1.01] }}
          className="text-2xl text-center md:text-2xl lg:px-2 md:text-end font-medium font-Almarai md:w-[400px] lg:w-[500px] text-gray-400"
        >
          أساعدك في تسويق وتعزيز مشروعك الرياضي على مختلف وسائل التواصل
          الاجتماعي من خلال تطوير استراتيجيات فعالة تهدف إلى زيادة الوعي
          بالعلامة التجارية، جذب المتابعين، والتفاعل مع جمهورك المستهدف
        </motion.p>
      </div>
      <div className="lg:flex hidden absolute w-full top-64 left-1/3 overflow-hidden font-medium ">
        <motion.h1
          variants={container}
          initial="hidden"
          animate="visible"
          className=" md:text-7xl lg:text-8xl xl:text-[120px]  2xl:text-[150px]   font-baca overflow-hidden  mix-blend-dark w-[600px] text-start"
        >
          Abderrahim Ibrahim
          
        </motion.h1>
      </div>
    </section>
  );
};

export default Hero;
