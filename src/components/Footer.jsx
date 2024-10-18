import React from "react";
import Wrapper from "./Wrapper";

const Footer = () => {
  return (
    <Wrapper
      className={
        "bg-gray-50 py-8 border border-gray-300/40 mt-44 rounded-lg h-[200px] mb-3"
      }
    >
      <section id="contact" className="flex flex-col items-center justify-center w-full h-[200px] gap-4">
        <h1 className="text-6xl md:text-7xl lg:text-5xl text-primary  font-Almarai">
          تواصل معنا
        </h1>
        <div className="flex items-center justify-center text-4xl gap-4">
          <a href="https://www.instagram.com/abderrahim_ibrahim/profilecard/?igsh=bDM1Mnh4NTl4Mzhh" target="blank">
            {" "}
            <i className="ri-instagram-line text-red-500"></i>
          </a>
          <a href="https://l.instagram.com/?u=https%3A%2F%2Fwww.linkedin.com%2Fin%2Fabderrahim-ait-hamou&e=AT106ZeqHXdlPEU4bTRJdwxcGEzhhHVw7-gpYye2-SRm5pRB55-i4ID6xs-f2EIevIchpiG3JRIoKUHStVi5uQZtY9EC8BIS" target="blank">
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
