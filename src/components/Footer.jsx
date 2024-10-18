import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper
      className={
        "bg-gray-50 py-8 border border-gray-300/40 mt-44 rounded-lg h-[400px] mb-3"
      }
    >
      <section id="contact" className="flex flex-col items-center justify-center w-full h-[400px] gap-12">
        <h1 className="text-6xl md:text-7xl lg:text-8xl text-primary  font-Almarai">
          تواصل معنا
        </h1>
        <div className="flex items-center justify-center text-7xl gap-12">
          <a href="">
            {" "}
            <i className="ri-instagram-line text-red-500"></i>
          </a>
          <a href=" ">
            {" "}
            <i className="ri-linkedin-line text-sky-500"></i>
          </a>
          <a href="">
            <i class="ri-whatsapp-line text-primary "></i>{" "}
          </a>
        </div>
      </section>
    </Wrapper>
  );
};

export default Footer;
