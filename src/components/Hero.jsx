import React, { useRef } from "react";
import prof from "../assets/prof.png";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, -120]);
  return (
    <section className="relative w-full mx-auto  md:h-[600px] flex flex-col gap-6  items-center  justify-center mt-24 ">
      <img src={prof} className="h-80 rounded-full" alt="" />
      <h1 className="font-sans text-center text-5xl font-bold uppercase">abderrahim 
      Ibrahim</h1>
      <p className="text-2xl text-center  w-[390px] lg:w-[700px] font-Almarai">
      "أساعدك في تسويق وتعزيز مشروعك الرياضي على مختلف وسائل التواصل الاجتماعي من خلال تطوير استراتيجيات فعالة تهدف إلى زيادة الوعي بالعلامة التجارية، جذب المتابعين، والتفاعل مع جمهورك المستهدف."

      </p>
    
    </section>
  );
};

export default Hero;
